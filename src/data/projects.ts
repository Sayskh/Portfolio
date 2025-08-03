export interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
}
export const ALL_PROJECTS: Project[] = [
    {
    title: "Personal website",
    description:
      "The website that i use to showcase my works.",
    link: "#",
    tags: ["React.js", "Astro", "Tailwind"],
  },
    {
    title: "DeleteTweets",
    description:
      "Delete / Remove all your tweets.",
    link: "https://github.com/Sayskh/DeleteTweets",
    tags: ["JavaScript"],
  },
]