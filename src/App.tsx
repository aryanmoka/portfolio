import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudy from './components/CaseStudy';
import Resume from './components/Resume';
import NotFound from './components/NotFound';
import CommandPalette from './components/CommandPalette';
import { RouterProvider, useRouter } from './lib/router';
import { updateMeta, DEFAULT_META } from './lib/meta';
import { getProjectBySlug } from './data/projects';

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Education />
    <Projects />
    <Certificates />
    <Contact />
  </>
);

const AppShell = () => {
  const { path } = useRouter();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const caseStudyMatch = path.match(/^\/projects\/([a-z0-9-]+)\/?$/);
  const isResume = path === '/resume' || path === '/resume/';
  const isHome = path === '/';
  const caseStudyIsValid = caseStudyMatch ? !!getProjectBySlug(caseStudyMatch[1])?.caseStudy : false;

  // Reset to default site-wide metadata whenever we're on a known "no custom meta" page.
  // (CaseStudy / Resume / NotFound set their own meta internally.)
  useEffect(() => {
    if (isHome) updateMeta(DEFAULT_META);
  }, [isHome]);

  const renderRoute = () => {
    if (caseStudyMatch) {
      return caseStudyIsValid ? <CaseStudy slug={caseStudyMatch[1]} /> : <NotFound />;
    }
    if (isResume) return <Resume />;
    if (isHome) return <HomePage />;
    return <NotFound />;
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>{renderRoute()}</main>
      <Footer />
      <CommandPalette />
    </div>
  );
};

function App() {
  return (
    <RouterProvider>
      <AppShell />
    </RouterProvider>
  );
}

export default App;
