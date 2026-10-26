import { CVData } from '../types';

export const defaultCVData: CVData = {
  personal: {
    fullName: "Marvin Ken Tumando",
    professionalTitle: "IT Student, Creative Storyteller & Digital Creator",
    profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    introduction: "Hi, I’m Marvin Tumando, an IT student, creative storyteller, and faith-driven digital creator. I find meaning in merging technology, art, and purpose— building systems that serve people, crafting words that move hearts, and creating spaces online that reflect hope and authenticity.",
    careerObjective: "Let’s connect if you’re into tech, storytelling, or purpose-driven creativity, seeking innovative software engineering and digital media opportunities.",
    location: "Davao, Davao Region, Philippines",
    birthday: "December 14, 2003",
    birthplace: "Magnaga, Pantukan, Davao de Oro",
    email: "marvinkentumando@gmail.com",
    phone: "09639650443",
    githubUrl: "https://github.com/marvinkentumando",
    linkedinUrl: "https://www.linkedin.com/in/marvin-ken-tumando-081732271",
    facebookUrl: "https://facebook.com/marvinkentumando",
    instagramUrl: "https://instagram.com/marvinkentumando",
    twitterUrl: "https://twitter.com/marvinkentumando",
    careerInterests: [
      "Full Stack Web Development",
      "Digital Content Creation & Storytelling",
      "UI/UX Design & Graphics",
      "Social Media Management & Editing",
      "Canva & CapCut Production"
    ]
  },
  education: [
    {
      id: "edu-1",
      school: "Davao del Norte State College, Panabo",
      degree: "Bachelor of Science in Information Technology",
      period: "August 2023 - June 2027",
      yearLevel: "Undergraduate",
      honors: "Consistent Honor Student / Dean's Lister",
      description: "Pursuing Bachelor of Science in Information Technology, focusing on software engineering, web technologies, and digital media."
    },
    {
      id: "edu-2",
      school: "Magnaga National High School",
      degree: "Humanities and Social Sciences (HUMSS) Strand",
      period: "June 2021 - July 2023",
      yearLevel: "Graduated with High Honors",
      honors: "With High Honors, Best in Research Innovation",
      description: "Completed senior high school education under the Humanities and Social Sciences strand with honors."
    }
  ],
  skills: [
    { id: "s-1", name: "Graphics & UI/UX Design", category: "tools", proficiency: 95 },
    { id: "s-2", name: "Canva Pro & Design Essentials", category: "tools", proficiency: 98 },
    { id: "s-3", name: "Video & Photo Editing (CapCut, Videoscribe)", category: "tools", proficiency: 92 },
    { id: "s-4", name: "Social Media Content Creation", category: "soft", proficiency: 95 },
    { id: "s-5", name: "Web Development (PHP, Java, JS, SQL)", category: "backend", proficiency: 90 },
    { id: "s-6", name: "Editorial Writing & Storytelling", category: "soft", proficiency: 96 }
  ],
  projects: [
    {
      id: "proj-1",
      title: "UMA: E-Commerce Agriculture",
      description: "An agricultural e-commerce platform connecting farmers directly to consumers with modern UI/UX and PHP Laravel backend.",
      category: "Full Stack",
      technologies: ["PHP Laravel", "Tailwind CSS", "JavaScript", "SQL", "Bootstrap"],
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
      githubUrl: "https://github.com/marvinkentumando/uma-agriculture",
      liveUrl: "https://uma-agriculture.vercel.app",
      featured: true
    },
    {
      id: "proj-2",
      title: "HATAG [Helping All Through Active Giving]",
      description: "A community donation and aid distribution web platform built with PHP and Tailwind CSS.",
      category: "Full Stack",
      technologies: ["PHP", "Tailwind CSS", "JavaScript", "SQL"],
      imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb9?auto=format&fit=crop&q=80&w=800",
      githubUrl: "https://github.com/marvinkentumando/hatag-giving",
      liveUrl: "https://hatag-giving.vercel.app",
      featured: true
    },
    {
      id: "proj-3",
      title: "Online Riding App for PWDs",
      description: "A specialized transportation booking system featuring graphical user interface (GUI) and complete CRUD operations built in Java.",
      category: "AI & Tools",
      technologies: ["Java", "GUI", "CRUD"],
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      githubUrl: "https://github.com/marvinkentumando/pwd-riding-app",
      featured: false
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Videoscribe Creator",
      company: "Videoscribe",
      location: "Remote",
      period: "February 2026 - Present",
      type: "Freelance",
      highlights: [
        "Creating engaging whiteboard animation and motion graphics videos using Videoscribe.",
        "Translating creative concepts into visual whiteboard stories."
      ]
    },
    {
      id: "exp-2",
      role: "Associate Editor",
      company: "Davao Reef",
      location: "Davao Region",
      period: "August 2025 - Present",
      type: "Leadership",
      highlights: [
        "Editing campus publication articles, coordinating stories, and overseeing page layouts.",
        "Managing editorial content and maintaining high journalistic standards."
      ]
    },
    {
      id: "exp-3",
      role: "Social Media Content Creator",
      company: "Dodong Diary",
      location: "Philippines",
      period: "2025 - Present",
      type: "Freelance",
      highlights: [
        "Content creation across social media accounts including YouTube, Instagram, Facebook, and TikTok.",
        "Building digital storytelling and engaging faith-driven multimedia content."
      ]
    },
    {
      id: "exp-4",
      role: "Social Media Manager",
      company: "Lahi Foursquare Gospel Church",
      location: "Pantukan, Davao Region, Philippines",
      period: "November 2023 - Present",
      type: "Leadership",
      highlights: [
        "Creating publication materials and writing engaging captions for church events and community outreach.",
        "Managing digital presence and online community engagement."
      ]
    },
    {
      id: "exp-5",
      role: "Freelance Writer",
      company: "Freelance / Self-Employed",
      location: "Remote",
      period: "August 2023 - Present",
      type: "Freelance",
      highlights: [
        "Writing compelling articles, copy, and creative stories for various clients and publications."
      ]
    },
    {
      id: "exp-6",
      role: "CapCut Editor",
      company: "CapCut",
      location: "Remote",
      period: "June 2021 - Present",
      type: "Freelance",
      highlights: [
        "Video editing, reels production, and motion design using CapCut for digital storytelling and social media campaigns."
      ]
    }
  ],
  achievements: [
    {
      id: "ach-1",
      title: "Cisco Certified Network Associate (CCNA) Service Provider Operations",
      issuer: "Cisco",
      date: "2025",
      type: "Certificate",
      description: "Certified in Cisco networking fundamentals and service provider operations."
    },
    {
      id: "ach-2",
      title: "Marketing with Canva & Canva for Work",
      issuer: "Canva",
      date: "2024",
      type: "Certificate",
      description: "Professional certification in marketing design, Canva essentials, and graphic design workflows."
    },
    {
      id: "ach-3",
      title: "Best UI/UX Designer & With High Honors",
      issuer: "Academic & Professional Recognition",
      date: "2024",
      type: "Award",
      description: "Recognized for excellence in UI/UX design and consistent high academic standing."
    },
    {
      id: "ach-4",
      title: "Graphic Design Essentials & Canva Essentials",
      issuer: "Design Academy",
      date: "2024",
      type: "Certificate",
      description: "Completed core essential training in digital graphic design and creative layout construction."
    }
  ]
};
