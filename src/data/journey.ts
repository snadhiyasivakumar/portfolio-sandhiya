export type JourneyItem = {
  title: string;
  detail: string;
  tag: string;
  year: string;
};

export const journey: JourneyItem[] = [
  {
    title: "Computer Science Engineering",
    detail:
      "Second-year CSE student building a strong foundation in programming, logic, and how software systems fit together.",
    tag: "Now",
    year: "Present",
  },
  {
    title: "Currently learning Data Structures & Algorithms",
    detail:
      "Training the problem-solving muscle — breaking problems down, choosing the right structure, and writing clearer logic.",
    tag: "Focus",
    year: "Ongoing",
  },
  {
    title: "Building hands-on project experience",
    detail:
      "Turning classroom concepts into small, real programs. This space will fill up as new work ships.",
    tag: "Build",
    year: "In progress",
  },
  {
    title: "Exploring software development",
    detail:
      "Curious about how ideas become products — from Java fundamentals toward full-stack development.",
    tag: "Next",
    year: "Ahead",
  },
];
