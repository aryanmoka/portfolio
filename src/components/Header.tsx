// src/components/Header.tsx
import React, { useEffect, useState } from 'react';
import { Menu, X, Home, User, Cpu, Layers, Award, FileBadge, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<string>('#home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { href: '#home', label: 'Home', icon: <Home size={16} /> },
    { href: '#about', label: 'About', icon: <User size={16} /> },
    { href: '#skills', label: 'Skills', icon: <Cpu size={16} /> },
    { href: '#projects', label: 'Projects', icon: <Layers size={16} /> },
    { href: '#certificates', label: 'Certificates', icon: <Award size={16} /> },
    { href: '#contact', label: 'Contact', icon: <Mail size={16} /> },
  ];

  // 1. Handle Scroll State & Progress Bar
  useEffect(() => {
    const handleScroll = () => {
      // Toggle glass effect
      setIsScrolled(window.scrollY > 50);

      // Calculate read progress
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scrolled));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Active Section Spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Floating Header Container 
         We use `fixed` to keep it at the top, but margins to make it "float".
      */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <nav
            className={`relative rounded-2xl border transition-all duration-300 backdrop-blur-md ${
              isScrolled 
                ? 'bg-slate-900/80 border-slate-800 shadow-2xl shadow-black/50' 
                : 'bg-transparent border-transparent'
            } ${isMobileMenuOpen ? 'bg-slate-900 border-slate-800' : ''}`}
          >
            {/* Scroll Progress Line (Only visible when scrolled) */}
            <div 
                className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 transition-all duration-100 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} 
                style={{ width: `${scrollProgress * 100}%` }}
            />

            <div className="flex items-center justify-between px-4 py-3 md:px-6">
              
              {/* Logo Area */}
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, '#home')}
                className="flex items-center gap-3 group"
              >
                <div className="relative w-10 h-10 flex items-center justify-center bg-slate-800 rounded-xl border border-slate-700 overflow-hidden group-hover:border-cyan-500/50 transition-colors">
                   <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <span className="font-black text-white tracking-tighter relative z-10 group-hover:scale-110 transition-transform">AM</span>
                </div>
                <div className="hidden sm:flex flex-col">
                    <span className="text-sm font-bold text-white leading-none">ARYAN</span>
                    <span className="text-[10px] text-cyan-400 font-mono leading-none tracking-widest mt-1">DEV.SYS</span>
                </div>
              </a>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-1 bg-slate-950/50 p-1.5 rounded-xl border border-white/5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      active === link.href
                        ? 'text-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {/* Active Indicator Dot */}
                    {active === link.href && (
                        <span className="absolute left-2 w-1 h-1 rounded-full bg-cyan-400 animate-pulse"></span>
                    )}
                    <span className={active === link.href ? 'ml-2' : ''}>{link.label}</span>
                  </a>
                ))}
              </div>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-colors border border-transparent hover:border-slate-700"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Nav Dropdown */}
            <div
              className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                isMobileMenuOpen ? 'max-h-[500px] opacity-100 border-t border-slate-800' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-4 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      active === link.href
                        ? 'bg-gradient-to-r from-cyan-500/20 to-transparent text-white border-l-2 border-cyan-500'
                        : 'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className={`${active === link.href ? 'text-cyan-400' : 'text-slate-500'}`}>
                        {link.icon}
                    </span>
                    <span className="font-medium">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

          </nav>
        </div>
      </header>

      <style>{`
        /* Hide scrollbar for cleaner look if needed */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #020617;
        }
        ::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #334155;
        }
      `}</style>
    </>
  );
};

export default Header;