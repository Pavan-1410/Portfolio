import React, { useState, useEffect } from 'react';
import { GitFork, Star, ExternalLink, Search, Code2, Sparkles, Filter, RefreshCw } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
}

// Initial cached snapshot from Pavan-1410 GitHub profile
const CACHED_REPOS: Partial<GitHubRepo>[] = [
  {
    id: 1,
    name: 'Payment-Reconciliation',
    description: 'Payment Reconciliation System is a backend application designed to compare payment transactions from an internal system with transaction reports from external payment providers.',
    html_url: 'https://github.com/Pavan-1410/Payment-Reconciliation',
    homepage: 'https://payment-reconciliatio-api.onrender.com/swagger/index.html#/',
    stargazers_count: 0,
    forks_count: 0,
    language: 'Go',
    updated_at: '2025-02-15T00:00:00Z'
  },
  {
    id: 2,
    name: 'Shopping-Application',
    description: 'Full-stack shopping application with React.js, TypeScript, PostgreSQL, Firebase Auth, TanStack Query, Zustand, and Razorpay payment gateway integration.',
    html_url: 'https://github.com/Pavan-1410/Shopping-Application',
    homepage: 'https://shopping-application-v4q2.vercel.app/',
    stargazers_count: 0,
    forks_count: 0,
    language: 'TypeScript',
    updated_at: '2025-01-20T00:00:00Z'
  },
  {
    id: 3,
    name: 'Barber_Connect',
    description: 'Full-stack salon booking platform featuring role-based dashboards for barbers and customers, supporting appointment booking and simulated payments.',
    html_url: 'https://github.com/Pavan-1410/Barber_Connect',
    homepage: 'https://barber-connect-rho.vercel.app/',
    stargazers_count: 0,
    forks_count: 0,
    language: 'JavaScript',
    updated_at: '2024-12-10T00:00:00Z'
  },
  {
    id: 4,
    name: 'PassOP',
    description: 'PassOP is a password manager app that stores your credentials safely at one place made using React JS and Tailwind CSS.',
    html_url: 'https://github.com/Pavan-1410/PassOP',
    homepage: 'https://pass-op-itp7.vercel.app/',
    stargazers_count: 0,
    forks_count: 0,
    language: 'JavaScript',
    updated_at: '2024-11-05T00:00:00Z'
  },
  {
    id: 5,
    name: 'Chat-Application',
    description: 'Real-time bi-directional chat application built with modern WebSockets and React frontend.',
    html_url: 'https://github.com/Pavan-1410/Chat-Application',
    homepage: 'https://chatting-application-liart.vercel.app',
    stargazers_count: 0,
    forks_count: 0,
    language: 'JavaScript',
    updated_at: '2024-10-18T00:00:00Z'
  },
  {
    id: 6,
    name: 'Finderr-Property-Website-React',
    description: 'A property finder frontend web application leveraging SwiperJS, Accordion JS, and CountUp library.',
    html_url: 'https://github.com/Pavan-1410/Finderr-Property-Website-React',
    homepage: 'https://finderr-property-finding-website.pages.dev/',
    stargazers_count: 0,
    forks_count: 0,
    language: 'JavaScript',
    updated_at: '2024-09-12T00:00:00Z'
  },
  {
    id: 7,
    name: 'CodeScore-360',
    description: 'Final Year Engineering Project: Code scoring and static analysis framework.',
    html_url: 'https://github.com/Pavan-1410/CodeScore-360',
    homepage: null,
    stargazers_count: 0,
    forks_count: 1,
    language: 'JavaScript',
    updated_at: '2025-02-01T00:00:00Z'
  },
  {
    id: 8,
    name: 'Automatic-Mail-Sender',
    description: 'Automated email dispatching service built with Node.js and Nodemailer.',
    html_url: 'https://github.com/Pavan-1410/Automatic-Mail-Sender',
    homepage: null,
    stargazers_count: 0,
    forks_count: 0,
    language: 'JavaScript',
    updated_at: '2024-08-14T00:00:00Z'
  },
  {
    id: 9,
    name: 'NewsBox',
    description: 'NewsBox brings latest categorized news feeds with live search and category filters.',
    html_url: 'https://github.com/Pavan-1410/NewsBox',
    homepage: 'https://pavan-1410.github.io/NewsBox/',
    stargazers_count: 0,
    forks_count: 0,
    language: 'JavaScript',
    updated_at: '2024-07-22T00:00:00Z'
  },
  {
    id: 10,
    name: 'Blog',
    description: 'Dynamic blog web application for sharing technical insights.',
    html_url: 'https://github.com/Pavan-1410/Blog',
    homepage: 'https://blog-rouge-rho.vercel.app',
    stargazers_count: 0,
    forks_count: 0,
    language: 'JavaScript',
    updated_at: '2024-06-30T00:00:00Z'
  },
  {
    id: 11,
    name: 'Todo_list_using_react',
    description: 'Interactive task tracker built using React state and local storage.',
    html_url: 'https://github.com/Pavan-1410/Todo_list_using_react',
    homepage: 'https://todo-list-using-react-taupe.vercel.app',
    stargazers_count: 0,
    forks_count: 0,
    language: 'JavaScript',
    updated_at: '2024-05-18T00:00:00Z'
  },
  {
    id: 12,
    name: 'Currency-Convertor',
    description: 'Live exchange rates currency converter consuming live financial APIs.',
    html_url: 'https://github.com/Pavan-1410/Currency-Convertor',
    homepage: null,
    stargazers_count: 0,
    forks_count: 0,
    language: 'JavaScript',
    updated_at: '2024-04-10T00:00:00Z'
  }
];

export const GitHubRepositories: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>(CACHED_REPOS as GitHubRepo[]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLang, setSelectedLang] = useState<string>('All');
  const [onlyDeployed, setOnlyDeployed] = useState<boolean>(false);

  // Fetch live repos from GitHub API
  const fetchGitHubRepos = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.github.com/users/Pavan-1410/repos?per_page=100&sort=updated');
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data);
        }
      }
    } catch (err) {
      console.warn('Could not fetch live GitHub repos, using cached dataset', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubRepos();
  }, []);

  // Filter languages
  const languages = ['All', ...Array.from(new Set(repos.map(r => r.language).filter(Boolean))) as string[]];

  // Filtered repositories
  const filteredRepos = repos.filter(repo => {
    const matchesSearch = repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLang = selectedLang === 'All' || repo.language === selectedLang;
    const matchesDeployed = onlyDeployed ? Boolean(repo.homepage) : true;
    return matchesSearch && matchesLang && matchesDeployed;
  });

  return (
    <div className="space-y-6">
      {/* Header with Search and Filters */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl glass-panel border border-violet-500/20">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search all 25+ GitHub repositories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0a0f24] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
          />
        </div>

        {/* Filter controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Deployed Toggle */}
          <button
            onClick={() => setOnlyDeployed(!onlyDeployed)}
            className={`px-3 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
              onlyDeployed
                ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-violet-600/30'
                : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Live Deployed Only</span>
          </button>

          {/* Refresh button */}
          <button
            onClick={fetchGitHubRepos}
            disabled={isLoading}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-colors disabled:opacity-50"
            title="Refresh Live GitHub Repos"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-violet-400' : ''}`} />
          </button>
        </div>
      </div>

      {/* Language filter pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-xs text-slate-400 flex items-center gap-1 mr-1">
          <Filter className="w-3 h-3" /> Lang:
        </span>
        {languages.map(lang => (
          <button
            key={lang}
            onClick={() => setSelectedLang(lang)}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              selectedLang === lang
                ? 'bg-violet-600 text-white shadow-sm shadow-violet-600/50'
                : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Repos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRepos.map((repo) => (
          <div
            key={repo.name}
            className="group relative flex flex-col justify-between rounded-2xl glass-panel p-5 border border-white/10 hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-950/30"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20 group-hover:text-violet-300 transition-colors">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-slate-100 group-hover:text-violet-300 transition-colors text-sm break-all">
                    {repo.name}
                  </h4>
                </div>

                {repo.homepage && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Live
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                {repo.description || 'Open source software repository by Pavan Sonawane.'}
              </p>
            </div>

            <div className="pt-3 border-t border-white/5 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-3">
                  {repo.language && (
                    <span className="flex items-center gap-1.5 font-medium text-slate-300">
                      <span className={`w-2 h-2 rounded-full ${
                        repo.language === 'Go' ? 'bg-cyan-400' :
                        repo.language === 'TypeScript' ? 'bg-blue-400' :
                        repo.language === 'JavaScript' ? 'bg-amber-400' :
                        repo.language === 'Python' ? 'bg-emerald-400' :
                        repo.language === 'Java' ? 'bg-orange-400' :
                        repo.language === 'C++' ? 'bg-pink-400' : 'bg-violet-400'
                      }`}></span>
                      {repo.language}
                    </span>
                  )}
                  {repo.forks_count > 0 && (
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" /> {repo.forks_count}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400/30" /> {repo.stargazers_count}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 px-3 rounded-lg text-xs font-medium text-center bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-1.5 border border-white/5"
                >
                  <span>Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 px-3 rounded-lg text-xs font-medium text-center bg-gradient-to-r from-blue-600/30 to-violet-600/30 hover:from-blue-600 hover:to-violet-600 text-blue-200 hover:text-white transition-all flex items-center justify-center gap-1.5 border border-violet-500/30"
                  >
                    <span>Visit Live</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredRepos.length === 0 && (
        <div className="text-center py-12 rounded-2xl glass-panel border border-white/5">
          <p className="text-slate-400 text-sm">No repositories matched your search criteria.</p>
        </div>
      )}
    </div>
  );
};
