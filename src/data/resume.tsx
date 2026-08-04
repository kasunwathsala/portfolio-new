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
  cvUrl: "/Kasun_Wathsala_CV.pdf",
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
        "Developed scalable web applications and backend APIs while contributing to AI-powered features using LLM integrations. Built and optimized ETL pipelines for structured data processing, improved application performance, and supported production deployments in an Agile team environment.",
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
      title: "CloudeWave Events- AWS serverless event management platform",
      href: "https://d1glqpr0nzlm26.cloudfront.net",
      dates: "2026",
      active: true,
      description:
        "Built a serverless event management platform using AWS, React.js, and Node.js with secure authentication, REST APIs, cloud storage, automated notifications, scheduled workflows, and CI/CD deployment.",
      technologies: ["AWS Cognito", "AWS Lambda", "AWS API Gateway", "AWS S3", "AWS SES", "AWS EventBridge", "AWS CloudWatch"],
      links: [],
      image: "",
      video: "/cloudewave.mp4",
    },
    {
      title: "ABC HUB ETL Pipeline",
      href: "https://www.linkedin.com/posts/kasun-nilaweera-62916430a_dataengineering-apachenifi-postgresql-ugcPost-7483516737083056128-fSx_/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE6wcIEBqIHL2NcY2SXHnzK52rUGaJku7A8",
      dates: "2026",
      active: true,
      description:
        "Built an end-to-end ETL pipeline with Apache NiFi and PostgreSQL to automate data extraction, transformation, validation, and loading into a Star Schema data warehouse. Implemented workflow orchestration, error handling, and logging to create a reliable and scalable data pipeline for analytical reporting. Strengthened practical skills in ETL processes, SQL, data warehousing, and dimensional modeling through hands-on implementation.",
      technologies: ["Apache NiFi", "PostgreSQL", "ETL", "Data Warehousing", "Star Schema", "Workflow Orchestration"],
      links: [],
      image: "/ABCHUB.jpg",
      video: "",
    },
    {
      title: "AI Research Assistant",
      href: "https://github.com/kasunwathsala/Multi-agent-AI-researcher",
      dates: "2026",
      active: true,
      description:
        "Built a multi-agent AI research platform that automates the research-to-report workflow using LangGraph and LangChain. Implemented specialized AI agents for planning, research, analysis, and report generation with human-in-the-loop interactions. Developed a FastAPI backend with structured agent communication and integrated a Next.js chat interface for interactive AI-driven research.",
      technologies: ["LangChain", "LangGraph", "OpenAI", "FastAPI"],
      links: [],
      image: "/research desk-1.png",
      video: "",
    },
    {
      title: "Multi Agent Travel Planner",
      href: "https://github.com/kasunwathsala/MULTI-AGENT-TRAVEL-PLANNER",
      dates: "2026",
      active: true,
      description:
        "Developed an AI-powered travel planning platform that generates personalized itineraries and optimizes the travel booking process using multi-agent AI workflows. Designed and orchestrated three specialized AI agents — Requirement Agent for understanding user preferences and travel needs, Planner Agent for creating optimized travel itineraries, and Booker Agent for assisting with booking recommendations and processes. Implemented agent collaboration using LangChain and LangGraph with OpenAI models, and developed a FastAPI backend in Python to deliver scalable AI-driven travel planning services.",
      technologies: ["LangChain", "LangGraph", "OpenAI", "FastAPI","python"],
      links: [],
      image: "/travel.avif",
      video: "",
    },
    {
      title: "SunLeaf Energy",
      href: "https://fed-4-front-end-wathsala.netlify.app/",
      dates: "2026",
      active: true,
      description:
        "Developed a full-stack Solar Dashboard for real-time solar energy monitoring, anomaly detection, and billing automation. Built interactive dashboards with live energy analytics, historical reporting, and weather data integration while implementing secure authentication, payment processing with Stripe, automated background jobs, and scalable REST APIs. Focused on delivering a reliable, data-driven platform for monitoring solar systems and streamlining operational workflows using modern full-stack technologies.",
      technologies: ["React", "Node.js", "MongoDB", "Typescript","Redux","Stripe","zod","Tailwind css","shadcn/ui"],
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
        "Built a responsive Salon Booking Website using Next.js and React, implementing dynamic service listings, stylist profiles, a multi-step appointment booking workflow, customer testimonials, and contact management. Focused on creating a fast, scalable, and intuitive user experience through component-based architecture, responsive design, and modern frontend development practices.",
      technologies: ["Next.js", "Typescript"],
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
      technologies: ["React","Tailwind css","javascript"],
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
