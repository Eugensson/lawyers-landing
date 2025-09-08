import Image from "next/image";

import { Header } from "@/components/header";
import { Appointment } from "@/components/appointment";

export const Banner = () => {
  return (
    <section
      id="home"
      className="lg:h-full lg:max-h-200 bg-gradient-to-t from-[#f8f3ec] to-[#e0c8ac]"
    >
      <Header />
      <div className="container lg:flex pt-32">
        <div className="mx-auto px-5 md:p-0 h-full text-center lg:text-left">
          <h1 className="capitalize font-secondary font-bold text-4xl md:text-6xl lg:text-6xl text-primary mb-4 lg:mt-17.5 leading-tight lg:leading-[90px]">
            Your Challenges
            <br />
            <span className="text-accent">Our Legal Solutions.</span>
          </h1>
          <p className="max-w-sm mb-12.5 mx-auto lg:mx-0 lg:max-w-135">
            Your trusted partner in legal matters – we provide comprehensive
            legal solutions for any situation, delivering professional support
            and a personalized approach tailored to every client.
          </p>
          <div className="lg:absolute mx-auto max-w-110 lg:mx-0">
            <Appointment />
          </div>
        </div>
        <div className="hidden lg:flex flex-1 flex-col items-end relative">
          <Image
            src="/assets/banner.png"
            width={1000}
            height={1000}
            alt="Banner"
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
