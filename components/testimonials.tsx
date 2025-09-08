import { TestimonialSlider } from "@/components/testimonial-slider";

export const Testimonials = () => {
  return (
    <section className="h-86.5 lg:mb-30">
      <div className="container flex items-center justify-end">
        <div className="w-full mx-auto lg:mx-0 lg:max-w-130 xl:max-w-150">
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};
