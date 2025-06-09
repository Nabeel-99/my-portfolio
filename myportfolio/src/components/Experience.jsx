import React from "react";
import FadeInEffect from "./FadeInEffect";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Frontend Developer – Petezy App",
      date: "September 2024 – Present",
      description: [
        "Contributing to the frontend of Petezy, a pet services platform for booking pet care, managing appointments, and accessing location-based features.",
        "Built reusable UI components using React.js, TypeScript, and Tailwind CSS for seamless mobile and desktop experiences.",
        "Collaborated in a hybrid development team to implement features across both web and mobile interfaces.",
      ],
      delay: 0.6,
    },
    {
      id: 2,
      title: "Software Developer Intern",
      date: "June 2024 - September 2024",
      description: [
        "Built a full-featured task management app with real-time updates and scheduling features using React.js, Laravel, and MySQL.",
        "Managed both admin and user portals with role-based logic and scheduling.",
        "Collaborated in Agile teams, contributing to code reviews, sprint planning, and product testing cycles.",
      ],
      delay: 0.4,
    },

    {
      id: 3,
      title: "Freelance Developer & Personal Projects",
      date: "October 2022 - Present",
      description: [
        "Designed and deployed a responsive website for a local family business using React.js and Tailwind CSS.",
        "Built the frontend of a donation platform using React and Tailwind CSS, with features for campaign browsing and contribution.",
        "Developed a full-featured blog app using Next.js with authentication, Markdown editor, and PostgreSQL integration via Prisma.",
      ],
      delay: 0.8,
    },
  ];
  return (
    <FadeInEffect delay={0.2}>
      <div className="flex flex-col gap-6 ">
        <p className="font-satoshi-bold text-4xl">Experience</p>
        {experiences.map((exp) => (
          <FadeInEffect delay={exp.delay}>
            <ExperienceCard
              key={exp.id}
              delay={exp.delay}
              title={exp.title}
              date={exp.date}
              description={exp.description}
            />
          </FadeInEffect>
        ))}
      </div>
    </FadeInEffect>
  );
};

export default Experience;
