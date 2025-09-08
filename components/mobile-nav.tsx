"use client";

import { useState } from "react";
import { GrMenu, GrClose } from "react-icons/gr";
import { Link as ScrollLink } from "react-scroll";

import { cn } from "@/lib/utils";
import { navLinks } from "@/data";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="lg:hidden relative z-20">
      <button
        type="button"
        title="Open mobile menu"
        aria-label="Open mobile menu"
        onClick={() => setIsOpen(true)}
      >
        <GrMenu size={30} />
      </button>
      <nav
        className={cn(
          "fixed top-0 w-full h-screen flex flex-col items-center justify-center gap-8 transition-all duration-300 text-lg bg-primary text-white",
          isOpen ? "right-0" : "-right-full"
        )}
      >
        <button
          type="button"
          title="Close mobile menu"
          aria-label="Close mobile menu"
          onClick={() => setIsOpen(false)}
          className="absolute top-8 left-8"
        >
          <GrClose size={30} />
        </button>
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map(({ name, href }) => (
            <li key={name}>
              <ScrollLink
                spy
                to={href}
                offset={-200}
                activeClass="active"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </nav>
  );
};
