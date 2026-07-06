// src/components/CommandPalette.tsx
import React, { useEffect, useMemo, useState, useRef } from 'react';
import {
  Search, Home, User, Cpu, Briefcase, GraduationCap, Layers, Award,
  Mail, Github, Linkedin, FileText, Copy, Check, CornerDownLeft, Command,
} from 'lucide-react';
import { useRouter } from '../lib/router';
import { projects } from '../data/projects';

interface CommandItem {
  id: string;
  label: string;
  hint?: string;
  icon: React.ReactNode;
  action: () => void;
  keywords?: string;
}

const CommandPalette: React.FC = () => {
  const { navigate } = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Global Cmd/Ctrl+K listener
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  const goToSection = (hash: string) => {
    navigate(`/${hash}`);
    setOpen(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('aryanmokashi28@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const items: CommandItem[] = useMemo(() => {
    const base: CommandItem[] = [
      { id: 'home', label: 'Go to Home', icon: <Home size={16} />, action: () => goToSection('#home') },
      { id: 'about', label: 'Go to About', icon: <User size={16} />, action: () => goToSection('#about') },
      { id: 'skills', label: 'Go to Skills', icon: <Cpu size={16} />, action: () => goToSection('#skills') },
      { id: 'experience', label: 'Go to Experience', icon: <Briefcase size={16} />, action: () => goToSection('#experience') },
      { id: 'education', label: 'Go to Education', icon: <GraduationCap size={16} />, action: () => goToSection('#education') },
      { id: 'projects', label: 'Go to Projects', icon: <Layers size={16} />, action: () => goToSection('#projects') },
      { id: 'certificates', label: 'Go to Certificates', icon: <Award size={16} />, action: () => goToSection('#certificates') },
      { id: 'contact', label: 'Go to Contact', icon: <Mail size={16} />, action: () => goToSection('#contact') },
      {
        id: 'resume',
        label: 'View Resume',
        hint: '/resume',
        icon: <FileText size={16} />,
        action: () => { navigate('/resume'); setOpen(false); },
      },
      {
        id: 'copy-email',
        label: copied ? 'Copied!' : 'Copy Email Address',
        hint: 'aryanmokashi28@gmail.com',
        icon: copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />,
        action: copyEmail,
      },
      {
        id: 'github',
        label: 'Open GitHub',
        icon: <Github size={16} />,
        action: () => { window.open('https://github.com/aryanmoka', '_blank'); setOpen(false); },
      },
      {
        id: 'linkedin',
        label: 'Open LinkedIn',
        icon: <Linkedin size={16} />,
        action: () => { window.open('https://www.linkedin.com/in/aryanmokashi49/', '_blank'); setOpen(false); },
      },
    ];

    const projectItems: CommandItem[] = projects
      .filter((p) => p.caseStudy)
      .map((p) => ({
        id: `project-${p.slug}`,
        label: `Case Study: ${p.title}`,
        hint: p.role,
        icon: <FileText size={16} />,
        action: () => { navigate(`/projects/${p.slug}`); setOpen(false); },
        keywords: p.technologies.join(' '),
      }));

    return [...base, ...projectItems];
  }, [copied]);

  const filtered = items.filter((item) => {
    const q = query.toLowerCase();
    return (
      item.label.toLowerCase().includes(q) ||
      item.hint?.toLowerCase().includes(q) ||
      item.keywords?.toLowerCase().includes(q)
    );
  });

  useEffect(() => setActiveIndex(0), [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      filtered[activeIndex]?.action();
    }
  };

  return (
    <>
      {/* Floating trigger hint (desktop only) */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2 px-4 py-2.5 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-full text-slate-400 text-xs font-mono hover:border-cyan-500/40 hover:text-cyan-400 transition-colors shadow-lg"
        aria-label="Open command palette"
      >
        <Search size={14} />
        <span>Quick search</span>
        <span className="flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">
          <Command size={10} />K
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-24 px-4">
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-full max-w-xl bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
              <Search size={18} className="text-slate-500 shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search sections, projects, actions..."
                className="w-full bg-transparent outline-none text-white placeholder:text-slate-600 text-sm"
              />
              <kbd className="hidden sm:block text-[10px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-500 shrink-0">
                ESC
              </kbd>
            </div>

            <div className="max-h-80 overflow-y-auto py-2">
              {filtered.length === 0 && (
                <p className="px-4 py-6 text-center text-sm text-slate-600">No results.</p>
              )}
              {filtered.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                    idx === activeIndex ? 'bg-cyan-500/10 text-cyan-300' : 'text-slate-300'
                  }`}
                >
                  <span className={idx === activeIndex ? 'text-cyan-400' : 'text-slate-500'}>{item.icon}</span>
                  <span className="flex-1 text-sm font-medium">{item.label}</span>
                  {item.hint && <span className="text-xs text-slate-600 font-mono">{item.hint}</span>}
                  {idx === activeIndex && <CornerDownLeft size={14} className="text-cyan-500 shrink-0" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommandPalette;
