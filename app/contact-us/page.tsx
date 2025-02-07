import React from "react";
import ContactForm from "@/app/components/ContactForm";
import ContactInfo from "@/app/components/ContactInfo";
import Map from "@/app/components/Map";
import type { Metadata } from "next";

const contactUrl =
  "https://lhebnpqypzctccgh.public.blob.vercel-storage.com/contact-us.jpg";

export const metadata: Metadata = {
  title: "Nisida Industries | Contact Us",
  description:
    "Nisida, a Level 1 BEE-rated company based in Industria, Johannesburg, specializes in AC and DC motor repairs, servo and stepper motsor repairs, and custom motor design and manufacturing",
  openGraph: {
    title: "Nisida Industries | Contact Us",
    description:
      "Contact Us on +27 83 521 4412 | john@gmail.com. Our physical address is 2164 Albertina Sisulu Road Industria, Johannesburg ",
    url: `https://nisidaa/certificates`,
    type: "article",
    siteName: "Nisida Industries",
    images: [
      {
        url: contactUrl,
        width: 1200,
        height: 630,
        alt: "about-us",
      },
    ],
  },
};

const page = () => {
  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl px-4 md:px-8 mx-auto  mt-6 md:mt-12  grid lg:grid-cols-2 gap-16">
        <ContactForm />
        <ContactInfo />
      </div>
      <Map />
    </section>
  );
};

export default page;
