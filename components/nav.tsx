import { Link as ScrollLink } from "react-scroll";

import { navLinks } from "@/data";

export const Nav = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-6 text-sm text-primary font-semibold">
        {navLinks.map(({ name, href }) => (
          <li key={name}>
            <ScrollLink
              spy
              smooth
              to={href}
              offset={-40}
              activeClass="active"
              className="cursor-pointer transition-all duration-300 hover:text-accent"
            >
              {name}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
