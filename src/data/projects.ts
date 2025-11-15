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
    link: "https://github.com/Sayskh/Portfolio",
    tags: ["Astro", "Tailwind"],
  },
    {
    title: "Delete Tweets",
    description:
      "Delete / Remove all your tweets.",
    link: "https://github.com/Sayskh/DeleteTweets",
    tags: ["JavaScript"],
  },
]