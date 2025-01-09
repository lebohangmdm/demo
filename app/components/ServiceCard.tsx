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
import Link from "next/link";

export function ServiceCard({
  image,
  title,
  slug,
  description,
  className,
}: {
  image: StaticImageData;
  title: string;
  slug: string;
  description: string;
  className: string;
}) {
  return (
    <Card
      className={`max-w-[350px] shadow-lg rounded-none rounded-b-md  overflow-hidden ${className}`}
    >
      <Image
        src={image}
        alt={title}
        style={{ objectFit: "cover" }}
        className="object-cover h-[275px] transition-transform duration-300 hover:scale-110"
        quality={90}
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
          asChild
        >
          <Link href={`/${slug}`}>More Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
