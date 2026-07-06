// src/components/CaseStudy.tsx
import React, { useEffect } from 'react';
import {
  ArrowLeft, ExternalLink, Youtube, Target, Compass, AlertTriangle,
  TrendingUp, Layers, Terminal,
} from 'lucide-react';
import { getProjectBySlug } from '../data/projects';
import { Link, useRouter } from '../lib/router';
import { updateMeta, DEFAULT_META } from '../lib/meta';
import Reveal from './Reveal';
import SectionKicker from './SectionKicker';

const CaseStudy: React.FC<{ slug: string }> = ({ slug }) => {
  const project = getProjectBySlug(slug);
  const { navigate } = useRouter();

  useEffect(() => {
    if (project?.caseStudy) {
      const restore = updateMeta({
        title: `${project.title} — Case Study`,
        description: project.caseStudy.summary,
        path: `/projects/${project.slug}`,
        image: project.image,
      });
      return restore;
    }
    updateMeta({ ...DEFAULT_META, title: 'Case Study Not Found' });
  }, [project]);

  if (!project || !project.caseStudy) {
    return (
      <section className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-4 text-center">
        <Terminal size={48} className="text-slate-700 mb-4" />
        <h1 className="text-2xl font-bold mb-2">Case study not found</h1>
        <p className="text-slate-500 mb-6">This project doesn't have a detailed write-up yet.</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-colors"
        >
          Back to Portfolio
        </button>
      </section>
    );
  }

  const cs = project.caseStudy;

  return (
    <section className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Background FX */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl py-24 md:py-32">
        {/* Back link */}
        <Reveal>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm font-mono mb-10"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </Reveal>

        {/* Header */}
        <Reveal delay={80}>
          <SectionKicker index="CS" label="Case Study" accent="cyan" />
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-[1.05]">
            {project.title}
          </h1>
          <p className="text-cyan-400 font-mono text-sm mb-2">{project.role} · {project.year}</p>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">{cs.summary}</p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2 mt-6">
            {cs.techStack.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-md bg-slate-900/50 border border-white/10 text-xs font-mono text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          {(cs.links || project.liveLink || project.demoLink) && (
            <div className="flex flex-wrap gap-3 mt-8">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-colors text-sm"
                >
                  <ExternalLink size={16} /> Visit Live Site
                </a>
              )}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 border border-slate-700 text-slate-300 font-bold rounded-lg hover:border-red-500/50 hover:text-red-400 transition-colors text-sm"
                >
                  <Youtube size={16} /> Watch Demo
                </a>
              )}
              {cs.links?.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 border border-slate-700 text-slate-300 font-bold rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 transition-colors text-sm"
                >
                  <ExternalLink size={16} /> {l.label}
                </a>
              ))}
            </div>
          )}
        </Reveal>

        {/* Hero image — gives the page something to look at besides text.
            If no real screenshot exists yet, show an honest placeholder
            instead of pretending or leaving a dead gap. */}
        <Reveal delay={120} className="mt-10">
          {project.image ? (
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                loading="eager"
                decoding="async"
                className="w-full h-auto object-cover"
              />
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-white/10 bg-slate-900/30 py-16 flex flex-col items-center justify-center text-center gap-3">
              <Terminal size={32} className="text-slate-700" />
              <p className="text-sm text-slate-600 font-mono">Screenshot coming soon</p>
            </div>
          )}
        </Reveal>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-cyan-500/50 via-purple-500/30 to-transparent my-16"></div>

        {/* Problem */}
        <Reveal className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
              <Target size={20} />
            </div>
            <h2 className="text-2xl font-bold">The Problem</h2>
          </div>
          <p className="text-slate-300 leading-relaxed text-lg">{cs.problem}</p>

          {cs.constraints && (
            <div className="mt-6 grid gap-2">
              {cs.constraints.map((c, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-400 bg-slate-900/40 border border-white/5 rounded-lg px-4 py-3">
                  <span className="text-red-400 font-mono mt-0.5">→</span>
                  {c}
                </div>
              ))}
            </div>
          )}
        </Reveal>

        {/* Approach */}
        <Reveal className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Compass size={20} />
            </div>
            <h2 className="text-2xl font-bold">Approach</h2>
          </div>
          <div className="space-y-6">
            {cs.approach.map((step, i) => (
              <div key={i} className="relative pl-8 border-l border-slate-800">
                <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-500"></div>
                <h3 className="font-bold text-white mb-1">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Challenges */}
        <Reveal className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <AlertTriangle size={20} />
            </div>
            <h2 className="text-2xl font-bold">Challenges & How They Were Solved</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {cs.challenges.map((c, i) => (
              <div key={i} className="rounded-2xl bg-slate-900/40 border border-white/10 p-6 hover:border-purple-500/30 transition-colors">
                <h3 className="font-bold text-white mb-2">{c.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Results */}
        <Reveal className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <TrendingUp size={20} />
            </div>
            <h2 className="text-2xl font-bold">Results</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {cs.results.map((r, i) => (
              <div key={i} className="rounded-2xl bg-emerald-950/20 border border-emerald-500/20 p-6 text-center">
                <p className="text-emerald-400 font-bold text-lg mb-1">{r.value}</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide font-mono">{r.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Footer nav */}
        <Reveal className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm font-mono"
          >
            <ArrowLeft size={16} /> All Projects
          </Link>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-cyan-400 transition-colors text-sm"
          >
            <Layers size={16} /> Let's Build Something
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default CaseStudy;
