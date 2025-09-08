export const Newsletter = () => {
  return (
    <section className="section bg-accent">
      <div className="container px-2 text-center">
        <h2 className="font-secondary mb-6 text-[40px] font-extrabold leading-[1.2] -tracking-tighter text-white">
          Subscribe to Our Newsletter
        </h2>
        <p className="mb-10 max-w-150 mx-auto text-sm md:text-base text-white">
          Get the latest updates, news, and exclusive offers delivered straight
          to your inbox. Stay informed and never miss important updates!
        </p>
        <form className="flex flex-col md:flex-row gap-2 md:gap-4 max-w-[600px] mx-auto">
          <input
            type="email"
            className="form-control mb-4"
            placeholder="Your email address"
          />
          <button
            type="submit"
            className="btn bg-primary hover:bg-primary-hover transition-all md:max-w-40"
          >
            Join
          </button>
        </form>
      </div>
    </section>
  );
};
