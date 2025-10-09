import TailwindIcon from "./assets/images/tailwind.svg";
import ReactIcon from "./assets/images/react.svg";
// import MongoIcon from "./assets/images/mongodb.png";
// import NodeIcon from "./assets/images/nodejs.png";
// import ExpressIcon from "./assets/images/express.png";
import GsapIcon from "./assets/images/gsap.jpg.avif";
import VapiIcon from "./assets/images/vapi.svg";
import TypeScriptIcon from "./assets/images/ts.png";
import ShadcnIcon from "./assets/images/shadcn.png";
import PrismaIcon from "./assets/images/prisma.png";
import NextAuthIcon from "./assets/images/nextauth.webp";
import NextjsIcon from "./assets/images/nextjs.png";
import CareerAssistantLogo from "./assets/images/careerassistantlogo.png";
import CareerAssistant from "./assets/images/careerassistant.jpeg";
import CareerAssistant1 from "./assets/images/aicareer1.png";
import CareerAssistant2 from "./assets/images/aicareer2.jpeg";
import CareerAssistant3 from "./assets/images/aicareer3.png";
import BlogLogo from "./assets/images/blogLogo.png";
import Blog1 from "./assets/images/blog1.jpeg";
import Blog2 from "./assets/images/blog2.png";
import Blog3 from "./assets/images/blog3.jpeg";
import Blog from "./assets/images/blog.jpeg";
import AltanovaLogo from "./assets/images/altanovalogo.jpg";
import Altanova from "./assets/images/altanova.jpeg";
import Altanova1 from "./assets/images/altanova1.png";
import Altanova2 from "./assets/images/altanova2.jpeg";
import Altanova3 from "./assets/images/altanova3.jpeg";
import ArtLoom from "./assets/images/artloom.jpeg";
import ArtLoomLogo from "./assets/images/vercel.svg";
import ArtLoom1 from "./assets/images/artloom1.png";
import ArtLoom2 from "./assets/images/artloom2.jpeg";
import ArtLoom3 from "./assets/images/artloom3.jpeg";

export const projects = [
  {
    id: "CareerAssistant",
    appIcon: CareerAssistantLogo,
    appBg: "bg-[#0d828a]",
    image: CareerAssistant,
    title: "AI Career Assistant",
    description: "AI-powered app for resumes and voice interview practice.",
    link: "https://career-assistant-beta.vercel.app/",
    stack: [
      {
        name: "Next.js",
        icon: NextjsIcon,
        bg: "bg-[#1e1e1e]",
      },
      {
        name: "TypeScript",
        icon: TypeScriptIcon,
        bg: "default",
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
        bg: "bg-[#06171e]",
      },
      {
        name: "Vapi AI",
        icon: VapiIcon,
        bg: "bg-[#0a0a0a]",
      },
      {
        name: "ShadCN/UI",
        icon: ShadcnIcon,
        bg: "bg-white",
      },
      {
        name: "Prisma",
        icon: PrismaIcon,
        bg: "bg-white",
      },
      // {
      //   name: "NextAuth.js",
      //   icon: NextAuthIcon,
      //   bg: "bg-[#1A1A1A]",
      // },
    ],
    overview:
      "Career Assistant is a full-featured AI-powered web application that helps users improve their career readiness. It allows users to upload and parse their resumes, generate professional CV templates, and practice mock interviews with a real-time voice-based AI. After each session, users receive personalized feedback, performance scores, and practical tips. The app also tracks progress over time, helping users build confidence and sharpen their communication skills.",
    app: "Web App",
    radialGradientDark:
      "radial-gradient(ellipse at top right, rgba(13, 130, 138, 0.15) 20%, rgba(8, 8, 8, 0.6) 60%, rgba(0, 0, 0, 1) 100%)",
    radialGradientLight:
      "radial-gradient(ellipse at top right, rgba(13, 130, 138, 0.3) 20%, rgba(228, 250, 244, 0.4) 50%, rgba(255, 255, 255, 1) 100%)",
    bgLink: "bg-[#0d828a]", // green accent
    bgHover: "hover:bg-[#0b5f66]", // deep green hover
    images: {
      image1: CareerAssistant1,
      image2: CareerAssistant2,
      image3: CareerAssistant3,
    },
    imageGradient:
      "radial-gradient(at top right, rgba(13, 130, 138, 0.2) 20%, rgba(32, 25, 48, 0.5) 50%, rgba(0, 0, 0, 0.85) 100%)",
  },
  {
    id: "Artloom",
    appIcon: ArtLoomLogo,
    appBg: "bg-[#000000]",
    image: ArtLoom,
    title: "Artloom",
    description: "E-commerce website for arts and crafts with modern design.",
    link: "https://art-loom.vercel.app",
    stack: [
      {
        name: "Next.js",
        icon: NextjsIcon,
        bg: "bg-[#1e1e1e]",
      },
      {
        name: "TypeScript",
        icon: TypeScriptIcon,
        bg: "default",
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
        bg: "bg-[#06171e]",
      },
      {
        name: "ShadCN/UI",
        icon: ShadcnIcon,
        bg: "bg-white",
      },
    ],
    overview:
      "Artloom is an e-commerce website built for arts and crafts enthusiasts. Created as a practice project to deepen understanding of modern web development, it features a clean, minimal design with a whitish aesthetic. Built with Next.js and TypeScript for robust performance and type safety, styled with Tailwind CSS for responsive design, and enhanced with ShadCN/UI components for a polished user interface. The platform provides a seamless shopping experience for art supplies and handmade crafts.",
    app: "E-commerce Web App",
    radialGradientDark:
      "radial-gradient(ellipse at top right, rgba(245, 245, 245, 0.1) 20%, rgba(220, 220, 220, 0.05) 50%, rgba(0, 0, 0, 1) 100%)",
    radialGradientLight:
      "radial-gradient(ellipse at top right, rgba(250, 250, 250, 0.8) 20%, rgba(245, 245, 245, 0.9) 50%, rgba(255, 255, 255, 1) 100%)",
    bgLink: "bg-[#000000]",
    bgHover: "hover:bg-[#000000]/50",
    images: {
      image1: ArtLoom1,
      image2: ArtLoom2,
      image3: ArtLoom3,
    },
    imageGradient:
      "radial-gradient(at 100% 10%, rgba(245, 245, 245, 0.3) 20%, rgba(230, 230, 230, 0.5) 50%, rgba(220, 220, 220, 0.7) 80%, rgba(210, 210, 210, 0.9) 100%)",
  },
  {
    id: "BlogApp",
    appIcon: BlogLogo,
    appBg: "bg-[#ffd1dc]",
    image: Blog,
    title: "Personal Developer Blog",
    description:
      "A personal blog site with admin-managed posts, authentication, comments, and interactive features.",
    link: "https://www.idiawrites.com/",
    stack: [
      {
        name: "Next.js",
        icon: NextjsIcon,
        bg: "bg-[#1e1e1e]",
      },
      {
        name: "TypeScript",
        icon: TypeScriptIcon,
        bg: "default",
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
        bg: "bg-[#06171e]",
      },
      {
        name: "ShadCN/UI",
        icon: ShadcnIcon,
        bg: "bg-white",
      },
      {
        name: "Prisma",
        icon: PrismaIcon,
        bg: "bg-white",
      },
      {
        name: "NextAuth.js",
        icon: NextAuthIcon,
        bg: "bg-[#1A1A1A]",
      },
    ],
    overview:
      "This is a personal developer blog built with Next.js and TypeScript. It features an admin dashboard for creating and managing blog posts using a Markdown editor. Readers can sign in via Google or LinkedIn (NextAuth), like posts and comments, leave feedback, and subscribe to a newsletter. The app uses PostgreSQL with Prisma for database management, Tailwind CSS for styling, and ShadCN for accessible UI components. Only the admin has publishing access, while signed-in users can interact with content, manage their profiles, and enjoy a seamless reading experience across devices.",
    app: "Web App",
    radialGradientDark:
      "radial-gradient(ellipse at top right, rgba(255, 192, 203, 0.3) 0%, rgba(139, 0, 139, 0.1) 20%, rgba(0, 0, 0, 1) 100%)",

    radialGradientLight:
      "radial-gradient(ellipse at top right, rgba(255, 182, 193, 0.4) 0%, rgba(255, 240, 245, 0.6) 50%, rgba(255, 255, 255, 1) 100%)",
    bgLink: "bg-[#ff94b4]",
    bgHover: "hover:bg-[#ff94c8]",
    images: {
      image1: Blog2,
      image2: Blog1,
      image3: Blog3,
    },
    imageGradient:
      "radial-gradient(at 50% 30%, rgba(255, 182, 193, 0.6) 0%, rgba(255, 240, 245, 0.3) 60%, rgba(255, 228, 225, 0.2) 90%)",
  },

  {
    id: "Altanova",
    appIcon: AltanovaLogo,
    appBg: "bg-[#4E342E]",
    image: Altanova,
    title: "Altanova",
    description: "Landing page for a construction and trading company.",
    link: "https://atlanova-portfolio.vercel.app",
    stack: [
      {
        name: "React JS",
        icon: ReactIcon,
        bg: "bg-[#08090a]",
      },
      {
        name: "TypeScript",
        icon: TypeScriptIcon,
        bg: "bg-[#1e3a5f]",
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
        bg: "bg-[#06171e]",
      },
      {
        name: "GSAP",
        icon: GsapIcon,
        bg: "bg-[#0d0d0d]",
      },
    ],
    overview:
      "Altanova is a modern, visually engaging personal portfolio website designed to showcase professional projects, skills, and creative work in a clean, interactive format. Built with a focus on smooth user experience and aesthetic appeal, Altanova combines responsive design, subtle animations, and intuitive navigation to highlight the unique talents and achievements of its creator.",
    app: "Landing Page",
    radialGradientDark:
      "radial-gradient(ellipse at top right, rgba(78, 52, 46, 0.15) 20%, rgba(44, 29, 22, 0.6) 50%, rgba(0, 0, 0, 1) 100%)",
    radialGradientLight:
      "radial-gradient(ellipse at top right, rgba(210, 180, 140, 0.6) 20%, rgba(245, 222, 179, 0.8) 50%, rgba(255, 255, 255, 1) 100%)",
    bgLink: "bg-[#6D4C41]",
    bgHover: "hover:bg-[#8D6E63]",
    images: {
      image1: Altanova1,
      image2: Altanova2,
      image3: Altanova3,
    },
    imageGradient:
      "radial-gradient(at 100% 10%, rgba(78, 52, 46, 0.12) 20%, rgba(60, 40, 30, 0.6) 50%, rgba(41, 41, 41, 0.7) 80%, rgba(21, 21, 21, 0.9) 100%)",
  },
];
