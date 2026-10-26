import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { EducationItem } from '../types';

interface EducationProps {
  education: EducationItem[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Section 3</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Educational Background
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Academic degrees, institutions, year levels, and honors earned.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((item, idx) => (
            <div 
              key={item.id}
              className="relative pl-8 sm:pl-10 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-0 before:w-0.5 before:bg-indigo-200 dark:before:bg-indigo-900 last:before:hidden"
            >
              {/* Timeline Dot */}
              <div className="absolute left-1.5 sm:left-2.5 top-2.5 w-3.5 h-3.5 rounded-full bg-indigo-600 border-4 border-slate-50 dark:border-slate-950 shadow" />

              <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-3 py-1 rounded-full w-fit">
                    {item.yearLevel}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {item.degree}
                </h3>
                <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4" />
                  <span>{item.school}</span>
                </p>

                {item.honors && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-semibold mb-3">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>{item.honors}</span>
                  </div>
                )}

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
