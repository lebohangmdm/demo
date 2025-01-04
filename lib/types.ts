import { StaticImageData } from "next/image";

export type KeyPoint = {
  id: string;
  point: string;
};

export type Service = {
  id: string;
  title: string;
  slug: string;
  image: StaticImageData;
  summary: { id: string; description: string }[];
  details: string;
  keyPoints: KeyPoint[];
};
