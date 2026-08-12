export type ProjectCategory = "Java" | "Python" | "Web" | "Other";

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
  image?: string;
  featured?: boolean;
  category: ProjectCategory;
};

/**
 * Add a new project by appending one object to this array.
 *
 * Example:
 * {
 *   title: "Campus Library Tracker",
 *   description: "A Java console app that helps students check book availability.",
 *   technologies: ["Java", "OOP"],
 *   github: "https://github.com/snadhiyasivakumar/example",
 *   liveDemo: "",
 *   image: "/projects/library.png",
 *   featured: true,
 *   category: "Java",
 * }
 *
 * Only add projects that actually exist. The UI handles an empty list gracefully.
 */
export const projects: Project[] = [];

export const projectFilters = ["All", "Java", "Python", "Web", "Other"] as const;
export type ProjectFilter = (typeof projectFilters)[number];
