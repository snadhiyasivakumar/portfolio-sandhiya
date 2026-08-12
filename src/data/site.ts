export const site = {
  name: "Sandhiya S",
  firstName: "Sandhiya",
  logo: "S.",
  badge: "Hey, I'm Sandhiya",
  supporting: "CSE Student • Developer • Problem Solver",
  intro:
    "Second-year Computer Science Engineering student passionate about software development, problem solving, and building practical skills through projects and continuous learning.",
  roles: [
    "Computer Science Student",
    "Java Developer",
    "Problem Solver",
    "Future Full-Stack Developer",
  ],
  email: "snadhiyasivakumar27@gmail.com",
  github: "https://github.com/snadhiyasivakumar",
  githubUser: "snadhiyasivakumar",
  linkedin: "https://www.linkedin.com/in/sandhiya-2768sivakumar/",
  /**
   * PROFILE PHOTO
   * Replace public/sandhiya.png with Sandhiya's preferred profile photo.
   * Keep the same filename, or update ProfileCard.tsx to match.
   */
  photoPath: "/sandhiya.png",
  about:
    "I'm a second-year Computer Science Engineering student who likes turning curiosity into working code. I spend most of my time learning how software is actually built — from clean Java programs to the logic behind data structures — and I enjoy the little wins that come with debugging something until it finally clicks.",
  interests: [
    "Software Development",
    "Problem Solving",
    "Data Structures & Algorithms",
    "Full-Stack Web Development",
  ],
} as const;

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
] as const;

export const navIds = navItems.map((item) => item.id);
