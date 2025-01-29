import { getServiceBySlug, getServices } from "@/lib/data";
import { notFound } from "next/navigation";
import { Service } from "@/lib/types";
import AnimatedSlugSection from "../components/AnimatedSlugSection";

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
      <AnimatedSlugSection service={service} />
    </section>
  );
};

export default page;
