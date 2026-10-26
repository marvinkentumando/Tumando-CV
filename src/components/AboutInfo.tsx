import React from 'react';
import { 
  User, 
  MapPin, 
  Mail, 
  Phone, 
  Compass, 
  Globe, 
  ShieldCheck, 
  Briefcase 
} from 'lucide-react';
import { PersonalInfo } from '../types';

interface AboutInfoProps {
  personal: PersonalInfo;
}

export const AboutInfo: React.FC<AboutInfoProps> = ({ personal }) => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Section 1 & 2</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Personal Profile & Basic Information
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Essential background details, professional focus, and personal contact information.
          </p>
        </div>

        {/* Info Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Location */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 hover:shadow-lg hover:border-indigo-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Location</h3>
            <p className="text-base font-bold text-slate-900 dark:text-white mt-1">
              {personal.location}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Ready for on-site, hybrid, or remote work arrangements worldwide.
            </p>
          </div>

          {/* Card 2: Email Address */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 hover:shadow-lg hover:border-indigo-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email Address</h3>
            <a href={`mailto:${personal.email}`} className="text-base font-bold text-indigo-600 dark:text-indigo-400 hover:underline mt-1 block truncate">
              {personal.email}
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Primary inbox for professional inquiries and interview invites.
            </p>
          </div>

          {/* Card 3: Contact Number */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 hover:shadow-lg hover:border-indigo-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-950/80 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Contact Number</h3>
            <p className="text-base font-bold text-slate-900 dark:text-white mt-1">
              {personal.phone}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Available during standard business hours (UTC+8).
            </p>
          </div>

          {/* Card 4: Professional Status */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 hover:shadow-lg hover:border-indigo-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Career Focus</h3>
            <p className="text-base font-bold text-slate-900 dark:text-white mt-1">
              Software & Web Engineering
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Seeking internships, freelance contracts, and full-time employment.
            </p>
          </div>

        </div>

        {/* Detailed Profile Description Box */}
        <div className="mt-12 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-800/80 dark:via-slate-800 dark:to-indigo-950/40 p-8 rounded-3xl border border-indigo-100 dark:border-slate-700 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Professional Philosophy & Background
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                As an Information Technology undergraduate, I combine rigorous academic theory in algorithms and databases with hands-on agile project execution. My objective is to bridge the gap between complex backend architectures and intuitive, accessible user interfaces.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs font-semibold shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Clean Code Standards</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs font-semibold shadow-sm">
                  <Compass className="w-4 h-4 text-indigo-500" />
                  <span>Continuous Learner</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs font-semibold shadow-sm">
                  <Globe className="w-4 h-4 text-purple-500" />
                  <span>Global Mindset</span>
                </span>
              </div>
            </div>
            <div className="lg:col-span-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md space-y-3">
              <h4 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Quick Profile Facts</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-center justify-between">
                  <span className="text-slate-500">Degree:</span>
                  <span className="font-semibold text-right">BS Information Technology</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-500">Status:</span>
                  <span className="font-semibold text-emerald-600">Active Student</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-500">Focus:</span>
                  <span className="font-semibold text-right">Full Stack & AI Apps</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-500">Languages:</span>
                  <span className="font-semibold">English, Filipino</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
