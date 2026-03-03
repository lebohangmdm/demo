import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import hero from "@/public/hero/hero.png";

const Hero = () => {
  return (
    <section className=" h-[cal(100dvh - 100px)] w-screen">
      <div className="section-container grid grid-cols-1  lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="  text-black">
          <h1 className="text-2xl font-roboto md:text-4xl lg:text-5xl font-bold leading-tight text-blue-500">
            Precision Engineering for Reliable Motors & Commutators
          </h1>
          {/* <div className="my-2 bg-black/40 p-2"> */}
          <p className="mt-6 text-sm md:text-base md:mt-8 lg:text-lg">
            We design, manufacture, and repair high-performance motors and
            commutators, providing durable, reliable solutions for industrial,
            commercial, and custom applications with a focus on quality and
            expertise.
          </p>
          {/* </div> */}
          <Button
            variant="default"
            size="lg"
            className="mt-6 rounded-none text-sm tracking-wider transition-colors hover:bg-black md:mt-8 md:text-base lg:mt-10 lg:text-lg "
            asChild
          >
            <Link href="/contact-us">Get a Quote</Link>
          </Button>
        </div>

        <div className="">
          <Image
            src={hero}
            alt="Hero Background"
            // fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            quality={90}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

// const Hero = () => {
//   return (
//     <section className="relative h-[cal(100dvh - 100px)] w-screen">
//       <div className="hidden lg:block absolute inset-0 ">
//         <Image
//           src={hero}
//           alt="Hero Background"
//           layout="fill"
//           style={{ objectFit: "cover", objectPosition: "center" }}
//           quality={90}
//           priority={true}
//         />
//       </div>
//       <div
//         className="absolute inset-"
//         // // style={{
//         // //   backgroundImage:
//         //     "linear-gradient(to bottom right, rgba(50, 130, 246, 0.35), rgba(21, 64, 134, 0.2))",
//         // // }}
//       ></div>
//       <div className="relative section-container flex items-center">
//         <div className="w-full sm:w-5/6  md:w-8/12 lg:w-7/12 xl:w-[45%]  text-black">
//           <h1 className="text-2xl font-roboto md:text-4xl lg:text-5xl font-bold leading-tight text-blue-500">
//             Precision Engineering for Reliable Motors & Commutators
//           </h1>
//           {/* <div className="my-2 bg-black/40 p-2"> */}
//           <p className="mt-6 text-sm md:text-base md:mt-8 lg:text-lg">
//             We design, manufacture, and repair high-performance motors and
//             commutators, providing durable, reliable solutions for industrial,
//             commercial, and custom applications with a focus on quality and
//             expertise.
//           </p>
//           {/* </div> */}
//           <Button
//             variant="default"
//             size="lg"
//             className="mt-4 rounded-none text-sm tracking-wider transition-colors hover:bg-black md:mt-6 md:text-base lg:mt-8 lg:text-lg "
//             asChild
//           >
//             <Link href="/contact-us">Get a Quote</Link>
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
