import React, { useState } from 'react';
import { 
  FileText, 
  Moon, 
  Sun, 
  Printer, 
  Sliders, 
  Menu, 
  X, 
  Github, 
  Linkedin,
  Download
} from 'lucide-react';
import { PersonalInfo } from '../types';

interface NavbarProps {
  personal: PersonalInfo;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  onOpenCustomize: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  personal, 
  isDarkMode, 
  setIsDarkMode, 
  onOpenCustomize 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300">
            {personal.fullName.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          <div>
            <span className="font-bold text-lg text-slate-900 dark:text-white block group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {personal.fullName}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">
              {personal.professionalTitle.split('&')[0].trim()}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-100/80 dark:bg-slate-800/60 p-1.5 rounded-full border border-slate-200 dark:border-slate-700/50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-white dark:hover:bg-slate-700 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-2">
          {/* GitHub / LinkedIn quick buttons */}
          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <div className="h-5 w-px bg-slate-200 dark:bg-slate-700 mx-1" />

          {/* Customize CV Button */}
          <button
            onClick={onOpenCustomize}
            title="Customize CV Profile & Data"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-800 transition-all shadow-sm"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Customize</span>
          </button>

          {/* Print / PDF Export */}
          <button
            onClick={handlePrint}
            title="Print or Save PDF Resume"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-slate-900 dark:bg-slate-700 text-white hover:bg-slate-800 dark:hover:bg-slate-600 transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>PDF</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle theme"
            className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-1"
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCustomize(); }}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800"
            >
              <Sliders className="w-4 h-4" />
              <span>Customize CV</span>
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); handlePrint(); }}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-slate-700 text-white"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
          <hr className="border-slate-200 dark:border-slate-800 my-2" />
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-indigo-600"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
