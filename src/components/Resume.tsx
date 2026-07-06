// src/components/Resume.tsx
import React, { useEffect } from 'react';
import { ArrowLeft, Download, Mail, Phone, MapPin, Linkedin, Github, Printer } from 'lucide-react';
import { Link } from '../lib/router';
import { updateMeta } from '../lib/meta';
import Reveal from './Reveal';

const Resume: React.FC = () => {
  useEffect(() => {
    return updateMeta({
      title: 'Resume',
      description: 'Resume of Aryan Mahendra Mokashi — MSc Data Science & AI, full-stack developer, and published NLP researcher.',
      path: '/resume',
    });
  }, []);

  return (
    <section className="relative min-h-screen bg-slate-950 text-white py-20 md:py-28 print:bg-white print:text-black print:py-0">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 print:hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
        {/* Action bar — hidden when printing */}
        <Reveal className="flex items-center justify-between mb-8 print:hidden">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm font-mono"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <div className="flex gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 text-slate-300 font-bold rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 transition-colors text-sm"
            >
              <Printer size={16} /> Print / Save PDF
            </button>
            <a
              href="/resume/Aryan_Mokashi_cv.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-colors text-sm"
            >
              <Download size={16} /> Download PDF
            </a>
          </div>
        </Reveal>

        {/* Document — two-column CV layout, distinct from the scrolling homepage */}
        <Reveal delay={60}>
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl backdrop-blur-md overflow-hidden print:bg-white print:border-none print:rounded-none grid md:grid-cols-[280px_1fr]">

            {/* Sidebar */}
            <aside className="bg-slate-950/60 border-b md:border-b-0 md:border-r border-white/10 p-6 md:p-8 print:bg-white print:border-r print:border-slate-300">
              <h1 className="text-2xl font-black tracking-tight mb-1 print:text-black">Aryan Mahendra Mokashi</h1>
              <p className="text-cyan-400 text-xs font-mono uppercase tracking-widest mb-6 print:text-slate-600">
                Data Science &amp; AI · Full Stack
              </p>

              <div className="space-y-3 text-sm text-slate-400 mb-8 print:text-slate-700">
                <p className="flex items-center gap-2"><MapPin size={14} className="shrink-0" /> Thane, Maharashtra</p>
                <p className="flex items-center gap-2"><Phone size={14} className="shrink-0" /> +91-9167591777</p>
                <a href="mailto:aryanmokashi28@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors break-all">
                  <Mail size={14} className="shrink-0" /> aryanmokashi28@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/aryanmokashi49/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                  <Linkedin size={14} className="shrink-0" /> LinkedIn
                </a>
                <a href="https://github.com/aryanmoka" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                  <Github size={14} className="shrink-0" /> GitHub
                </a>
              </div>

              <SidebarBlock title="Education">
                <SidebarEntry title="M.Sc. Data Science & AI" meta="SVKM Mithibai College" detail="CGPA 8.65 (Final) · 2024–2026" />
                <SidebarEntry title="B.Sc. Computer Science" meta="JVM Mehta College" detail="CGPA 8.95 · 2021–2024" />
              </SidebarBlock>

              <SidebarBlock title="Core Skills">
                <ul className="space-y-1.5 text-sm text-slate-300 print:text-slate-700">
                  {['Python', 'React.js', 'Flask / FastAPI', 'MongoDB', 'Gemini AI / Transformers', 'Power BI'].map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-cyan-500 shrink-0"></span>{s}
                    </li>
                  ))}
                </ul>
              </SidebarBlock>

              <SidebarBlock title="Also Familiar With" last>
                <p className="text-xs text-slate-500 leading-relaxed print:text-slate-500">
                  TensorFlow, PyTorch, PostgreSQL, Supabase, AWS, Google Cloud, Docker, Next.js, Tableau, R, SQL, C++
                </p>
              </SidebarBlock>
            </aside>

            {/* Main column */}
            <div className="p-6 md:p-8">
              <p className="text-slate-300 leading-relaxed mb-8 print:text-slate-800">
                MSc graduate in Data Science &amp; Artificial Intelligence with hands-on experience in machine learning,
                data analysis, and full-stack development — from a published NLP research paper to freelance
                production systems handling real payments and inventory.
              </p>

              <MainSection title="Experience">
                <MainEntry
                  left="Sales Analyst Intern — Tyrod Clothing Private Limited"
                  right="Feb – Jun 2026"
                  bullets={[
                    'EDA on sales data to identify revenue trends and high-performing SKUs.',
                    'KPI dashboards in Excel/Power BI for sales growth and inventory turnover.',
                  ]}
                />
                <MainEntry
                  left="Freelance Full Stack Developer — IT'Z ME Official"
                  right="Oct 2025 – Jan 2026"
                  bullets={[
                    'E-commerce platform on AWS EC2 with atomic-update inventory (no overselling).',
                    'HMAC SHA256-verified Razorpay checkout — cut shipping errors ~40%.',
                  ]}
                />
                <MainEntry
                  left="Freelance Full Stack Developer — D Waffle Story"
                  right="May – Jun 2026"
                  bullets={[
                    'QR-based digital menu with a live admin panel.',
                    'HttpOnly cookie sessions with CSRF double-submit protection.',
                  ]}
                />
              </MainSection>

              <MainSection title="Selected Projects">
                <MainEntry
                  left="Hinglish Offensive Language Detection — Published Research"
                  right="2025–26"
                  bullets={['mBERT vs. MuRIL comparison; MuRIL wins by ~1.4% macro F1.']}
                />
                <MainEntry
                  left="Smart India Hackathon — Attendance System"
                  right="2025"
                  bullets={['QR + face recognition + geo-location + device auth, in one flow.']}
                />
                <MainEntry
                  left="NutriChef — AI Meal Planner SaaS"
                  right="2025"
                  bullets={['Gemini-powered 7-day planner with Razorpay subscription billing.']}
                />
              </MainSection>

              <MainSection title="Certifications" last>
                <p className="text-sm text-slate-400 leading-relaxed print:text-slate-700">
                  SQL, Power BI, Excel & PowerPoint (Skill Nation) · Generative AI Mastermind (Outskill) ·
                  AI Dashboards with Power BI (Skill Nation) · React &amp; Next.js with AI Projects (Udemy)
                </p>
              </MainSection>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="text-center mt-8 print:hidden">
          <Link to="/#contact" className="text-cyan-400 hover:text-white text-sm font-mono transition-colors">
            Get in touch →
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

const SidebarBlock: React.FC<{ title: string; children: React.ReactNode; last?: boolean }> = ({ title, children, last }) => (
  <div className={last ? '' : 'mb-8'}>
    <h2 className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-3 print:text-slate-500">{title}</h2>
    {children}
  </div>
);

const SidebarEntry: React.FC<{ title: string; meta: string; detail: string }> = ({ title, meta, detail }) => (
  <div className="mb-3 last:mb-0">
    <p className="text-sm font-semibold text-white print:text-black">{title}</p>
    <p className="text-xs text-slate-500 print:text-slate-600">{meta}</p>
    <p className="text-xs text-slate-600 print:text-slate-500">{detail}</p>
  </div>
);

const MainSection: React.FC<{ title: string; children: React.ReactNode; last?: boolean }> = ({ title, children, last }) => (
  <div className={last ? '' : 'mb-8'}>
    <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4 flex items-center gap-2 print:text-slate-800">
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 print:bg-slate-800"></span>
      {title}
    </h2>
    <div className="space-y-4">{children}</div>
  </div>
);

const MainEntry: React.FC<{ left: string; right: string; bullets?: string[] }> = ({ left, right, bullets }) => (
  <div>
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
      <h3 className="font-bold text-white text-sm print:text-black">{left}</h3>
      <span className="text-xs text-slate-500 font-mono shrink-0 print:text-slate-500">{right}</span>
    </div>
    {bullets && (
      <ul className="mt-1.5 space-y-1">
        {bullets.map((b, i) => (
          <li key={i} className="text-sm text-slate-400 flex gap-2 print:text-slate-700">
            <span className="text-purple-400 shrink-0 print:text-slate-500">•</span>{b}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Resume;
