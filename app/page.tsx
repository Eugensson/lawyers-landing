import { Team } from "@/components/team";
import { Banner } from "@/components/banner";
import { Footer } from "@/components/footer";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Newsletter } from "@/components/newsletter";
import { Testimonials } from "@/components/testimonials";
import { BackToTopBtn } from "@/components/back-to-top-btn";

const Home = () => {
  return (
    <>
      <Banner />
      <Testimonials />
      <Skills />
      <Team />
      <Newsletter />
      <Contact />
      <Footer />
      <BackToTopBtn />
    </>
  );
};

export default Home;
