import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXFill,
  RiYoutubeLine,
} from "react-icons/ri";

export const navLinks = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "What we do",
    href: "skills",
  },
  {
    name: "Our team",
    href: "team",
  },
  {
    name: "Contact us",
    href: "contact",
  },
];

export const testimonialList = [
  {
    text: "I am very satisfied with the level of service! Every stage of our cooperation was clearly explained, and I felt supported at every step. The entire process was smooth, reliable, and handled with true professionalism.",
    name: "William O’Connor",
    image: "/assets/profile1.jpg",
    position: "Sales Representative",
  },
  {
    text: "The lawyers at this firm truly know their work! After contacting them, I received a clear explanation of my rights and the possible ways to resolve the situation. Their advice was practical, detailed, and gave me full confidence.",
    name: "Catherine Chen",
    image: "/assets/profile2.jpg",
    position: "Family Doctor",
  },
  {
    text: "This law firm exceeded all my expectations. I received prompt and professional assistance in resolving complex legal matters. Their dedication, expertise, and client-first approach made me feel fully supported from start to finish.",
    name: "Jonathan Smith",
    image: "/assets/profile3.jpg",
    position: "Entrepreneur",
  },
];

export const skillList = [
  {
    icon: "/assets/skills/skill2.png",
    title: "Labor Disputes",
    description:
      "Legal support in resolving conflicts between employees and employers, protecting labor rights effectively.",
  },
  {
    icon: "/assets/skills/skill3.png",
    title: "Property Rights Protection",
    description:
      "Protect property owners’ rights using judicial and extrajudicial methods, ensuring secure ownership.",
  },
  {
    icon: "/assets/skills/skill1.png",
    title: "Property Seizure Removal",
    description:
      "Legal help to lift property seizures and restore ownership rights through professional court procedures.",
  },
  {
    icon: "/assets/skills/skill4.png",
    title: "Tax Disputes",
    description:
      "Legal assistance in taxation matters, resolving disputes with tax authorities and protecting client interests.",
  },
  {
    icon: "/assets/skills/skill5.png",
    title: "Court Representation",
    description:
      "Represent clients in court, safeguarding their rights and lawful interests with professional legal support.",
  },
  {
    icon: "/assets/skills/skill6.png",
    title: "Credit Disputes",
    description:
      "Resolve disputes between debtors and creditors, providing effective legal support in loan and credit matters.",
  },
];

export const teamList = [
  {
    image: "/assets/lawyer1.jpg",
    name: "Alexander Cooper",
    position: "Financial & Business Law",
    description:
      "Alexander provides expert legal support in financial disputes and business law, ensuring efficient court representation and client protection.",
  },
  {
    image: "/assets/lawyer2.jpg",
    name: "Valentina Hughes",
    position: "Family & Labor Law",
    description:
      "Valentina assists clients with family and labor law matters, protecting their rights and offering professional guidance in court proceedings.",
  },
  {
    image: "/assets/lawyer3.jpg",
    name: "Victor Wallace",
    position: "Criminal & Land Law",
    description:
      "Victor handles criminal and land law cases, including property seizure removal, providing thorough legal support and professional representation.",
  },
];

export const socialList = [
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: RiFacebookFill,
  },
  {
    label: "TwitterX",
    href: "https://www.x.com",
    icon: RiTwitterXFill,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: RiInstagramLine,
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com",
    icon: RiYoutubeLine,
  },
  {
    label: "Linkedin",
    href: "https://www.linkedin.com",
    icon: RiLinkedinFill,
  },
];
