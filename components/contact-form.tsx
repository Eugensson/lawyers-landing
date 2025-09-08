export const ContactForm = () => {
  return (
    <form className="md:px-8 lg:px-0 max-w-150 mx-auto flex flex-col gap-6 mb-12">
      <input type="text" className="form-control" placeholder="Full name" />
      <input
        type="email"
        className="form-control"
        placeholder="Email address"
      />
      <textarea className="textarea" placeholder="Message" />
      <button
        type="submit"
        className="btn bg-accent hover:bg-accent-hover transition-all"
      >
        Send message
      </button>
    </form>
  );
};
