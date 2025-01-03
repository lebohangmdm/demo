import { ServiceCard } from "@/app/components/ServiceCard";
import { getServices } from "@/lib/data";

const Services = async () => {
  const services = await getServices();

  return (
    <section className="bg-primary-foreground">
      <div className="section-container">
        <h2 className="text-xl text-blue-500 font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
          Services
        </h2>
        <div className="mt-6 md:mt-12  grid justify-center items-center gap-12 md:grid-cols-2 md:gap-y-14 lg:grid-cols-3 lg:gap-y-16 ">
          {services.map((service, index) => {
            return (
              <ServiceCard
                key={service.id}
                slug={service.slug}
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
