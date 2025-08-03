import React from "react";
import { motion, type Variants } from "framer-motion";
import { ALL_PROJECTS, type Project } from "../data/projects.ts";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ProjectList: React.FC = () => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {ALL_PROJECTS.map((project: Project) => (
        <motion.a
          key={project.title}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 bg-white dark:bg-[#65358111] rounded-lg border border-gray-200 dark:border-[#b38ec928] hover:border-gray-300 dark:hover:border-[#e8c1ff34]"
          variants={itemVariants}
          whileHover={{ y: -5, scale: 1.08, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.98 }}
        >
          <h3 className="text-lg font-semibold text-[#222222] dark:text-slate-100 mb-2">
            {project.title}
          </h3>
          <p className="text-sm  text-gray-700 dark:text-slate-400 mb-4">
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
  );
};

export default ProjectList;