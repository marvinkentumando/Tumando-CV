import React from 'react';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  CheckCircle2
} from 'lucide-react';
import { PersonalInfo } from '../types';

interface HeroProps {
  personal: PersonalInfo;
  onOpenCustomize: () => void;
}

export const Hero: React.FC<HeroProps> = ({ personal, onOpenCustomize }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Profile Intro */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Title & Name */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">{personal.fullName}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-300">
                {personal.professionalTitle}
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personal.introduction}
            </p>

            {/* Career Objective */}
            <div className="bg-white/80 dark:bg-slate-800/80 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-indigo-500 to-purple-600" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">Career Objective</h3>
              <p className="text-sm text-slate-700 dark:text-slate-200 italic">
                "{personal.careerObjective}"
              </p>
            </div>

            {/* Quick Contact Info Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg">
                <MapPin className="w-4 h-4 text-indigo-500" />
                <span>{personal.location}</span>
              </div>
              <a href={`mailto:${personal.email}`} className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg hover:text-indigo-600 transition-colors">
                <Mail className="w-4 h-4 text-indigo-500" />
                <span>{personal.email}</span>
              </a>
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg">
                <Phone className="w-4 h-4 text-indigo-500" />
                <span>{personal.phone}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-semibold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-all shadow-sm"
              >
                <Mail className="w-4 h-4 text-indigo-500" />
                <span>Get in Touch</span>
              </a>
              <button
                onClick={onOpenCustomize}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 font-semibold border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 transition-all text-sm"
              >
                <span>Customize CV</span>
              </button>
            </div>

          </div>

          {/* Right Column: Professional Profile Photo & Quick Stats */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-500" />
              
              {/* Image Container */}
              <div className="relative w-72 sm:w-80 h-96 sm:h-[420px] rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 border-4 border-white dark:border-slate-800 shadow-2xl">
                <img 
                  src={personal.profileImage} 
                  alt={personal.fullName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Bottom Card Overlay */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/90 dark:bg-slate-900/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">CONNECT WITH ME</p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Open for Opportunities</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <a 
                        href={personal.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950 text-slate-700 dark:text-slate-300 hover:text-indigo-600 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a 
                        href={personal.linkedinUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950 text-slate-700 dark:text-slate-300 hover:text-indigo-600 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Interests Tag Cloud */}
            <div className="mt-8 w-full max-w-sm">
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center mb-3">Core Career Interests</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {personal.careerInterests.map((interest, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
