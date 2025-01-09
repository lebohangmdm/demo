import Image from "next/image";
import img from "@/public/images/about.jpg";

const About = () => {
  return (
    <section
      id="about-us"
      className="section-container  py-12 md:py-14 lg:py-16"
    >
      <div className="mt-4 md:mt-6 grid gap-12  md:gap-14 md:grid-cols-[1.5fr_1fr] lg:gap-16 xl:grid-cols-2">
        <div className="w-full flex flex-col gap-4 ">
          <h2 className="text-xl text-blue-500 font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
            About us
          </h2>
          <p className="max-w-xl  md:max-w-3xl  text-sm leading-6 md:text-base xl:leading-7 xl:text-lg ">
            Nisida, a Level 1 BEE-rated company based in Industria,
            Johannesburg, specializes in AC and DC motor repairs, servo and
            stepper motsor repairs, and custom motor design and manufacturing.
          </p>
          <p className="max-w-xl md:max-w-3xl text-sm leading-6 md:text-base xl:leading-7 xl:text-lg">
            We excel in upgrading existing motors, designing and reconditioning
            commutators, slip rings, and brush holders, and providing armature
            and field coil manufacturing and repair services, ensuring top-tier
            quality and reliability for our clients.
          </p>
        </div>
        <div className="">
          <Image
            src={img}
            alt="about-img"
            style={{ objectFit: "cover" }}
            className="object-cover h-52 md:h-full mx-auto"
            quality={90}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
