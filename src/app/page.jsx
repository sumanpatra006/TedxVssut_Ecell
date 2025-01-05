import Crew from '../sections/Crew';
import About from '../sections/About.jsx';
import { HeroSection } from '../sections/Home.jsx';
import Speakers from "../sections/Speakers";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Crew />
      <About />
      <Speakers />
    </div>
  );
}
