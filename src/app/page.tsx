import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import AboutPreview from "@/components/sections/AboutPreview";
import ExperiencePreview from "@/components/sections/ExperiencePreview";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <AboutPreview />
      <ExperiencePreview />
      <ContactCTA />
    </>
  );
}
