import { ServiceCard } from "@/app/components/ServiceCard";
import { getServices } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";

const Services = async () => {
  const services = await getServices();

  return (
    <SectionWrapper delay={0.5}>
      <div className="flex flex-col gap-6 md:gap-12 lg:gap-16">
        <h2 className="text-xl text-blue-500 font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
          Services
        </h2>
        <div className="grid justify-center items-center gap-12 sm:grid-cols-2 md:gap-y-14 lg:grid-cols-3 lg:gap-y-16 ">
          {services.map((service, index) => {
            return (
              <ServiceCard
                key={service.id}
                slug={service.slug}
                title={service.title}
                image={service.image}
                description={service.details}
                className={`${index % 2 === 0 ? "md:justify-self-end" : ""}`}
              />
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;
