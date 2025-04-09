import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="top" className="relative w-screen h-full overflow-x-hidden p-0">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover max-w-none"
        src="/assets/img/compressed-hero-loop.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10 p-0" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg font-serif">
          The 21st Century Baptist Catechism
        </h1>
        <h3 className="text-2lg md:text-4xl mb-2 max-w-2xl drop-shadow-md">
          Explore <span className="italic font-serif text-yellow-300">114</span> timeless truths
        </h3>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl drop-shadow-md">
          Grounded in Scripture. Refreshed for today.
        </p>

        {/* buttons */}
        <div className="bg-black/25 backdrop-blur-sm rounded-2xl shadow-lg flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center text-center">
  <a
    href="#sections"
    className="group block w-64 px-6 py-5 rounded-2xl border border-white text-white shadow transition transform hover:scale-[1.02] hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
  >
    <div className="font-serif italic text-3xl">by Section</div>
    <div className="text-sm mt-1">Read the catechism in order</div>
  </a>

  <a
    href="#topics"
    className="group block w-64 px-6 py-5 rounded-2xl border border-white text-white shadow transition transform hover:scale-[1.02] hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
  >
    <div className="font-serif italic text-3xl">by Topic</div>
    <div className="text-sm mt-1">Browse the catechism by topic</div>
  </a>
</div>


      </div>
    </section>
  );
};

export default HeroSection;
