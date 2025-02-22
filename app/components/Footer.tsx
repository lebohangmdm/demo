import React from "react";

import Link from "next/link";
import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  MoveRight,
  PhoneCall,
} from "lucide-react";
import { footerLinks, serviceLinks } from "@/lib/links";
import Logo from "@/app/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-primary-foreground dark:bg-foreground ">
      <div className="section-container">
        <div className="grid grid-cols-2  lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-x-4 sm:gap-x-8 gap-y-8  md:gap-10 lg:gap-12 ">
          <div className="space-y-2 md:space-y-4 lg:space-y-8 order-3 lg:order-1">
            <Logo width={250} height={250} />

            <div className="flex flex-col justify-between gap-6 md:gap-8 lg:gap-10">
              <p className="text-xs sm:text-sm md:text-base">
                Nisida is a level 1 BEE rated company based in Industria
                Johannesburg.
              </p>
              <p className="text-[8px] md:text-sm xl:text-balance">
                Copyright © Nisida industry (PTY) 2025. All rights reserved
              </p>
            </div>
          </div>

          <div className="space-y-2 md:space-y-4 lg:order-2">
            <p className="text-sm sm:text-base font-semibold uppercase md:text-lg">
              Services
            </p>
            <ul className="flex flex-col gap-1 lg:gap-2">
              {serviceLinks.map((link) => {
                return (
                  <li key={link.id}>
                    <Link href={link.href} className="footer-link group">
                      {link.name}
                      <MoveRight className="w-5 h-5 opacity-0 group-hover:text-blue-500 group-hover:opacity-100 transition-all duration-150" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="space-y-2 md:space-y-4 lg:order-3">
            <p className="text-sm sm:text-base font-semibold uppercase md:text-lg">
              Quick Links
            </p>
            <ul className="flex flex-col gap-1 lg:gap-2">
              {footerLinks.map((link) => {
                return (
                  <li key={link.id}>
                    <Link href={link.href} className="footer-link group">
                      {link.name}
                      <MoveRight className="w-5 h-5 opacity-0 group-hover:text-blue-500 group-hover:opacity-100 transition-all duration-150" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="space-y-2 md:space-y-4 order-4">
            <p className="text-sm sm:text-base font-semibold uppercase md:text-lg">
              Contact Us
            </p>
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="flex items-start space-x-2 group">
                <MapPin
                  className="w-6 h-6 lg:w-8 lg:h-8 inline group-hover:text-blue-500"
                  strokeWidth={2.5}
                />
                <Link
                  href={
                    "https://www.google.com/maps/place/Nisida+Industries+(Pty)+Ltd./@-26.2011417,27.9780557,17z/data=!3m1!4b1!4m6!3m5!1s0x1e950ea664a2ac73:0x545af0a60f95ca06!8m2!3d-26.2011465!4d27.9806306!16s%2Fg%2F11cs5ghycj?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm md:text-base font-medium"
                >
                  2164 Albertina Sisulu Road Industria, Johannesburg
                </Link>
              </div>

              <ul>
                <li className="space-x-2 group list-none">
                  <span>
                    <PhoneCall
                      className="w-4 h-4 inline lg:w-5 lg:h-5 group-hover:text-blue-500"
                      strokeWidth={2.5}
                    />
                  </span>
                  <Link
                    href={"tel:+27738325621"}
                    className="text-xs sm:text-sm md:text-base"
                  >
                    +27 73 832 5621
                  </Link>
                </li>
                <li className="space-x-2 group list-none">
                  <span>
                    <PhoneCall
                      className="w-4 h-4 lg:w-5 lg:h-5 inline group-hover:text-blue-500"
                      strokeWidth={2.5}
                    />
                  </span>
                  <Link
                    href={"tel:+27738325621"}
                    className="text-xs sm:text-sm md:text-base"
                  >
                    +27 73 832 5621
                  </Link>
                </li>

                <li className="space-x-2 group list-none">
                  <span>
                    <Mail
                      className="w-4 h-4 lg:w-5 lg:h-5 inline group-hover:text-blue-500"
                      strokeWidth={2.5}
                    />
                  </span>
                  <Link
                    href={"mailto:email@example.com"}
                    className="text-xs sm:text-sm md:text-base"
                  >
                    john@gmail.com{" "}
                  </Link>
                </li>

                <li className="space-x-2 group list-none">
                  <span>
                    <Mail
                      className="w-4 h-4 lg:w-5 lg:h-5 inline group-hover:text-blue-500"
                      strokeWidth={2.5}
                    />
                  </span>
                  <Link
                    href={"mailto:email@example.com"}
                    className="text-xs sm:text-sm md:text-base"
                  >
                    john@gmail.com{" "}
                  </Link>
                </li>
              </ul>

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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
