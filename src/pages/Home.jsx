import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import RoyalStatistics from "../components/home/RoyalStatistics";
import FacilitiesPreview from "../components/home/FacilitiesPreview";
import GalleryPreview from "../components/home/GalleryPreview";
import SowbhagyaIntro from "../components/home/SowbhagyaIntro";
import SEO from "../components/common/SEO";

import PageTransition from "../components/common/PageTransition";

export default function Home() {
  return (
    <>
      <SEO 
        title="Premium Wedding & Event Venue in Chennai — Arumbakkam" 
        description="Chennai's premium wedding venue in Arumbakkam for weddings, receptions and engagements. AC halls, dining, luxury rooms and hospitality since 2001." 
        keywords="wedding venue Chennai, marriage hall Arumbakkam, reception hall Chennai"
      />
      <PageTransition>
        <Hero />
        <AboutPreview />
        <RoyalStatistics />
        <FacilitiesPreview />
        <GalleryPreview />
        <SowbhagyaIntro />
      </PageTransition>
    </>
  );
}
