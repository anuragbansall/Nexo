import React from "react";
import heroBgImage from "../assets/hero-bg.jpg";

function Home() {
  return (
    <main className="relative h-screen w-screen">
      <img
        src={heroBgImage}
        alt="Hero Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute bottom-0 left-1/2 flex w-full max-w-full -translate-x-1/2 flex-col items-center gap-6 bg-white p-6 md:w-2xl md:rounded-t-2xl">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to Nexo</h1>
        <button className="w-lg max-w-full cursor-pointer rounded-md bg-neutral-900 px-6 py-2 text-lg font-semibold text-white">
          Continue
        </button>
      </div>
    </main>
  );
}

export default Home;
