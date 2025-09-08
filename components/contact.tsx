import { Socials } from "@/components/socials";
import { ContactForm } from "@/components/contact-form";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-primary text-white">
      <div className="container px-2 text-center">
        <h2 className="text-5xl font-secondary font-extrabold mb-4">
          Contact Us
        </h2>
        <p className="max-w-160 mx-auto px-6 lg:px-0 mb-16 text-sm md:text-base">
          Our law firm is always ready to help you resolve complex legal
          matters. Contact us for professional consultation, personalized
          guidance, and effective solutions for your cases. We guarantee
          confidentiality and high-quality support at every step.
        </p>
        <ContactForm />
        <Socials />
      </div>
    </section>
  );
};
