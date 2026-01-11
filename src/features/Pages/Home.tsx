import PriceCalculator from "@/features/Sections/PriceCalculator";
import Hero from "../Sections/Hero";
import OurServices from "../Sections/OurServices";
import Reels from "../Sections/Reels";
import GoogleRev from "../Sections/GoogleRev";
import Contact from "../Sections/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <OurServices />
      <Reels />
      <GoogleRev />
      <PriceCalculator />
      <Contact />
    </>
  );
};

export default Home;
