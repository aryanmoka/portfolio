// src/components/Experience.tsx
import React from 'react';
import { Briefcase, Building2, Calendar, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import SectionKicker from './SectionKicker';

interface Job {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  stack?: string[];
  points: string[];
}

const Experience: React.FC = () => {
  const jobs: Job[] = [
    {
      role: 'Sales Analyst Intern',
      company: 'Tyrod Clothing Private Limited',
      location: 'Goregaon (East), Mumbai',
      period: 'Feb 2026 – Jun 2026',
      type: 'Internship',
      points: [
        'Conducted EDA on sales datasets to identify revenue trends, seasonality patterns, and high-performing SKUs.',
        'Developed KPI dashboards in Excel/Power BI to track sales growth, inventory turnover, and category performance.',
        'Applied statistical trend and variance analysis to support demand forecasting and inventory planning.',
      ],
    },
    {
      role: 'Freelance Full Stack Developer',
      company: "IT'Z ME Official (Fashion Retail)",
      location: 'Remote',
      period: 'Oct 2025 – Jan 2026',
      type: 'Freelance',
      stack: ['React.js', 'Flask', 'MongoDB', 'AWS EC2', 'Cloudinary', 'Razorpay'],
      points: [
        'Architected and deployed a scalable e-commerce platform on AWS EC2 with Cloudinary CDN media delivery.',
        'Designed a MongoDB inventory system with atomic updates for size-variant stock, preventing overselling.',
        'Integrated Razorpay with HMAC SHA256 server-side verification, cutting shipping errors by ~40%.',
      ],
    },
    {
      role: 'Freelance Full Stack Developer',
      company: 'D Waffle Story (QR-Based Digital Menu)',
      location: 'Ulwe, Navi Mumbai',
      period: 'May 2026 – Jun 2026',
      type: 'Freelance',
      stack: ['React.js', 'FastAPI', 'MongoDB Atlas', 'Cloudinary', 'JWT'],
      points: [
        'Built a QR-based digital menu with an admin panel for real-time dish, pricing, and availability updates.',
        'Migrated auth to HttpOnly cookie sessions with CSRF double-submit protection across a cross-origin deployment.',
        'Designed a multi-tenant-ready schema with an analytics pipeline for dish views and peak traffic hours.',
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-24 bg-slate-950 text-white overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute left-10 top-10 w-72 h-72 bg-cyan-600/30 rounded-full blur-[100px]"></div>
        <div className="absolute right-10 bottom-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="mb-16">
          <SectionKicker index="03" label="Work Log" accent="purple" />
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2">
            <span className="text-transparent stroke-text">Field</span> Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"></div>
        </Reveal>

        <div className="space-y-6">
          {jobs.map((job, idx) => (
            <Reveal key={idx} delay={idx * 100}>
            <div
              className="group relative rounded-2xl bg-slate-900/40 border border-white/10 p-6 md:p-8 backdrop-blur-md hover:border-cyan-500/30 transition-colors duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {job.role}
                  </h3>
                  <p className="text-cyan-400 font-mono text-sm mt-1 flex items-center gap-2">
                    <Building2 size={14} />
                    {job.company}
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
                  <span className="text-xs font-mono uppercase tracking-widest px-2 py-1 rounded border bg-slate-800 border-slate-700 text-slate-400">
                    {job.type}
                  </span>
                  <span className="text-sm text-slate-400 flex items-center gap-1.5">
                    <Calendar size={12} /> {job.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 mb-5">
                {job.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 size={16} className="text-purple-400 shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>

              {job.stack && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {job.stack.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-[10px] uppercase font-bold tracking-wider text-slate-300 bg-white/5 border border-white/10 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Experience;
