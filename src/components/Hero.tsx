// src/components/Hero.tsx
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Terminal, Database, Brain, Instagram, Download } from 'lucide-react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      document.documentElement.classList.add('reduced-motion');
    }
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white pt-16 overflow-hidden selection:bg-cyan-500/30"
      aria-label="Hero section"
    >
      {/* --- BACKGROUND LAYERS --- */}
      
      {/* 1. Base Image (Abstract AI/Data Network) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop" 
          alt="Abstract AI Background" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
        />
        {/* Gradient Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      </div>

      {/* 2. Animated Grid/Scanlines */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Text & Identity */}
          <div className={`lg:col-span-7 flex flex-col items-start text-left transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Role Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-mono mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Data Science & AI
            </div>

            {/* Name as Art (Stroked Text effect) */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-4 leading-[0.9]">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-slate-400">
                ARYAN
              </span>
              <span className="block text-transparent stroke-text opacity-80">
                MOKASHI
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed mb-8 border-l-2 border-cyan-500/50 pl-6">
              Engineering intelligence from chaos. I build robust <span className="text-cyan-400 font-semibold">Machine Learning</span> models and scalable <span className="text-purple-400 font-semibold">Full-Stack</span> applications.
            </p>

            {/* Tech Stack Mini-Indicators */}
            <div className="flex gap-4 mb-10 text-slate-400">
                <div className="flex flex-col items-center gap-1 group">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                        <Brain size={20} className="text-cyan-400" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider">AI/ML</span>
                </div>
                <div className="flex flex-col items-center gap-1 group">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-purple-500/50 transition-colors">
                        <Terminal size={20} className="text-purple-400" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider">Code</span>
                </div>
                <div className="flex flex-col items-center gap-1 group">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-emerald-500/50 transition-colors">
                        <Database size={20} className="text-emerald-400" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider">Data</span>
                </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {/* Primary Contact Button */}
              <a href="mailto:aryanmokashi28@gmail.com" className="relative px-8 py-3 bg-cyan-500 text-black font-bold rounded-lg overflow-hidden group flex items-center gap-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <Mail size={18} className="relative z-10" /> 
                <span className="relative z-10">Contact Me</span>
              </a>

              {/* Creative Download Resume Button */}
              <a 
                href="/Aryan Mokashi cv.pdf" 
                download="Aryan_Mokashi_Resume.pdf"
                className="group relative px-6 py-3 bg-slate-900 border border-slate-700 text-slate-300 font-medium rounded-lg overflow-hidden flex items-center gap-2 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
              >
                <div className="absolute inset-0 bg-cyan-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <Download size={18} className="group-hover:-translate-y-1 group-hover:translate-x-0 transition-transform" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex gap-4 items-center">
                <div className="h-px w-12 bg-slate-800"></div>
                <div className="flex gap-3">
                    <a href="https://github.com/aryanmoka" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/aryanmokashi49/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://www.instagram.com/_aryanmokashi" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-500 transition-colors" aria-label="Instagram">
                        <Instagram size={20} />
                    </a>
                </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Visual/Image/Card */}
          <div className={`hidden lg:block lg:col-span-5 relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
             {/* Abstract Floating Card / Profile */}
             <div className="relative w-full max-w-md mx-auto aspect-square">
                {/* Glowing ring behind */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-full blur-[80px] opacity-40 animate-pulse-slow"></div>
                
                {/* The Image Container */}
                <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-sm shadow-2xl group">
                    {/* PLACEHOLDER FOR YOUR IMAGE - Replace src below */}
                    <img 
                        src="/images/profile.jpg" 
                        alt="Aryan Mokashi" 
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    />
                    
                    {/* Overlay Info on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform">
                        <p className="text-cyan-400 font-mono text-xs mb-1">CURRENTLY WORKING ON</p>
                        <p className="text-white font-bold">Bi-directional Lifestyle Analysis</p>
                    </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-6 -right-6 p-4 bg-slate-900 rounded-xl border border-slate-700 shadow-xl animate-float">
                    <code className="text-xs text-green-400">model.fit(X_train, y)</code>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-cyan-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>

      {/* Inline Styles for custom text effects */}
      <style>{`
        .stroke-text {
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.3);
          color: transparent;
        }
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
        @keyframes slow-zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
            animation: slow-zoom 20s alternate infinite linear;
        }
        @keyframes pulse-slow {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
        }
        .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;