import { CVData } from '../types';

export const defaultCVData: CVData = {
  personal: {
    fullName: "Marvin Kent Urmando",
    professionalTitle: "Full Stack Web Developer & Future IT Professional",
    profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    introduction: "Passionate Information Technology student and aspiring software developer with a strong foundation in modern web technologies, responsive UI/UX design, and robust backend systems. Dedicated to building clean, user-centric, and scalable applications that solve real-world problems.",
    careerObjective: "To secure a challenging software engineering internship or entry-level web development role where I can apply my technical skills, collaborate with innovative engineering teams, and contribute to impactful digital products.",
    location: "Davao City, Philippines (Open to Remote & Relocation)",
    email: "marvinkentumando@gmail.com",
    phone: "+63 (912) 345-6789",
    githubUrl: "https://github.com/marvinkentumando",
    linkedinUrl: "https://linkedin.com/in/marvin-kent-urmando",
    facebookUrl: "https://facebook.com/marvinkentumando",
    instagramUrl: "https://instagram.com/marvinkentumando",
    twitterUrl: "https://twitter.com/marvinkentumando",
    careerInterests: [
      "Full Stack Web Development",
      "Cloud Architecture & Deployment",
      "UI/UX Design & Frontend Engineering",
      "API Development & Database Management",
      "Open Source Collaboration"
    ]
  },
  education: [
    {
      id: "edu-1",
      school: "University of Southeastern Philippines",
      degree: "Bachelor of Science in Information Technology",
      period: "2023 - Present (Expected 2027)",
      yearLevel: "3rd Year Undergraduate",
      honors: "Dean's Lister (Consistent Academic Excellence)",
      description: "Focused on software engineering principles, data structures and algorithms, database management systems, and advanced web application frameworks."
    },
    {
      id: "edu-2",
      school: "Davao City National High School",
      degree: "Senior High School - Science, Technology, Engineering, and Mathematics (STEM)",
      period: "2021 - 2023",
      yearLevel: "Graduated with Honors",
      honors: "With Honors, Science Research Excellence Award",
      description: "Completed specialized STEM curriculum with advanced coursework in mathematics, basic programming, and scientific research methodologies."
    }
  ],
  skills: [
    { id: "s-1", name: "JavaScript (ES6+)", category: "frontend", proficiency: 90 },
    { id: "s-2", name: "TypeScript", category: "frontend", proficiency: 85 },
    { id: "s-3", name: "React / Next.js", category: "frontend", proficiency: 90 },
    { id: "s-4", name: "HTML5 & CSS3 / Tailwind", category: "frontend", proficiency: 95 },
    { id: "s-5", name: "Node.js & Express", category: "backend", proficiency: 80 },
    { id: "s-6", name: "Python & FastAPI", category: "backend", proficiency: 75 },
    { id: "s-7", name: "PostgreSQL & SQL", category: "backend", proficiency: 80 },
    { id: "s-8", name: "Git & GitHub", category: "tools", proficiency: 90 },
    { id: "s-9", name: "Vite & Build Tools", category: "tools", proficiency: 85 },
    { id: "s-10", name: "UI/UX & Figma", category: "tools", proficiency: 80 },
    { id: "s-11", name: "Problem Solving", category: "soft", proficiency: 95 },
    { id: "s-12", name: "Team Collaboration", category: "soft", proficiency: 90 },
    { id: "s-13", name: "Effective Communication", category: "soft", proficiency: 88 },
    { id: "s-14", name: "Adaptability & Agile", category: "soft", proficiency: 92 }
  ],
  projects: [
    {
      id: "proj-1",
      title: "CampusCare Student Portal & Support Hub",
      description: "A full-stack web application designed for university students to submit support tickets, track academic advising schedules, and access campus resources in real time.",
      category: "Full Stack",
      technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      githubUrl: "https://github.com/marvinkentumando/campus-care-portal",
      liveUrl: "https://campus-care-demo.vercel.app",
      featured: true
    },
    {
      id: "proj-2",
      title: "DevPulse AI Code Review Assistant",
      description: "An intelligent web tool that analyzes code snippets, detects potential bugs, suggests optimization patterns, and generates comprehensive unit tests.",
      category: "AI & Tools",
      technologies: ["React", "Gemini API", "Tailwind CSS", "Vite", "TypeScript"],
      imageUrl: "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?auto=format&fit=crop&q=80&w=800",
      githubUrl: "https://github.com/marvinkentumando/devpulse-ai",
      liveUrl: "https://devpulse-ai.vercel.app",
      featured: true
    },
    {
      id: "proj-3",
      title: "EcoTrack Carbon Footprint Visualizer",
      description: "An interactive dashboard for tracking daily energy consumption, transportation habits, and waste generation with personalized sustainability recommendations.",
      category: "Mobile/Web",
      technologies: ["JavaScript", "React", "Chart.js", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
      githubUrl: "https://github.com/marvinkentumando/ecotrack-dashboard",
      liveUrl: "https://ecotrack-demo.vercel.app",
      featured: false
    },
    {
      id: "proj-4",
      title: "SkillBridge Freelance Marketplace UI",
      description: "A responsive frontend UI for connecting student freelancers with local businesses and startups needing design and development services.",
      category: "Frontend",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      githubUrl: "https://github.com/marvinkentumando/skillbridge-ui",
      liveUrl: "https://skillbridge-ui.vercel.app",
      featured: false
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Lead Frontend Developer (Capstones)",
      company: "University IT Department Project",
      location: "Davao City, Philippines",
      period: "2025 - Present",
      type: "Academic Project",
      highlights: [
        "Architected responsive user interfaces using React, TypeScript, and Tailwind CSS for university management systems.",
        "Collaborated with backend developers to integrate RESTful APIs and ensure seamless data synchronization.",
        "Conducted usability testing with students and faculty to refine user experience and accessibility standards."
      ]
    },
    {
      id: "exp-2",
      role: "Freelance Web Developer & UI Designer",
      company: "Self-Employed / Client Projects",
      location: "Remote",
      period: "2024 - Present",
      type: "Freelance",
      highlights: [
        "Designed and deployed customized landing pages and portfolio websites for small local businesses and student entrepreneurs.",
        "Optimized website performance, achieving 95+ Google Lighthouse scores across accessibility, SEO, and speed.",
        "Managed client requirements, project timelines, and deployment workflows using Git and Vercel."
      ]
    },
    {
      id: "exp-3",
      role: "Junior Officer & Technical Committee Member",
      company: "IT Students Society",
      location: "Davao City, Philippines",
      period: "2023 - 2025",
      type: "Leadership",
      highlights: [
        "Co-organized university coding bootcamps, workshops, and hackathons attended by over 200 student participants.",
        "Mentored junior students on programming fundamentals, Git version control, and web development basics.",
        "Created promotional digital graphics and managed the organization's online announcements and event portals."
      ]
    }
  ],
  achievements: [
    {
      id: "ach-1",
      title: "Champion - University Inter-Department Coding Hackathon",
      issuer: "University of Southeastern Philippines",
      date: "November 2025",
      type: "Competition",
      description: "Developed an emergency response notification web app within 24 hours that secured 1st place among 20 competing teams."
    },
    {
      id: "ach-2",
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: "Amazon Web Services (AWS)",
      date: "August 2025",
      type: "Certificate",
      credentialUrl: "https://aws.amazon.com/verification",
      description: "Completed comprehensive training on cloud computing concepts, AWS core services, security, architecture, and pricing."
    },
    {
      id: "ach-3",
      title: "Dean's Lister Award for Academic Excellence",
      issuer: "College of Information Technology",
      date: "2023 - 2025 (4 Semesters)",
      type: "Award",
      description: "Maintained a cumulative Grade Point Average in the top 5% of the College of Information Technology student body."
    },
    {
      id: "ach-4",
      title: "Advanced JavaScript & React Certification",
      issuer: "Frontend Masters & Coursera",
      date: "March 2024",
      type: "Certificate",
      description: "Mastered modern asynchronous JavaScript, React hooks, state management, and performance optimization techniques."
    }
  ]
};
