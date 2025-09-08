import Link from "next/link";

import { cn } from "@/lib/utils";
import { socialList } from "@/data";

export const Socials = ({ className }: { className?: string }) => {
  return (
    <ul
      className={cn(
        "flex items-center justify-center gap-6 md:gap-12",
        className
      )}
    >
      {socialList.map(({ icon: Icon, href, label }) => (
        <li key={label}>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link to ${label}`}
            className="transition-all duration-300 hover:text-accent"
          >
            <Icon size={22} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
