import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

export function ServiceCard({
  image,
  title,
  description,
  className,
}: {
  image: StaticImageData;
  title: string;
  description: string;
  className: string;
}) {
  return (
    <Card
      className={`max-w-[350px] shadow-lg rounded-none rounded-b-md  overflow-hidden ${className}`}
    >
      <Image
        src={image}
        alt="commutator image"
        objectFit="cover"
        className="object-cover h-[275px] transition-transform duration-300 hover:scale-110"
      />
      <CardHeader>
        <CardTitle className="text-lg font-medium text-blue-500">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant={"default"}
          size={"lg"}
          className="rounded-none capitalize tracking-wider font-medium text-base hover:bg-black transition-colors duration-200"
        >
          More Details
        </Button>
      </CardFooter>
    </Card>
  );
}
