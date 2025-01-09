import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import { getServiceBySlug, getServices } from "@/lib/data";
import { notFound } from "next/navigation";
import { Service } from "@/lib/types";

export async function generateStaticParams() {
  const services = await getServices(); // Fetch all service slugs
  return services.map((service) => ({ slug: service.slug }));
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const service: Service | undefined = await getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <section className="section-container">
      <div className="grid md:grid-cols-[55%_45%] gap-8 lg:grid-cols-2 md:gap-12 lg:gap-16">
        <div className="flex flex-col gap-8  md:gap-10 lg:gap-12">
          <h2 className="text-xl text-blue-500 font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
            {service?.title}
          </h2>
          <div className="space-y-4">
            {service.summary.map((desc) => {
              return (
                <p key={desc.id} className="text-sm md:text-base">
                  {desc.description}
                </p>
              );
            })}
          </div>
          <ul className="flex flex-col gap-2">
            {service?.keyPoints.map((keyPoint) => {
              return (
                <li key={keyPoint.id} className="flex items-center gap-2">
                  <CircleCheckBig className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />
                  <span className="text-sm lg:text-base">{keyPoint.point}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <Image
            src={service?.image}
            alt={service?.title}
            style={{ objectFit: "cover" }}
            className="w-full sm:w-5/6  md:w-3/4 lg:w-4/5  mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default page;
