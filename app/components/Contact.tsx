import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="section-container">
      <h2 className="text-xl text-blue-500 font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
        Talk to us!
      </h2>
      <div className="mt-6 md:mt-12 grid lg:grid-cols-2 gap-16">
        <ContactForm />
        <h1 className="text-5xl text-black"> contact info</h1>
      </div>
    </section>
  );
};

export default Contact;
