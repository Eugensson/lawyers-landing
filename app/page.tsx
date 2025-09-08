import { Banner } from "@/components/banner";
import { Skills } from "@/components/skills";
import { Testimonials } from "@/components/testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <Testimonials />
      <Skills />
      <div className="h-1000" />
    </>
  );
};

export default Home;
