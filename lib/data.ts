import img1 from "@/public/images/commutator.jpg";
import img2 from "@/public/images/dc-motor.jpg";
import img3 from "@/public/images/electronic-repairs.jpg";
import img4 from "@/public/images/ac-motor.jpg";
import img5 from "@/public/images/new-motors.jpg";
import img6 from "@/public/images/brush-holders.jpg";
import img7 from "@/public/images/services.jpg";
import { Service } from "./types";

const services: Service[] = [
  {
    id: "commutator",
    title: "Commutator",
    slug: "commutator",
    image: img1,
    summary: [
      {
        id: "desc 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore est voluptate. Est magni amet blanditiis deleniti ea dolores exercit",
      },
      {
        id: "desc 2",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore est voluptate. Est magni amet blanditiis deleniti ea dolores exercit",
      },
    ],
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore",
    keyPoints: [
      { id: "1", point: "From 40mm D/A upwards" },
      { id: "2", point: "Locknut or bolted construction" },
      { id: "3", point: "Class F & H insulation" },
      { id: "4", point: "Commutators spin seasoned before dispatched" },
      { id: "5", point: "Quick turnaround time" },
    ],
  },
  {
    id: "dc-motor",
    title: "DC Motor",
    slug: "dc-motor",
    image: img2,
    summary: [
      {
        id: "desc 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore est voluptate. Est magni amet blanditiis deleniti ea dolores exercit",
      },
      {
        id: "desc 2",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore est voluptate. Est magni amet blanditiis deleniti ea dolores exercit",
      },
    ],
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore",
    keyPoints: [
      {
        id: "1",
        point:
          "We repair standard AC motors, Crane motors, Lift motors, and Alternators",
      },
      {
        id: "2",
        point:
          "Our services include full load test facilities, Core loss testing, surge testing",
      },
      { id: "3", point: "Computer aided and winding design" },
      { id: "4", point: "24 hour breakdown services 7 days a week" },
      { id: "5", point: "Collection and delivery services" },
    ],
  },
  {
    id: "electronic-repairs",
    title: "Electronic Repairs",
    slug: "electronic-repairs",
    image: img3,
    summary: [
      {
        id: "desc 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore est voluptate. Est magni amet blanditiis deleniti ea dolores exercit",
      },
      {
        id: "desc 2",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore est voluptate. Est magni amet blanditiis deleniti ea dolores exercit",
      },
    ],
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore",
    keyPoints: [
      { id: "1", point: "Wide range of feedback devices supported" },
      { id: "2", point: "Accurate encorder and resolver phase alignment" },
      { id: "3", point: "Winding test and rewind if necessary" },
      { id: "4", point: "Mechanical repairs" },
      { id: "5", point: "Brake and feedback replacement as needed" },
    ],
  },
  {
    id: "ac-motor",
    title: "AC Motor",
    slug: "ac-motor",
    image: img4,
    summary: [
      {
        id: "desc 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore est voluptate. Est magni amet blanditiis deleniti ea dolores exercit",
      },
      {
        id: "desc 2",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore est voluptate. Est magni amet blanditiis deleniti ea dolores exercit",
      },
    ],
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore",
    keyPoints: [
      {
        id: "1",
        point:
          "We repair standard AC motors, Crane motors, Lift motors, and Alternators",
      },
      {
        id: "2",
        point:
          "Our services include full load test facilities, Core loss testing, surge testing",
      },
      { id: "3", point: "Computer aided and winding design" },
      { id: "4", point: "24 hour breakdown services 7 days a week" },
      { id: "5", point: "Collection and delivery services" },
    ],
  },
  {
    id: "new-motor",
    title: "New Motor Manufacturing",
    slug: "new-motor-manufacturing",
    image: img5,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore",
    summary: [
      {
        id: "desc 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore est voluptate. Est magni amet blanditiis deleniti ea dolores exercit",
      },
      {
        id: "desc 2",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore est voluptate. Est magni amet blanditiis deleniti ea dolores exercit",
      },
    ],
    keyPoints: [
      { id: "1", point: "Special duty unique AC motors" },
      { id: "2", point: "Special duty unique DC motors" },
      { id: "3", point: "Low volumes produced" },
      { id: "4", point: "All steel construction" },
      { id: "5", point: "Designed and manufactured in SA" },
    ],
  },
  {
    id: "brushes-holders",
    title: "Brush Holders",
    slug: "brush-holders",
    image: img6,
    summary: [
      {
        id: "desc 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore est voluptate. Est magni amet blanditiis deleniti ea dolores exercit",
      },
      {
        id: "desc 2",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore est voluptate. Est magni amet blanditiis deleniti ea dolores exercit",
      },
    ],
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore",
    keyPoints: [
      { id: "1", point: "Small production runs" },
      { id: "2", point: "Single and multi-box design" },
      { id: "3", point: "Accurate machining to ensure good brush fit" },
      { id: "4", point: "Constant force and clock spring options" },
      { id: "5", point: "Complete brush gears" },
    ],
  },
  {
    id: "services",
    title: "Services",
    slug: "services",
    image: img7,
    summary: [
      {
        id: "desc 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore est voluptate. Est magni amet blanditiis deleniti ea dolores exercit",
      },
      {
        id: "desc 2",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore est voluptate. Est magni amet blanditiis deleniti ea dolores exercit",
      },
    ],
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat magni nobis inventore",
    keyPoints: [
      { id: "1", point: "On-site motor monitoring" },
      { id: "2", point: "Thermal ‘image’" },
      { id: "3", point: "On-site troubleshooting" },
      { id: "4", point: "Remove and reconnect motor" },
      { id: "5", point: "Motor selection assistance" },
    ],
  },
];

export const getServices = async (): Promise<Service[]> => {
  return services;
};

export async function getServiceBySlug(slug: string) {
  const services = await getServices();
  return services.find((service) => service.slug === slug);
}
