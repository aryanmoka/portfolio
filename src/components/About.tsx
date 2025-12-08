// src/components/About.tsx
import React from 'react';
import { MapPin, Mail, Phone, GraduationCap, Code2, BrainCircuit, ArrowUpRight, Github, Linkedin, Instagram } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-slate-950 text-white overflow-hidden selection:bg-purple-500/30">
      
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         {/* Purple/Cyan Orb positioned to the right */}
         <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] mix-blend-screen"></div>
         {/* Noise overlay */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2">
                <span className="text-transparent stroke-text">Behind</span> the Data
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"></div>
        </div>

        {/* --- BENTO GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
            
            {/* CARD 1: MAIN BIOGRAPHY (Large span) */}
            <div className="md:col-span-2 lg:col-span-2 row-span-2 relative group overflow-hidden rounded-3xl bg-slate-900/40 border border-white/10 p-8 backdrop-blur-md hover:border-cyan-500/30 transition-colors duration-500">
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                    <Code2 size={48} className="text-cyan-400 rotate-12" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Engineering Decisions</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                    I don't just analyze data; I build the systems that understand it. Currently completing my <span className="text-cyan-400 font-semibold">MSc in Data Science & AI</span>.
                </p>
                <p className="text-slate-400 text-lg leading-relaxed">
                    My focus bridges the gap between <span className="text-purple-400 font-semibold">Lifestyle Analytics</span> and robust software engineering. I transform raw noise into clean, actionable intelligence.
                </p>
            </div>

            {/* CARD 2: EDUCATION (Vertical) */}
            <div className="md:col-span-1 lg:col-span-1 row-span-2 relative group rounded-3xl bg-slate-900/40 border border-white/10 p-6 backdrop-blur-md flex flex-col justify-between hover:bg-slate-800/40 transition-colors">
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80 pointer-events-none"></div>
                 
                 <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                        <GraduationCap size={24} />
                    </div>
                    <h4 className="text-xl font-bold mb-1">M.Sc. Data Science & AI</h4>
                    <p className="text-sm text-slate-500 font-mono mb-4">Current Focus</p>
                    
                    <div className="space-y-3">
                        {['Machine Learning', 'Adv. Analytics', 'Clean Architecture'].map((item) => (
                            <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                                {item}
                            </div>
                        ))}
                    </div>
                 </div>
            </div>

            {/* CARD 3: LOCATION (Map Visual) */}
            <div className="md:col-span-1 lg:col-span-1 relative rounded-3xl overflow-hidden border border-white/10 group">
                {/* Abstract Map Background Image (Synced with Contact Section) */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-slate-900/60"></div>
                
                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                    <div className="inline-flex items-center gap-2 text-cyan-300 font-mono text-sm mb-1">
                        <MapPin size={14} /> BASE OF OPS
                    </div>
                    <p className="text-2xl font-bold">Thane, Maharashtra</p>
                </div>
            </div>

            {/* CARD 4: STATUS (Small) */}
            <div className="relative rounded-3xl bg-emerald-950/30 border border-emerald-500/20 p-6 flex flex-col justify-center items-center text-center group hover:bg-emerald-900/20 transition-colors">
                <div className="relative mb-3">
                    <div className="absolute inset-0 bg-emerald-500 blur-lg opacity-20 animate-pulse"></div>
                    <div className="relative w-3 h-3 bg-emerald-500 rounded-full"></div>
                </div>
                <p className="text-emerald-400 font-bold tracking-wider text-sm">OPEN TO WORK</p>
            </div>

            {/* CARD 5: CONTACT & SOCIALS (Updated) */}
            <div className="md:col-span-2 relative rounded-3xl bg-slate-900/40 border border-white/10 p-6 flex flex-col justify-between hover:border-purple-500/30 transition-colors backdrop-blur-md">
                 <div className="flex flex-col sm:flex-row gap-6 mb-6">
                    {/* Email */}
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-slate-800 text-slate-300">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-mono uppercase">Email</p>
                            <a href="mailto:aryanmokashi28@gmail.com" className="font-bold hover:text-cyan-400 transition-colors">
                                aryanmokashi28...
                            </a>
                        </div>
                    </div>
                    {/* Phone */}
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-slate-800 text-slate-300">
                            <Phone size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 font-mono uppercase">Phone</p>
                            <a href="tel:+919167591777" className="font-bold hover:text-cyan-400 transition-colors">
                                +91 9167591777
                            </a>
                        </div>
                    </div>
                 </div>

                 {/* Social Row */}
                 <div className="pt-4 border-t border-white/5 flex gap-3">
                    <a href="https://github.com/aryanmoka" target="_blank" rel="noreferrer" className="flex-1 p-2 bg-slate-800 rounded-lg flex justify-center items-center text-slate-400 hover:bg-slate-700 hover:text-white transition-colors">
                        <Github size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/aryanmokashi49/" target="_blank" rel="noreferrer" className="flex-1 p-2 bg-slate-800 rounded-lg flex justify-center items-center text-slate-400 hover:bg-blue-600/20 hover:text-blue-400 transition-colors">
                        <Linkedin size={18} />
                    </a>
                    <a href="https://www.instagram.com/_aryanmokashi_" target="_blank" rel="noreferrer" className="flex-1 p-2 bg-slate-800 rounded-lg flex justify-center items-center text-slate-400 hover:bg-pink-600/20 hover:text-pink-400 transition-colors">
                        <Instagram size={18} />
                    </a>
                 </div>
            </div>
            
            {/* CARD 6: TECH STACK VISUAL */}
            <div className="md:col-span-1 lg:col-span-2 relative rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/5 p-6 overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors"></div>
                
                <div className="flex items-center justify-between mb-6">
                    <h4 className="font-bold flex items-center gap-2">
                        <BrainCircuit size={18} className="text-cyan-400" />
                        Core Stack
                    </h4>
                    <ArrowUpRight size={18} className="text-slate-600 group-hover:text-white transition-colors" />
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                    {['Python', 'SQL', 'Flask', 'React', 'TensorFlow', 'MongoDB', 'Data Viz'].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg bg-slate-950/50 border border-white/5 text-xs text-slate-300 font-mono hover:border-cyan-500/50 hover:text-cyan-300 transition-all cursor-default">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

        </div>
      </div>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
          color: transparent;
        }
        @keyframes pulse-slow {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(1.1); }
        }
        .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;