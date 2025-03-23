import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const data = [
  {
    name: "Smart Homes",
    description:
      "Bringing today's cutting-edge technology right into your home with ease. Internet of Things allows you to control the utilities and features of your home via the Internet.",
  },
  {
    name: "Digital Marketing",
    description:
      "Our Digital Marketing team is ready to take your business to the next level. Businesses of all kinds have seen new opportunities for growth.",
  },
  {
    name: "Auditing & Pen Testing",
    description:
      "Are your Devices and Network Compliant? Bring our Pen Testing Expertise to verify Compliance, and deliver a full audit report.",
  },
  {
    name: "Drone Cinematography",
    description:
      "Ready to Elevate your Content to the Next Level? With so much competition, you must elevate your content to stand out at the forefront of your business.",
  },
  {
    name: "Cloud Migration Strategies",
    description:
      "Does your business need a Hybrid Cloud? Are you ready to go full cloud? Let us assist you in migrating your existing infrastructure.",
  },
];

// Variants for staggered character animation
const charVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

// Variants for description fade-in
const descVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.6,
    },
  },
};

export default function Section2({ scrollY }) {
  return (
    <section className="bg-[#000e16] relative mt-14 section2">
      <div className="container flex flex-col">
        {data.map((d, i) => {
          const ref = useRef();
          const isInView = useInView(ref, {
            once: false, // Animates only once when entering view
            margin: "0px 0px 0px 0px", // Triggers 100px before entering viewport
          });

          return (
            <motion.div
              key={i}
              ref={ref}
              className={`h-[100vh] flex flex-col justify-center ${
                i % 2 === 0 ? "items-start" : "items-end"
              }`}
            >
              <div className="flex flex-col gap-2 ">
                <h1 className="~text-2xl/6xl font-primary font-semibold text-teal-300 w-[570px]">
                  {d.name.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      variants={charVariants}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </h1>
                <motion.p
                  className="~text-base/2xl font-secondary tracking-tight text-white w-[500px]"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={descVariants}
                >
                  {d.description}
                </motion.p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
