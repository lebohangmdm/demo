import { certificates } from "@/lib/data";
import CertificateCard from "../components/CertificateCard";
import SectionWrapper from "../components/SectionWrapper";

import type { Metadata } from "next";

const certificateUrl =
  "https://lhebnpqypzctccgh.public.blob.vercel-storage.com/BBBEE.png";

export const metadata: Metadata = {
  title: "Nisida Industries | Certificates",
  description:
    "Nisida Industries has the full range of qualifications and certifications to guarantee a high-quality, reliable working relationship.",
  openGraph: {
    title: "Nisida Industries | Certificates",
    description:
      "Nisida Industries has the full range of qualifications and certifications to guarantee a high-quality, reliable working relationship.",
    url: `https://nisidaa/certificates`,
    type: "article",
    siteName: "Nisida Industries",
    images: [
      {
        url: certificateUrl,
        width: 1200,
        height: 630,
        alt: "certificates",
      },
    ],
  },
};

const page = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-lg text-blue-500 font-semibold sm:text-xl md:text-2xl lg:text-3xl">
            Certificates
          </h3>
          <p className="mt-2 md:mt-4">
            Nisida Industry (PTY) has the full range of qualifications and
            certifications to guarantee a high-quality, reliable working
            relationship.
          </p>
          <p className="mt-1">
            <strong>Select link below to view certificates</strong>
          </p>

          <div className="mt-8 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 lg:gap-y-14">
            {certificates.map((certificate) => {
              return (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                />
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default page;
