// src/components/Skills.tsx
import React from 'react';
import { Terminal, Cpu, Globe, Database, Cloud, Layout, Code2, GitBranch } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      id: 'core',
      title: 'Computational Core',
      icon: <Terminal size={24} />,
      color: 'from-cyan-400 to-blue-600',
      description: 'Primary languages & logic',
      load: '98%',
      skills: ['Python', 'SQL', 'R', 'TypeScript', 'C++']
    },
    {
      id: 'ai',
      title: 'Neural Architectures',
      icon: <Cpu size={24} />,
      color: 'from-purple-400 to-pink-600',
      description: 'ML & Deep Learning frameworks',
      load: '92%',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV']
    },
    {
      id: 'data',
      title: 'Data Engineering',
      icon: <Database size={24} />,
      color: 'from-emerald-400 to-teal-600',
      description: 'Storage & processing pipelines',
      load: '89%',
      skills: ['MongoDB', 'PostgreSQL', 'Pandas', 'NumPy', 'Apache Spark']
    },
    {
      id: 'web',
      title: 'Full Stack Interface',
      icon: <Globe size={24} />,
      color: 'from-orange-400 to-red-600',
      description: 'Web application development',
      load: '85%',
      skills: ['React.js', 'Next.js', 'Flask', 'FastAPI', 'Tailwind CSS']
    },
    {
      id: 'cloud',
      title: 'Infrastructure',
      icon: <Cloud size={24} />,
      color: 'from-blue-400 to-indigo-600',
      description: 'Deployment & cloud services',
      load: '78%',
      skills: ['AWS (EC2, S3)', 'Docker', 'Google Cloud', 'Git/GitHub']
    },
    {
      id: 'viz',
      title: 'Visual Analytics',
      icon: <Layout size={24} />,
      color: 'from-yellow-400 to-amber-600',
      description: 'BI & Data storytelling',
      load: '90%',
      skills: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn', 'Plotly']
    }
  ];

  return (
    <section id="skills" className="relative py-24 bg-slate-950 text-white overflow-hidden">
      
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 z-0">
         {/* Grid Background */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         {/* Radial fade to black at edges */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#020617,transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono mb-4">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             SYSTEM_CAPABILITIES_V1.0
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Technical <span className="text-transparent stroke-text">Arsenal</span>
          </h2>
          <p className="text-slate-400 text-lg">
            A comprehensive suite of tools for data extraction, analysis, and intelligent application deployment.
          </p>
        </div>

        {/* --- SKILLS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div 
              key={cat.id} 
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

              {/* Skills Tags */}
              <div className="relative z-10 flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1.5 rounded-md bg-slate-950/50 border border-white/5 text-xs font-mono text-slate-300 transition-all duration-300 hover:border-white/20 hover:text-white hover:bg-white/5 cursor-crosshair flex items-center gap-1.5"
                  >
                    <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${cat.color}`}></span>
                    {skill}
                  </span>
                ))}
              </div>

              {/* Decorative Corner lines */}
              <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                 <GitBranch size={48} />
              </div>

            </div>
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