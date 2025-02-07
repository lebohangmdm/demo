import ContactForm from "@/app/components/ContactForm";
import ContactInfo from "@/app/components/ContactInfo";
import SectionWrapper from "./SectionWrapper";

const Contact = () => {
  return (
    <SectionWrapper>
      <div className="max-w-6xl px-4 md:px-8 mx-auto  mt-6 md:mt-12  grid lg:grid-cols-2 gap-16">
        <ContactForm />
        <ContactInfo />
      </div>
    </SectionWrapper>
  );
};

export default Contact;
