import React from 'react';
import { Cpu, Code, Database, Server, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Languages':
        return <Code className="w-4 h-4 text-blue-400" />;
      case 'Backend & Systems':
        return <Server className="w-4 h-4 text-violet-400" />;
      case 'Frontend & UI':
        return <Cpu className="w-4 h-4 text-indigo-400" />;
      case 'Databases & Cloud DevOps':
        return <Database className="w-4 h-4 text-emerald-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-pink-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-300 mb-3">
            <Cpu className="w-3.5 h-3.5 text-violet-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="glow-text-blue-violet">Technical Arsenal</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            A battle-tested tech stack focused on high performance, type safety, distributed concurrency, and modern user interfaces.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-3xl glass-panel p-6 sm:p-7 border border-white/10 hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-950/20"
            >
              <div className="flex items-center gap-2.5 pb-4 border-b border-white/5 mb-5">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 className="text-lg font-bold text-white">{cat.category}</h3>
              </div>

              {/* Skills with Progress Bars */}
              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-200">{skill.name}</span>
                      <span className="font-mono text-violet-400">{skill.level}%</span>
                    </div>

                    <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
