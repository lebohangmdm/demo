import React from "react";
import CarouselSize from "@/app/components/CarouselSize";

const Featured = () => {
  return (
    <section id="featured" className="section-container">
      <h4 className="text-sm uppercase text-blue-500  font-semibold  md:text-base">
        Trusted by Leading Companies
      </h4>
      <CarouselSize />
    </section>
  );
};

export default Featured;
