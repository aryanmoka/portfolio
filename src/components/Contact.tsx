// src/components/Contact.tsx
import React, { useRef, useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, Copy, Check, Terminal, ExternalLink, Minimize2 } from 'lucide-react';

const Contact: React.FC = () => {
  // --- Data ---
  const contactInfo = [
    {
      id: 'email',
      icon: <Mail size={20} />,
      label: 'Electronic Mail',
      value: 'aryanmokashi28@gmail.com',
      action: 'mailto:aryanmokashi28@gmail.com',
      display: 'aryanmokashi28@gmail.com'
    },
    {
      id: 'phone',
      icon: <Phone size={20} />,
      label: 'Secure Line',
      value: '+919167591777',
      action: 'tel:+919167591777',
      display: '+91 9167591777'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      link: 'https://github.com/aryanmoka',
      color: 'hover:text-white'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/aryanmokashi49/',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Instagram size={20} />,
      label: 'Instagram',
      link: 'https://www.instagram.com/_aryanmokashi_',
      color: 'hover:text-pink-500' // Instagram brand color vibe
    },
  ];

  // --- State ---
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [mapOpen, setMapOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // --- Handlers ---
  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network delay for effect
    setTimeout(() => {
        const subject = encodeURIComponent(`Portfolio Connection: ${form.name}`);
        const body = encodeURIComponent(`${form.message}\n\n---\nSent by: ${form.name} (${form.email})`);
        window.location.href = `mailto:aryanmokashi28@gmail.com?subject=${subject}&body=${body}`;
        
        setIsSubmitting(false);
        setForm({ name: '', email: '', message: '' });
    }, 1500);
  };

  // Close modal on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setMapOpen(false);
      }
    };
    if (mapOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mapOpen]);

  return (
    <section id="contact" className="relative py-24 bg-slate-950 text-white overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        
        {/* Header */}
        <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-400 text-xs font-mono mb-6 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                SYSTEM ONLINE: OPEN TO WORK
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                Initialize <span className="text-transparent stroke-text">Uplink</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* LEFT COLUMN: Info & Map */}
            <div className="space-y-6">
                
                {/* 1. Location Card (Visual) */}
                <div 
                    onClick={() => setMapOpen(true)}
                    className="group relative h-48 rounded-2xl overflow-hidden border border-slate-800 cursor-pointer transition-all hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                >
                    {/* Map Background Image */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-60 transition-transform duration-700 group-hover:scale-110"></div>
                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-cyan-400 text-xs font-mono mb-1 flex items-center gap-2">
                                    <MapPin size={12} /> CURRENT COORDINATES
                                </p>
                                <h3 className="text-xl font-bold text-white">Thane, Maharashtra</h3>
                            </div>
                            <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg text-white group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                                <ExternalLink size={20} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Contact Chips */}
                <div className="grid grid-cols-1 gap-4">
                    {contactInfo.map((info) => (
                        <div key={info.id} className="relative p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-between group hover:border-slate-600 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-lg bg-slate-800 text-cyan-400 group-hover:text-white transition-colors">
                                    {info.icon}
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-mono uppercase">{info.label}</p>
                                    <a href={info.action} className="text-sm md:text-base font-bold text-slate-200 hover:text-cyan-400 transition-colors">
                                        {info.display}
                                    </a>
                                </div>
                            </div>
                            <button 
                                onClick={() => handleCopy(info.value, info.id)}
                                className="p-2 text-slate-500 hover:text-white transition-colors"
                                title="Copy to clipboard"
                            >
                                {copied === info.id ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                            </button>
                        </div>
                    ))}
                </div>

                {/* 3. Social Array */}
                <div className="pt-6 border-t border-slate-800">
                    <p className="text-xs text-slate-500 font-mono mb-4 text-center lg:text-left">ESTABLISH SECURE LINK VIA:</p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                        {socialLinks.map((social) => (
                            <a 
                                key={social.label}
                                href={social.link}
                                target="_blank"
                                rel="noreferrer"
                                className={`flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 transition-all hover:-translate-y-1 ${social.color}`}
                            >
                                {social.icon}
                                <span className="font-bold text-sm">{social.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN: Terminal Form */}
            <div className="relative rounded-2xl bg-slate-900 border border-slate-800 p-1 shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-950 rounded-t-xl border-b border-slate-800">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                    </div>
                    <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
                        <Terminal size={12} /> message_protocol.exe
                    </div>
                </div>

                {/* Terminal Body */}
                <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
                    <div className="space-y-1">
                        <label className="text-xs font-mono text-cyan-500">var sender_name =</label>
                        <input 
                            type="text" 
                            required
                            value={form.name}
                            onChange={(e) => setForm({...form, name: e.target.value})}
                            className="w-full bg-slate-950 border-b border-slate-700 px-0 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors rounded-t-md hover:bg-white/5 pl-2"
                            placeholder='"Your Name"'
                        />
                    </div>
                    
                    <div className="space-y-1">
                        <label className="text-xs font-mono text-cyan-500">var sender_email =</label>
                        <input 
                            type="email" 
                            required
                            value={form.email}
                            onChange={(e) => setForm({...form, email: e.target.value})}
                            className="w-full bg-slate-950 border-b border-slate-700 px-0 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors rounded-t-md hover:bg-white/5 pl-2"
                            placeholder='"you@example.com"'
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-mono text-cyan-500">var message_payload =</label>
                        <textarea 
                            required
                            rows={4}
                            value={form.message}
                            onChange={(e) => setForm({...form, message: e.target.value})}
                            className="w-full bg-slate-950 border-b border-slate-700 px-0 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none rounded-t-md hover:bg-white/5 pl-2"
                            placeholder='"Let us collaborate on..."'
                        />
                    </div>

                    <div className="pt-4">
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full group relative overflow-hidden bg-white text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <span className="animate-pulse">TRANSMITTING DATA...</span>
                            ) : (
                                <>
                                    <span>EXECUTE TRANSMISSION</span>
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>

      {/* --- MAP MODAL --- */}
      {mapOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm animate-in fade-in duration-200">
            <div ref={modalRef} className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl h-[500px] flex flex-col">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 bg-slate-950 border-b border-slate-800">
                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm">
                        <MapPin size={16} />
                        SATELLITE VIEW: THANE_400605
                    </div>
                    <button onClick={() => setMapOpen(false)} className="p-2 hover:bg-slate-800 rounded text-slate-400 hover:text-white">
                        <Minimize2 size={20} />
                    </button>
                </div>
                
                {/* Map Iframe */}
                <div className="flex-1 bg-slate-800 relative">
                     <iframe
                        title="Thane Map"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                        src="https://maps.google.com/maps?q=Thane,Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        className="opacity-80 hover:opacity-100 transition-opacity"
                    ></iframe>
                </div>

                {/* Footer Actions */}
                <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
                    <a 
                        href="https://www.google.com/maps/place/Thane,+Maharashtra" 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-6 py-2 bg-slate-800 hover:bg-cyan-600 text-white font-bold rounded-lg transition-colors text-sm"
                    >
                        OPEN IN GOOGLE MAPS
                    </a>
                </div>
            </div>
            {/* Backdrop Close */}
            <div className="absolute inset-0 -z-10" onClick={() => setMapOpen(false)} />
        </div>
      )}

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Contact;