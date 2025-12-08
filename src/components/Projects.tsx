// src/components/Projects.tsx
import React, { useState, useEffect } from 'react';
import { ExternalLink, Youtube, X, Globe, Terminal, PlayCircle, Layers, Code2 } from 'lucide-react';

// --- Types ---
interface Project {
  title: string;
  role: string;
  year: string;
  description: string;
  technologies: string[];
  image?: string; 
  demoLink?: string;
  demoType?: 'video' | 'other';
  liveLink?: string; 
  highlights: string[];
}

// --- Helper: Get YouTube Thumbnail ---
const getYouTubeThumb = (url?: string) => {
  if (!url) return null;
  try {
    const u = new URL(url);
    const v = u.searchParams.get('v') || (u.pathname.slice(1));
    if (v) return `https://img.youtube.com/vi/${v}/maxresdefault.jpg`;
  } catch { return null; }
  return null;
};

// --- Sub-Component: Smart Project Image Handler ---
const ProjectPreview: React.FC<{ project: Project }> = ({ project }) => {
  const ytThumb = getYouTubeThumb(project.demoLink);

  const Wrapper = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <div className={`w-full h-full absolute inset-0 transition-transform duration-700 md:group-hover:scale-110 ${className}`}>
      {children}
    </div>
  );

  if (project.image) {
    return (
      <Wrapper>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        {project.demoType === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 md:group-hover:bg-black/40 transition-colors">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center md:group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/20">
              <PlayCircle className="text-white" size={28} />
            </div>
          </div>
        )}
      </Wrapper>
    );
  }

  if (project.demoLink && project.demoType === 'video' && ytThumb) {
    return (
      <Wrapper>
        <img src={ytThumb} alt={project.title} className="w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 bg-red-600/90 rounded-full flex items-center justify-center shadow-lg shadow-red-900/50 md:group-hover:scale-110 transition-transform duration-300">
                <PlayCircle className="text-white fill-white" size={24} />
            </div>
        </div>
      </Wrapper>
    );
  }

  if (project.liveLink) {
    return (
      <Wrapper className="bg-slate-900">
        <div className="w-full h-full flex flex-col relative">
           <div className="h-6 bg-slate-800 flex items-center px-3 gap-1.5 border-b border-slate-700/50">
             <div className="w-2 h-2 rounded-full bg-red-500/80" />
             <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
             <div className="w-2 h-2 rounded-full bg-green-500/80" />
           </div>
           <div className="flex-1 flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950 p-4">
              <Globe size={48} className="text-cyan-500/30 mb-2 md:group-hover:text-cyan-400 transition-colors duration-500" />
              <div className="text-[10px] font-mono text-cyan-500/50 border border-cyan-500/20 px-2 py-1 rounded">
                {new URL(project.liveLink).hostname}
              </div>
           </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="bg-slate-950 flex flex-col items-center justify-center border border-white/5">
      <Terminal size={48} className="text-slate-700 md:group-hover:text-cyan-500 transition-colors duration-500" />
      <div className="mt-2 text-xs text-slate-600 font-mono">./project-source</div>
    </Wrapper>
  );
};

// --- Sub-Component: Holographic Card ---
const ProjectCard: React.FC<{ 
  project: Project; 
  openModal: () => void;
}> = ({ project, openModal }) => {

  return (
    <div className="group relative h-[450px] rounded-3xl overflow-hidden bg-slate-900 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 cursor-pointer" onClick={openModal}>
         <ProjectPreview project={project} />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent opacity-90 md:opacity-60 md:group-hover:opacity-95 transition-opacity duration-500"></div>
      </div>

      {/* Content Layer */}
      <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end pointer-events-none">
        
        {/* Top Badges */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-start 
                        opacity-100 translate-y-0
                        md:opacity-0 md:-translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 
                        transition-all duration-500 pointer-events-auto">
             <span className="px-3 py-1 text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full backdrop-blur-md shadow-lg shadow-black/20">
                {project.year}
             </span>
             <div className="flex gap-2">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="p-2 bg-slate-950/50 text-white rounded-full hover:bg-cyan-500 hover:text-black transition-colors backdrop-blur-md border border-white/10" title="Visit Live Site">
                    <ExternalLink size={16} />
                  </a>
                )}
                {project.demoLink && (
                  <button onClick={openModal} className="p-2 bg-slate-950/50 text-white rounded-full hover:bg-red-500 hover:text-white transition-colors backdrop-blur-md border border-white/10" title="Watch Demo">
                    <Youtube size={16} />
                  </button>
                )}
             </div>
        </div>

        {/* Main Text Content */}
        <div className="transform transition-transform duration-500 md:translate-y-4 md:group-hover:translate-y-0">
            <h3 className="text-2xl font-bold text-white mb-1 md:group-hover:text-cyan-200 transition-colors">
                {project.title}
            </h3>
            
            <p className="text-sm text-cyan-400 font-mono mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                {project.role}
            </p>
            
            <p className="text-slate-300 text-sm line-clamp-2 md:line-clamp-2 md:group-hover:line-clamp-none md:group-hover:mb-4 transition-all duration-500">
                {project.description}
            </p>

            {/* Tech Stack */}
            <div className="
                mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-2
                opacity-100 h-auto
                md:opacity-0 md:h-0 md:overflow-hidden md:group-hover:h-auto md:group-hover:opacity-100 md:group-hover:pt-4 md:group-hover:mt-0
                transition-all duration-500
            ">
                {project.technologies.slice(0, 4).map(t => (
                    <span key={t} className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider text-slate-300 bg-white/5 border border-white/10 rounded">
                        {t}
                    </span>
                ))}
                {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-[10px] text-slate-500">+ {project.technologies.length - 4}</span>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---
const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Smart India Hackathon 2025',
      role: 'Team Lead',
      year: '2025',
      image: '/projects/youtube.jpg', 
      description: 'Automated attendance system using secure QR, face recognition, and geo-fencing. Built with React Native & Flask for Team ChakraVyuh.',
      technologies: ['React Native', 'Flask', 'MongoDB', 'Face Recognition', 'JWT'],
      demoLink: 'https://www.youtube.com/watch?v=d-BjvncCt8o',
      demoType: 'video',
      highlights: ['Led team ChakraVyuh', 'Multi-factor authentication', 'Geo-fencing logic'],
    },
    {
      title: 'Workout Intensity Prediction',
      role: 'Research Project',
      year: 'Ongoing',
      image: '/projects/musclematrix.jpg',
      description: 'ML/DL analysis on multi-sensor wearable datasets to classify activity and predict workout intensity with high accuracy.',
      technologies: ['Python', 'TensorFlow', 'XGBoost', 'CNN/LSTM', 'Pandas'],
      demoType: 'other',
      highlights: ['Sensor data feature engineering', 'Time-series modelling', 'Analytical dashboards'],
    },
    {
      title: 'Chef Byte - AI Cooking',
      role: 'Full Stack Developer',
      year: '2025',
      image: '/projects/aichefbyte.jpg',
      description: 'AI cooking assistant integrating Gemini API for context-aware recipe generation and ingredients chat. Full-stack implementation.',
      technologies: ['Flask', 'React.js', 'MongoDB', 'Gemini API'],
      liveLink: 'https://aichefbyte.netlify.app/',
      demoType: 'other',
      highlights: ['NLP integration', 'Dynamic recipe generation', 'Context-aware conversation'],
    },
    {
      title: 'Harmony Minds',
      role: 'Collaborative Project',
      year: '2024',
      image: '/projects/harmonyminds.jpg',
      description: 'Music & Mental health integration utilizing Spotify API and OAuth for data-driven wellness insights and mood tracking.',
      technologies: ['Flask', 'SQL', 'Spotify API', 'React', 'OAuth 2.0'],
      liveLink: 'https://spotifyharmonyminds.netlify.app/',
      demoType: 'other',
      highlights: ['Spotify OAuth & Webhooks', 'Real-time data handling', 'SQL schema design'],
    },
    {
      title: 'Sales Dashboard',
      role: 'Data Analyst',
      year: '2024',
      image: '/projects/salesdashboard.jpg',
      description: 'Interactive Power BI dashboard tracking sales, cost, and profit across regions with KPI visualization and trend analysis.',
      technologies: ['Power BI', 'Data Viz', 'DAX', 'Analytics', 'Excel'],
      demoType: 'other',
      highlights: ['Multi-dimensional viz', 'Interactive filtering', 'Business insight generation'],
    },
  ];

  const [modalData, setModalData] = useState<Project | null>(null);

  // Close modal on escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && setModalData(null);
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section 
      id="projects" 
      className="py-24 bg-slate-950 relative overflow-hidden min-h-screen"
    >
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col mb-16 max-w-2xl">
           <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs mb-4">
              <Layers size={14} />
              <span>PROJECT_ARCHIVE_V2.0</span>
           </div>
           <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
             Built for <span className="text-transparent stroke-text">Impact</span>
           </h2>
           <p className="text-slate-400 text-lg">
              A selection of deployments in AI, Full Stack Development, and Data Analytics.
           </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard 
              key={idx} 
              project={project} 
              openModal={() => setModalData(project)}
            />
          ))}
        </div>

      </div>

      {/* Video Modal */}
      {modalData && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => setModalData(null)} />
          
          <div className="relative w-full max-w-5xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/5 bg-slate-900 shrink-0">
               <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                     <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                  </div>
                  <h3 className="text-sm font-mono text-slate-400 ml-2 line-clamp-1">{modalData.title}</h3>
               </div>
               <button 
                 onClick={() => setModalData(null)}
                 className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors"
               >
                 <X size={20} />
               </button>
            </div>

            {/* Video Area */}
            <div className="relative w-full bg-black aspect-video shrink-0">
              {modalData.demoLink?.includes('youtube') ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={modalData.demoLink.replace('watch?v=', 'embed/').split('&')[0] + '?autoplay=1&rel=0&modestbranding=1'}
                  title={modalData.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 bg-slate-900/50">
                  <Code2 size={48} className="mb-4 opacity-50" />
                  <p>External preview unavailable inside console.</p>
                  {modalData.liveLink && (
                     <a href={modalData.liveLink} target="_blank" rel="noreferrer" className="mt-4 px-6 py-2 bg-cyan-500 text-slate-950 font-bold rounded-lg hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20">
                        Launch Live Site
                     </a>
                  )}
                </div>
              )}
            </div>
            
            {/* Modal Footer Info */}
            <div className="p-6 bg-slate-900 overflow-y-auto">
               <div className="flex flex-wrap gap-2 mb-4">
                  {modalData.highlights.map(h => (
                     <span key={h} className="text-xs text-cyan-300 bg-cyan-950/30 border border-cyan-900/50 px-2 py-1 rounded">
                        ✓ {h}
                     </span>
                  ))}
               </div>
               <p className="text-slate-300 text-sm leading-relaxed">{modalData.description}</p>
            </div>
          </div>
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

export default Projects;