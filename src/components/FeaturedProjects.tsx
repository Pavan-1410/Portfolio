import React, { useState } from 'react';
import { ExternalLink, Sparkles, Layers, ShieldCheck, CheckCircle2, ArrowUpRight, Flame } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData, Project } from '../data/portfolioData';

export const FeaturedProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'deployed', label: 'Live Deployed' },
    { id: 'backend', label: 'Backend & Go' },
    { id: 'fullstack', label: 'Full-Stack & React' }
  ];

  const filteredProjects = portfolioData.projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'deployed') return Boolean(project.liveUrl);
    if (activeFilter === 'backend') return project.category === 'backend';
    if (activeFilter === 'fullstack') return project.category === 'fullstack';
    return true;
  });

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-violet-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-300 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              <span>Engineered for Production</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured <span className="glow-text-blue-violet">Projects & Deployments</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              From high-concurrency Go payment reconciliation systems with goroutines and worker pools,
              to modern full-stack web applications with live deployments.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl glass-panel border border-violet-500/20 self-start md:self-auto">
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                  activeFilter === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-violet-600/30 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative rounded-3xl glass-panel border transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden ${
                project.featured
                  ? 'border-violet-500/30 hover:border-violet-400/60 shadow-xl shadow-purple-950/20 hover:shadow-violet-900/40'
                  : 'border-white/10 hover:border-violet-500/30'
              }`}
            >
              {/* Gradient accent top line */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6 sm:p-8 space-y-5 flex-1">
                {/* Top Badges */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white/5 border border-white/10 text-violet-300">
                      {project.category.toUpperCase()}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-violet-600/20 text-violet-300 border border-violet-500/30 flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400/30" />
                        <span>Star Project</span>
                      </span>
                    )}
                  </div>

                  {project.liveUrl && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>{project.status}</span>
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mt-2.5">
                    {project.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-1.5 pt-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Key Architectural Highlights:</p>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-950/40 border border-blue-500/20 text-blue-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 sm:p-8 pt-0 flex flex-wrap items-center gap-3 border-t border-white/5 mt-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-md shadow-violet-600/30 flex items-center justify-center gap-2 transition-all group/btn"
                  >
                    <span>Open Live Application</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                )}

                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 flex items-center justify-center gap-2 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
