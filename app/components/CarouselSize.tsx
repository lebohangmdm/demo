import * as React from "react";
import anglo from "@/public/logos/anglo-american.jpg";
import at from "@/public/logos/at.png";
import goldFields from "@/public/logos/Gold_Fields_logo.svg.png";
import grayess from "@/public/logos/grayess.webp";
import pcb from "@/public/logos/pcb.webp";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";

type Logos = {
  name: string;
  image: StaticImageData;
};

const logos: Logos[] = [
  {
    name: "anglo-american logo",
    image: anglo,
  },
  {
    name: "at logo",
    image: at,
  },
  {
    name: "goldFields logo",
    image: goldFields,
  },
  {
    name: "grayess logo",
    image: grayess,
  },
  {
    name: "pcb logo",
    image: pcb,
  },
  {
    name: "goldFields logo-1",
    image: goldFields,
  },
  {
    name: "grayess logo-1",
    image: grayess,
  },
];

function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full overflow-hidden"
    >
      <CarouselContent>
        {logos.map((logo) => (
          <CarouselItem
            key={logo.name}
            className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 shrink-0"
          >
            <div className="p-1">
              <Card className="border-none shadow-none">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    width={150}
                    height={150}
                    style={{ objectFit: "cover" }}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex absolute top-1/2 left-2 hover:bg-blue-500 hover:text-white  transition-all duration-200 h-8 w-8 lg:h-10 lg:w-10" />
      <CarouselNext className="hidden sm:flex absolute top-1/2 right-2 hover:bg-blue-500 hover:text-white  transition-all duration-200 h-8 w-8 lg:h-10 lg:w-10" />
    </Carousel>
  );
}

export default CarouselSize;
