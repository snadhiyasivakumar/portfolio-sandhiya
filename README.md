# Sandhiya S — Portfolio

A premium glassmorphism personal portfolio for **Sandhiya S**, a second-year Computer Science Engineering student.

Built with **React + Vite + TypeScript + Tailwind CSS + Framer Motion**. No backend. No database. Content lives in local TypeScript files.

## Quick start

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Replace the profile photo

This is the one thing you should do first.

1. Export a clear, well-lit portrait (ideally portrait orientation, head + shoulders).
2. Name it exactly `sandhiya.png`.
3. Drop it here, replacing the placeholder:

```
public/sandhiya.png
```

That's it. Refresh the site.

The photo is used by `src/components/ProfileCard.tsx`. There is a comment in that file:

```
// Replace /public/sandhiya.png with Sandhiya's preferred profile photo
```

If you want a different filename, update that import in `ProfileCard.tsx`.

## Update content (no code hunting)

| What you want to change | File |
|---|---|
| Name, bio, email, GitHub, LinkedIn | `src/data/site.ts` |
| Projects | `src/data/projects.ts` |
| Skills | `src/data/skills.ts` |
| Timeline | `src/data/journey.ts` |
| Currently learning cards | `src/data/skills.ts` (`learningNow`) |

### Add a project

Open `src/data/projects.ts` and append one object:

```ts
{
  title: "Campus Library Tracker",
  description: "A Java console app that helps students check book availability.",
  technologies: ["Java", "OOP"],
  github: "https://github.com/snadhiyasivakumar/example",
  liveDemo: "",
  image: "/projects/library.png",
  featured: true,
  category: "Java",
}
```

Only add projects that actually exist. The UI already has a tasteful empty state.

## Design notes

- Dark glassmorphism, champagne gold, dusty rose, periwinkle — not neon.
- Playful micro-interactions stay subtle (photo stickers, coffee cup, easter egg).
- `prefers-reduced-motion` is respected across animations.
- GitHub repos load client-side from the public API and fail gracefully.

## Easter egg

Click the tiny `:)` in the footer a few times.
