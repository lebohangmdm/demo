import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const ContactNav = () => {
  return (
    <div className="main-container bg-slate-50 py-2 flex items-center justify-center md:justify-end">
      <div className="flex items-center gap-5">
        <Link
          href="tel:+0115681120"
          className="flex items-center gap-1 text-sm font-semibold"
        >
          <Phone className="w-5 h-5" /> (011) 568-1120
        </Link>

        <Link
          href="mailto:sales@mailcoil.com"
          className="flex items-center gap-1 text-sm font-semibold"
        >
          <Mail className="w-5 h-5" /> sales@mailcoil.com
        </Link>
      </div>
    </div>
  );
};

export default ContactNav;
