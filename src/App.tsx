import React, { useState, useEffect } from 'react';
import { CVData } from './types';
import { defaultCVData } from './data/defaultCV';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutInfo } from './components/AboutInfo';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { SocialLinks } from './components/SocialLinks';
import { Contact } from './components/Contact';
import { CustomizeModal } from './components/CustomizeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [cvData, setCvData] = useState<CVData>(() => {
    const saved = localStorage.getItem('marvin_cv_data');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved CV data', e);
      }
    }
    return defaultCVData;
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('marvin_cv_theme') !== 'light';
  });

  const [customizeModalOpen, setCustomizeModalOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('marvin_cv_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('marvin_cv_theme', 'light');
    }
  }, [isDarkMode]);

  const handleUpdateCV = (newData: CVData) => {
    setCvData(newData);
    localStorage.setItem('marvin_cv_data', JSON.stringify(newData));
  };

  const handleResetDefault = () => {
    setCvData(defaultCVData);
    localStorage.removeItem('marvin_cv_data');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      
      {/* Navigation */}
      <Navbar 
        personal={cvData.personal} 
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onOpenCustomize={() => setCustomizeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          personal={cvData.personal} 
          onOpenCustomize={() => setCustomizeModalOpen(true)} 
        />
        <AboutInfo personal={cvData.personal} />
        <Education education={cvData.education} />
        <Skills skills={cvData.skills} />
        <Projects projects={cvData.projects} />
        <Experience experience={cvData.experience} />
        <Certifications achievements={cvData.achievements} />
        <SocialLinks personal={cvData.personal} />
        <Contact personal={cvData.personal} />
      </main>

      {/* Footer */}
      <Footer personal={cvData.personal} />

      {/* Customize Modal */}
      <CustomizeModal 
        isOpen={customizeModalOpen}
        onClose={() => setCustomizeModalOpen(false)}
        cvData={cvData}
        onUpdateCV={handleUpdateCV}
        onResetDefault={handleResetDefault}
      />

    </div>
  );
}
