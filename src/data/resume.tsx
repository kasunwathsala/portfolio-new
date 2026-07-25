import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";

export const DATA = {
  name: "Kasun Wathsala",
  initials: "KW",
  url: "https://kasunwathsala.dev",
  location: "Sri Lanka",
  locationLink: "https://www.google.com/maps/place/srilanka",
  description:
    "Software Engineer specializing in AI Engineering, Data Engineering, and Full Stack Development. I build intelligent applications, scalable data platforms, and production-ready AI systems that solve real-world problems.",
  summary:
    "I am a Computer Science undergraduate passionate about building AI-powered products, scalable backend systems, and modern data platforms. I enjoy solving real-world problems through software engineering, artificial intelligence, and data engineering. My goal is to build intelligent, scalable, and impactful applications while continuously learning modern technologies. My interests include AI Agents, LLM Applications, Data Engineering, Cloud Computing, Backend Engineering, Machine Learning, and Full Stack Development.",
  avatarUrl: "/kkkkkk.jpeg",
  skills: [
    { name: "Python", icon: Python },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Java", icon: Java },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Apache Spark" },
    { name: "Apache Hadoop" },
    { name: "OpenAI" },
    { name: "HuggingFace" },
    { name: "LangGraph" },
    { name: "AutoGen" },
    { name: "Pinecone" },
    { name: "LlamaIndex" },
    { name: "FastAPI" },
    { name: "PyTorch" },
    { name: "AWS S3" },
    { name: "Google Cloud Platform" },
    { name: "Azure ADLS" },
    { name: "Express" },
    { name: "Spring Boot" },
    { name: "Firebase" },
    { name: "Prisma" },
    { name: "Angular" },
    { name: "Tailwind CSS" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "wathsala.nilaweera2001@gmail.com",
    tel: "+9477 0417565",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kasunwathsala",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/kasun-nilaweera-62916430a",
        icon: Icons.linkedin,
        navbar: true,
      },
      Medium: {
  name: "Medium",
  url: "https://medium.com/@wathsala.nilaweera2001",   // 👈 ඔයාගේ actual Medium URL එක දාන්න
  icon: Icons.medium,
  navbar: true,
},
      email: {
        name: "Send Email",
        url: "mailto:wathsala.nilaweera2001@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Hasthiya IT",
      href: "https://hasthiya.org",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/hit.jpg",
      start: "July 2025",
      end: "July 2026",
      description:
        "Developed scalable web applications and built backend APIs. Worked on AI integrations and collaborated with the team using Agile methodology. Optimized application performance and participated in production deployments.",
    },
  ],
  education: [
    {
      school: "University of Westminster (at IIT Sri Lanka)",
      href: "https://www.westminster.ac.uk",
      degree: "BSc (Hons) in Computer Science",
      logoUrl: "/westminster.png",
      start: "September 2023",
      end: "Present",
    },
    {
      school: "Informatics Institute of Technology",
      href: "https://www.iit.ac.lk",
      degree: "Foundation Certificate in Higher Education — Graduated with Distinction",
      logoUrl: "/iit.png",
      start: "January 2023",
      end: "August 2023",
    },
  ],
  projects: [
    {
      title: "AI Research Assistant",
      href: "https://github.com/kasunwathsala/Multi-agent-AI-researcher",
      dates: "2026",
      active: true,
      description:
        "Multi-agent AI research platform capable of autonomous reasoning, web search, and report generation.",
      technologies: ["LangGraph", "OpenAI", "FastAPI", "Pinecone"],
      links: [],
      image: "/research desk-1.png",
      video: "",
    },
    {
      title: "SunLeaf Energy",
      href: "https://fed-4-front-end-wathsala.netlify.app/",
      dates: "2026",
      active: true,
      description:
        "Fullstack solar energy management platform with real-time monitoring, predictive maintenance, and energy optimization.",
      technologies: ["React", "Node.js", "MongoDB", "Typescript","Redux","Stripe","zod"],
      links: [],
      image: "",
      video: "/sunleaf.mp4",
    },
    {
      title: "Saloon Booking System",
      href: "https://saloon-booking-system.vercel.app/",
      dates: "2026",
      active: true,
      description:
        "AI-powered saloon booking system that recommends personalized services and optimizes appointment scheduling.",
      technologies: ["Next.js", "OpenAI", "Google Maps", "Prisma"],
      links: [],
      image: "",
      video: "/saloon.mp4",
    },
    {
      title: "MiniShop E-commerce",
      href: "https://book-shop-nu-ten.vercel.app/",
      dates: "2026",
      active: true,
      description:
        "Scalable e-commerce platform with customer analytics, workflow automation, and reporting dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
      links: [],
      image: "",
      video: "/minishop.mp4",
    },
    // {
    //   title: "AI Resume Analyzer",
    //   href: "#",
    //   dates: "2026",
    //   active: true,
    //   description:
    //     "ATS resume analyzer with AI-powered suggestions and interview preparation.",
    //   technologies: ["Python", "FastAPI", "OpenAI", "React"],
    //   links: [],
    //   image: "",
    //   video: "",
    // },
    // {
    //   title: "Ecommerce Analytics Dashboard",
    //   href: "#",
    //   dates: "2026",
    //   active: true,
    //   description:
    //     "Business intelligence dashboard providing real-time sales insights and customer analytics.",
    //   technologies: ["Next.js", "Spark", "Power BI", "PostgreSQL"],
    //   links: [],
    //   image: "",
    //   video: "",
    // },
  ],
  hackathons: [],
} as const;
