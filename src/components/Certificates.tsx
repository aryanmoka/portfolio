// src/components/Certificates.tsx
import React, { useState, useEffect } from 'react';
import { Award, ExternalLink, X, ShieldCheck, FileBadge, ScanLine } from 'lucide-react';

// --- Types ---
interface Certificate {
  id: string; // Added ID for mapping
  title: string;
  issuer: string;
  link: string;
  image?: string; 
  date?: string; // Optional nice-to-have
}

const Certificates: React.FC = () => {
  // --- Data ---
  const certificates: Certificate[] = [
    {
      id: 'CERT-001',
      title: 'Advanced Microsoft Excel',
      issuer: 'Skill Nation',
      link: 'https://excel.jatanshah.in/your-certificate/2D14494EEE0D-2D169160435D-2D089EE0DD63/',
      image: '/certificates/excel.jpg',
      date: '2024'
    },
    {
      id: 'CERT-002',
      title: 'Advanced Microsoft PowerPoint',
      issuer: 'Skill Nation',
      link: 'https://excel.jatanshah.in/your-certificate/2D1691609114-2D16916090B8-2D089EE0DD63/',
      image: '/certificates/powerpoint.jpg',
      date: '2024'
    },
    {
      id: 'CERT-003',
      title: 'Microsoft Power BI',
      issuer: 'Skill Nation',
      link: 'https://excel.jatanshah.in/your-certificate/2D16916EE8FA-2D16916091E0-2D089EE0DD63/',
      image: '/certificates/powerbi.jpg',
      date: '2023'
    },
    {
      id: 'CERT-004',
      title: 'Generative AI Mastermind',
      issuer: 'Outskill',
      link: 'https://learners.outskill.com/certificate/346bd44e-1e13-43ff-b4c2-605080139672',
      image: '/certificates/ai.jpg',
      date: '2023'
    },
    {
      id: 'CERT-005',
      title: 'AI Dashboards & Analytics',
      issuer: 'Skill Nation',
      link: 'https://verify.skillnation.ai/certificate?certificate_id=68903bc894730109c25a883b',
      image: '/certificates/dash.jpg',
      date: '2024'
    },
  ];

  // --- State ---
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  // --- Effects ---
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="certificates" className="relative py-24 bg-slate-950 text-white overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-cyan-500/10 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-400 text-xs font-mono mb-4">
             <ShieldCheck size={14} className="text-emerald-500" />
             VERIFIED CREDENTIALS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-center uppercase tracking-tight">
            Licenses & <span className="text-transparent stroke-text">Certifications</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group relative bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            >
              
              {/* Image / Thumbnail Section */}
              <div 
                onClick={() => setSelectedCert(cert)}
                className="relative h-48 bg-slate-950 cursor-pointer overflow-hidden border-b border-slate-800"
              >
                {cert.image ? (
                  <>
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    {/* The "Scanner" Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out pointer-events-none z-10"></div>
                  </>
                ) : (
                  // Geometric Fallback Pattern
                  <div className="w-full h-full relative flex items-center justify-center bg-slate-900 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
                    <FileBadge size={48} className="text-slate-700 relative z-10 group-hover:text-cyan-500 transition-colors duration-500" />
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                  </div>
                )}
                
                {/* ID Badge */}
                <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded text-[10px] font-mono text-slate-400">
                    {cert.id}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 relative">
                 {/* Decorative corner line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <h3 className="text-lg font-bold text-white mb-1 leading-snug group-hover:text-cyan-200 transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex justify-between items-end mt-2">
                    <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Issued By</p>
                        <p className="text-sm text-cyan-400 font-mono">{cert.issuer}</p>
                    </div>
                    {cert.date && (
                         <span className="text-xs text-slate-600 font-mono">{cert.date}</span>
                    )}
                </div>

                {/* Actions */}
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                    <button 
                        onClick={() => setSelectedCert(cert)}
                        className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
                    >
                        <ScanLine size={14} /> VIEW CREDENTIAL
                    </button>
                    
                    <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-2 bg-slate-800 text-slate-400 rounded-lg hover:bg-cyan-500 hover:text-black transition-colors"
                        title="Verify Externally"
                    >
                        <ExternalLink size={14} />
                    </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* --- HUD MODAL --- */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950">
              <div className="flex items-center gap-3">
                 <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                    <ShieldCheck size={20} className="text-emerald-500" />
                 </div>
                 <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Credential Verification</h3>
                    <p className="text-xs text-slate-500 font-mono">ID: {selectedCert.id}</p>
                 </div>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 hover:bg-red-500/10 hover:text-red-400 rounded-lg text-slate-500 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body: Image Area */}
            <div className="flex-1 overflow-auto bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-slate-900 p-8 flex items-center justify-center min-h-[300px]">
              <div className="relative group shadow-2xl shadow-black/50">
                {selectedCert.image ? (
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-w-full h-auto rounded border-4 border-slate-800"
                  />
                ) : (
                  <div className="w-[500px] h-[350px] bg-slate-800 rounded border-4 border-slate-700 flex flex-col items-center justify-center text-slate-600">
                    <FileBadge size={64} className="mb-4 opacity-30" />
                    <p className="font-mono">PREVIEW UNAVAILABLE</p>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-slate-800 bg-slate-950 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-left">
                 <p className="text-white font-bold">{selectedCert.title}</p>
                 <p className="text-sm text-cyan-500">{selectedCert.issuer}</p>
              </div>
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg text-sm font-bold transition-all shadow-lg shadow-cyan-900/20 flex items-center gap-2"
              >
                Open Official Link <ExternalLink size={16} />
              </a>
            </div>
          </div>
          {/* Close on Backdrop Click */}
          <div className="absolute inset-0 -z-10" onClick={() => setSelectedCert(null)} />
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

export default Certificates;