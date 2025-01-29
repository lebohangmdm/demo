import Image from "next/image";
import logo from "@/public/nisida-logo.png";
import Link from "next/link";

const Logo = ({
  width: width,
  height: height,
}: {
  width: number;
  height: number;
}) => {
  return (
    <Link href={"/"}>
      <Image
        src={logo}
        alt="Nisida industry logo"
        style={{ objectFit: "cover" }}
        width={width}
        height={height}
      />
    </Link>
  );
};

export default Logo;
