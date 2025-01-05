import About from '../sections/About.jsx';
import { HeroSection } from '../sections/Home.jsx';
import Speakers from "../sections/Speakers";
import Crew from '../sections/Crew';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Speakers />
       <Crew />
    </div>
  );
}
