export const Appointment = () => {
  return (
    <form className="w-full max-w-88 md:max-w-md mx-auto p-8 rounded-sm bg-accent">
      <h3 className="text-white text-2xl lg:text-3xl font-bold tracking-[0.3px] text-center">
        Get an Appointment
      </h3>
      <div className="w-14 h-0.75 bg-white my-6 mx-auto" />
      <div className="space-y-6">
        <input type="text" className="form-control" placeholder="Full name" />
        <input
          type="text"
          className="form-control"
          placeholder="Phone number"
        />
        <input
          type="email"
          className="form-control"
          placeholder="Email address"
        />
        <textarea className="textarea" placeholder="Your message" />
        <button
          type="button"
          className="btn bg-primary hover:bg-primary-hover transition-colors duration-300"
          aria-label="Submit appointment"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};
