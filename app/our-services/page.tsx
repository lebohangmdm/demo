import Services from "@/app/components/Services";
import Partner from "@/app/components/Partner";
import { Metadata } from "next";

const servicesUrl =
  "https://lhebnpqypzctccgh.public.blob.vercel-storage.com/hero.jpg";

export const metadata: Metadata = {
  title: "Nisida Industries | Our Services",
  description:
    "Nisida offers expert motor repair and manufacturing services, specializing in AC & DC motor repairs, servo & stepper motor servicing, custom motor designs, and reconditioning of commutators, slip rings, and brush holders. We also provide armature and field coil manufacturing for top-notch performance and reliability.",
  openGraph: {
    title: "Nisida Industries | Our Services",
    description:
      "Nisida offers expert motor repair and manufacturing services, specializing in AC & DC motor repairs, servo & stepper motor servicing, custom motor designs, and reconditioning of commutators, slip rings, and brush holders. We also provide armature and field coil manufacturing for top-notch performance and reliability.",
    url: `https://nisidaa/certificates`,
    type: "article",
    siteName: "Nisida Industries",
    images: [
      {
        url: servicesUrl,
        width: 1200,
        height: 630,
        alt: "our services",
      },
    ],
  },
};

const page = async () => {
  return (
    <>
      <Services />
      <Partner />
    </>
  );
};

export default page;
