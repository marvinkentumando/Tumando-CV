import { CVData } from '../types';

export const defaultCVData: CVData = {
  personal: {
    fullName: "Marvin Ken P. Tumando",
    professionalTitle: "BSIT Student, Editor & Full Stack Developer",
    profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    introduction: "Information Technology student, Managing & Circulations Editor of The Davao Reef, award-winning campus journalist, and full-stack software developer from Magnaga, Pantukan, Davao de Oro. Passionate about bridging software engineering, digital media, and UI/UX design.",
    careerObjective: "To leverage my technical expertise in web development (PHP, Laravel, JavaScript, Java, SQL) and creative direction (UI/UX, photography, journalism) to build high-impact software systems and digital platforms.",
    location: "Prk. 14A, Magnaga, Pantukan, Davao de Oro, Philippines",
    email: "marvinkentumando@gmail.com",
    phone: "09639650443",
    githubUrl: "https://github.com/marvinkentumando",
    linkedinUrl: "https://linkedin.com/in/marvin-ken-tumando",
    facebookUrl: "https://facebook.com/marvinkentumando",
    instagramUrl: "https://instagram.com/marvinkentumando",
    twitterUrl: "https://twitter.com/marvinkentumando",
    careerInterests: [
      "Full Stack Web Development",
      "PHP Laravel & Database Management",
      "UI/UX Design & Branding",
      "Campus Journalism & Editorial Leadership",
      "Digital Videography & Media Arts"
    ]
  },
  education: [
    {
      id: "edu-1",
      school: "Davao del Norte State College (DNSC)",
      degree: "Bachelor of Science in Information Technology",
      period: "2023 - 2027",
      yearLevel: "Undergraduate (Dean's Lister)",
      honors: "Consistent Dean's Lister (1st & 2nd Semesters, 2023-2025)",
      description: "Pursuing BS Information Technology with consistent academic excellence and leadership in institutional student research and journalism."
    },
    {
      id: "edu-2",
      school: "Senior High School & Junior High School",
      degree: "Humanities and Social Sciences",
      period: "2017 - 2024",
      yearLevel: "Graduated with High Honors",
      honors: "Class Valedictorian, With High Honor, Best in Research Innovation",
      description: "Awarded Vice Mayor's Academic Excellence Award, Governor Dorothy Montejo Gonzaga Award, and Congress Resuwel Peter Gonzaga Award."
    }
  ],
  skills: [
    { id: "s-1", name: "Web Development (PHP, SQL, Java, JS)", category: "backend", proficiency: 92 },
    { id: "s-2", name: "PHP Laravel Framework", category: "backend", proficiency: 90 },
    { id: "s-3", name: "HTML, CSS, Bootstrap, Tailwind", category: "frontend", proficiency: 95 },
    { id: "s-4", name: "UI / UX Design & Branding", category: "tools", proficiency: 90 },
    { id: "s-5", name: "Videography & Editing", category: "tools", proficiency: 88 },
    { id: "s-6", name: "Photography & Editing", category: "tools", proficiency: 90 },
    { id: "s-7", name: "Illustration & Logo Making", category: "tools", proficiency: 85 },
    { id: "s-8", name: "Newsletters & Editorial Writing", category: "soft", proficiency: 98 },
    { id: "s-9", name: "Quantitative Research", category: "soft", proficiency: 92 },
    { id: "s-10", name: "Leadership & Communication", category: "soft", proficiency: 95 }
  ],
  projects: [
    {
      id: "proj-1",
      title: "UMA: E-Commerce Agriculture",
      description: "An agricultural e-commerce platform built with HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, PHP Laravel, and SQL connecting farmers directly to consumers.",
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
      description: "A community donation and aid distribution web platform built with HTML, Tailwind CSS, JavaScript, PHP, and SQL.",
      category: "Full Stack",
      technologies: ["PHP", "Tailwind CSS", "JavaScript", "SQL", "HTML"],
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
      technologies: ["Java", "GUI", "CRUD", "Desktop App"],
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      githubUrl: "https://github.com/marvinkentumando/pwd-riding-app",
      featured: false
    },
    {
      id: "proj-4",
      title: "Community Pantry System",
      description: "A streamlined inventory and distribution tracking system built using HTML, CSS, and Bootstrap.",
      category: "Frontend",
      technologies: ["HTML", "CSS", "Bootstrap"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      githubUrl: "https://github.com/marvinkentumando/community-pantry",
      featured: false
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Managing & Circulations Editor",
      company: "The Davao Reef (Official Student Publication)",
      location: "Davao del Norte State College",
      period: "2026 - 2027",
      type: "Leadership",
      highlights: [
        "Managing editorial publications, circulations, and layout standards for the institutional student publication.",
        "Overseeing a team of writers, photojournalists, and page designers for high-quality campus releases.",
        "Former Associate Editor (2025-2026) and Writer (2023-2024)."
      ]
    },
    {
      id: "exp-2",
      role: "Editor-in-Chief & Photojournalist",
      company: "The Shoreline",
      location: "Davao de Oro",
      period: "2018 - 2023",
      type: "Leadership",
      highlights: [
        "Led editorial board as Editor-in-Chief (2022-2023), directing news coverage, investigative reporting, and publication design.",
        "Awarded Most Outstanding Campus Journalist in Davao de Oro (2023) and 2nd Most Outstanding Campus Journalist in Davao Region (2023).",
        "Competed and triumphed in numerous DSPC, RSPC, and NSPC Collaborative Desktop Publishing competitions."
      ]
    },
    {
      id: "exp-3",
      role: "Set Mayor & Student Leader",
      company: "DNSC IT Department",
      location: "Panabo City",
      period: "2023 - 2024",
      type: "Leadership",
      highlights: [
        "Served as Set Mayor during 1st Semester (2023-2024), coordinating student affairs and academic initiatives.",
        "External PIO for Chestnut Division (2024) and Resource Speaker for Adjournture 2024.",
        "Active member of Praise and Worship Team (LTFGC) and youth camp facilitator."
      ]
    }
  ],
  achievements: [
    {
      id: "ach-1",
      title: "1st Place - Collaborative Desktop Publishing (Regional Schools Press Conference - RSPC 2023)",
      issuer: "Department of Education",
      date: "2023",
      type: "Competition",
      description: "Champion in RSPC Collaborative Desktop Publishing, following a string of DSPC and RSPC titles from 2019 to 2023."
    },
    {
      id: "ach-2",
      title: "2nd Place - Collaborative Desktop Publishing (National Schools Press Conference - NSPC 2023)",
      issuer: "Department of Education",
      date: "2023",
      type: "Competition",
      description: "National podium finish representing the Davao Region in Collaborative Desktop Publishing."
    },
    {
      id: "ach-3",
      title: "Most Outstanding Campus Journalist in Davao de Oro",
      issuer: "Division of Davao de Oro",
      date: "2023",
      type: "Award",
      description: "Recognized for exceptional journalism excellence, leadership, and publication contributions."
    },
    {
      id: "ach-4",
      title: "Best Director & Best Film - Pagbag-o",
      issuer: "FY Chestnut Division Film Festival",
      date: "2021",
      type: "Award",
      description: "Won Best Director and Best Film honors for short film production 'Pagbag-o'."
    },
    {
      id: "ach-5",
      title: "Governor Dorothy Montejo Gonzaga Academic Excellence Award",
      issuer: "Provincial Government of Davao de Oro",
      date: "2024",
      type: "Award",
      description: "Prestigious academic award honoring exemplary scholastic performance and leadership."
    },
    {
      id: "ach-6",
      title: "2nd Place - Poetry Writing (National Campus Media Conference 2026)",
      issuer: "NCMC",
      date: "2026",
      type: "Competition",
      description: "National podium placement in poetry writing."
    }
  ]
};
