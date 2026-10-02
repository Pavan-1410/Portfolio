import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { GitHubRepositories } from './components/GitHubRepositories';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackgroundAudioPlayer } from './components/BackgroundAudioPlayer';
import { ResumeModal } from './components/ResumeModal';
import { Code2, GitBranch } from 'lucide-react';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070913] text-slate-100 flex flex-col selection:bg-purple-600/30 selection:text-purple-200">
      {/* Top Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Featured Projects with Live Deployed Links */}
        <FeaturedProjects />

        {/* Work Experience & Academics */}
        <ExperienceSection />

        {/* Live GitHub Repositories Section */}
        <section id="github-repos" className="py-20 relative border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-300 mb-3">
                <GitBranch className="w-3.5 h-3.5 text-blue-400" />
                <span>Real-Time GitHub Synchronization</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                All Repositories & <span className="glow-text-blue-violet">Open Source Code</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-2">
                Live stream of public repositories connected directly to <span className="text-blue-300 font-mono">@Pavan-1410</span> on GitHub.
              </p>
            </div>

            <GitHubRepositories />
          </div>
        </section>

        {/* Technical Skills Section */}
        <SkillsSection />

        {/* Contact & Social Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Background Music Player with Play/Pause button */}
      <BackgroundAudioPlayer />

      {/* Interactive Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

export default App;
