import { ServiceCard } from "@/app/components/ServiceCard";
import { StaticImageData } from "next/image";
import img1 from "@/public/images/commutator.jpg";
import img2 from "@/public/images/dc-motor.jpg";
import img3 from "@/public/images/electronic-repairs.jpg";
import img4 from "@/public/images/ac-motor.jpg";
import img5 from "@/public/images/new-motors.jpg";
import img6 from "@/public/images/brush-holders.jpg";
import img7 from "@/public/images/services.jpg";

type service = {
  id: string;
  title: string;
  image: StaticImageData;
  description: string;
};

const services: service[] = [
  {
    id: "commutator",
    title: "Commutator",
    image: img1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore est voluptate. Est magni amet blanditiis deleniti ea dolores exercit",
  },
  {
    id: "dc-motor",
    title: "DC Motor",
    image: img2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore est voluptate. Est magni amet blanditiis deleniti ea dolores exercit",
  },
  {
    id: "electronic-repairs",
    title: "Electronic Repairs",
    image: img3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore est voluptate. Est magni amet blanditiis deleniti ea dolores exercit",
  },
  {
    id: "ac-motor",
    title: "AC Motor",
    image: img4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore est voluptate. Est magni amet blanditiis deleniti ea dolores exercit",
  },
  {
    id: "new-motor",
    title: "New Motor Manufacturing",
    image: img5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore est voluptate. Est magni amet blanditiis deleniti ea dolores exercit",
  },
  {
    id: "brushes-holders",
    title: "Brush Holders",
    image: img6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore est voluptate. Est magni amet blanditiis deleniti ea dolores exercit",
  },
  {
    id: "services",
    title: "Services",
    image: img7,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore est voluptate. Est magni amet blanditiis deleniti ea dolores exercit",
  },
];

const Services = () => {
  return (
    <section className="bg-blue-50">
      <div className="section-container">
        <h2 className="text-xl text-blue-500 font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
          Services
        </h2>
        <div className="mt-8 grid justify-center items-center gap-12 md:grid-cols-2 md:gap-y-14 lg:grid-cols-3 lg:gap-y-16 ">
          {services.map((service, index) => {
            return (
              <ServiceCard
                key={service.id}
                title={service.title}
                image={service.image}
                description={service.description}
                className={`${index % 2 === 0 ? "md:justify-self-end" : ""}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
