// src/components/Footer.tsx
import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Mail, Terminal, Activity } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com/aryanmoka', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/aryanmokashi49/', label: 'LinkedIn' },
    { icon: <Instagram size={18} />, href: 'https://www.instagram.com/_aryanmokashi_', label: 'Instagram' },
    { icon: <Mail size={18} />, href: 'mailto:aryanmokashi28@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative bg-slate-950 pt-20 pb-10 overflow-hidden text-slate-400">
      
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50"></div>
      
      {/* Massive Background Name (Watermark) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03]">
         <h1 className="text-[12vw] md:text-[15vw] font-black uppercase leading-none tracking-tighter text-white">
            ARYAN MOKASHI
         </h1>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            {/* COLUMN 1: Brand & Tagline */}
            <div className="md:col-span-5 flex flex-col items-start">
                <a href="#home" className="text-2xl font-black text-white tracking-tighter mb-4 flex items-center gap-2">
                    <Terminal size={24} className="text-cyan-500" />
                    ARYAN<span className="text-slate-600">.DEV</span>
                </a>
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
                    Engineering intelligence from chaos. Building robust data systems and full-stack applications with a focus on performance and scalability.
                </p>
                
                {/* Status Indicator */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-500">
                    <Activity size={12} />
                    <span>ALL SYSTEMS NOMINAL</span>
                </div>
            </div>

            {/* COLUMN 2: Navigation */}
            <div className="md:col-span-3">
                <h3 className="text-white font-bold mb-6">Coordinates</h3>
                <ul className="space-y-3">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a 
                                href={link.href} 
                                className="text-sm hover:text-cyan-400 hover:pl-2 transition-all duration-300 block"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* COLUMN 3: Connect */}
            <div className="md:col-span-4">
                <h3 className="text-white font-bold mb-6">Establish Uplink</h3>
                <div className="flex flex-wrap gap-3 mb-6">
                    {socialLinks.map((social) => (
                        <a 
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={social.label}
                            className="p-3 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
                <p className="text-xs text-slate-600">
                    Feel free to fork my repos or connect on LinkedIn.
                </p>
            </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <p className="text-xs text-slate-600 font-mono text-center md:text-left">
                © {currentYear} Aryan Mokashi. All rights reserved. <br className="md:hidden" />
                <span className="hidden md:inline"> | </span> 
                Deployed on <span className="text-slate-400">Netlify</span>.
            </p>

            {/* Scroll Top Button */}
            <button
                onClick={scrollTop}
                className="group flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-white hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all duration-300"
            >
                RETURN TO TOP
                <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;