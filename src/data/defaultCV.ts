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
      role: "Managing & Circulations Editor / Associate Editor",
      company: "The Davao Reef (Official Student Publication)",
      location: "Davao del Norte State College",
      period: "2025 - Present",
      type: "Leadership",
      category: "Editorial & Media",
      highlights: [
        "Managing editorial publications, circulations, and layout standards for the institutional student publication.",
        "Serving as Managing & Circulations Editor (2026-2027) and former Associate Editor (2025-2026).",
        "Overseeing writing, photojournalism, and design standards for campus releases."
      ]
    },
    {
      id: "exp-2",
      role: "Editor-in-Chief & Photojournalist",
      company: "The Shoreline",
      location: "Davao de Oro",
      period: "2018 - 2023",
      type: "Leadership",
      category: "Editorial & Media",
      highlights: [
        "Led editorial board as Editor-in-Chief (2022-2023), directing news coverage and publication design.",
        "Recognized as Most Outstanding Campus Journalist in Davao de Oro (2023).",
        "Competed and won multiple DSPC and RSPC titles in Collaborative Desktop Publishing."
      ]
    },
    {
      id: "exp-3",
      role: "Videoscribe Creator & CapCut Editor",
      company: "Freelance",
      location: "Remote",
      period: "2021 - Present",
      type: "Freelance",
      category: "Editorial & Media",
      highlights: [
        "Creating engaging whiteboard animation and motion graphics videos using Videoscribe.",
        "Video editing, reels production, and motion design using CapCut for digital storytelling campaigns."
      ]
    },
    {
      id: "exp-4",
      role: "Social Media Manager",
      company: "Lahi Foursquare Gospel Church",
      location: "Pantukan, Davao Region",
      period: "November 2023 - Present",
      type: "Leadership",
      category: "Editorial & Media",
      highlights: [
        "Creating publication materials and writing engaging captions for church events and community outreach.",
        "Managing digital presence and online community engagement."
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
