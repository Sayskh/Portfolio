import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaTrophy,
  FaMapMarkerAlt,
  FaGamepad,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import { createEmitAndSemanticDiagnosticsBuilderProgram } from "typescript";

interface TimelineItemData {
  primaryText: string;
  secondaryText: string;
  date: string;
  details: string | string[];
}

const experienceData: TimelineItemData[] = [
  {
    primaryText: "Mobile Phone Service",
    secondaryText: "Global Phone Shop Service",
    date: "Mei 2025 - Jun 2025",
    details: [
      "Fixed mobile phone issues including screen replacements, battery replacements, and software troubleshooting.",
    ],
  },
  {
    primaryText: "IT Technician",
    secondaryText: "Autekindo Computer",
    date: "Aug 2024 - Nov 2024",
    details: [
      "Making a local network, and installing Windows OS.",
      "Assisted in troubleshooting hardware and software issues for clients.",
      "Built a custom PC for a client, ensuring optimal performance and reliability.",
    ],
  },
];

const educationData: TimelineItemData[] = [
  {
    primaryText: "Universitas Muhammadiyah Cirebon",
    secondaryText: "S1 Teknik Informatika",
    date: "2025 - 2029 (expected)",
    details: "",
  },
  {
    primaryText: "SMKS Manba'ul Ulum Cirebon",
    secondaryText: "Teknik Komputer Jaringan dan Telekomunikasi",
    date: "2023 - 2025",
    details:
      "Mendapatkan keahlian dalam konfigurasi jaringan, termasuk pengkabelan router dan switch, serta pemrograman dasar.",
  },
];

const achievementData: TimelineItemData[] = [
  {
    primaryText: "-",
    secondaryText: "-",
    date: "-",
    details:
      "-",
  },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

interface TimelineSectionProps {
  title: string;
  icon: IconType;
  items: TimelineItemData[];
}

const TimelineSection: React.FC<TimelineSectionProps> = ({
  title,
  icon: Icon,
  items,
}) => (
  <motion.section
    className="mt-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2 }}
    transition={{ staggerChildren: 0.2 }}
  >
    <motion.h2
      variants={itemVariants}
      className="text-2xl font-bold text-gray-800 dark:text-slate-100 mb-8 flex items-center gap-3"
    >
      <Icon /> {title}
    </motion.h2>

    <div className="flex flex-col">
      {items.map((item, index) => (
        <motion.div
          className="relative pl-8 pb-12 last:pb-0"
          variants={itemVariants}
          key={item.primaryText}
        >
          <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-[#2d9e60] dark:bg-[#51255a] border-2 border-gray-200 dark:border-slate-900 z-10"></div>
          {index < items.length - 1 && (
            <div className="absolute left-[7px] top-4 h-full w-0.5 bg-[#2d9e609f] dark:bg-[#51255a83]"></div>
          )}
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
              <h3 className="font-semibold text-gray-900 dark:text-slate-200">
                {item.primaryText}
              </h3>
              <p className="text-sm text-gray-500 dark:text-slate-400 mt-1 sm:mt-0">
                {item.date}
              </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-slate-300">
              {item.secondaryText}
            </p>
            {Array.isArray(item.details) ? (
              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-600 dark:text-slate-400">
                {item.details.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : (
              item.details && <p className="mt-2 text-gray-600 dark:text-slate-400">{item.details}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const AboutContent: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.div variants={itemVariants}>
        <p className=" text-gray-900 dark:text-slate-200 leading-relaxed">
          Hi, i am Sayyid Sakhiy Sulaeman aslo known as Hio, a Software
          Developer, Motion Designer, and Video Editor. I'm based in Indonesia,
          and i have a passion on Machine Learning and Design. I love taking on challenging
          projects that will push me to learn and grow.
        </p>
        <div className="mt-4 flex items-center gap-4">
          <motion.a
            href="mailto:sayyidsakhiysulaeman@gmail.com"
            className="text-sm inline-flex items-center gap-2 px-4 py-2 bg-[#2d9e60] dark:bg-[#51255a] text-white  font-semibold rounded-lg hover:bg-[#9cb8a8] dark:hover:bg-[#847c99] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>

      <TimelineSection
        title="Experience"
        icon={FaBriefcase}
        items={experienceData}
      />
      <TimelineSection
        title="Education"
        icon={FaGraduationCap}
        items={educationData}
      />

      <motion.section
        className="mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl font-bold text-gray-800 dark:text-slate-100 mb-8 flex items-center gap-3"
        >
          <FaTrophy /> Achievements
        </motion.h2>
        <motion.ul
          variants={itemVariants}
          className="space-y-4 text-gray-600 dark:text-slate-400"
        >
          {achievementData.map((item) => (
            <li key={item.primaryText}>
              <div className="flex justify-between items-baseline">
                <span className="font-semibold text-gray-900 dark:text-slate-200">{item.primaryText}</span>
                <span className="text-sm text-gray-500 dark:text-slate-400 ml-4 flex-shrink-0">
                  ({item.secondaryText}, {item.date})
                </span>
              </div>
              <div className="text-sm mt-1">{item.details}</div>
            </li>
          ))}
        </motion.ul>
      </motion.section>

     <motion.hr
        className="my-16 border-[#a0b8a6] dark:border-[#212121]"
        variants={itemVariants}
      />

      <motion.section
        className="mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-gray-900 dark:text-slate-200 mb-8"
        >
          I usually play games and listen to music. You can also see my Artwork and other works on my Twitter.
        </motion.h2>
        <div className="space-y-4">
          <motion.div variants={itemVariants} className="flex items-start gap-4">
            <FaMapMarkerAlt className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-slate-200">I'm From</h3>
              <p className="text-gray-600 dark:text-slate-400">Cirebon, Jawa Barat, Indonesia</p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-start gap-4">
            <FaGamepad className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-slate-200">Hobby</h3>
              <p className="text-gray-600 dark:text-slate-400">Drawing, Games, Music</p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default AboutContent;