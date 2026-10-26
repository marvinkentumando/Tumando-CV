import React, { useState, useEffect } from 'react';
import { CVData } from './types';
import { defaultCVData } from './data/defaultCV';
import { CustomizeModal } from './components/CustomizeModal';
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
  GraduationCap
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
  const [customizeModalOpen, setCustomizeModalOpen] = useState(false);
  const [promptInput, setPromptInput] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{sender: 'user' | 'ai', text: string}>>([
    { sender: 'user', text: `Get me a briefing on ${cvData.personal.fullName}, lead engineer.` },
    { sender: 'ai', text: `Briefing loaded for ${cvData.personal.fullName}. Full stack architecture & engineering records verified.` }
  ]);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

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
    setChatMessages(prev => [
      ...prev,
      { sender: 'user', text: newMsg },
      { sender: 'ai', text: `Query processed: "${newMsg}". Consulting ${cvData.personal.fullName}'s engineering ledger. All systems optimal.` }
    ]);
    setPromptInput('');
  };

  return (
    <div className="bg-[#0b0b0c] text-[#e2e2e4] font-sans antialiased h-screen flex overflow-hidden selection:bg-[#d0ff00] selection:text-black">
      
      {/* Dark Side Shell Navigation */}
      <nav className="w-20 bg-black border-r border-[rgba(226,226,228,0.08)] flex flex-col items-center py-6 gap-6 shrink-0 print:hidden">
        <button 
          onClick={() => setActiveTab('chat')}
          className={`w-11 h-11 rounded-xl bg-[#161618] flex items-center justify-center border transition-all ${activeTab === 'chat' ? 'border-[#d0ff00] text-[#d0ff00]' : 'border-[rgba(226,226,228,0.08)] text-[rgba(226,226,228,0.5)] hover:text-white'}`}
          title="AI Briefing Core"
        >
          <MessageSquare className="w-5 h-5" />
        </button>
        <button 
          onClick={() => setActiveTab('skills')}
          className={`w-11 h-11 rounded-xl bg-[#161618] flex items-center justify-center border transition-all ${activeTab === 'skills' ? 'border-[#d0ff00] text-[#d0ff00]' : 'border-[rgba(226,226,228,0.08)] text-[rgba(226,226,228,0.5)] hover:text-white'}`}
          title="Skills & Expertise"
        >
          <Terminal className="w-5 h-5" />
        </button>
        <button 
          onClick={() => setActiveTab('projects')}
          className={`w-11 h-11 rounded-xl bg-[#161618] flex items-center justify-center border transition-all ${activeTab === 'projects' ? 'border-[#d0ff00] text-[#d0ff00]' : 'border-[rgba(226,226,228,0.08)] text-[rgba(226,226,228,0.5)] hover:text-white'}`}
          title="Deployed Assets"
        >
          <Layers className="w-5 h-5" />
        </button>
        <div className="mt-auto flex flex-col gap-3">
          <button
            onClick={() => setCustomizeModalOpen(true)}
            className="w-11 h-11 rounded-xl bg-[#161618] flex items-center justify-center border border-[rgba(226,226,228,0.08)] text-[#d0ff00] hover:bg-[#222224] transition-all"
            title="Customize CV"
          >
            <Sliders className="w-5 h-5" />
          </button>
          <button
            onClick={handlePrint}
            className="w-11 h-11 rounded-xl bg-[#d0ff00] text-black flex items-center justify-center font-bold hover:bg-[#b5e000] transition-all shadow-lg"
            title="Print / Save PDF"
          >
            <Download className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Main Chat Layout Container */}
      <main className="flex-1 flex flex-col max-w-5xl mx-auto border-x border-[rgba(226,226,228,0.08)] relative h-full">
        
        {/* Header Bar */}
        <div className="px-8 py-5 border-b border-[rgba(226,226,228,0.08)] flex justify-between items-center bg-[#0b0b0c]/80 backdrop-blur shrink-0">
          <span className="font-mono-jb text-xs font-medium tracking-wider text-[#e2e2e4]">
            URMANDO_ENGINEERING_CORE.v26
          </span>
          <div className="flex items-center gap-6 font-mono-jb text-[0.65rem] text-[rgba(226,226,228,0.5)]">
            <span>LOC: {cvData.personal.location.split(',')[0].toUpperCase()}</span>
            <span>GITHUB: /{cvData.personal.githubUrl.split('/').pop()?.toUpperCase()}</span>
          </div>
        </div>

        {/* Chat Flow Scroll Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 flex flex-col gap-10">
          
          {/* User Bubble */}
          <div className="max-w-[85%] self-end">
            <div className="bg-[#161618] px-5 py-3.5 rounded-2xl rounded-tr-none border border-[rgba(226,226,228,0.08)] text-sm sm:text-base">
              Get me a comprehensive briefing on {cvData.personal.fullName}, lead engineer.
            </div>
          </div>

          {/* AI Response Bubble */}
          <div className="w-full self-start flex gap-5">
            <div className="w-9 h-9 bg-[#d0ff00] rounded-xl shrink-0 flex items-center justify-center text-black font-bold font-mono-jb text-sm shadow-md">
              {cvData.personal.fullName.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
            
            <div className="flex-1 space-y-8">
              
              {/* Identity / Summary */}
              <div>
                <span className="font-mono-jb text-[0.7rem] text-[#d0ff00] mb-3 block uppercase tracking-widest">
                  Identity / Executive Summary
                </span>
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
                  {cvData.personal.fullName}
                </h1>
                <p className="text-[rgba(226,226,228,0.6)] text-base sm:text-lg leading-relaxed max-w-3xl">
                  {cvData.personal.introduction}
                </p>
              </div>



              {/* Skill Stack */}
              <div>
                <span className="font-mono-jb text-[0.7rem] text-[#d0ff00] mb-3 block uppercase tracking-widest">
                  Stack Capabilities
                </span>
                <div className="flex flex-wrap gap-2">
                  {cvData.skills.map((skill) => (
                    <span 
                      key={skill.id}
                      className="font-mono-jb text-xs px-3 py-1.5 bg-[#161618] border border-[rgba(226,226,228,0.08)] rounded-md hover:border-[#d0ff00] transition-colors"
                    >
                      {skill.name} ({skill.proficiency}%)
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience Ledger */}
              <div>
                <span className="font-mono-jb text-[0.7rem] text-[#d0ff00] mb-3 block uppercase tracking-widest">
                  Experience Ledger
                </span>
                <div className="space-y-4">
                  {cvData.experience.map((exp) => (
                    <div key={exp.id} className="bg-[#161618] border border-[rgba(226,226,228,0.08)] p-6 rounded-xl">
                      <span className="font-mono-jb text-[0.65rem] text-[rgba(226,226,228,0.5)] block mb-1">{exp.period} — {exp.company}</span>
                      <h3 className="text-lg font-semibold mb-2">{exp.role}</h3>
                      <ul className="space-y-1.5 text-sm text-[rgba(226,226,228,0.6)]">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#d0ff00]">›</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deployed Assets */}
              <div>
                <span className="font-mono-jb text-[0.7rem] text-[#d0ff00] mb-3 block uppercase tracking-widest">
                  Deployed Assets & Projects
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {cvData.projects.map((proj) => (
                    <a
                      key={proj.id}
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-[#0b0b0c] border border-[rgba(226,226,228,0.08)] rounded-xl hover:border-[#d0ff00] transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <span className="font-semibold text-sm group-hover:text-[#d0ff00] transition-colors block mb-1">{proj.title}</span>
                        <p className="text-xs text-[rgba(226,226,228,0.5)] line-clamp-2">{proj.description}</p>
                      </div>
                      <span className="font-mono-jb text-[0.65rem] text-[#d0ff00] mt-3 block">/{proj.category}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Archives & Education */}
              <div className="pt-6 border-t border-[rgba(226,226,228,0.08)]">
                <span className="font-mono-jb text-[0.7rem] text-[#d0ff00] mb-3 block uppercase tracking-widest">
                  Academic Archives
                </span>
                <div className="space-y-3">
                  {cvData.education.map((edu) => (
                    <div key={edu.id} className="text-sm text-[rgba(226,226,228,0.7)] flex flex-col sm:flex-row sm:items-center justify-between bg-[#161618] p-4 rounded-xl border border-[rgba(226,226,228,0.08)]">
                      <div>
                        <span className="font-semibold text-white block">{edu.degree}</span>
                        <span className="text-xs text-[rgba(226,226,228,0.5)]">{edu.school}</span>
                      </div>
                      <span className="font-mono-jb text-xs text-[#d0ff00] mt-1 sm:mt-0">{edu.period}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Chat Messages */}
              {chatMessages.slice(2).map((msg, idx) => (
                <div key={idx} className={msg.sender === 'user' ? 'max-w-[85%] self-end' : 'bg-[#161618] p-4 rounded-xl border border-[rgba(226,226,228,0.08)]'}>
                  {msg.sender === 'user' ? (
                    <div className="bg-[#161618] px-5 py-3.5 rounded-2xl rounded-tr-none border border-[rgba(226,226,228,0.08)] text-sm">{msg.text}</div>
                  ) : (
                    <p className="text-sm text-[rgba(226,226,228,0.8)]">{msg.text}</p>
                  )}
                </div>
              ))}

            </div>
          </div>

        </div>

        {/* Prompt Input Shell */}
        <div className="p-6 sm:p-8 bg-gradient-to-transparent from-transparent via-[#0b0b0c] to-[#0b0b0c] shrink-0">
          <form onSubmit={handleSendPrompt} className="bg-[#161618] border border-[rgba(226,226,228,0.08)] rounded-2xl p-3 flex items-center justify-between gap-3 shadow-2xl">
            <input
              type="text"
              value={promptInput}
              onChange={(e) => setPromptInput(e.target.value)}
              placeholder={`Ask ${cvData.personal.fullName} anything or request info...`}
              className="flex-1 bg-transparent px-3 text-sm text-white focus:outline-none placeholder-[rgba(226,226,228,0.3)] font-sans"
            />
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="px-4 py-2.5 rounded-xl bg-[rgba(226,226,228,0.08)] text-[rgba(226,226,228,0.8)] font-mono-jb text-xs font-semibold hover:bg-[rgba(226,226,228,0.15)] transition-colors hidden sm:block"
              >
                RESUME.PDF
              </button>
              <button
                type="submit"
                className="bg-[#d0ff00] text-black border-none px-5 py-2.5 rounded-xl font-semibold font-mono-jb text-xs hover:bg-[#b5e000] transition-all flex items-center gap-1.5 shadow-md"
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

    </div>
  );
}
