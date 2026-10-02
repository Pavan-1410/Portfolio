import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, Building, GraduationCap, Award, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-violet-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-semibold text-violet-300 mb-3">
            <Briefcase className="w-3.5 h-3.5 text-violet-400" />
            <span>Career & Education Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="glow-text-blue-violet">Academics</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Demonstrated engineering leadership across backend microservices, real-time proctoring systems, and campus training & placements.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-violet-500/20 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {portfolioData.experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              {/* Timeline marker with pulsating dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#070913] border-2 border-violet-500 group-hover:border-blue-400 group-hover:scale-125 transition-all">
                <span className="absolute inset-0 rounded-full bg-violet-400/50 animate-ping"></span>
              </div>

              {/* Card */}
              <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 hover:border-violet-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-violet-950/20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-violet-600/20 text-violet-300 border border-violet-500/30">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-blue-400">
                      <Building className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-violet-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 my-5">
                  {exp.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-white/5">
                  <span className="text-xs text-slate-400 mr-2 font-mono">Tech Stack:</span>
                  {exp.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-violet-950/30 border border-violet-500/20 text-violet-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Education Card on Timeline */}
          <div className="relative pl-6 sm:pl-8 group">
            {/* Timeline marker */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#070913] border-2 border-blue-500 group-hover:scale-125 transition-all" />

            <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-950/20">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-400" />
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {portfolioData.education.degree}
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-slate-300 mt-1">
                    {portfolioData.education.institution}, Nashik ({portfolioData.education.university})
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono">
                    GPA: {portfolioData.education.gpa}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{portfolioData.education.period}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Leadership & Extra-Curricular:</p>
                {portfolioData.education.activities.map((act, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
