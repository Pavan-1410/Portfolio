export interface Project {
  id: string;
  title: string;
  category: 'backend' | 'fullstack' | 'frontend' | 'ai';
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl: string;
  highlights: string[];
  featured: boolean;
  status: string;
  gradient: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  university: string;
  period: string;
  gpa: string;
  activities: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; icon?: string }[];
}

export const portfolioData = {
  personal: {
    name: 'Pavan Sonawane',
    title: 'Full-Stack Software Engineer & Backend Developer',
    headline: 'Crafting high-concurrency Go microservices, distributed systems, and sleek React applications.',
    email: 'pavansonawane004@gmail.com',
    phone: '+91 8482996653',
    location: 'Nashik / Pune, Maharashtra, India',
    github: 'https://github.com/Pavan-1410',
    linkedin: 'https://www.linkedin.com/in/pavan-sonawane-85149528a',
    avatar: './pavan.jpg',
    status: 'Available for Software Engineering Roles',
    summary: 'Computer Engineering graduate with hands-on experience developing Go microservices, AI-powered distributed log analysis with Gemini API, and production MERN/TypeScript applications. Proven track record in building high-throughput payment reconciliation engines, WebRTC proctoring systems, and modern cloud deployments.'
  },

  experiences: [
    {
      role: 'Tech Intern',
      company: 'BharatNXT',
      period: 'Jan 2026 – May 2026',
      type: 'Internship',
      location: 'Hybrid / Remote',
      highlights: [
        'Developed high-performance microservice-based architecture using Go (Golang) and Gin for backend services with GORM and PostgreSQL.',
        'Implemented context propagation and middleware-based request tracing to enable end-to-end distributed tracing across multiple microservices.',
        'Structured centralized logging pipelines using Zerolog for zero-allocation, high-throughput monitoring.',
        'Engineered an AI-powered centralized log analyzer that aggregates microservice logs and integrates the Google Gemini API to perform root cause analysis, reducing manual debugging turnaround time.'
      ],
      technologies: ['Go (Golang)', 'Gin', 'GORM', 'PostgreSQL', 'Zerolog', 'Gemini API', 'Distributed Tracing', 'Microservices']
    },
    {
      role: 'MERN Stack Intern & Team Lead',
      company: 'UptoSkills',
      period: 'May 2025 – Sept 2025',
      type: 'Internship & Leadership',
      location: 'Remote',
      highlights: [
        'Led engineering team on SoloLearn - Intelligent Proctoring System, overseeing architecture and delivery.',
        'Developed and integrated Periodic Webcam Snapshot mechanism using browser getUserMedia, Canvas API, and Express.js backend with Multer for secure MongoDB storage.',
        'Implemented real-time 360° proctoring utilizing WebRTC and React to monitor and record test-taker surrounding environments.',
        'Integrated Google Gemini API to dynamically generate adaptive pre-quiz questions with performance-driven module unlocking algorithms.'
      ],
      technologies: ['React.js', 'WebRTC', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'Canvas API', 'Multer']
    }
  ] as Experience[],

  education: {
    institution: 'MET Institute of Engineering',
    degree: 'Bachelor of Computer Engineering (B.E.)',
    university: 'Savitribai Phule Pune University',
    period: '2022 – 2026',
    gpa: '8.64 / 10.00',
    activities: [
      'T&P 2024–25 Student Coordinator (Training & Placement Cell, MET Institute of Engineering)',
      'Organized campus placement drives, technical sessions, and student mentoring initiatives.'
    ]
  } as Education,

  skillCategories: [
    {
      category: 'Languages',
      skills: [
        { name: 'Go (Golang)', level: 92 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'Java', level: 85 },
        { name: 'C++', level: 82 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'SQL', level: 88 }
      ]
    },
    {
      category: 'Backend & Systems',
      skills: [
        { name: 'Gin Framework', level: 90 },
        { name: 'Node.js & Express.js', level: 94 },
        { name: 'GORM ORM', level: 88 },
        { name: 'Microservices & Tracing', level: 88 },
        { name: 'RESTful APIs & Swagger', level: 95 },
        { name: 'Goroutines & Concurrency', level: 86 },
        { name: 'Zerolog Logging', level: 88 }
      ]
    },
    {
      category: 'Frontend & UI',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Tailwind CSS', level: 94 },
        { name: 'TanStack Query', level: 88 },
        { name: 'Zustand State', level: 90 },
        { name: 'WebRTC & Media APIs', level: 85 },
        { name: 'Context API', level: 92 }
      ]
    },
    {
      category: 'Databases & Cloud DevOps',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB & Atlas', level: 92 },
        { name: 'MySQL', level: 88 },
        { name: 'Docker & Containerization', level: 84 },
        { name: 'Firebase Auth', level: 86 },
        { name: 'Vercel & Render', level: 94 },
        { name: 'Git & GitHub Workflows', level: 95 }
      ]
    },
    {
      category: 'AI & Integrations',
      skills: [
        { name: 'Google Gemini API', level: 92 },
        { name: 'Automated Root Cause Analysis', level: 88 },
        { name: 'Razorpay Gateway', level: 90 },
        { name: 'JWT Security', level: 92 }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: 'payment-reconciliation',
      title: 'Payment Processing & Reconciliation System',
      category: 'backend',
      description: 'Enterprise-grade Go payment reconciliation engine designed to match internal transactions against external payment provider records. Employs DTO validation, idempotency keys, and concurrent worker pools with goroutines and channels to guarantee data consistency and ultra-low latency.',
      tech: ['Go (Golang)', 'Gin', 'GORM', 'PostgreSQL', 'Docker', 'Swagger', 'Goroutines', 'Worker Pools'],
      liveUrl: 'https://payment-reconciliatio-api.onrender.com/swagger/index.html#/',
      repoUrl: 'https://github.com/Pavan-1410/Payment-Reconciliation',
      highlights: [
        'Idempotent payment transactions lifecycle management',
        'Goroutines, channels & worker pools for concurrency-safe reconciliation',
        'Automatic matching of matched vs mismatched discrepancies',
        'Interactive Swagger API documentation & Docker containerization'
      ],
      featured: true,
      status: 'Live on Render (Swagger API)',
      gradient: 'from-blue-600 via-indigo-600 to-violet-600'
    },
    {
      id: 'shopping-application',
      title: 'Shopping Application (E-Commerce Platform)',
      category: 'fullstack',
      description: 'Production-ready e-commerce platform built with React, TypeScript, and PostgreSQL. Integrates Firebase Authentication, TanStack Query for optimal server-state synchronization, Zustand for local state, and Razorpay payment gateway along with a dedicated admin dashboard.',
      tech: ['React.js', 'TypeScript', 'PostgreSQL', 'TanStack Query', 'Zustand', 'Firebase', 'Razorpay', 'Vercel', 'Render'],
      liveUrl: 'https://shopping-application-v4q2.vercel.app/',
      repoUrl: 'https://github.com/Pavan-1410/Shopping-Application',
      highlights: [
        'Full customer shopping experience with dynamic catalog and cart',
        'Razorpay checkout workflow with instant verification',
        'TanStack Query caching and Zustand client state store',
        'Admin dashboard for inventory management & order tracking'
      ],
      featured: true,
      status: 'Live on Vercel',
      gradient: 'from-violet-600 via-purple-600 to-blue-600'
    },
    {
      id: 'barber-connect',
      title: 'BarberConnect - Salon Booking Platform',
      category: 'fullstack',
      description: 'Comprehensive MERN platform streamlining appointment bookings between clients and barbers. Includes dedicated role-based portals for barbers and customers, simulated payments, live scheduling, and responsive Tailwind UI.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Tailwind CSS', 'JWT Auth', 'Vercel', 'Render'],
      liveUrl: 'https://barber-connect-rho.vercel.app/',
      repoUrl: 'https://github.com/Pavan-1410/Barber_Connect',
      highlights: [
        'Dual-role authentication (Barber Dashboard & Customer Portal)',
        'Real-time appointment slot booking & service pricing catalog',
        'JWT-based secure authentication & session management',
        'Full responsive glassmorphism UI built with Tailwind CSS'
      ],
      featured: true,
      status: 'Live on Vercel',
      gradient: 'from-indigo-600 via-violet-600 to-cyan-600'
    },
    {
      id: 'pass-op',
      title: 'PassOP - Secure Password Vault',
      category: 'frontend',
      description: 'Sleek and responsive credential manager that allows users to securely save, view, copy, and organize their credentials in one place with instant search and responsive glassmorphic aesthetics.',
      tech: ['React.js', 'Tailwind CSS', 'LocalStorage', 'Lucide Icons'],
      liveUrl: 'https://pass-op-itp7.vercel.app/',
      repoUrl: 'https://github.com/Pavan-1410/PassOP',
      highlights: [
        'Instant clipboard copy with visual notifications',
        'Secure client-side credential persistence',
        'Modern responsive UI with Tailwind CSS'
      ],
      featured: false,
      status: 'Live on Vercel',
      gradient: 'from-cyan-600 to-blue-600'
    },
    {
      id: 'chat-application',
      title: 'Real-Time Chat Application',
      category: 'fullstack',
      description: 'Bi-directional live messaging web application facilitating low-latency communication across rooms and users with active status badges.',
      tech: ['React.js', 'Node.js', 'Express.js', 'WebSockets / Socket.io'],
      liveUrl: 'https://chatting-application-liart.vercel.app',
      repoUrl: 'https://github.com/Pavan-1410/Chat-Application',
      highlights: [
        'Instant messaging broadcast via WebSockets',
        'Live participant states and message histories',
        'Responsive mobile-first layout'
      ],
      featured: false,
      status: 'Live on Vercel',
      gradient: 'from-blue-600 to-teal-600'
    },
    {
      id: 'finderr-property',
      title: 'Finderr - Real Estate Discovery',
      category: 'frontend',
      description: 'Modern real estate property showcase website engineered with SwiperJS carousels, accordions, and interactive property details.',
      tech: ['React.js', 'SwiperJS', 'CSS3', 'Cloudflare Pages'],
      liveUrl: 'https://finderr-property-finding-website.pages.dev/',
      repoUrl: 'https://github.com/Pavan-1410/Finderr-Property-Website-React',
      highlights: [
        'Fluid Swiper card interactions and carousels',
        'Property filter accordion controls',
        'Deployed on Cloudflare Pages Edge network'
      ],
      featured: false,
      status: 'Live on Cloudflare',
      gradient: 'from-purple-600 to-indigo-600'
    },
    {
      id: 'codescore-360',
      title: 'CodeScore-360 (Capstone Project)',
      category: 'fullstack',
      description: 'Comprehensive software engineering final year capstone project evaluating software code quality, static metrics, and performance analytics.',
      tech: ['JavaScript', 'Node.js', 'Code Analysis Engine', 'Express.js'],
      repoUrl: 'https://github.com/Pavan-1410/CodeScore-360',
      highlights: [
        'College Capstone Engineering Project',
        'Multi-metric code scoring and static analysis',
        'Detailed diagnostic report generation'
      ],
      featured: false,
      status: 'GitHub Repository',
      gradient: 'from-violet-600 to-pink-600'
    },
    {
      id: 'newsbox',
      title: 'NewsBox - Live Headlines Aggregator',
      category: 'frontend',
      description: 'Real-time news application that fetches top global and national headlines across customizable categories with keyword search.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'News API', 'GitHub Pages'],
      liveUrl: 'https://pavan-1410.github.io/NewsBox/',
      repoUrl: 'https://github.com/Pavan-1410/NewsBox',
      highlights: [
        'Live category filtering (Technology, Business, Science)',
        'Keyword search and source attribution',
        'Deployed to GitHub Pages'
      ],
      featured: false,
      status: 'Live on GitHub Pages',
      gradient: 'from-blue-600 to-violet-600'
    }
  ] as Project[]
};
