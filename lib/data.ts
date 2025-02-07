import img1 from "@/public/images/commutator.jpg";
import img2 from "@/public/images/dc-motor.jpg";
import img3 from "@/public/images/electronic-repairs.jpg";
import img4 from "@/public/images/ac-motor.jpg";
import img5 from "@/public/images/new-motor-manufacturing-and-motor-upgrade.jpg";
import img6 from "@/public/images/brush-holders.jpg";
import img7 from "@/public/images/services.jpg";
import img8 from "@/public/images/slipring.jpg";
import img9 from "@/public/images/armature-coils.jpg";

import qualityImg from "@/public/images/sacas-quality.png";
import safetyImg from "@/public/images/sacas-safety.png";
import BEEImg from "@/public/images/BBBEE.png";
import macsImg from "@/public/images/masc.png";
import { certificate, List, Service } from "./types";

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
        point: "We repair standard motors from AC, Crane, Lift and Alternators",
      },
      { id: "2", point: "Computer aided and winding design" },
      { id: "3", point: "24 hour breakdown services 7 days a week" },
      { id: "4", point: "Collection and delivery services" },
      {
        id: "5",
        point: "Our services: full load testing, core loss and surge testing.",
      },
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
        point: "We repair standard motors from AC, Crane, Lift and Alternators",
      },
      {
        id: "2",
        point: "Our services: full load testing, core loss and surge testing.",
      },
      { id: "3", point: "Computer aided and winding design" },
      { id: "4", point: "24 hour breakdown services 7 days a week" },
      { id: "5", point: "Collection and delivery services" },
    ],
  },
  {
    id: "motor-manufacturing",
    title: "Motor Manufacturing & Upgrade",
    slug: "new-motor-manufacturing-and-motor-upgrade",
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
      { id: "1", point: "Special duty unique AC and DC motors" },
      { id: "2", point: "Low volumes produced" },
      { id: "3", point: "All steel construction" },
      { id: "4", point: "Designed and manufactured in SA" },
      { id: "5", point: "Increased output from old style motors" },
      { id: "6", point: "Improved enclosure protection" },
      { id: "7", point: "Improved motor cooling and efficiency" },
      { id: "8", point: "Improved insulation systems" },
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
    id: "slipring",
    title: "Slipring",
    slug: "slipring",
    image: img8,
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
      { id: "2", point: "Multi ring construction" },
      { id: "3", point: "Quick turnaround time" },
    ],
  },
  {
    id: "armature coils",
    title: "Armature Coils",
    slug: "armature-coils",
    image: img9,
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
      { id: "1", point: "For wave and lap armatures" },
      { id: "2", point: "Single conductor and multiple conductor coils" },
      { id: "3", point: "‘On edge‘ coil forming" },
      { id: "4", point: "Consistent accurate coil shape" },
      { id: "5", point: "Single turn and multiple turn coils" },
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

export const certificates: certificate[] = [
  {
    id: "quality management",
    name: "Quality ManageMent System (SACAS)",
    ref: "ISO 9001",
    image: qualityImg,
  },
  {
    id: "healthy & safety",
    name: "Occupational Healthy & Safety Management (SACAS) ",
    ref: "ISO 45001",
    image: safetyImg,
  },
  {
    id: "BBBEE",
    name: "BBBEE certificate (level 1 Contributer)",
    ref: "BBBEE certificate (level 1)",
    image: BEEImg,
  },

  {
    id: "low voltage",
    name: "Low voltate three phases induction motor (SANS)",
    ref: "SANS 10242-1",
    image: macsImg,
  },
  {
    id: "non-spacking motor",
    name: "Non-spacking motor (MACS)",
    ref: "SANS 600079-14",
    image: macsImg,
  },
  {
    id: "flame-proof motor",
    name: "Flame-proof Motor EX d (MACS)",
    ref: "SANS 600079-1",
    image: macsImg,
  },
];

export const facilities: List[] = [
  {
    id: "1",
    description: "Dyno & Regeneration load test",
  },
  {
    id: "2",
    description: "Mitchell electronics servo testing equipment",
  },
  {
    id: "3",
    description: "All test Pro winding analyzer",
  },
  {
    id: "4",
    description: "Field coil & Armature manufacturing equipment",
  },
  {
    id: "5",
    description: "Milling machines, presses, welding machine).",
  },
  {
    id: "6",
    description: "Surge & Core less testing",
  },
  {
    id: "7",
    description: "Fluke calibrated test equipment",
  },
  {
    id: "8",
    description: "High pressure AC and DC insulation testing",
  },
  {
    id: "9",
    description: "Baking and burn off ovens",
  },
  {
    id: "11",
    description: "Commutator spin seasoning machine",
  },
];

export const additionalServices: List[] = [
  {
    id: "1",
    description: "24 Hour breakdown services",
  },
  {
    id: "2",
    description: "Delivery/ collection services",
  },
  {
    id: "3",
    description: "Test reports ",
  },
  {
    id: "4",
    description: "Free technical assistance",
  },
  {
    id: "5",
    description: "On-site inspection",
  },
];

export const ranges: List[] = [
  {
    id: "1",
    description: "0-1100 volts AC",
  },
  {
    id: "2",
    description: "0-600 volts DC",
  },
  {
    id: "3",
    description: "0-300 amps",
  },
];

export const getServices = async (): Promise<Service[]> => {
  return services;
};

export async function getServiceBySlug(slug: string) {
  const services = await getServices();
  return services.find((service) => service.slug === slug);
}
