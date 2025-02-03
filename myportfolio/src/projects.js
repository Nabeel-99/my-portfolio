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

export const projects = [
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
    radialGradient:
      "radial-gradient(ellipse at top right, rgba(208, 129, 23, 0.15) 20%, rgba(8, 8, 8, 0.6) 50%, rgba(0, 0, 0, 1) 100%)",
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
    radialGradient:
      "radial-gradient(ellipse at top right, rgba(28, 21, 79, 0.8) 0%, rgba(8, 8, 8, 0.6) 50%, rgba(0, 0, 0, 1) 100%)",
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
    radialGradient:
      "radial-gradient(ellipse at top right,  rgba(116,12, 97, 0.05) 20%, rgba(8, 8, 8, 0.6) 50%, rgba(0, 0, 0, 1) 100%)",
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
    radialGradient:
      "radial-gradient(ellipse at top right, rgba(208, 109, 17, 0.15) 20%, rgba(8, 8, 8, 0.6) 50%, rgba(0, 0, 0, 1) 100%)",
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
