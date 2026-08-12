import { About } from "./components/About";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Contact } from "./components/Contact";
import { CurrentlyLearning } from "./components/CurrentlyLearning";
import { CursorFollowers } from "./components/CursorFollowers";
import { Footer } from "./components/Footer";
import { GitHubSection } from "./components/GitHubSection";
import { Hero } from "./components/Hero";
import { Journey } from "./components/Journey";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink font-sans text-cream">
      <AnimatedBackground />
      <CursorFollowers />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <CurrentlyLearning />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
