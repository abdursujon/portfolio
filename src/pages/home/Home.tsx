import Hero from "./home-components/Hero"
import Git from "./home-components/Git";
import Experience from "./home-components/Experience";
import Skill from "./home-components/Skill";
import Education from "./home-components/Education";
import Interest from "./home-components/Interest";
import Contact from "./home-components/Contact"

export default function Home() {
  return (
    <main>
        <Hero/>
        <Git/>
        <Experience/>
        <Skill/>
        <Education/>
        <Interest/>
        <Contact/>
    </main>
  );
}