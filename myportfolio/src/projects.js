import SmartMeal from "./assets/images/smartmeal.png";
import TailwindIcon from "./assets/images/tailwind.svg";
import ReactIcon from "./assets/images/react.svg";
import MongoIcon from "./assets/images/mongodb.png";
import NodeIcon from "./assets/images/nodejs.png";
import ExpressIcon from "./assets/images/express.png";
import FramerIcon from "./assets/images/framer.png";
import VapiIcon from "./assets/images/vapi.svg";
import TypeScriptIcon from "./assets/images/ts.png";
import ShadcnIcon from "./assets/images/shadcn.png";
import PrismaIcon from "./assets/images/prisma.png";
import NextAuthIcon from "./assets/images/nextauth.webp";
import NextjsIcon from "./assets/images/nextjs.png";
import SmartMealLogo from "./assets/images/smartmeallogo.png";
import SmartMeal1 from "./assets/images/smartmeal1.png";
import SmartMeal2 from "./assets/images/smartmeal2.png";
import SmartMeal3 from "./assets/images/smartmeal3.png";
import CareerAssistantLogo from "./assets/images/careerassistantlogo.png";
import CareerAssistant from "./assets/images/careerassistant.png";
import CareerAssistant1 from "./assets/images/aicareer1.png";
import CareerAssistant2 from "./assets/images/aicareer2.png";
import CareerAssistant3 from "./assets/images/aicareer3.png";
import LoveandLightLogo from "./assets/images/lovelightlogo.jpeg";
import LoveandLight1 from "./assets/images/donate.png";
import LoveandLight2 from "./assets/images/donate1.png";
import LoveandLight3 from "./assets/images/donate2.png";
import LoveandLight4 from "./assets/images/donate3.png";
import BlogLogo from "./assets/images/blogLogo.png";
import Blog1 from "./assets/images/blog1.png";
import Blog2 from "./assets/images/blog2.png";
import Blog3 from "./assets/images/blog3.png";
import Blog from "./assets/images/blog.png";

export const projects = [
  {
    id: "BlogApp",
    appIcon: BlogLogo,
    appBg: "bg-[#ffd1dc]",
    image: Blog,
    title: "Personal Developer Blog",
    description:
      "A personal blog site with admin-managed posts, authentication, comments, and interactive features.",
    link: "https://idiawrites.vercel.app/",
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
    id: "SmartMeal",
    appIcon: SmartMealLogo,
    appBg: "bg-[#D08117]",
    image: SmartMeal,
    title: "Smart Meal Connect",
    description: "Website for solving food decision fatigue",
    link: "https://smart-meal-frontend.onrender.com/",
    stack: [
      {
        name: "Mongo DB",
        icon: MongoIcon,
        bg: "bg-[#11300a]",
      },
      {
        name: "Express JS",
        icon: ExpressIcon,
        bg: "bg-[#5e5e5e]",
      },
      {
        name: "React JS",
        icon: ReactIcon,
        bg: "bg-[#08090a]",
      },
      {
        name: "Node JS",
        icon: NodeIcon,
        bg: "bg-white",
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
        bg: "bg-[#06171e]",
      },
      // {
      //   name: "Framer Motion",
      //   icon: FramerIcon,
      //   bg: "bg-[#FFF312]",
      // },
    ],
    overview:
      " Smart Meal Connect helps users reduce food decision fatigue by allowing them to input ingredients they have on hand and get recipe suggestions based on those ingredients. It also takes into account factors like age, dietary preferences, and more. Users can post recipes to a feed, similar to a social media experience, allowing others to discover and share meal ideas.",
    app: "Cross Platform App",
    radialGradientDark:
      "radial-gradient(ellipse at top right, rgba(208, 129, 23, 0.15) 20%, rgba(8, 8, 8, 0.6) 50%, rgba(0, 0, 0, 1) 100%)",
    radialGradientLight:
      "radial-gradient(ellipse at top right, rgba(255, 223, 170, 0.6) 20%, rgba(255, 239, 219, 0.7) 50%, rgba(255, 255, 255, 1) 100%)",
    bgLink: "bg-[#D08117]",
    bgHover: "hover:bg-[#A56F14]",
    images: {
      image1: SmartMeal1,
      image2: SmartMeal2,
      image3: SmartMeal3,
    },
    imageGradient:
      "radial-gradient(at 100% 10%, rgba(208, 129, 23, 0.2) 20%, rgba(80, 60, 20, 0.6) 50%, rgba(41, 41, 41, 0.7) 80%, rgba(21, 21, 21, 0.9) 100%)",
  },
  {
    id: "LoveandLight",
    appIcon: LoveandLightLogo,
    appBg: "bg-[#0D47A1]",
    image: LoveandLight1,
    title: "LoveandLight Foundation",
    description:
      "A modern full-stack donation platform enabling users to donate for charity, track progress, and receive updates in real-time.",
    link: "https://loveandlight-foundation.vercel.app/",
    stack: [
      {
        name: "Mongo DB",
        icon: MongoIcon,
        bg: "bg-[#11300a]",
      },
      {
        name: "Express JS",
        icon: ExpressIcon,
        bg: "bg-[#5e5e5e]",
      },
      {
        name: "React JS",
        icon: ReactIcon,
        bg: "bg-[#08090a]",
      },
      {
        name: "Node JS",
        icon: NodeIcon,
        bg: "bg-white",
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
        bg: "bg-[#06171e]",
      },
      {
        name: "Framer Motion",
        icon: FramerIcon,
        bg: "bg-[#FFF312]",
      },
    ],
    overview:
      "LoveandLight Foundation is a full-stack donation platform designed to connect donors with impactful causes. With a seamless and user-friendly interface, users can explore donation opportunities, track the progress of projects, and receive timely updates. Built with smooth animations and interactive elements, the platform ensures an engaging user experience. Fully responsive, it adapts seamlessly to different devices, offering a professional and intuitive way to support meaningful initiatives.",
    radialGradientDark:
      "radial-gradient(ellipse at top right, rgba(13, 71, 161, 0.15) 20%, rgba(10, 25, 47, 0.6) 50%, rgba(0, 0, 0, 1) 100%)",
    radialGradientLight:
      "radial-gradient(ellipse at top right, rgba(187, 222, 251, 0.6) 20%, rgba(227, 242, 253, 0.8) 50%, rgba(255, 255, 255, 1) 100%)",
    bgLink: "bg-[#1565C0]",
    bgHover: "hover:bg-[#1E88E5]",
    images: {
      image1: LoveandLight2,
      image2: LoveandLight3,
      image3: LoveandLight4,
    },
    imageGradient:
      "radial-gradient(at 100% 10%, rgba(13, 71, 161, 0.12) 20%, rgba(25, 50, 80, 0.6) 50%, rgba(41, 41, 41, 0.7) 80%, rgba(21, 21, 21, 0.9) 100%)",
  },
];
