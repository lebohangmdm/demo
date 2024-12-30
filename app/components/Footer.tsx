import React from "react";
import logo from "@/public/nisida-removebg-preview.png";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  MoveRight,
  PhoneCall,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto pb-4 pt-6 px-4 md:pb-8 md:py-12 md:px-8 ">
      <div className="grid grid-cols-2  lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-x-4 gap-y-8  md:gap--10 ">
        <div className="flex flex-col justify-between gap-6 order-3">
          <h1 className="text-lg font-semibold">Nisida Industries</h1>
          <p className="text-sm md:text-base">
            Nisida is a level 1 BEE rated company based in Industria
            Johannesburg.
          </p>
          <p className="text-xs md:text-sm text-balance">
            Copyright © Nisida industry (PTY) 2025. All rights reserved
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-base font-semibold uppercase md:text-lg">
            Services
          </p>
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                href={"/dc-motor"}
                className="text-sm md:text-base hover:text-blue-500 transition-all duration-150"
              >
                Commutator
              </Link>
            </li>
            <li>
              <Link
                href={"/dc-motor"}
                className="text-sm md:text-base hover:text-blue-500 transition-all duration-150"
              >
                Ac Motor
              </Link>
            </li>

            <li>
              <Link
                href={"/dc-motor"}
                className="text-sm md:text-base hover:text-blue-500 transition-all duration-150"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href={"/dc-motor"}
                className="text-sm md:text-base hover:text-blue-500 transition-all duration-150"
              >
                DC Motor
              </Link>
            </li>
            <li>
              <Link
                href="/brush-holders"
                className="text-sm md:text-base hover:text-blue-500 transition-all duration-150"
              >
                Brush Holder
              </Link>
            </li>
            <li>
              <Link
                href="/electronic-repair"
                className="text-sm md:text-base hover:text-blue-500 transition-all duration-150"
              >
                Electronic Repair
              </Link>
            </li>
            <li>
              <Link
                href={"/dc-motor"}
                className="text-sm md:text-base hover:text-blue-500 transition-all duration-150"
              >
                Motor Manufacturing
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-base font-semibold uppercase md:text-lg">
            Quick Links
          </p>
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                href={"/dc-motor"}
                className="text-sm md:text-base hover:text-blue-500 transition-all duration-150"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/dc-motor"}
                className="text-sm md:text-base hover:text-blue-500 transition-all duration-150"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href={"/dc-motor"}
                className="text-sm md:text-base hover:text-blue-500 transition-all duration-150"
              >
                Services
              </Link>
            </li>
            <li className="flex items-center gap-1 group">
              <Link
                href={"/dc-motor"}
                className="text-sm md:text-base  hover:text-blue-500 transition-all duration-150"
              >
                Why Choose Us
              </Link>
              <MoveRight className="w-5 h-5 opacity-0 group-hover:text-blue-500 group-hover:opacity-100 transition-all duration-150" />
            </li>
            <li>
              <Link
                href={"/dc-motor"}
                className="text-sm md:text-base  hover:text-blue-500 transition-all duration-150"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-between gap-6 order-4">
          <p className="text-base font-semibold uppercase md:text-lg">
            Contact Us
          </p>
          <div className="flex items-start space-x-2 group">
            <MapPin
              className="w-6 h-6 inline group-hover:text-blue-500"
              strokeWidth={2.5}
            />
            <Link
              href={
                "https://www.google.com/maps/place/Nisida+Industries+(Pty)+Ltd./@-26.2011417,27.9780557,17z/data=!3m1!4b1!4m6!3m5!1s0x1e950ea664a2ac73:0x545af0a60f95ca06!8m2!3d-26.2011465!4d27.9806306!16s%2Fg%2F11cs5ghycj?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium "
            >
              2164 Albertina Sisulu Road Industria, Johannesburg
            </Link>
          </div>

          <div>
            <div className="flex flex-col">
              <li className="space-x-2 group list-none">
                <span>
                  <PhoneCall
                    className="w-4 h-4 inline group-hover:text-blue-500"
                    strokeWidth={2.5}
                  />
                </span>
                <Link href={"tel:+27738325621"} className="text-sm">
                  +27 73 832 5621
                </Link>
                {/* <span>||</span>
                <Link href={"tel:+27738325621"} className="text-sm block">
                  +27 73 832 5621
                </Link> */}
              </li>
              <li className="space-x-2 group list-none">
                <span>
                  <PhoneCall
                    className="w-4 h-4 inline group-hover:text-blue-500"
                    strokeWidth={2.5}
                  />
                </span>
                <Link href={"tel:+27738325621"} className="text-sm">
                  +27 73 832 5621
                </Link>
                {/* <span>||</span>
                <Link href={"tel:+27738325621"} className="text-sm block">
                  +27 73 832 5621
                </Link> */}
              </li>

              <li className="space-x-2 group list-none">
                <span>
                  <Mail
                    className="w-4 h-4 inline group-hover:text-blue-500"
                    strokeWidth={2.5}
                  />
                </span>
                <Link href={"mailto:email@example.com"} className="text-sm">
                  john@gmail.com{" "}
                </Link>
              </li>

              <li className="space-x-2 group list-none">
                <span>
                  <Mail
                    className="w-4 h-4 inline group-hover:text-blue-500"
                    strokeWidth={2.5}
                  />
                </span>
                <Link href={"mailto:email@example.com"} className="text-sm">
                  john@gmail.com{" "}
                </Link>
              </li>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center h-6 w-6 md:h-8 md:w-8 bg-black rounded-full hover:bg-blue-500 transition duration-150">
              <Facebook
                className="text-white"
                strokeWidth={1.5}
                stroke="white"
              />
            </div>

            <div className="flex items-center justify-center w-6 h-6 md:h-8 md:w-8 bg-black rounded-md hover:bg-blue-500 transition duration-150">
              <Linkedin
                className="text-white"
                strokeWidth={1.5}
                stroke="white"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
