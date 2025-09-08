import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { teamList } from "@/data";

export const Team = () => {
  return (
    <section id="team" className="section">
      <div className="container flex flex-col justify-center items-center gap-8 text-center">
        <h2 className="text-5xl font-secondary font-extrabold">
          Our Attorneys
        </h2>
        <p className="max-w-135 mx-auto px-6 lg:px-0 text-sm md:text-base mb-10">
          Meet our experienced lawyers who are always ready to support and
          protect your interests. Each specialist has many years of legal
          experience and provides a personalized approach to every client. We
          strive to achieve the best results for you, ensuring professionalism
          and efficiency at every stage of the process.
        </p>
        <ul className="mx-auto px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {teamList.map(({ name, position, image, description }) => (
            <li key={name}>
              <Card className="h-full py-0 md:max-w-87 lg:max-w-none">
                <CardContent className="p-0 overflow-hidden h-100">
                  <Image
                    src={image}
                    alt={`${name} photo`}
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </CardContent>
                <CardHeader className="px-4 py-6 space-y-2">
                  <CardTitle className="text-2xl font-bold font-secondary">
                    {name}
                  </CardTitle>
                  <CardDescription className="p-0 text-sm uppercase tracking-[0.3px]">
                    {position}
                  </CardDescription>
                  <CardDescription className="text-gray">
                    {description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
