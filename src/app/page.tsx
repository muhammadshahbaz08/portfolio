import Hero from "./component/hero";
import About from "./component/about";
import Projects from "./component/projects";
import Contact from "./component/contact";
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
