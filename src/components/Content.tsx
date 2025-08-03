import React from "react";
import { motion, type Variants } from "framer-motion";
import WavingHand from "./WavingHand.tsx";
import type { Project } from "../data/projects.ts";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiPython,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiAstro,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

const skillsData: Skill[] = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Astro", icon: SiAstro, color: "#FF5D01" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "After Effect", icon: SiAdobeaftereffects, color: "#9999FF" },
  { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "currentcolor" },
];

interface ContentProps {
  name: string;
  descriptionPoints: string[];
  featuredProjects: Project[];
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const parseTextWithLinks = (text: string) => {
  const twitterHandleRegex = /@(\w+)/g;
  const parts = text.split(twitterHandleRegex);

  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return (
        <a
          key={index}
          href={`https://twitter.com/${part}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#2d9e60] dark:text-[#864294] hover:text-[#8bb191] dark:hover:text-[#847c99] hover:underline"
        >
          @{part}
        </a>
      );
    }
    return part;
  });
};

const Content: React.FC<ContentProps> = ({
  name,
  descriptionPoints,
  featuredProjects,
}) => {
  return (
    <>
      <motion.section
        className="flex flex-col-reverse md:flex-row items-center md:items-start gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="flex-1 space-y-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-slate-200"
            variants={itemVariants}
          >
            Hi <WavingHand />, I'm{" "}
            <span className="font-extrabold text-[#2d9e60] dark:text-[#864294]">
              {name}
            </span>
          </motion.h1>
          <motion.ul
            className="space-y-3 text-[#303030] dark:text-slate-400 list-disc list-inside"
            variants={itemVariants}
          >
            {descriptionPoints.map((point, index) => (
              <li key={index}>{parseTextWithLinks(point)}</li>
            ))}
          </motion.ul>
        </div>
        <motion.div className="flex-shrink-0" variants={itemVariants}>
          <img
            src="/img/avatar.jpg"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-[#dbdbdb] dark:border-[#4d4d4d]"
            alt="Avatar"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
            }}
          />
        </motion.div>
      </motion.section>

      <motion.section
        className="py-16 sm:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 dark:text-slate-100 mb-12"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
          }}
        >
          Skills & Technologies
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              className="group relative flex items-center justify-center p-3 bg-gray-100 dark:bg-[#30262e34] border border-gray-200 dark:border-[#605a6328] rounded-full shadow-sm"
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.1, transition: { duration: 0.2 } }}
            >
              <skill.icon className="w-7 h-7" style={{ color: skill.color }} />
              <div className="absolute bottom-full mb-2 w-auto p-2 bg-slate-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {skill.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="py-16 sm:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <motion.div
          className="flex items-center justify-between mb-8"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
          }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100">
            Featured Projects
          </h2>
          <a
            href="/projects"
            className="text-sm font-medium text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            View all projects →
          </a>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {featuredProjects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white dark:bg-[#65358111] rounded-lg border border-gray-200 dark:border-[#b38ec928] hover:border-gray-300 dark:hover:border-[#e8c1ff34] transition-colors"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-slate-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-200 dark:bg-[#51255a] text-gray-700 dark:text-slate-200 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
};

export default Content;