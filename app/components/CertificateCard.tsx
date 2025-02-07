import Image, { StaticImageData } from "next/image";
import React from "react";

interface PageProps {
  id: string;
  name: string;
  ref: string;
  image: StaticImageData;
}

const CertificateCard = ({ certificate }: { certificate: PageProps }) => {
  return (
    <div className="py-5 px-4 overflow-hidden space-y-3 border border-slate-200 hover:shadow-lg transition-transform duration-300 hover:scale-105 dark:border-foreground ">
      <Image
        src={certificate.image}
        alt={certificate.name}
        style={{ objectFit: "cover", objectPosition: "cover" }}
        className="mx-auto"
      />
      <div className="text-center space-y-1.5">
        <p>{certificate.ref}</p>
        <p className="text-blue-500 capitalize">{certificate.name}</p>
      </div>
    </div>
  );
};

export default CertificateCard;
