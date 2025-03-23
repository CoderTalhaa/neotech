import React, { useRef } from "react";

export default function Section1({ scrollY }) {
  return (
    <section className="bg-[#000e16] relative pt-14 section1 h-[2000vh]">
      <div className="container flex flex-col ">
        <h1 className="~text-2xl/6xl font-primary font-semibold text-center">
          Our Services
        </h1>
      </div>
    </section>
  );
}
