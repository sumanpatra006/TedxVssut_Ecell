import About from "../sections/About.jsx";
import { HeroSection } from "../sections/Home.jsx";
import Speakers from "../sections/Speakers";
import Crew from "../sections/Crew";
import Timeline from "../sections/Timeline/Timeline.jsx";
import { Venue } from "../sections/Venue.jsx";
import VenueCard from "../sections/VenueCard.jsx";
import Highlights from "../sections/Highlights.jsx";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <About />
      <Speakers />
      <Timeline />
      <Venue />
      <Highlights />
      <Crew />
    </div>
  );
}
