export type SkillHover = "coffee" | "snake" | "nodes" | "browser" | "compile" | "layers";

export type Skill = {
  name: string;
  category: "Languages" | "Web" | "Core Concepts";
  hover: SkillHover;
  blurb: string;
};

export const skills: Skill[] = [
  {
    name: "Java",
    category: "Languages",
    hover: "coffee",
    blurb: "My current home language.",
  },
  {
    name: "C",
    category: "Languages",
    hover: "compile",
    blurb: "Learning how computers actually think.",
  },
  {
    name: "Python",
    category: "Languages",
    hover: "snake",
    blurb: "For quick experiments and logic.",
  },
  {
    name: "HTML",
    category: "Web",
    hover: "browser",
    blurb: "The first brick of the web.",
  },
  {
    name: "Data Structures & Algorithms",
    category: "Core Concepts",
    hover: "nodes",
    blurb: "Training the problem-solving muscle.",
  },
  {
    name: "Object-Oriented Programming",
    category: "Core Concepts",
    hover: "layers",
    blurb: "Thinking in objects, not just lines.",
  },
];

export const learningNow = [
  { name: "Java", status: "Practicing...", note: "Writing cleaner programs every week." },
  { name: "Data Structures & Algorithms", status: "Learning...", note: "Patterns, patience, and more patterns." },
  { name: "Python", status: "Exploring...", note: "Small scripts, big curiosity." },
  { name: "Web Development", status: "Building...", note: "HTML first, then the rest of the stack." },
  { name: "Problem Solving", status: "Daily...", note: "One question at a time." },
] as const;
