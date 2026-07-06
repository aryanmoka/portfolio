// src/components/Skills.tsx
import React from 'react';
import { Terminal, Cpu, Globe, Database, Cloud, Layout, GitBranch } from 'lucide-react';
import Reveal from './Reveal';
import SectionKicker from './SectionKicker';

const Skills = () => {
  const categories = [
    {
      id: 'core',
      title: 'Computational Core',
      icon: <Terminal size={24} />,
      color: 'from-cyan-400 to-blue-600',
      description: 'Primary languages & logic',
      load: '95%',
      core: ['Python', 'JavaScript', 'TypeScript'],
      familiar: ['R', 'SQL', 'C++'],
    },
    {
      id: 'ai',
      title: 'AI & Neural Architectures',
      icon: <Cpu size={24} />,
      color: 'from-purple-400 to-pink-600',
      description: 'ML, deep learning & applied AI',
      load: '92%',
      core: ['OpenAI GPT', 'Gemini AI', 'Transformers'],
      familiar: ['Prompt Engineering', 'Hugging Face', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV'],
    },
    {
      id: 'data',
      title: 'Data Engineering & Databases',
      icon: <Database size={24} />,
      color: 'from-emerald-400 to-teal-600',
      description: 'Storage & processing pipelines',
      load: '89%',
      core: ['MongoDB', 'MySQL', 'Supabase'],
      familiar: ['PostgreSQL', 'Pandas', 'NumPy', 'Apache Spark'],
    },
    {
      id: 'web',
      title: 'Full Stack Interface',
      icon: <Globe size={24} />,
      color: 'from-orange-400 to-red-600',
      description: 'Web application development',
      load: '90%',
      core: ['React.js', 'Flask', 'FastAPI'],
      familiar: ['Next.js', 'HTML/CSS', 'Tailwind CSS'],
    },
    {
      id: 'cloud',
      title: 'Infrastructure',
      icon: <Cloud size={24} />,
      color: 'from-blue-400 to-indigo-600',
      description: 'Deployment & cloud services',
      load: '82%',
      core: ['AWS (EC2, S3)', 'Render', 'Railway'],
      familiar: ['Google Cloud', 'Docker', 'Vercel', 'Netlify', 'Git/GitHub'],
    },
    {
      id: 'viz',
      title: 'Visual Analytics',
      icon: <Layout size={24} />,
      color: 'from-yellow-400 to-amber-600',
      description: 'BI & data storytelling',
      load: '92%',
      core: ['Excel (Advanced)', 'Power BI'],
      familiar: ['Tableau', 'Matplotlib', 'Seaborn', 'Plotly'],
    }
  ];

  return (
    <section id="skills" className="relative py-24 bg-slate-950 text-white overflow-hidden border-t border-white/5">
      
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 z-0">
         {/* Grid Background */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         {/* Radial fade to black at edges */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#020617,transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex justify-center w-full">
            <SectionKicker index="02" label="System Capabilities" accent="cyan" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Technical <span className="text-transparent stroke-text">Arsenal</span>
          </h2>
          <p className="text-slate-400 text-lg">
            A comprehensive suite of tools for data extraction, analysis, and intelligent application deployment.
          </p>
        </Reveal>

        {/* --- SKILLS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <Reveal key={cat.id} delay={idx * 80}>
            <div 
              className="group relative bg-slate-900/40 border border-white/5 rounded-2xl p-6 overflow-hidden hover:border-white/10 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm"
            >
              {/* Hover Gradient Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Card Header */}
              <div className="relative z-10 flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${cat.color} bg-opacity-10 bg-clip-border border border-white/10 shadow-lg`}>
                  <div className="text-white relative z-10">
                    {cat.icon}
                  </div>
                  {/* Inner glow of icon box */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-20 blur-md`}></div>
                </div>
                
                {/* Mock "Load" Meter */}
                <div className="text-right">
                    <div className="text-xs text-slate-500 font-mono mb-1">SYS LOAD</div>
                    <div className="text-sm font-bold text-white font-mono">{cat.load}</div>
                    <div className="w-16 h-1 bg-slate-800 rounded-full mt-1 overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${cat.color} w-[${cat.load}]`}></div>
                    </div>
                </div>
              </div>

              {/* Title & Desc */}
              <div className="relative z-10 mb-6">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-200 transition-colors">{cat.title}</h3>
                <p className="text-sm text-slate-400">{cat.description}</p>
              </div>

              {/* Skills: core tools stand out, familiar tools stay muted and compact */}
              <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-3">
                  {cat.core.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-md bg-white/5 border border-white/15 text-xs font-mono font-semibold text-white transition-all duration-300 hover:border-white/30 flex items-center gap-1.5"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${cat.color}`}></span>
                      {skill}
                    </span>
                  ))}
                </div>
                {cat.familiar.length > 0 && (
                  <p className="text-xs text-slate-500 font-mono leading-relaxed">
                    <span className="text-slate-600">also: </span>
                    {cat.familiar.join(' · ')}
                  </p>
                )}
              </div>

              {/* Decorative Corner lines */}
              <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                 <GitBranch size={48} />
              </div>

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

export default Skills;