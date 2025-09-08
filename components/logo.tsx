import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

export const Logo = () => {
  return (
    <ScrollLink
      to="home"
      smooth
      spy
      offset={-120}
      activeClass="active"
      className="flex items-center gap-2 cursor-pointer"
    >
      <Image
        src="/assets/logo.svg"
        alt="Logo"
        width={30}
        height={30}
        className="fill-inherit"
      />
      <span className="text-xl font-primary font-bold text-primary uppercase">
        The Lawyers
      </span>
    </ScrollLink>
  );
};
