import { Banner } from "@/components/banner";
import { Skills } from "@/components/skills";
import { Team } from "@/components/team";
import { Testimonials } from "@/components/testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <Testimonials />
      <Skills />
      <Team />
      <div className="h-1000" />
    </>
  );
};

export default Home;
