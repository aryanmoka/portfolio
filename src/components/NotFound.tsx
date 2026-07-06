// src/components/NotFound.tsx
import React, { useEffect } from 'react';
import { Terminal, ArrowLeft, Search } from 'lucide-react';
import { Link } from '../lib/router';
import { updateMeta } from '../lib/meta';

const NotFound: React.FC = () => {
  useEffect(() => {
    return updateMeta({
      title: '404 — Page Not Found',
      description: 'This page could not be found.',
      path: '/404',
    });
  }, []);

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-slate-950 text-white px-4 text-center overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-red-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-red-400 text-xs font-mono mb-8">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          ERROR 404
        </div>

        <Terminal size={56} className="text-slate-700 mb-6" />

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
          <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
            Route
          </span>{' '}
          Not Found
        </h1>
        <p className="text-slate-400 max-w-md mb-10">
          The page you're looking for doesn't exist, was moved, or the link might be broken.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <Link
            to="/#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 border border-slate-700 text-slate-300 font-bold rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
          >
            <Search size={16} /> Browse Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
