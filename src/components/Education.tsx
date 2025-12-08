// src/components/Education.tsx
import React from 'react';
import { BookOpen, GraduationCap, Calendar, Award, School } from 'lucide-react';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Master of Science',
      major: 'Data Science & AI',
      institution: 'SVKM Mithibai College',
      score: '8.25 CGPA',
      period: '2024 – Present',
      status: 'Processing',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop', // Cyberpunk/Tech vibe
      color: 'cyan',
    },
    {
      id: 2,
      degree: 'Bachelor of Science',
      major: 'Computer Science',
      institution: 'JVM Mehta College',
      score: '8.95 CGPA',
      period: '2021 – 2024',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop', // Coding/Laptop vibe
      color: 'purple',
    },
    {
      id: 3,
      degree: 'Higher Secondary',
      major: 'Science Stream',
      institution: 'Sushiladevi Deshmukh Jr. College',
      score: '83%',
      period: '2019 – 2021',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2574&auto=format&fit=crop', // Books/Library vibe
      color: 'emerald',
    },
    {
      id: 4,
      degree: 'Secondary School',
      major: 'SSC',
      institution: "St. Xavier's High School",
      score: '75%',
      period: '2018',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop', // School hallway vibe
      color: 'blue',
    },
  ];

  return (
    <section id="education" className="relative py-24 bg-slate-950 text-white overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-20">
         <div className="absolute left-10 top-20 w-72 h-72 bg-blue-600/30 rounded-full blur-[100px]"></div>
         <div className="absolute right-10 bottom-20 w-72 h-72 bg-purple-600/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              Academic <span className="text-transparent stroke-text">Timeline</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
            
            {/* The Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-slate-800 hidden md:block"></div>
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-800 md:hidden"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
                {education.map((item, index) => {
                    const isEven = index % 2 === 0;
                    const isCurrent = item.status === 'Processing';

                    return (
                        <div key={item.id} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                            
                            {/* 1. The Dot / Node on the line */}
                            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-slate-950 bg-slate-800 z-20 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,1)]">
                                {isCurrent ? (
                                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                                ) : (
                                    <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                                )}
                            </div>

                            {/* 2. The Content Card */}
                            <div className="w-full md:w-[calc(50%-3rem)] pl-12 md:pl-0">
                                <div className={`group relative overflow-hidden rounded-2xl bg-slate-900 border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${isCurrent ? 'ring-2 ring-cyan-500/50 shadow-cyan-500/20' : ''}`}>
                                    
                                    {/* Background Image with overlay */}
                                    <div className="absolute inset-0 z-0">
                                        <img src={item.image} alt="Background" className="w-full h-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
                                    </div>

                                    <div className="relative z-10 p-6 sm:p-8">
                                        {/* Status Badge */}
                                        <div className="flex justify-between items-start mb-4">
                                            <div className={`p-2 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 ${isCurrent ? 'text-cyan-400' : 'text-slate-400'}`}>
                                                {item.id === 1 ? <BookOpen size={20} /> : <School size={20} />}
                                            </div>
                                            <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded border ${isCurrent ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' : 'bg-slate-800 border-slate-700 text-slate-500'}`}>
                                                {item.status}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                                            {item.degree}
                                        </h3>
                                        <p className="text-lg text-cyan-200/80 mb-4 font-medium">{item.major}</p>
                                        
                                        <div className="h-px w-full bg-white/10 mb-4"></div>

                                        <div className="flex justify-between items-end">
                                            <div>
                                                <p className="text-sm text-slate-400 flex items-center gap-2">
                                                    <Award size={14} className="text-purple-400" />
                                                    {item.institution}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-3xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                                                    {item.score.split(' ')[0]}
                                                    <span className="text-xs font-medium text-slate-500 block -mt-1">{item.score.split(' ')[1] || '%'}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 3. The Date (Opposite side) */}
                            <div className="hidden md:block w-[calc(50%-3rem)] text-right pl-0 pr-12">
                                <div className={`${isEven ? 'text-left pl-12' : 'text-right'}`}>
                                    <span className="text-5xl font-black text-transparent stroke-text-sm opacity-30">
                                        {item.period.split('–')[0]}
                                    </span>
                                    <p className="text-sm text-cyan-500 font-mono mt-1 tracking-wider">
                                        {item.period}
                                    </p>
                                </div>
                            </div>
                            
                            {/* Mobile Date (Inside layout handled via css or simplified) */}
                            <div className="md:hidden absolute left-12 -top-8 bg-slate-950 px-2 text-sm text-cyan-500 font-mono">
                                {item.period}
                            </div>

                        </div>
                    );
                })}
            </div>
        </div>

      </div>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
          color: transparent;
        }
        .stroke-text-sm {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
            color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Education;