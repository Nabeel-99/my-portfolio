import SmartMeal from "./assets/images/smartmeal.png";
import TaskPro from "./assets/images/taskmanager.png";
import LandingPage from "./assets/images/chronicle.png";
import SvelteIcon from "./assets/images/svelte.svg";
import TailwindIcon from "./assets/images/tailwind.svg";
import ReactIcon from "./assets/images/react.svg";
import MongoIcon from "./assets/images/mongodb.png";
import NodeIcon from "./assets/images/nodejs.png";
import ExpressIcon from "./assets/images/express.png";
import FramerIcon from "./assets/images/framer.png";
import TypeScriptIcon from "./assets/images/ts.png";
import FirebaseIcon from "./assets/images/firebase.png";
import CapacitorIcon from "./assets/images/capacitor.svg";
import ShadcnIcon from "./assets/images/shadcn.png";
import PrismaIcon from "./assets/images/prisma.png";
import NextAuthIcon from "./assets/images/nextauth.webp";
import NextjsIcon from "./assets/images/nextjs.png";
import SmartMealLogo from "./assets/images/smartmeallogo.png";
import ChronicleLogo from "./assets/images/chroniclelogo.png";
import TaskProLogo from "./assets/images/taskprologo.png";
import SmartMeal1 from "./assets/images/smartmeal1.png";
import SmartMeal2 from "./assets/images/smartmeal2.png";
import SmartMeal3 from "./assets/images/smartmeal3.png";
import LandingPage1 from "./assets/images/chronicle1.png";
import LandingPage2 from "./assets/images/chronicle2.png";
import LandingPage3 from "./assets/images/chronicle3.png";
import LandingPage4 from "./assets/images/chronicle4.png";
import TaskPro1 from "./assets/images/taskpro1.png";
import TaskPro2 from "./assets/images/taskpro2.png";
import TaskPro3 from "./assets/images/taskpro3.png";
import FusionEnergy from "./assets/images/fusionenergy.png";
import FusionEnergyLogo from "./assets/images/fusionLogo.png";
import Fusion1 from "./assets/images/fusion1.png";
import Fusion2 from "./assets/images/fusion2.png";
import Fusion3 from "./assets/images/fusion3.png";
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
  {
    id: "TaskPro",
    appIcon: TaskProLogo,
    appBg: "bg-[#740C61]",
    image: TaskPro,
    title: "TaskPro",
    description: "Cross-platform task management app for web and mobile",
    link: "",
    stack: [
      {
        name: "Svelte",
        icon: SvelteIcon,
        bg: "bg-[#e8490a]",
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
        bg: "bg-[#06171e]",
      },
      {
        name: "Firebase",
        icon: FirebaseIcon,
        bg: "bg-orange-700",
      },
      {
        name: "Node JS",
        icon: NodeIcon,
        bg: "bg-white",
      },
      {
        name: "Capacitor",
        icon: CapacitorIcon,
        bg: "bg-white",
      },
    ],
    overview:
      "TaskPro is a cross-platform task management app that helps users stay organized by allowing them to create, edit, and assign tasks. Users can upload images to tasks for better tracking and manage their work visually. Tasks can be marked as complete once finished, and users can set priorities to focus on what’s most important. The app also sends notifications to keep users updated on task status and changes. With a clear view of pending tasks, TaskPro ensures users stay on top of their to-do lists across all devices. Its seamless synchronization keeps tasks accessible and up to date, whether on the web or mobile.",
    app: "Cross Platform App",
    radialGradientDark:
      "radial-gradient(ellipse at top right,  rgba(116,12, 97, 0.05) 20%, rgba(8, 8, 8, 0.6) 50%, rgba(0, 0, 0, 1) 100%)",
    radialGradientLight:
      "radial-gradient(ellipse at top right, rgba(236, 64, 192, 0.2) 20%, rgba(248, 209, 236, 0.6) 50%, rgba(255, 255, 255, 1) 100%)",
    bgLink: "bg-[#740C61]",
    bgHover: "hover:bg-[#5F094B]",
    images: {
      image1: TaskPro1,
      image2: TaskPro2,
      image3: TaskPro3,
    },
    imageGradient:
      "radial-gradient(at top right, rgba(116, 12, 97, 0.1) 20%, rgba(32, 25, 48, 0.6) 50%, rgba(0, 0, 0, 0.9) 100%)",
  },
  {
    id: "LandingPage",
    appIcon: ChronicleLogo,
    appBg: "bg-[#1C154F]",
    image: LandingPage,
    title: "Landing Page",
    description:
      "Responsive landing page with smooth transitions and animations",
    link: "https://landing-page-framer.vercel.app",
    stack: [
      {
        name: "React JS",
        icon: ReactIcon,
        bg: "bg-[#08090a]",
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
        name: "Framer Motion",
        icon: FramerIcon,
        bg: "bg-[#FFF312]",
      },
    ],
    overview:
      "This is a modern, responsive landing page designed to provide an engaging user experience with smooth transitions and animations. It showcases a brand, product, or service in a visually appealing way, with a clean and minimalist layout. The smooth animations and interactive elements create a dynamic experience for visitors, making a strong first impression. Fully responsive, it adapts seamlessly to any device, ensuring it looks great on both desktop and mobile. Perfect for businesses or portfolios looking to capture attention and offer an intuitive interface.",
    app: "Website",
    radialGradientDark:
      "radial-gradient(ellipse at top right, rgba(28, 21, 79, 0.8) 0%, rgba(8, 8, 8, 0.6) 50%, rgba(0, 0, 0, 1) 100%)",
    radialGradientLight:
      "radial-gradient(ellipse at top right, rgba(121, 107, 234, 0.25) 0%, rgba(230, 230, 250, 0.6) 50%, rgba(255, 255, 255, 1) 100%)",
    bgLink: "bg-[#1C154F]",
    bgHover: "hover:bg-[#140F3E]",
    images: {
      image1: LandingPage1,
      image2: LandingPage2,
      image3: LandingPage3,
      image4: LandingPage4,
    },
    imageGradient:
      "radial-gradient(at 0% 30%, rgba(28, 21, 79, 0.8) 0%, rgba(0, 0, 8, 0) 90%, rgba(0, 0, 60, 0.4) 80%, rgba(211, 94, 163, 0.2) 100%)",
  },
  {
    id: "FusionEnergy",
    appIcon: FusionEnergyLogo,
    appBg: "bg-[#D06D11]",
    image: FusionEnergy,
    title: "Fusion Energy Solutions",
    description:
      "Modern, responsive portfolio website for showcasing solar energy solutions and services",
    link: "https://ufi-portfolio.vercel.app/",
    stack: [
      {
        name: "React JS",
        icon: ReactIcon,
        bg: "bg-[#08090a]",
      },
      {
        name: "Framer Motion",
        icon: FramerIcon,
        bg: "bg-[#FFF312]",
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
        bg: "bg-[#06171e]",
      },
    ],
    overview:
      "This is a modern, responsive landing page designed to provide an engaging user experience with smooth transitions and animations. It showcases the brand, services, and expertise of Fusion Energy Solutions in a visually appealing way, with a clean and minimalist layout. Smooth animations and interactive elements create a dynamic experience for visitors, making a strong first impression. Fully responsive, it adapts seamlessly to any device, ensuring it looks great on both desktop and mobile. Perfect for highlighting solar energy solutions and establishing a professional online presence.",
    radialGradientDark:
      "radial-gradient(ellipse at top right, rgba(208, 109, 17, 0.15) 20%, rgba(8, 8, 8, 0.6) 50%, rgba(0, 0, 0, 1) 100%)",
    radialGradientLight:
      "radial-gradient(ellipse at top right, rgba(255, 183, 77, 0.25) 20%, rgba(255, 239, 213, 0.6) 50%, rgba(255, 255, 255, 1) 100%)",
    bgLink: "bg-[#D06D11]",
    bgHover: "hover:bg-[#E0883C]",
    images: {
      image1: Fusion1,
      image2: Fusion2,
      image3: Fusion3,
    },
    imageGradient:
      "radial-gradient(at 100% 10%, rgba(208, 109, 17, 0.12) 20%, rgba(80, 60, 20, 0.6) 50%, rgba(41, 41, 41, 0.7) 80%, rgba(21, 21, 21, 0.9) 100%)",
  },
];
