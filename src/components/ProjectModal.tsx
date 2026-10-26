import React from 'react';
import { X, ExternalLink, Github, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#161618] border border-[rgba(226,226,228,0.15)] rounded-3xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in duration-200">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(226,226,228,0.08)] bg-[#0b0b0c]">
          <div className="flex items-center gap-2.5">
            <span className="font-mono-jb text-xs text-[#d0ff00] bg-[#161618] px-3 py-1 rounded-full border border-[rgba(226,226,228,0.08)]">
              /{project.category}
            </span>
            <h3 className="text-lg font-bold text-white truncate">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[rgba(226,226,228,0.6)] hover:text-white hover:bg-[rgba(226,226,228,0.08)] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Hero Image */}
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-[#0b0b0c] border border-[rgba(226,226,228,0.08)]">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#161618] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="font-mono-jb text-xs px-3 py-1 bg-black/70 backdrop-blur rounded-lg text-[#d0ff00]">
                Verified Deployment Asset
              </span>
              {project.featured && (
                <span className="font-mono-jb text-xs px-3 py-1 bg-[#d0ff00] text-black font-bold rounded-lg flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Featured System</span>
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h4 className="font-mono-jb text-xs uppercase tracking-wider text-[#d0ff00]">Project Architecture & Overview</h4>
            <p className="text-[#e2e2e4] text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Features List */}
          <div className="space-y-3">
            <h4 className="font-mono-jb text-xs uppercase tracking-wider text-[#d0ff00]">Key System Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#0b0b0c] border border-[rgba(226,226,228,0.08)] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#d0ff00] shrink-0 mt-0.5" />
                <span className="text-sm text-[rgba(226,226,228,0.8)]">Optimized database schema & relational integrity</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0b0b0c] border border-[rgba(226,226,228,0.08)] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#d0ff00] shrink-0 mt-0.5" />
                <span className="text-sm text-[rgba(226,226,228,0.8)]">Responsive UI/UX design with Tailwind / Bootstrap</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0b0b0c] border border-[rgba(226,226,228,0.08)] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#d0ff00] shrink-0 mt-0.5" />
                <span className="text-sm text-[rgba(226,226,228,0.8)]">Secure user authentication & CRUD workflows</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0b0b0c] border border-[rgba(226,226,228,0.08)] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#d0ff00] shrink-0 mt-0.5" />
                <span className="text-sm text-[rgba(226,226,228,0.8)]">Fast-loading frontend asset bundles & routing</span>
              </div>
            </div>
          </div>

          {/* Tech Stack Breakdown */}
          <div className="space-y-3">
            <h4 className="font-mono-jb text-xs uppercase tracking-wider text-[#d0ff00]">Technology Stack Breakdown</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="font-mono-jb text-xs px-3.5 py-1.5 rounded-lg bg-[#0b0b0c] border border-[rgba(226,226,228,0.1)] text-[#e2e2e4]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0b0b0c] border-t border-[rgba(226,226,228,0.08)]">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono-jb text-xs font-semibold text-[rgba(226,226,228,0.8)] hover:text-[#d0ff00] transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>View GitHub Repository</span>
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-mono-jb bg-[rgba(226,226,228,0.08)] text-[rgba(226,226,228,0.8)] hover:bg-[rgba(226,226,228,0.15)] transition-colors"
            >
              Close
            </button>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl font-mono-jb text-xs font-bold bg-[#d0ff00] text-black hover:bg-[#b5e000] transition-all shadow-md"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
