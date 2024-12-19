const Hero = () => {
  return (
    <section className="hero relative z-0">
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
        {/* Content Container */}
        <div className="w-full sm:w-5/6  md:w-8/12 lg:w-7/12 xl:w-1/2  text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Precision Engineering for Reliable Motors & Commutators
          </h1>
          <p className="mt-6 md:text-base lg:text-lg">
            We specialize in the design, manufacturing, and repair of
            high-performance motors and commutators. With unmatched expertise
            and a commitment to quality, we deliver durable, efficient, and
            reliable solutions for industrial, commercial, and custom
            applications. Trust us to keep your operations running smoothly
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
