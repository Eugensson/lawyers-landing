"use client";

import { useEffect, useState } from "react";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [bg, setBg] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setBg(true);
      } else {
        setBg(false);
      }
    });
  }, []);

  return (
    <header
      className={cn(
        "fixed z-10 w-full p-8 lg:px-0 transition-all duration-300",
        bg && "bg-white shadow-md py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Logo />
        <Nav />
        <MobileNav />
      </div>
    </header>
  );
};
