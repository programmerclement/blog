export const siteConfig = {
  name: "Programmer Clement",
  shortName: "Programmer Clement",
  title: "Full Stack Developer & IT Specialist",
  description:
    "Dedicated full-stack web and app developer with a passion for creating user-friendly solutions. Specializing in React, Node.js, Flutter, and cloud technologies.",
  url: "https://programmerclement.vercel.app",
  email: "kncshools@gmail.com",
  phone: "+250780100211",
  location: "Kigali, Rwanda",
  availability: "Open to opportunities",
  resumeUrl: "/resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/programmerclement",
  twitter: "https://twitter.com/kwizerangogaclement",
  linkedin: "https://www.linkedin.com/in/kwizerangogaclement/",
  instagram: "https://www.instagram.com/clement_k_n/",
  youtube: "https://www.youtube.com/@clementtech250",
  whatsapp: "https://wa.me/+250780100211",
  tiktok: "https://tiktok.com/ni_knc",
  telegram: "https://t.me/programmerclement",
  email: "mailto:kncshools@gmail.com",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const bio = {
  greeting: "Hi, I'm",
  name: "KWIZERA NGOGA Clement",
  roles: [
    "Full Stack Developer",
    "Mobile App Developer",
    "IT Specialist",
    "Backend Engineer",
    "Technician",
    "Open Source Contributor",
  ],
  headline:
    "Building elegant digital solutions from Rwanda to the world.",
  summary:
    "Full-stack web & mobile developer passionate about building user-friendly solutions with modern technologies like React, Next.js, Flutter, and Firebase — always growing, always shipping.",
  mission:
    "To build technology that empowers people and solves real-world problems across Africa and beyond. Every line of code I write is an opportunity to create a better, more connected world.",
  currentFocus:
    "Currently focused on building scalable web applications with Next.js and TypeScript, while exploring AI integrations and cloud-native architectures.",
  funFacts: [
    "I built a Rwandan traffic law exam platform used by thousands",
    "I'm passionate about making technology accessible in Rwanda and Africa",
    "I run a YouTube channel (@clementtech250) sharing tech tutorials",
  ],
};

export const stats = [
  { label: "Years of Experience", value: "5+", icon: "calendar" },
  { label: "Projects Completed", value: "30+", icon: "code2" },
  { label: "Technologies", value: "20+", icon: "layers" },
  { label: "Happy Clients", value: "30+", icon: "users" },
];

export type Skill = {
  name: string;
  level: number;
  icon: string;
  category: string;
};

export const skills: Skill[] = [
  // Frontend
  { name: "HTML5", level: 95, icon: "html", category: "Frontend" },
  { name: "CSS3", level: 90, icon: "css", category: "Frontend" },
  { name: "JavaScript", level: 90, icon: "js", category: "Frontend" },
  { name: "TypeScript", level: 80, icon: "ts", category: "Frontend" },
  { name: "React.js", level: 88, icon: "react", category: "Frontend" },
  { name: "Next.js", level: 82, icon: "nextjs", category: "Frontend" },
  { name: "Tailwind CSS", level: 90, icon: "tailwind", category: "Frontend" },
  { name: "Figma", level: 75, icon: "figma", category: "Frontend" },

  // Backend
  { name: "Node.js", level: 85, icon: "nodejs", category: "Backend" },
  { name: "Express.js", level: 83, icon: "express", category: "Backend" },
  { name: "PHP", level: 78, icon: "php", category: "Backend" },
  { name: "Laravel", level: 72, icon: "laravel", category: "Backend" },
  { name: "REST APIs", level: 88, icon: "api", category: "Backend" },

  // Mobile
  { name: "Flutter", level: 80, icon: "flutter", category: "Mobile" },
  { name: "Dart", level: 78, icon: "dart", category: "Mobile" },
  { name: "React Native", level: 70, icon: "react", category: "Mobile" },
  { name: "Java (Android)", level: 72, icon: "java", category: "Mobile" },

  // Databases
  { name: "MongoDB", level: 82, icon: "mongodb", category: "Databases" },
  { name: "PostgreSQL", level: 80, icon: "postgresql", category: "Databases" },
  { name: "MySQL", level: 75, icon: "mysql", category: "Databases" },
  { name: "Firebase Realtime DB", level: 78, icon: "firebase", category: "Databases" },

  // Tools & DevOps
  { name: "Git & GitHub", level: 90, icon: "git", category: "Tools" },
  { name: "Docker", level: 65, icon: "docker", category: "Tools" },
  { name: "VS Code", level: 95, icon: "vscode", category: "Tools" },
  { name: "Postman", level: 85, icon: "postman", category: "Tools" },
  { name: "Linux", level: 72, icon: "linux", category: "Tools" },

  // Languages
  { name: "C / C++", level: 68, icon: "cpp", category: "Languages" },

  // Cloud
  { name: "Vercel", level: 85, icon: "vercel", category: "Cloud" },
  { name: "Netlify", level: 88, icon: "netlify", category: "Cloud" },
  { name: "Firebase", level: 78, icon: "firebase", category: "Cloud" },
];

export const skillCategories = [
  "All",
  "Frontend",
  "Backend",
  "Mobile",
  "Databases",
  "Tools",
  "Cloud",
];

export type Experience = {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string | null;
  type: "full-time" | "part-time" | "internship" | "freelance" | "volunteer";
  description: string;
  highlights: string[];
  technologies: string[];
  logo?: string;
};

export const experiences: Experience[] = [
  {
    id: "gonaraza",
    title: "Full Stack Developer",
    company: "Naraza Group Ltd",
    location: "Kigali, Rwanda",
    period: "Jan 2026 – Present",
    startDate: "2026-01",
    endDate: null,
    type: "full-time",
    description:
      "Lead full-stack development efforts for a variety of client web applications, working across the entire development lifecycle from requirement analysis through deployment and maintenance.",
    highlights: [
      "Developed and maintained web applications using React.js, Node.js, and TypeScript, ensuring high performance and scalability.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to deliver high-quality products on schedule.",
      "Implemented responsive design and ensured cross-browser compatibility across all major browsers.",
      "Participated in code reviews, providing constructive feedback to improve overall code quality and team best practices.",
      "Utilized Git for version control, maintaining clean commit history and managing feature branches.",
    ],
    technologies: ["React.js", "Node.js", "TypeScript", "MYSQL", "Git"],
    logo: "/assets/external_link-431539fe.png",
  },
];

export const education = [
  {
    id: "ur-cs",
    institution: "Rwanda Polytechnic - Musanze College",
    degree: "Bachelor of Information Technology",
    field: "Information Communication Technology",
    period: "2025 – Present",
    description:
      "Studying core CS fundamentals including algorithms, data structures, software engineering, databases, and networks, with additional focus on web and mobile application development.",
    achievements: [
      "Active member of innovation hub",
      "Led multiple team projects in software engineering courses",
      "Research focus on mobile-first application development for Rwandan markets",
    ],
    logo: "/assets/graduation-297f89d0.png",
  },
];

export const certifications = [
  {
    name: "Digital Skills foundation certificate",
    issuer: "RTB Rwanda",
    date: "2024",
    icon: "award",
  },
];

export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  status: "completed" | "in-progress" | "archived";
  date: string;
};

export const projects: Project[] = [
    {
    id: "ntakomisiyo",
    title: "NtaKomisiyo",
    slug: "ntakomisiyo",
    description:
      "Rwanda's zero-commission marketplace — buy and sell directly with people across the country.",
    longDescription:
      "Buy and sell directly with people across Rwanda — and keep 100% of every franc. No middlemen. No fees. Just business.",
    image: "/assets/ntakomisiyo.png",
    technologies: ["React.js", "Node.js", "MYSQL", "Express.js", "Tailwind CSS"],
    category: "Web App",
    featured: true,
    liveUrl: "https://ntakomisiyo.com",
    status: "completed",
    date: "2026-06",
  },
    {
    id: "gonaraza",
    title: "Gonaraza",
    slug: "gonaraza",
    description:
      "This is online digital marketting system!",
    longDescription:
      "Gonaraza offers digital marketing services, assistance with online government platforms (e.g., Irembo), payment facilitation, e-services for businesses, and engineering support such as project drawings and permits.",
    image: "/assets/gonaraza.png",
    technologies: ["React.js", "Node.js", "MYSQL", "Express.js", "Tailwind CSS"],
    category: "Web App",
    featured: true,
    liveUrl: "https://gonaraza.com",
    status: "completed",
    date: "2026-01",
  },
  {
    id: "tsindiraprovisoir",
    title: "Tsindira Provisoire",
    slug: "tsindira-provisoire",
    description:
      "Online platform for teaching and testing Rwandan traffic regulations — Tsindira Provisoir ukoze rimwe!",
    longDescription:
      "A comprehensive web-based learning management system for Rwanda's driving license exam preparation. Students can study all traffic laws in Kinyarwanda and English, take timed practice tests, and track their progress. The platform uses adaptive testing algorithms to focus on areas where learners need the most improvement, significantly increasing pass rates on the official exam.",
    image: "/assets/tp.png",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    category: "Web App",
    featured: true,
    liveUrl: "https://tsindiraprovisoir.com",
    status: "completed",
    date: "2024-01",
  },
   {
    id: "alphastore",
    title: "ALPHA Store",
    slug: "alpha-store",
    description:
      "We are a leading e-commerce platform dedicated to providing the best products and services to our customers.",
    longDescription:
      "Your one-stop destination for all shopping needs. Quality products at affordable prices.",
    image: "/assets/alpha.png",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    category: "Web App",
    featured: true,
    liveUrl: "https://alphainitiativeltd.com",
    status: "completed",
    date: "2024-01",
  },
  {
    id: "mbazumutima-shop",
    title: "MBAZUMUTIMA SHOP",
    slug: "mbazumutima-shop",
    description:
      "Full-featured personal business website offering a variety of services and products with an integrated ordering system.",
    longDescription:
      "A professional business website built for MBAZUMUTIMA SHOP that showcases services, manages product catalog, and enables customers to place orders online. Features a clean, modern UI with a custom CMS-like admin panel for managing products and orders, integrated with a PHP backend and MySQL database for reliability.",
    image: "/assets/mbz.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    category: "Business",
    featured: true,
    liveUrl: "https://mbazeshop.netlify.app/",
    status: "completed",
    date: "2023-06",
  },
  {
    id: "mbv-technology",
    title: "MBV TECHNOLOGY Ltd",
    slug: "mbv-technology",
    description:
      "Online stock management system for MBV Technology company — real-time inventory tracking and reporting.",
    longDescription:
      "A full-stack stock management platform built for MBV Technology Ltd. The system handles product inventory, stock movements (in/out), supplier management, and automated low-stock alerts. Featuring a rich dashboard with charts and analytics, it replaced manual spreadsheet tracking and saved the company significant administrative time.",
    image: "/assets/mbv.jpg",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Chart.js"],
    category: "Enterprise",
    featured: true,
    liveUrl: "https://mbvsystem.netlify.app/",
    status: "completed",
    date: "2023-09",
  },
  {
    id: "ticket-booking",
    title: "Ticket Booking System",
    slug: "ticket-booking-system",
    description:
      "Event ticketing platform that allows companies to list events, sell tickets, and send automated notifications to attendees.",
    longDescription:
      "A MERN-stack event management and ticketing system where companies can create events, set ticket tiers and pricing, manage capacity, and automatically notify registered attendees via email. Users can browse events, purchase tickets, and receive QR-coded digital tickets. The system includes an organizer dashboard with attendance analytics and revenue reporting.",
    image: "/assets/ticket.png",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "EmailJS"],
    category: "Web App",
    featured: true,
    liveUrl: "https://ticketbookingrw.netlify.app",
    status: "completed",
    date: "2023-04",
  },
  {
    id: "zion-temple",
    title: "ZION TEMPLE CHURCH",
    slug: "zion-temple-church",
    description:
      "Church management web app connecting the congregation with leadership through announcements, sermons, and events.",
    longDescription:
      "A purpose-built church web application that bridges the gap between church leadership and members. Features include a sermon archive with audio/video support, event calendar, prayer request submission, and an admin panel for managing content. The platform helped the church increase member engagement and streamline communication.",
    image: "/assets/zion.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    category: "Business",
    featured: false,
    liveUrl: "https://ziontemple.infinityfreeapp.com/",
    status: "completed",
    date: "2022-11",
  },
  {
    id: "money-counter",
    title: "Online Money Counter",
    slug: "online-money-counter",
    description:
      "Smart currency counting tool that makes counting multi-denomination banknotes fast and error-free.",
    longDescription:
      "A practical financial utility tool that simplifies cash counting for businesses and individuals. Users enter the quantity of each denomination (Rwandan Francs, USD, or other currencies) and the tool instantly calculates the total. Features currency conversion, a print-friendly summary report, and a history log for shift reconciliation.",
    image: "/assets/money.jpg",
    technologies: ["React.js", "Node.js", "MongoDB"],
    category: "Utility",
    featured: false,
    liveUrl: "https://mbvsystem.netlify.app/calc",
    status: "completed",
    date: "2023-10",
  },
  {
    id: "saving-lost-people",
    title: "Saving The Lost People",
    slug: "saving-the-lost-people",
    description:
      "Humanitarian website for an organization that supports lost, displaced, and vulnerable people in Kenya.",
    longDescription:
      "A humanitarian web platform built for a Kenyan NGO that helps locate and support lost, displaced, and vulnerable individuals. The site includes a case reporting system where community members can submit reports about people in need, a case management workflow for volunteers, and a donation portal to fund operations.",
    image: "/assets/saving.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    category: "Non-Profit",
    featured: false,
    status: "completed",
    date: "2023-02",
  },
  {
    id: "list-todo",
    title: "List To Do",
    slug: "list-todo",
    description:
      "Clean, fast task management web app with local storage persistence, categories, and priority tags.",
    longDescription:
      "A minimalist yet powerful to-do list application built with React. Features task creation, editing, deletion, priority levels (High/Medium/Low), category tagging, and due date reminders. All data is persisted in localStorage for offline use. The clean interface is designed for distraction-free productivity.",
    image: "/assets/list.png",
    technologies: ["React.js", "CSS3", "JavaScript", "localStorage"],
    category: "Utility",
    featured: false,
    liveUrl: "https://listtodorw.netlify.app/",
    status: "completed",
    date: "2022-08",
  },
];

export const projectCategories = [
  "All",
  "Web App",
  "Enterprise",
  "Business",
  "Non-Profit",
  "Utility",
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Working with Programmer Clement on my final year project was a pleasure. His expertise and guidance were evident from the start of the project, and he exceeded my expectations in every aspect.",
    name: "KWIZERA NGOGA Clement",
    role: "CEO of Clement TECH Ltd",
    image: "/assets/pro-04d66707.png",
  },
  {
    id: 2,
    quote:
      "Programmer Clement's dedication and commitment to delivering high-quality work are truly exceptional. I've never met a web developer who cares about their clients' success like he does.",
    name: "KWIZERA Josue",
    role: "Student, RP Kicukiro College",
    image: "/assets/pro-04d66707.png",
  },
  {
    id: 3,
    quote:
      "I had the pleasure of working with Programmer Clement on a project, and I was amazed by his dedication to quality and client satisfaction. He truly goes above and beyond expectations.",
    name: "TUYISHIMIRE Gloire",
    role: "IT Specialist at NYAMATA TSS",
    image: "/assets/pro-04d66707.png",
  },
];

export const techStack = [
  { name: "Next.js", color: "#fff" },
  { name: "React", color: "#61dafb" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "Node.js", color: "#339933" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "MongoDB", color: "#47a248" },
  { name: "Flutter", color: "#02569b" },
  { name: "Tailwind", color: "#06b6d4" },
  { name: "Docker", color: "#2496ed" },
  { name: "Git", color: "#f05032" },
];

export const blogPosts = [
  {
    slug: "building-modern-rest-apis-with-nodejs",
    title: "Building Modern REST APIs with Node.js and Express",
    excerpt:
      "Learn how to design and build scalable REST APIs using Node.js, Express, and TypeScript — from authentication to documentation.",
    coverImage: "/blog/nodejs-api.jpg",
    date: "2024-06-15",
    readingTime: "8 min read",
    category: "Backend",
    tags: ["Node.js", "Express", "API", "TypeScript"],
    featured: true,
  },
];

export const uses = {
  computer: [
    {
      item: "Laptop",
      description: "My primary development machine for all coding projects",
      icon: "laptop",
    },
    {
      item: "External Monitor",
      description: "Extra screen real estate for multitasking",
      icon: "monitor",
    },
    {
      item: "Mechanical Keyboard",
      description: "For comfortable long coding sessions",
      icon: "keyboard",
    },
  ],
  software: [
    {
      item: "VS Code",
      description: "Primary code editor with custom extensions and themes",
      icon: "code2",
    },
    {
      item: "Git & GitHub",
      description: "Version control and code collaboration",
      icon: "github",
    },
    {
      item: "Postman",
      description: "API testing and documentation",
      icon: "send",
    },
    {
      item: "Figma",
      description: "UI/UX design and prototyping",
      icon: "figma",
    },
    {
      item: "Docker",
      description: "Containerized development environments",
      icon: "box",
    },
  ],
  extensions: [
    "Prettier - Code formatter",
    "ESLint",
    "Tailwind CSS IntelliSense",
    "GitLens",
    "Thunder Client",
    "Error Lens",
    "Auto Rename Tag",
    "Bracket Pair Colorizer",
  ],
  aiTools: [
    "GitHub Copilot",
    "Claude Code",
    "ChatGPT",
    "Vercel v0",
  ],
};
