import Image from "next/image";
import img from "@/public/images/about.jpg";

const About = () => {
  return (
    <section className="section-container  py-12 md:py-14 lg:py-16">
      <div className="mt-4 md:mt-6 grid gap-12  md:gap-14 md:grid-cols-[1.5fr_1fr] lg:gap-16 xl:grid-cols-2">
        <div className="w-full flex flex-col gap-4 ">
          <h2 className="text-xl text-blue-500 font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
            About us
          </h2>
          <p className="max-w-xl  md:max-w-3xl  text-sm leading-6 md:text-base xl:leading-7 xl:text-lg">
            We believe that behind every great business, lies a team of vibrant
            and passionate people with a keen interest in contributing to making
            the world a better place. The modern world depends heavily on
            electricity and electric motors are at the heart of every moving
            machinery in the industrial world.
          </p>
          <p className="max-w-xl md:max-w-3xl text-sm leading-6 md:text-base xl:leading-7 xl:text-lg ">
            At Motocoil Electric, our definite chief aim is to accelerate the
            energy saving revolution while keeping the industry running at full
            capacity.
          </p>
        </div>
        <div className="">
          <Image
            src={img}
            alt="about-img"
            objectFit="cover"
            className="object-cover h-52 md:h-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
