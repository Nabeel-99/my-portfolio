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
      {
        name: "Framer Motion",
        icon: FramerIcon,
        bg: "bg-[#FFF312]",
      },
    ],
    overview:
      " Smart Meal Connect helps users reduce food decision fatigue by allowing them to input ingredients they have on hand and get recipe suggestions based on those ingredients. It also takes into account factors like age, dietary preferences, and more. Users can post recipes to a feed, similar to a social media experience, allowing others to discover and share meal ideas.",
    app: "Cross Platform App",
    radialGradient:
      "radial-gradient(ellipse at top right, rgba(208, 129, 23, 0.15) 20%, rgba(8, 8, 8, 0.6) 50%, rgba(0, 0, 0, 1) 100%)",
    bgLink: "bg-[#D08117]",
    bgHover: "hover:bg-[#A56F14]",
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
      "A clean, responsive landing page designed with smooth transitions and animations for an engaging user experience. Perfect for showcasing a brand, product, or service in a visually appealing way, with a focus on simplicity and ease of use.",
    app: "Website",
    radialGradient:
      "radial-gradient(ellipse at top right, rgba(28, 21, 79, 0.8) 0%, rgba(8, 8, 8, 0.6) 50%, rgba(0, 0, 0, 1) 100%)",
    bgLink: "bg-[#1C154F]",
    bgHover: "hover:bg-[#140F3E]",
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
      "TaskPro is a cross-platform task management app that helps users stay organized with features like task creation, notifications, and seamless access across devices. It also supports taking and attaching images to tasks, providing a more comprehensive way to track and manage projects.",
    app: "Cross Platform App",
    radialGradient:
      "radial-gradient(ellipse at top right, rgba(116,12, 97, 0.05) 20%, rgba(8, 8, 8, 0.6) 50%, rgba(0, 0, 0, 1) 100%)",
    bgLink: "bg-[#740C61]",
    bgHover: "hover:bg-[#5F094B]",
  },

  // {
  //   image: "",
  //   title: "project 4",
  //   description: "",
  //   link: "",
  // },
  // {
  //   image: "",
  //   title: "project 5",
  //   description: "",
  //   link: "",
  // },
];
