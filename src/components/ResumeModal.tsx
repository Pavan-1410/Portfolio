import React from 'react';
import { X, Printer, Mail, Phone, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl my-8 bg-[#0b1022] border border-violet-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0f172a]/80 no-print">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
            <span className="ml-2 text-sm font-semibold text-slate-200">Pavan_Sonawane_Resume.pdf</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white flex items-center gap-1.5 shadow-md shadow-violet-600/30 transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 bg-slate-950 text-slate-200 font-sans print:bg-white print:text-black print:p-0">
          {/* Header */}
          <div className="text-center border-b border-slate-800 pb-6 print:border-black">
            <h1 className="text-3xl font-extrabold tracking-tight text-white print:text-black">
              {portfolioData.personal.name}
            </h1>
            <p className="text-sm text-violet-400 font-medium mt-1 print:text-slate-700">
              {portfolioData.personal.title}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-3 text-xs text-slate-300 print:text-slate-700">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-blue-400 print:hidden" />
                {portfolioData.personal.phone}
              </span>
              <span>•</span>
              <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center gap-1 hover:underline">
                <Mail className="w-3.5 h-3.5 text-blue-400 print:hidden" />
                {portfolioData.personal.email}
              </a>
              <span>•</span>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline text-blue-400 print:text-black">
                <LinkedinIcon className="w-3.5 h-3.5 print:hidden" />
                LinkedIn
              </a>
              <span>•</span>
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline text-blue-400 print:text-black">
                <GithubIcon className="w-3.5 h-3.5 print:hidden" />
                github.com/Pavan-1410
              </a>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-base font-bold uppercase tracking-wider text-violet-400 border-b border-violet-500/20 pb-1 mb-4 print:text-black print:border-black">
              Experience
            </h2>

            <div className="space-y-6">
              {portfolioData.experiences.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-sm text-slate-100 print:text-black">
                    <div>
                      <span className="text-white font-bold print:text-black">{exp.role}</span>
                      <span className="text-slate-400 mx-1.5">|</span>
                      <span className="text-blue-400 font-medium print:text-black">{exp.company}</span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono print:text-slate-600">{exp.period}</span>
                  </div>

                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-800">
                    {exp.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="leading-relaxed">
                        <span className="-ml-1">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div>
            <h2 className="text-base font-bold uppercase tracking-wider text-violet-400 border-b border-violet-500/20 pb-1 mb-4 print:text-black print:border-black">
              Key Projects
            </h2>

            <div className="space-y-5">
              {/* Payment Reconciliation */}
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <span className="font-bold text-white print:text-black">
                    • Payment Processing & Reconciliation System
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <a
                      href="https://payment-reconciliatio-api.onrender.com/swagger/index.html#/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-400 hover:underline print:text-black flex items-center gap-1"
                    >
                      Swagger API <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                    <span>|</span>
                    <a
                      href="https://github.com/Pavan-1410/Payment-Reconciliation"
                      target="_blank"
                      rel="noreferrer"
                      className="text-violet-400 hover:underline print:text-black flex items-center gap-1"
                    >
                      GitHub Repo <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-800">
                  <li>Developed high-concurrency payment processing and automated reconciliation using Go (Golang) and Gin.</li>
                  <li>Implemented DTO validation and idempotency keys; used goroutines, channels, and worker pools for concurrency safety.</li>
                  <li>Engineered reconciliation workflows to identify matched vs mismatched records; containerized with Docker & PostgreSQL.</li>
                </ul>
              </div>

              {/* Shopping Application */}
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <span className="font-bold text-white print:text-black">
                    • Shopping Application (Full-Stack E-Commerce)
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <a
                      href="https://shopping-application-v4q2.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-400 hover:underline print:text-black flex items-center gap-1"
                    >
                      Live Demo <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                    <span>|</span>
                    <a
                      href="https://github.com/Pavan-1410/Shopping-Application"
                      target="_blank"
                      rel="noreferrer"
                      className="text-violet-400 hover:underline print:text-black flex items-center gap-1"
                    >
                      GitHub Repo <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-800">
                  <li>Full-stack shopping application using React.js, TypeScript, and PostgreSQL for e-commerce management.</li>
                  <li>Implemented Firebase Authentication, TanStack Query, and Zustand with Razorpay payment gateway integration.</li>
                  <li>Admin dashboard for product and order management; deployed on Vercel and Render.</li>
                </ul>
              </div>

              {/* BarberConnect */}
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <span className="font-bold text-white print:text-black">
                    • BarberConnect - Salon Booking Platform
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <a
                      href="https://barber-connect-rho.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-400 hover:underline print:text-black flex items-center gap-1"
                    >
                      Live Demo <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                    <span>|</span>
                    <a
                      href="https://github.com/Pavan-1410/Barber_Connect"
                      target="_blank"
                      rel="noreferrer"
                      className="text-violet-400 hover:underline print:text-black flex items-center gap-1"
                    >
                      GitHub Repo <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 print:text-slate-800">
                  <li>MERN stack platform with role-based dashboards for barbers and customers supporting appointment bookings.</li>
                  <li>Built with React.js, Context API, Tailwind CSS, JWT authentication, Express.js, and MongoDB Atlas.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-base font-bold uppercase tracking-wider text-violet-400 border-b border-violet-500/20 pb-1 mb-3 print:text-black print:border-black">
              Technical Skills
            </h2>

            <div className="space-y-1.5 text-xs">
              <p><strong className="text-white print:text-black">Programming Languages:</strong> Go (Golang), Java, JavaScript (ES6+), TypeScript, C++, HTML5, CSS3, SQL</p>
              <p><strong className="text-white print:text-black">Libraries / Frameworks:</strong> React.js, Node.js, Express.js, Gin, GORM, Tailwind CSS, TanStack Query, Zustand, WebRTC</p>
              <p><strong className="text-white print:text-black">Databases & Cloud:</strong> PostgreSQL, MongoDB Atlas, MySQL, Docker, Firebase, Git, Swagger, Render, Vercel</p>
              <p><strong className="text-white print:text-black">AI & Tools:</strong> Google Gemini API (Log Root Cause Analysis & Adaptive Quiz Engine), Postman, Linux</p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-base font-bold uppercase tracking-wider text-violet-400 border-b border-violet-500/20 pb-1 mb-3 print:text-black print:border-black">
              Education
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
              <div>
                <p className="font-bold text-white print:text-black">{portfolioData.education.institution}, Nashik</p>
                <p className="text-slate-300 print:text-slate-700">{portfolioData.education.university} — {portfolioData.education.degree}</p>
              </div>
              <div className="text-right sm:text-right mt-1 sm:mt-0 font-mono text-slate-400 print:text-slate-700">
                <p>{portfolioData.education.period}</p>
                <p className="text-emerald-400 font-semibold print:text-black">GPA: {portfolioData.education.gpa}</p>
              </div>
            </div>
          </div>

          {/* Extra-Curricular */}
          <div>
            <h2 className="text-base font-bold uppercase tracking-wider text-violet-400 border-b border-violet-500/20 pb-1 mb-2 print:text-black print:border-black">
              Extra-Curricular Activities & Leadership
            </h2>
            <p className="text-xs text-slate-300 print:text-slate-800">
              • <strong>T&P 2024-25 Student Coordinator</strong> (Training & Placement Cell, MET Institute of Engineering, Nashik)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
