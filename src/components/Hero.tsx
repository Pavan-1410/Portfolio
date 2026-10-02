import React from 'react';
import { ArrowRight, FileText, Mail, Sparkles, Terminal, CheckCircle2, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows (Blue & Violet Theme) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/15 via-violet-600/20 to-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1b4b12_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Column: Text & Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-violet-500/30 text-xs font-medium text-violet-300 shadow-sm shadow-violet-900/30 animate-float">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open for Software Engineer & Backend Roles</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm{' '}
                <span className="glow-text-blue-violet drop-shadow-sm">
                  {portfolioData.personal.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300">
                Full-Stack Software Engineer &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  Backend Architect
                </span>
              </p>
            </div>

            {/* Summary description */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Passionate about high-throughput distributed systems in <span className="text-blue-300 font-semibold">Go (Golang)</span>,
              real-time AI diagnostic systems with <span className="text-violet-300 font-semibold">Gemini API</span>, and
              modern scalable full-stack applications with <span className="text-indigo-300 font-semibold">React & TypeScript</span>.
              Former Tech Intern at <strong className="text-white">BharatNXT</strong> and Team Lead at <strong className="text-white">UptoSkills</strong>.
            </p>

            {/* Quick Skills Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {['Go (Golang)', 'Gin', 'React.js', 'PostgreSQL', 'Docker', 'Gemini API', 'TypeScript', 'WebRTC'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-[#101736]/90 border border-violet-500/20 text-slate-300 hover:border-violet-400/50 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-lg shadow-violet-600/30 flex items-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Deployed Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm glass-panel border border-violet-500/30 hover:border-violet-400 hover:bg-violet-600/10 text-violet-200 hover:text-white flex items-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-violet-400" />
                <span>View Full Resume</span>
              </button>

              <a
                href="#contact"
                className="px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white hover:bg-white/5 border border-white/10 transition-colors"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
              <span className="text-xs text-slate-400 font-medium">Connect:</span>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all hover:scale-110"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 border border-blue-500/20 transition-all hover:scale-110"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-2.5 rounded-xl bg-violet-500/10 hover:bg-violet-500/20 text-violet-400 hover:text-violet-300 border border-violet-500/20 transition-all hover:scale-110"
                title="Email Pavan"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Photo in Glowing Blue & Violet Frame */}
          <div className="relative flex justify-center items-center">
            {/* Glow halo behind photo */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-blue-600/40 via-violet-600/50 to-pink-500/30 blur-2xl -z-10 animate-pulse-glow" />

            {/* Rotating gradient ring */}
            <div className="relative p-1.5 rounded-3xl gradient-border-glow shadow-2xl shadow-violet-950/60">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-[22px] overflow-hidden bg-slate-900 border border-white/10 group">
                <img
                  src="./pavan.jpg"
                  alt="Pavan Sonawane"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-transparent to-transparent opacity-60" />

                {/* Badge Overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl glass-panel border border-violet-500/30 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Pavan Sonawane</p>
                      <p className="text-[10px] text-violet-300 font-mono">B.E. Computer Engineering</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold border border-emerald-500/30">
                      GPA 8.64
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Metric 1 */}
            <div className="absolute -top-4 -left-6 sm:-left-10 px-3.5 py-2 rounded-xl glass-panel border border-blue-500/30 shadow-lg hidden sm:flex items-center gap-2 animate-float">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                GO
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-400 uppercase font-mono">Microservices</p>
                <p className="text-xs font-bold text-white">BharatNXT</p>
              </div>
            </div>

            {/* Floating Metric 2 */}
            <div className="absolute -bottom-4 -right-4 sm:-right-8 px-3.5 py-2 rounded-xl glass-panel border border-violet-500/30 shadow-lg hidden sm:flex items-center gap-2 animate-float [animation-delay:2s]">
              <div className="w-8 h-8 rounded-lg bg-violet-600/20 text-violet-400 flex items-center justify-center font-bold text-xs">
                AI
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-400 uppercase font-mono">Gemini API</p>
                <p className="text-xs font-bold text-white">Log Analyzer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl glass-panel border border-violet-500/15">
          <div className="text-center p-3 border-r border-white/5 last:border-none">
            <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              8.64
            </p>
            <p className="text-xs text-slate-400 font-medium mt-1">B.E. CGPA (Pune Univ)</p>
          </div>
          <div className="text-center p-3 border-r border-white/5 last:border-none">
            <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              2+
            </p>
            <p className="text-xs text-slate-400 font-medium mt-1">Industry Internships</p>
          </div>
          <div className="text-center p-3 border-r border-white/5 last:border-none">
            <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              6+
            </p>
            <p className="text-xs text-slate-400 font-medium mt-1">Live Deployed Apps</p>
          </div>
          <div className="text-center p-3">
            <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              25+
            </p>
            <p className="text-xs text-slate-400 font-medium mt-1">GitHub Repositories</p>
          </div>
        </div>
      </div>
    </section>
  );
};
