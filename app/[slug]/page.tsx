import { getServiceBySlug, getServices } from "@/lib/data";
import { notFound } from "next/navigation";
import { Service } from "@/lib/types";
import type { Metadata } from "next";
import AnimatedSlugSection from "../components/AnimatedSlugSection";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}
const imgUrl = "https://lhebnpqypzctccgh.public.blob.vercel-storage.com";
const imgExt: "jpg" | "png" = "jpg";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  // fetch data
  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Nisida Industries | 404 Not Found",
      description: "The page does not exist.",
    };
  }

  return {
    title: `Nisida Industries | ${service?.title}`,
    description: service?.details,
    openGraph: {
      title: `Nisida Industries | ${service?.title}`,
      description: service?.details,
      url: `https//nisidaa.co.za/${service?.title}`,
      type: "article",
      siteName: `Nisida Industries`,
      images: [
        {
          url: `${imgUrl}/${slug}.${imgExt}`,
          width: 1200,
          height: 630,
          alt: service?.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const services = await getServices(); // Fetch all service slugs
  return services.map((service) => ({ slug: service.slug }));
}

const page = async ({ params }: Props) => {
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
