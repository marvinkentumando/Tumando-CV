import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceProps {
  experience: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Section 10</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience & Leadership Activities
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Internships, freelance assignments, leadership roles, and academic project contributions.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((item) => (
            <div 
              key={item.id}
              className="relative pl-8 sm:pl-10 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-0 before:w-0.5 before:bg-indigo-200 dark:before:bg-indigo-900 last:before:hidden"
            >
              {/* Timeline Dot */}
              <div className="absolute left-1.5 sm:left-2.5 top-2.5 w-3.5 h-3.5 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-900 shadow" />

              <div className="bg-slate-50 dark:bg-slate-800/60 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-3 py-1 rounded-full w-fit">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {item.role}
                </h3>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300 font-medium mb-4">
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{item.company}</span>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{item.location}</span>
                  </span>
                </div>

                {/* Highlights */}
                <ul className="space-y-2">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
