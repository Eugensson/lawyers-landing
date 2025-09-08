import Image from "next/image";

import { skillList } from "@/data";

export const Skills = () => {
  return (
    <section id="skills" className="section bg-[#f8f3eca1]">
      <div className="container max-w-7xl text-center flex flex-col justify-center items-center gap-8">
        <h2 className="text-5xl font-secondary font-extrabold">What we do</h2>
        <p className="max-w-[80vw] lg:max-w-[60vw] mx-auto px-6 lg:px-0 mb-10 text-sm md:text-base">
          Our law firm provides a wide range of services, including legal
          consulting and court representation. We help resolve complex legal
          issues while ensuring the highest level of professionalism and
          confidentiality. Your trust is the greatest recognition of our work!
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
          {skillList.map(({ icon, title, description }) => (
            <li key={title} className="flex flex-col">
              <Image
                src={icon}
                alt={`${title} icon`}
                width={40}
                height={40}
                className="mb-4 mx-auto"
              />
              <h3 className="text-xl md:text-2xl mb-2 lg:mb-4 font-secondary font-bold">
                {title}
              </h3>
              <p className="max-w-[332px] mx-auto lg:max-w-[350px]">
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
