import { Facebook, Home, Linkedin, Mail, PhoneCall, Timer } from "lucide-react";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <h4 className="text-sm uppercase  font-semibold  md:text-base">
          Something you need
        </h4>
        <p className="text-sm md:text-base">
          We are thrilled at the opportunity to collaborate with your
          organization and deliver the advantages of our extensive industry
          expertise
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="text-sm uppercase  font-semibold  md:text-base">
          Contact Information
        </h4>
        <ul className="flex flex-col gap-2">
          <li className="space-x-2 group">
            <span>
              <PhoneCall
                className="w-4 h-4 inline group-hover:text-blue-500"
                strokeWidth={2.5}
              />
            </span>
            <span>Phone:</span>
            <Link href={"tel:+27738325621"}>+27 73 832 5621</Link>
            <span> || </span>{" "}
            <Link href={"tel:+27835214412"}>+27 83 521 4412</Link>
          </li>
          <li className="space-x-2 group">
            <span>
              <Mail
                className="w-4 h-4 inline group-hover:text-blue-500"
                strokeWidth={2.5}
              />
            </span>
            <span>Email:</span>
            <Link href={"mailto:email@example.com"}>john@gmail.com</Link>
            <span> || </span>{" "}
            <Link href={"mailto:email@example"}>jim@gmail.com</Link>
          </li>

          <li className="space-x-2 group">
            <span>
              <Home
                className="w-4 h-4 inline group-hover:text-blue-500"
                strokeWidth={2.5}
              />
            </span>
            <Link
              href={
                "https://www.google.com/maps/place/Nisida+Industries+(Pty)+Ltd./@-26.2011417,27.9780557,17z/data=!3m1!4b1!4m6!3m5!1s0x1e950ea664a2ac73:0x545af0a60f95ca06!8m2!3d-26.2011465!4d27.9806306!16s%2Fg%2F11cs5ghycj?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium "
            >
              Address: 2164 Albertina Sisulu Road Industria, Johannesburg
            </Link>
          </li>
          <li className="space-x-2 group">
            <span>
              <Timer
                className="w-4 h-4 inline group-hover:text-blue-500 "
                strokeWidth={2.5}
              />
            </span>
            <span className="font-medium">Days: 7:30 AM–4:30 PM (Mon–Fri)</span>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="text-sm uppercase  font-semibold  md:text-base">
          Our Social Media
        </h4>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center h-8 w-8 bg-black rounded-full hover:bg-blue-500 transition duration-150">
            <Facebook className="text-white" strokeWidth={1.5} stroke="white" />
          </div>

          <div className="flex items-center justify-center h-8 w-8 bg-black rounded-md hover:bg-blue-500 transition duration-150">
            <Linkedin className="text-white" strokeWidth={1.5} stroke="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
