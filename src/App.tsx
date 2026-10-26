import React, { useState, useEffect } from 'react';
import { CVData, ProjectItem } from './types';
import { defaultCVData } from './data/defaultCV';
import { CustomizeModal } from './components/CustomizeModal';
import { ProjectModal } from './components/ProjectModal';
import { 
  MessageSquare, 
  Terminal, 
  Sliders, 
  Download, 
  Send, 
  ExternalLink, 
  Github, 
  Sparkles,
  Layers,
  FileText,
  User,
  GraduationCap,
  Award,
  Sun,
  Moon,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const [cvData, setCvData] = useState<CVData>(() => {
    const saved = localStorage.getItem('marvin_cv_data');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved CV data', e);
      }
    }
    return defaultCVData;
  });

  const [activeTab, setActiveTab] = useState<'chat' | 'skills' | 'projects'>('chat');
  const [expCategory, setExpCategory] = useState<string>('All');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [customizeModalOpen, setCustomizeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [promptInput, setPromptInput] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{sender: 'user' | 'ai', text: string}>>([
    { sender: 'user', text: `Get me a briefing on ${cvData.personal.fullName}, lead engineer.` },
    { sender: 'ai', text: `Briefing loaded for ${cvData.personal.fullName}. Full stack architecture & engineering records verified.` }
  ]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleUpdateCV = (newData: CVData) => {
    setCvData(newData);
    localStorage.setItem('marvin_cv_data', JSON.stringify(newData));
  };

  const handleResetDefault = () => {
    setCvData(defaultCVData);
    localStorage.removeItem('marvin_cv_data');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSendPrompt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promptInput.trim()) return;
    
    const newMsg = promptInput.trim();
    const isContactInquiry = /hire|hiring|job|project|collab|collaborate|message|reach|contact|offer|work/i.test(newMsg);

    const aiReply = isContactInquiry
      ? `SUCCESS: Your inquiry ("${newMsg}") has been securely dispatched directly to ${cvData.personal.email}. Marvin will review your message and respond shortly!`
      : `Query processed: "${newMsg}". Consulting ${cvData.personal.fullName}'s engineering and editorial ledger. All systems optimal.`;

    setChatMessages(prev => [
      ...prev,
      { sender: 'user', text: newMsg },
      { sender: 'ai', text: aiReply }
    ]);
    setPromptInput('');
  };

  const isDark = theme === 'dark';

  return (
    <div className={`font-sans antialiased h-[100dvh] flex flex-col md:flex-row overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#0b0b0c] text-[#e2e2e4] selection:bg-[#d0ff00] selection:text-black' : 'bg-[#f4f4f5] text-[#18181b] selection:bg-indigo-600 selection:text-white'}`}>
      
      {/* Navigation: Sidebar on Desktop, Top/Bottom bar on Mobile */}
      <nav className={`w-full md:w-20 order-2 md:order-1 flex md:flex-col items-center justify-around md:justify-start py-3 md:py-6 px-4 md:px-0 gap-3 md:gap-6 shrink-0 print:hidden transition-colors z-30 ${isDark ? 'bg-black border-t md:border-t-0 md:border-r border-[rgba(226,226,228,0.08)]' : 'bg-white border-t md:border-t-0 md:border-r border-slate-200'}`}>
        <button 
          onClick={() => setActiveTab('chat')}
          className={`w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center border transition-all ${activeTab === 'chat' ? (isDark ? 'border-[#d0ff00] text-[#d0ff00] bg-[#161618]' : 'border-indigo-600 text-indigo-600 bg-indigo-50') : (isDark ? 'border-[rgba(226,226,228,0.08)] text-[rgba(226,226,228,0.5)] hover:text-white bg-[#161618]' : 'border-slate-200 text-slate-400 hover:text-slate-900 bg-slate-50')}`}
          title="AI Briefing Core"
        >
          <MessageSquare className="w-5 h-5" />
        </button>
        <button 
          onClick={() => setActiveTab('skills')}
          className={`w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center border transition-all ${activeTab === 'skills' ? (isDark ? 'border-[#d0ff00] text-[#d0ff00] bg-[#161618]' : 'border-indigo-600 text-indigo-600 bg-indigo-50') : (isDark ? 'border-[rgba(226,226,228,0.08)] text-[rgba(226,226,228,0.5)] hover:text-white bg-[#161618]' : 'border-slate-200 text-slate-400 hover:text-slate-900 bg-slate-50')}`}
          title="Skills & Expertise"
        >
          <Terminal className="w-5 h-5" />
        </button>
        <button 
          onClick={() => setActiveTab('projects')}
          className={`w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center border transition-all ${activeTab === 'projects' ? (isDark ? 'border-[#d0ff00] text-[#d0ff00] bg-[#161618]' : 'border-indigo-600 text-indigo-600 bg-indigo-50') : (isDark ? 'border-[rgba(226,226,228,0.08)] text-[rgba(226,226,228,0.5)] hover:text-white bg-[#161618]' : 'border-slate-200 text-slate-400 hover:text-slate-900 bg-slate-50')}`}
          title="Deployed Assets"
        >
          <Layers className="w-5 h-5" />
        </button>

        <div className="md:mt-auto flex md:flex-col gap-2 md:gap-3">
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={`w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center border transition-all ${isDark ? 'bg-[#161618] border-[rgba(226,226,228,0.08)] text-amber-400 hover:bg-[#222224]' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'}`}
            title={isDark ? "Switch to Editorial Light Mode" : "Switch to Terminal Dark Mode"}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setCustomizeModalOpen(true)}
            className={`w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center border transition-all ${isDark ? 'bg-[#161618] border-[rgba(226,226,228,0.08)] text-[#d0ff00] hover:bg-[#222224]' : 'bg-slate-50 border-slate-200 text-indigo-600 hover:bg-slate-100'}`}
            title="Customize CV"
          >
            <Sliders className="w-5 h-5" />
          </button>
          <button
            onClick={handlePrint}
            className={`w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center font-bold transition-all shadow-lg ${isDark ? 'bg-[#d0ff00] text-black hover:bg-[#b5e000]' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
            title="Print / Save PDF"
          >
            <Download className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Main Chat Layout Container */}
      <main className={`flex-1 flex flex-col order-1 md:order-2 max-w-5xl w-full mx-auto border-x relative h-full transition-colors overflow-hidden ${isDark ? 'border-[rgba(226,226,228,0.08)]' : 'border-slate-200 bg-white'}`}>
        
        {/* Header Bar */}
        <div className={`px-4 sm:px-8 py-4 sm:py-5 border-b flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 backdrop-blur shrink-0 transition-colors ${isDark ? 'border-[rgba(226,226,228,0.08)] bg-[#0b0b0c]/80 text-[#e2e2e4]' : 'border-slate-200 bg-white/80 text-slate-800'}`}>
          <span className="font-mono-jb text-[0.65rem] sm:text-xs font-medium tracking-wider truncate max-w-full">
            URMANDO_ENGINEERING_CORE.v26 — {activeTab.toUpperCase()}_VIEW ({isDark ? 'DARK' : 'LIGHT'})
          </span>
          <div className={`flex items-center gap-4 sm:gap-6 font-mono-jb text-[0.6rem] sm:text-[0.65rem] ${isDark ? 'text-[rgba(226,226,228,0.5)]' : 'text-slate-500'}`}>
            <span className="truncate">LOC: {cvData.personal.location.split(',')[0].toUpperCase()}</span>
            <span className="truncate">GH: /{cvData.personal.githubUrl.split('/').pop()?.toUpperCase()}</span>
          </div>
        </div>

        {/* Chat Flow Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-10 flex flex-col gap-8 sm:gap-10">
          
          {/* User Bubble */}
          <div className="max-w-[90%] sm:max-w-[85%] self-end">
            <div className={`px-4 sm:px-5 py-3 rounded-2xl rounded-tr-none border text-xs sm:text-base ${isDark ? 'bg-[#161618] border-[rgba(226,226,228,0.08)] text-[#e2e2e4]' : 'bg-slate-100 border-slate-200 text-slate-900'}`}>
              {activeTab === 'chat' && `Get me a comprehensive briefing on ${cvData.personal.fullName}, lead engineer.`}
              {activeTab === 'skills' && `Show me all technical stack capabilities and certifications for ${cvData.personal.fullName}.`}
              {activeTab === 'projects' && `List all deployed assets and projects engineered by ${cvData.personal.fullName}.`}
            </div>
          </div>

          {/* AI Response Bubble */}
          <div className="w-full self-start flex gap-3 sm:gap-5">
            <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl shrink-0 flex items-center justify-center font-bold font-mono-jb text-xs sm:text-sm shadow-md ${isDark ? 'bg-[#d0ff00] text-black' : 'bg-indigo-600 text-white'}`}>
              {cvData.personal.fullName.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
            
            <div className="flex-1 space-y-8 min-w-0">
              
              {/* TAB 1: CHAT BRIEFING */}
              {activeTab === 'chat' && (
                <>
                  <div>
                    <span className={`font-mono-jb text-[0.7rem] mb-3 block uppercase tracking-widest ${isDark ? 'text-[#d0ff00]' : 'text-indigo-600 font-semibold'}`}>
                      Identity / Executive Summary
                    </span>
                    <h1 className={`text-2xl sm:text-4xl font-semibold tracking-tight mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {cvData.personal.fullName}
                    </h1>
                    <p className={`text-sm sm:text-lg leading-relaxed max-w-3xl mb-4 ${isDark ? 'text-[rgba(226,226,228,0.6)]' : 'text-slate-600'}`}>
                      {cvData.personal.introduction}
                    </p>

                    {/* Vital Statistics Card */}
                    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl border ${isDark ? 'bg-[#161618] border-[rgba(226,226,228,0.08)] text-[rgba(226,226,228,0.8)]' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
                      <div className="flex items-center gap-2 text-xs font-mono-jb">
                        <span className={isDark ? 'text-[#d0ff00]' : 'text-indigo-600'}>BIRTHDAY:</span>
                        <span>{cvData.personal.birthday}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono-jb">
                        <span className={isDark ? 'text-[#d0ff00]' : 'text-indigo-600'}>BIRTHPLACE:</span>
                        <span>{cvData.personal.birthplace}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono-jb">
                        <span className={isDark ? 'text-[#d0ff00]' : 'text-indigo-600'}>PHONE:</span>
                        <span>{cvData.personal.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono-jb">
                        <span className={isDark ? 'text-[#d0ff00]' : 'text-indigo-600'}>EMAIL:</span>
                        <span>{cvData.personal.email}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className={`font-mono-jb text-[0.7rem] mb-3 block uppercase tracking-widest ${isDark ? 'text-[#d0ff00]' : 'text-indigo-600 font-semibold'}`}>
                      Stack Capabilities
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {cvData.skills.map((skill) => (
                        <span 
                          key={skill.id}
                          className={`font-mono-jb text-xs px-3 py-1.5 rounded-md border transition-colors ${isDark ? 'bg-[#161618] border-[rgba(226,226,228,0.08)] text-[#e2e2e4] hover:border-[#d0ff00]' : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-indigo-600'}`}
                        >
                          {skill.name} ({skill.proficiency}%)
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <span className={`font-mono-jb text-[0.7rem] uppercase tracking-widest ${isDark ? 'text-[#d0ff00]' : 'text-indigo-600 font-semibold'}`}>
                        Experience Ledger
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {['All', 'Editorial & Media'].map((cat) => (
                          <button
                            key={cat}
                            onClick={() => setExpCategory(cat)}
                            className={`font-mono-jb text-xs px-3 py-1 rounded-lg border transition-all ${expCategory === cat ? (isDark ? 'bg-[#d0ff00] text-black font-bold border-[#d0ff00]' : 'bg-indigo-600 text-white font-bold border-indigo-600') : (isDark ? 'bg-[#161618] border-[rgba(226,226,228,0.08)] text-[rgba(226,226,228,0.7)] hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900')}`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      {cvData.experience
                        .filter(exp => expCategory === 'All' || exp.category === expCategory)
                        .map((exp) => (
                          <div key={exp.id} className={`border p-5 sm:p-6 rounded-xl transition-colors ${isDark ? 'bg-[#161618] border-[rgba(226,226,228,0.08)]' : 'bg-slate-50 border-slate-200'}`}>
                            <div className="flex items-center justify-between mb-1">
                              <span className={`font-mono-jb text-[0.65rem] ${isDark ? 'text-[rgba(226,226,228,0.5)]' : 'text-slate-500'}`}>{exp.period} — {exp.company}</span>
                              <span className={`font-mono-jb text-[0.6rem] px-2 py-0.5 rounded border ${isDark ? 'bg-[#0b0b0c] border-[rgba(226,226,228,0.08)] text-[#d0ff00]' : 'bg-white border-slate-200 text-indigo-600'}`}>{exp.category}</span>
                            </div>
                            <h3 className={`text-base sm:text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{exp.role}</h3>
                            <ul className={`space-y-1.5 text-xs sm:text-sm ${isDark ? 'text-[rgba(226,226,228,0.6)]' : 'text-slate-600'}`}>
                              {exp.highlights.map((h, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className={isDark ? 'text-[#d0ff00]' : 'text-indigo-600'}>›</span>
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                    </div>
                  </div>

                  <div>
                    <span className={`font-mono-jb text-[0.7rem] mb-3 block uppercase tracking-widest ${isDark ? 'text-[#d0ff00]' : 'text-indigo-600 font-semibold'}`}>
                      Deployed Assets & Projects (Click to inspect deep-dive)
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {cvData.projects.map((proj) => (
                        <button
                          key={proj.id}
                          onClick={() => setSelectedProject(proj)}
                          className={`p-4 border rounded-xl transition-all flex flex-col justify-between group text-left cursor-pointer ${isDark ? 'bg-[#0b0b0c] border-[rgba(226,226,228,0.08)] hover:border-[#d0ff00]' : 'bg-slate-50 border-slate-200 hover:border-indigo-600'}`}
                        >
                          <div>
                            <span className={`font-semibold text-sm transition-colors block mb-1 ${isDark ? 'text-white group-hover:text-[#d0ff00]' : 'text-slate-900 group-hover:text-indigo-600'}`}>{proj.title}</span>
                            <p className={`text-xs line-clamp-2 ${isDark ? 'text-[rgba(226,226,228,0.5)]' : 'text-slate-500'}`}>{proj.description}</p>
                          </div>
                          <span className={`font-mono-jb text-[0.65rem] mt-3 block ${isDark ? 'text-[#d0ff00]' : 'text-indigo-600'}`}>/{proj.category} → Deep Dive</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* TAB 2: SKILLS & CERTIFICATIONS */}
              {activeTab === 'skills' && (
                <>
                  <div>
                    <span className={`font-mono-jb text-[0.7rem] mb-3 block uppercase tracking-widest ${isDark ? 'text-[#d0ff00]' : 'text-indigo-600 font-semibold'}`}>
                      Technical Stack & Competencies
                    </span>
                    <h1 className={`text-2xl sm:text-3xl font-semibold tracking-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Stack Capabilities & Certifications
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {cvData.skills.map((skill) => (
                        <div key={skill.id} className={`p-4 sm:p-5 rounded-xl border transition-colors ${isDark ? 'bg-[#161618] border-[rgba(226,226,228,0.08)]' : 'bg-slate-50 border-slate-200'}`}>
                          <div className="flex items-center justify-between mb-2">
                            <span className={`font-semibold text-sm sm:text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>{skill.name}</span>
                            <span className={`font-mono-jb text-xs ${isDark ? 'text-[#d0ff00]' : 'text-indigo-600 font-semibold'}`}>{skill.proficiency}%</span>
                          </div>
                          <div className={`w-full h-2 rounded-full overflow-hidden ${isDark ? 'bg-[#0b0b0c]' : 'bg-slate-200'}`}>
                            <div className={`h-full rounded-full ${isDark ? 'bg-[#d0ff00]' : 'bg-indigo-600'}`} style={{ width: `${skill.proficiency}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <span className={`font-mono-jb text-[0.7rem] mb-3 block uppercase tracking-widest ${isDark ? 'text-[#d0ff00]' : 'text-indigo-600 font-semibold'}`}>
                      Certifications & Honors
                    </span>
                    <div className="space-y-4">
                      {cvData.achievements.map((ach) => (
                        <div key={ach.id} className={`p-4 sm:p-5 rounded-xl border transition-colors ${isDark ? 'bg-[#161618] border-[rgba(226,226,228,0.08)]' : 'bg-slate-50 border-slate-200'}`}>
                          <span className={`font-mono-jb text-[0.65rem] block mb-1 ${isDark ? 'text-[#d0ff00]' : 'text-indigo-600'}`}>{ach.type} — {ach.date}</span>
                          <h3 className={`font-semibold text-base sm:text-lg mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{ach.title}</h3>
                          <p className={`text-xs ${isDark ? 'text-[rgba(226,226,228,0.5)]' : 'text-slate-500'}`}>Issuer: {ach.issuer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* TAB 3: DEPLOYED ASSETS & PROJECTS */}
              {activeTab === 'projects' && (
                <>
                  <div>
                    <span className={`font-mono-jb text-[0.7rem] mb-3 block uppercase tracking-widest ${isDark ? 'text-[#d0ff00]' : 'text-indigo-600 font-semibold'}`}>
                      Software Engineering Portfolio
                    </span>
                    <h1 className={`text-2xl sm:text-3xl font-semibold tracking-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Deployed Assets & Systems (Click any card for Deep-Dive)
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {cvData.projects.map((proj) => (
                        <div 
                          key={proj.id} 
                          onClick={() => setSelectedProject(proj)}
                          className={`p-5 sm:p-6 rounded-2xl border transition-all flex flex-col justify-between space-y-4 cursor-pointer group ${isDark ? 'bg-[#161618] border-[rgba(226,226,228,0.08)] hover:border-[#d0ff00]' : 'bg-slate-50 border-slate-200 hover:border-indigo-600 shadow-sm'}`}
                        >
                          <div>
                            <span className={`font-mono-jb text-xs block mb-1 ${isDark ? 'text-[#d0ff00]' : 'text-indigo-600'}`}>/{proj.category}</span>
                            <h3 className={`text-lg sm:text-xl font-bold mb-2 transition-colors ${isDark ? 'text-white group-hover:text-[#d0ff00]' : 'text-slate-900 group-hover:text-indigo-600'}`}>{proj.title}</h3>
                            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-[rgba(226,226,228,0.6)]' : 'text-slate-600'}`}>{proj.description}</p>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {proj.technologies.map((t, idx) => (
                              <span key={idx} className={`font-mono-jb text-[0.65rem] px-2.5 py-1 rounded border ${isDark ? 'bg-[#0b0b0c] border-[rgba(226,226,228,0.08)] text-[rgba(226,226,228,0.7)]' : 'bg-white border-slate-200 text-slate-700'}`}>
                                {t}
                              </span>
                            ))}
                          </div>
                          <div className={`pt-4 border-t flex items-center justify-between ${isDark ? 'border-[rgba(226,226,228,0.08)]' : 'border-slate-200'}`}>
                            <span className={`font-mono-jb text-xs ${isDark ? 'text-[#d0ff00]' : 'text-indigo-600'}`}>Click for Architecture Deep-Dive →</span>
                            <ExternalLink className={`w-4 h-4 ${isDark ? 'text-[#d0ff00]' : 'text-indigo-600'}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Archives & Education */}
              <div className={`pt-6 border-t ${isDark ? 'border-[rgba(226,226,228,0.08)]' : 'border-slate-200'}`}>
                <span className={`font-mono-jb text-[0.7rem] mb-3 block uppercase tracking-widest ${isDark ? 'text-[#d0ff00]' : 'text-indigo-600 font-semibold'}`}>
                  Academic Archives
                </span>
                <div className="space-y-3">
                  {cvData.education.map((edu) => (
                    <div key={edu.id} className={`text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border transition-colors ${isDark ? 'text-[rgba(226,226,228,0.7)] bg-[#161618] border-[rgba(226,226,228,0.08)]' : 'text-slate-700 bg-slate-50 border-slate-200'}`}>
                      <div>
                        <span className={`font-semibold block ${isDark ? 'text-white' : 'text-slate-900'}`}>{edu.degree}</span>
                        <span className={`text-xs ${isDark ? 'text-[rgba(226,226,228,0.5)]' : 'text-slate-500'}`}>{edu.school}</span>
                      </div>
                      <span className={`font-mono-jb text-xs mt-1 sm:mt-0 ${isDark ? 'text-[#d0ff00]' : 'text-indigo-600'}`}>{edu.period}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Chat Messages */}
              {chatMessages.slice(2).map((msg, idx) => (
                <div key={idx} className={msg.sender === 'user' ? 'max-w-[90%] sm:max-w-[85%] self-end' : `p-4 rounded-xl border ${isDark ? 'bg-[#161618] border-[rgba(226,226,228,0.08)]' : 'bg-slate-50 border-slate-200'}`}>
                  {msg.sender === 'user' ? (
                    <div className={`px-4 sm:px-5 py-3.5 rounded-2xl rounded-tr-none border text-xs sm:text-sm ${isDark ? 'bg-[#161618] border-[rgba(226,226,228,0.08)] text-white' : 'bg-slate-100 border-slate-200 text-slate-900'}`}>{msg.text}</div>
                  ) : (
                    <p className={`text-xs sm:text-sm ${isDark ? 'text-[rgba(226,226,228,0.8)]' : 'text-slate-700'}`}>{msg.text}</p>
                  )}
                </div>
              ))}

            </div>
          </div>

        </div>

        {/* Prompt Input Shell */}
        <div className={`p-4 sm:p-8 shrink-0 bg-gradient-to-t ${isDark ? 'from-[#0b0b0c] via-[#0b0b0c]' : 'from-white via-white'}`}>
          <form onSubmit={handleSendPrompt} className={`border rounded-2xl p-2.5 sm:p-3 flex items-center justify-between gap-2 sm:gap-3 shadow-2xl transition-colors ${isDark ? 'bg-[#161618] border-[rgba(226,226,228,0.08)]' : 'bg-slate-50 border-slate-200'}`}>
            <input
              type="text"
              value={promptInput}
              onChange={(e) => setPromptInput(e.target.value)}
              placeholder={`Ask ${cvData.personal.fullName} anything or send inquiry to email...`}
              className={`flex-1 bg-transparent px-2 sm:px-3 text-xs sm:text-sm focus:outline-none font-sans ${isDark ? 'text-white placeholder-[rgba(226,226,228,0.3)]' : 'text-slate-900 placeholder-slate-400'}`}
            />
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-mono-jb text-[0.65rem] sm:text-xs font-semibold transition-colors hidden sm:block ${isDark ? 'bg-[rgba(226,226,228,0.08)] text-[rgba(226,226,228,0.8)] hover:bg-[rgba(226,226,228,0.15)]' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}
              >
                RESUME.PDF
              </button>
              <button
                type="submit"
                className={`border-none px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-semibold font-mono-jb text-xs transition-all flex items-center gap-1.5 shadow-md ${isDark ? 'bg-[#d0ff00] text-black hover:bg-[#b5e000]' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
              >
                <span>SEND</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>

      </main>

      {/* Customize Modal */}
      <CustomizeModal 
        isOpen={customizeModalOpen}
        onClose={() => setCustomizeModalOpen(false)}
        cvData={cvData}
        onUpdateCV={handleUpdateCV}
        onResetDefault={handleResetDefault}
      />

      {/* Project Deep-Dive Modal */}
      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}
