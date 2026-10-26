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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Customize CV Profile</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Update personal info and details on the fly</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Personal Details</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">Full Name</label>
                <input
                  type="text"
                  value={formData.personal.fullName}
                  onChange={(e) => setFormData({
                    ...formData,
                    personal: { ...formData.personal, fullName: e.target.value }
                  })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">Professional Title</label>
                <input
                  type="text"
                  value={formData.personal.professionalTitle}
                  onChange={(e) => setFormData({
                    ...formData,
                    personal: { ...formData.personal, professionalTitle: e.target.value }
                  })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">Email Address</label>
                <input
                  type="email"
                  value={formData.personal.email}
                  onChange={(e) => setFormData({
                    ...formData,
                    personal: { ...formData.personal, email: e.target.value }
                  })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">Location</label>
                <input
                  type="text"
                  value={formData.personal.location}
                  onChange={(e) => setFormData({
                    ...formData,
                    personal: { ...formData.personal, location: e.target.value }
                  })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">Short Introduction</label>
              <textarea
                rows={3}
                value={formData.personal.introduction}
                onChange={(e) => setFormData({
                  ...formData,
                  personal: { ...formData.personal, introduction: e.target.value }
                })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm resize-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">Career Objective</label>
              <textarea
                rows={2}
                value={formData.personal.careerObjective}
                onChange={(e) => setFormData({
                  ...formData,
                  personal: { ...formData.personal, careerObjective: e.target.value }
                })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm resize-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">GitHub URL</label>
                <input
                  type="text"
                  value={formData.personal.githubUrl}
                  onChange={(e) => setFormData({
                    ...formData,
                    personal: { ...formData.personal, githubUrl: e.target.value }
                  })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">LinkedIn URL</label>
                <input
                  type="text"
                  value={formData.personal.linkedinUrl}
                  onChange={(e) => setFormData({
                    ...formData,
                    personal: { ...formData.personal, linkedinUrl: e.target.value }
                  })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm"
                />
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => { onResetDefault(); onClose(); }}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset to Default</span>
            </button>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-md hover:bg-indigo-700 transition-colors"
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
