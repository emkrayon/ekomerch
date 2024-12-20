import React from "react";
import TypingEffect from "react-typing-effect";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/web cover.png')",
        height: "500px", // Match the height of your hero image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
          <TypingEffect
            text={["Eko Christmas Sales"]}
            speed={100} // Typing speed
            eraseSpeed={50} // Erasing speed (optional)
            cursor="|" // Custom cursor
          />
        </h1>
        <p className="text-white text-lg md:text-xl mb-6">
          Exclusive Album + Merch Combos
        </p>
        <a
          href="#products"
          className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-red-600"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
