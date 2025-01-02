import Image from "next/image";
import ac from "@/public/images/commutator.jpg";
import { CircleCheckBig } from "lucide-react";

const page = () => {
  return (
    <section className="section-container">
      <div className="grid md:grid-cols-[55%_45%] gap-8 lg:grid-cols-2 md:gap-12 lg:gap-16">
        <div className="flex flex-col gap-6  md:gap-8 lg:gap-10">
          <h2 className="text-xl text-blue-500 font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
            Commutator
          </h2>
          <div className="space-y-4">
            <p className="text-sm md:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
              voluptatum sunt numquam ut magni, dignissimos minus fugiat vero
              laborum non at delectus voluptates nam exercitationem.
            </p>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              in placeat cumque eligendi maiores dolorem atque magnam at
              sapiente blanditiis. Fuga pariatur soluta voluptatem dignissimos.
            </p>
          </div>

          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <CircleCheckBig className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />
              <span className="text-sm lg:text-base">
                From 40mm D/A upwards
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheckBig className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />
              <span className="text-sm lg:text-base">
                Locknut or bolted construction
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheckBig className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />
              <span className="text-sm lg:text-base">
                Class F & H insulation
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheckBig className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />
              <span className="text-sm lg:text-base">
                Commutators spin seasoned before dispatched
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheckBig className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />
              <span className="text-sm lg:text-base">
                Quick turnaround time
              </span>
            </li>
          </ul>
        </div>
        <div>
          <Image
            src={ac}
            alt="ac-motor"
            objectFit="cover"
            className="w-1/2 md:w-3/4 lg:w-4/5  mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default page;
