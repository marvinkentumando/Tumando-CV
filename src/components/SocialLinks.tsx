import React from 'react';
import { 
  Github, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Globe, 
  ExternalLink 
} from 'lucide-react';
import { PersonalInfo } from '../types';

interface SocialLinksProps {
  personal: PersonalInfo;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ personal }) => {
  const socials = [
    {
      name: 'GitHub Profile',
      handle: `@${personal.githubUrl.split('/').pop() || 'marvinkentumando'}`,
      url: personal.githubUrl,
      icon: Github,
      color: 'from-gray-800 to-gray-900 text-white',
      description: 'Repositories, open source contributions, and code commits.'
    },
    {
      name: 'LinkedIn Network',
      handle: `in/${personal.linkedinUrl.split('/').pop() || 'marvin-kent-urmando'}`,
      url: personal.linkedinUrl,
      icon: Linkedin,
      color: 'from-blue-600 to-blue-700 text-white',
      description: 'Professional career timeline, recommendations, and connections.'
    },
    ...(personal.facebookUrl ? [{
      name: 'Facebook Account',
      handle: 'Marvin Kent Urmando',
      url: personal.facebookUrl,
      icon: Facebook,
      color: 'from-indigo-600 to-blue-600 text-white',
      description: 'Personal network, updates, and community involvement.'
    }] : []),
    ...(personal.instagramUrl ? [{
      name: 'Instagram Profile',
      handle: '@marvinkentumando',
      url: personal.instagramUrl,
      icon: Instagram,
      color: 'from-purple-600 via-pink-600 to-amber-500 text-white',
      description: 'Personal interests, creative moments, and daily life.'
    }] : []),
    ...(personal.twitterUrl ? [{
      name: 'X (Twitter)',
      handle: '@marvinkentumando',
      url: personal.twitterUrl,
      icon: Twitter,
      color: 'from-slate-900 to-slate-800 text-white',
      description: 'Tech thoughts, programming tips, and industry insights.'
    }] : [])
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5" />
            <span>Sections 6, 7 & 8</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional & Social Profiles
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Connect with me across GitHub, LinkedIn, and other public networks.
          </p>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-slate-50 dark:bg-slate-800/60 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700/80 hover:shadow-xl hover:border-indigo-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${social.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {social.name}
                  </h3>
                  <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                    {social.handle}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-xs mt-3 leading-relaxed">
                    {social.description}
                  </p>
                </div>
                
                <div className="pt-4 mt-6 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-indigo-600">
                  <span>Visit Profile</span>
                  <span>→</span>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
