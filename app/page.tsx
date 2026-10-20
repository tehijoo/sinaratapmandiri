import Hero from "@/components/home/Hero";
import ApplicationStrip from "@/components/home/ApplicationStrip";
import Advantages from "@/components/home/Advantages";
import ServiceCards from "@/components/home/ServiceCards";
import Process from "@/components/Process";
import ProjectsMarquee from "@/components/home/ProjectsMarquee";
import LatestArticles from "@/components/home/LatestArticles";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ApplicationStrip />
      <Advantages />
      <ServiceCards />
      <Process />
      <ProjectsMarquee />
      <LatestArticles />
      <CtaBanner />
    </>
  );
}
