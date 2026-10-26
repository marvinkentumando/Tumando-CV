import React from 'react';
import { Heart, ArrowUp, Github, Linkedin } from 'lucide-react';
import { PersonalInfo } from '../types';

interface FooterProps {
  personal: PersonalInfo;
}

export const Footer: React.FC<FooterProps> = ({ personal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
                {personal.fullName.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <span className="font-bold text-lg text-white">
                {personal.fullName}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {personal.professionalTitle} - Dedicated to crafting exceptional digital experiences and scalable web solutions.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About & Profile</a></li>
              <li><a href="#education" className="hover:text-indigo-400 transition-colors">Education</a></li>
              <li><a href="#skills" className="hover:text-indigo-400 transition-colors">Technical Skills</a></li>
              <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Featured Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Professional Profiles</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href={personal.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><Github className="w-4 h-4" /><span>GitHub</span></a></li>
              <li><a href={personal.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-2"><Linkedin className="w-4 h-4" /><span>LinkedIn</span></a></li>
              {personal.facebookUrl && <li><a href={personal.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Facebook Account</a></li>}
              {personal.instagramUrl && <li><a href={personal.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">Instagram Profile</a></li>}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact & Location</h4>
            <p className="text-sm text-slate-400 mb-2">{personal.location}</p>
            <p className="text-sm text-indigo-400 font-semibold mb-4">{personal.email}</p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors text-xs font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {personal.fullName}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with Professional CV Standards & Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};
