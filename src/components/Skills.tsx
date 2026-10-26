import React, { useState } from 'react';
import { Cpu, Code2, Database, Wrench, Users, CheckCircle } from 'lucide-react';
import { SkillItem } from '../types';

interface SkillsProps {
  skills: SkillItem[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'tools' | 'soft'>('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: Cpu },
    { id: 'frontend', label: 'Frontend & UI', icon: Code2 },
    { id: 'backend', label: 'Backend & DB', icon: Database },
    { id: 'tools', label: 'Tools & DevOps', icon: Wrench },
    { id: 'soft', label: 'Soft Skills', icon: Users },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Section 4</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical & Professional Skills
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Programming languages, frameworks, development tools, and interpersonal competencies.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-indigo-600/25 scale-105'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div 
              key={skill.id}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 hover:shadow-lg hover:border-indigo-500/40 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-full">
                  {skill.proficiency}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>

              <div className="flex items-center justify-between mt-3 text-xs text-slate-500 dark:text-slate-400">
                <span className="capitalize font-medium">{skill.category}</span>
                <span>Proficiency Level</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
