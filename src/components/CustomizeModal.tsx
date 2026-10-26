import React, { useState } from 'react';
import { X, Sliders, Save, RotateCcw, User, Briefcase, Mail, MapPin } from 'lucide-react';
import { CVData } from '../types';

interface CustomizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  cvData: CVData;
  onUpdateCV: (newData: CVData) => void;
  onResetDefault: () => void;
}

export const CustomizeModal: React.FC<CustomizeModalProps> = ({
  isOpen,
  onClose,
  cvData,
  onUpdateCV,
  onResetDefault
}) => {
  const [formData, setFormData] = useState<CVData>(cvData);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateCV(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#161618] border border-[rgba(226,226,228,0.15)] rounded-3xl shadow-2xl overflow-hidden my-8 animate-fade-in">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(226,226,228,0.08)] bg-[#0b0b0c]">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#d0ff00] text-black flex items-center justify-center font-bold">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-sans">Customize CV Profile</h3>
              <p className="font-mono-jb text-xs text-[rgba(226,226,228,0.5)]">Update ledger records & personal data on the fly</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[rgba(226,226,228,0.6)] hover:text-white hover:bg-[rgba(226,226,228,0.08)] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          <div className="space-y-4">
            <h4 className="font-mono-jb text-xs uppercase tracking-wider text-[#d0ff00] flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Personal Details</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-mono-jb text-xs text-[rgba(226,226,228,0.6)]">Full Name</label>
                <input
                  type="text"
                  value={formData.personal.fullName}
                  onChange={(e) => setFormData({
                    ...formData,
                    personal: { ...formData.personal, fullName: e.target.value }
                  })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0b0b0c] border border-[rgba(226,226,228,0.1)] text-white text-sm focus:outline-none focus:border-[#d0ff00] transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-mono-jb text-xs text-[rgba(226,226,228,0.6)]">Professional Title</label>
                <input
                  type="text"
                  value={formData.personal.professionalTitle}
                  onChange={(e) => setFormData({
                    ...formData,
                    personal: { ...formData.personal, professionalTitle: e.target.value }
                  })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0b0b0c] border border-[rgba(226,226,228,0.1)] text-white text-sm focus:outline-none focus:border-[#d0ff00] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-mono-jb text-xs text-[rgba(226,226,228,0.6)]">Email Address</label>
                <input
                  type="email"
                  value={formData.personal.email}
                  onChange={(e) => setFormData({
                    ...formData,
                    personal: { ...formData.personal, email: e.target.value }
                  })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0b0b0c] border border-[rgba(226,226,228,0.1)] text-white text-sm focus:outline-none focus:border-[#d0ff00] transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-mono-jb text-xs text-[rgba(226,226,228,0.6)]">Location</label>
                <input
                  type="text"
                  value={formData.personal.location}
                  onChange={(e) => setFormData({
                    ...formData,
                    personal: { ...formData.personal, location: e.target.value }
                  })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0b0b0c] border border-[rgba(226,226,228,0.1)] text-white text-sm focus:outline-none focus:border-[#d0ff00] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-mono-jb text-xs text-[rgba(226,226,228,0.6)]">Short Introduction</label>
              <textarea
                rows={3}
                value={formData.personal.introduction}
                onChange={(e) => setFormData({
                  ...formData,
                  personal: { ...formData.personal, introduction: e.target.value }
                })}
                className="w-full px-4 py-3 rounded-xl bg-[#0b0b0c] border border-[rgba(226,226,228,0.1)] text-white text-sm focus:outline-none focus:border-[#d0ff00] transition-colors resize-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-mono-jb text-xs text-[rgba(226,226,228,0.6)]">Career Objective</label>
              <textarea
                rows={2}
                value={formData.personal.careerObjective}
                onChange={(e) => setFormData({
                  ...formData,
                  personal: { ...formData.personal, careerObjective: e.target.value }
                })}
                className="w-full px-4 py-3 rounded-xl bg-[#0b0b0c] border border-[rgba(226,226,228,0.1)] text-white text-sm focus:outline-none focus:border-[#d0ff00] transition-colors resize-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-mono-jb text-xs text-[rgba(226,226,228,0.6)]">GitHub URL</label>
                <input
                  type="text"
                  value={formData.personal.githubUrl}
                  onChange={(e) => setFormData({
                    ...formData,
                    personal: { ...formData.personal, githubUrl: e.target.value }
                  })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0b0b0c] border border-[rgba(226,226,228,0.1)] text-white text-sm focus:outline-none focus:border-[#d0ff00] transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-mono-jb text-xs text-[rgba(226,226,228,0.6)]">LinkedIn URL</label>
                <input
                  type="text"
                  value={formData.personal.linkedinUrl}
                  onChange={(e) => setFormData({
                    ...formData,
                    personal: { ...formData.personal, linkedinUrl: e.target.value }
                  })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0b0b0c] border border-[rgba(226,226,228,0.1)] text-white text-sm focus:outline-none focus:border-[#d0ff00] transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-[rgba(226,226,228,0.08)]">
            <button
              type="button"
              onClick={() => { onResetDefault(); onClose(); }}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-mono-jb text-xs text-red-400 hover:bg-red-950/40 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset Default</span>
            </button>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl font-mono-jb text-xs bg-[rgba(226,226,228,0.08)] text-[rgba(226,226,228,0.8)] hover:bg-[rgba(226,226,228,0.15)] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#d0ff00] text-black font-semibold font-mono-jb text-xs hover:bg-[#b5e000] transition-all shadow-md"
              >
                <Save className="w-4 h-4" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};
