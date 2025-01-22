import { StaticImageData } from "next/image";

export interface contactFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export interface ActionResponse {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof contactFormData]?: string[];
  };
  inputs?: contactFormData;
}

export type Service = {
  id: string;
  title: string;
  slug: string;
  image: StaticImageData;
  summary: { id: string; description: string }[];
  details: string;
  keyPoints: { id: string; point: string }[];
};

export type Link = {
  id: string;
  name: string;
  href: string;
};

export type certificate = {
  id: string;
  name: string;
  ref: string;
  image: StaticImageData;
};

export type List = {
  id: string;
  description: string;
};
