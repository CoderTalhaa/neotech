import { motion, useTransform } from "framer-motion";

const data = [
  {
    name: "Website Design",
    description:
      "Creating modern, responsive, and visually appealing websites.",
    range: [0.1, 0.12, 0.23, 0.25],
  },
  {
    name: "Digital Marketing",
    description:
      "Boosting online presence through SEO, ads, and social media strategies.",
    range: [0.3, 0.32, 0.38, 0.4],
  },
  {
    name: "Network",
    description:
      "Setting up secure and reliable network infrastructures for businesses.",
    range: [0.42, 0.44, 0.5, 0.52],
  },
  {
    name: "Remote Monitoring",
    description:
      "Keeping track of systems and devices in real-time from anywhere.",
    range: [0.55, 0.57, 0.63, 0.65],
  },
  {
    name: "Cloud Migration",
    description:
      "Seamlessly moving data and applications to the cloud for scalability.",
    range: [0.67, 0.69, 0.74, 0.76],
  },
  {
    name: "Home & Office Security",
    description:
      "Enhancing security with smart surveillance and access control solutions.",
    range: [0.8, 0.82, 0.88, 0.9],
  },
  {
    name: "Drone Photography",
    description:
      "Capturing stunning aerial footage for marketing, real estate, and events.",
    range: [0.92, 0.94, 0.98, 1],
  },
];

export default function Services({ scrollY }) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center pointer-events-none z-10">
      {data.map((item, index) => {
        const opacity = useTransform(
          scrollY,
          item.range, // [start, fade-in, fade-out, end]
          [0, 1, 1, 0]
        );

        const x = useTransform(
          scrollY,
          item.range,
          index % 2 === 0 ? [-100, 0, 0, 100] : [100, 0, 0, -100]
        );

        const positionStyle =
          index % 2 === 0
            ? { left: "60%", textAlign: "start" } // Even (Right)
            : { left: "10%", textAlign: "start" }; // Odd (Left)

        return (
          <motion.div
            key={index}
            className="flex flex-col absolute"
            style={{ opacity, x, ...positionStyle }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h1 className="~text-2xl/6xl text-teal-300 font-primary font-bold tracking-wide">
              {item.name}
            </h1>
            <span className="text-white text-md font-secondary w-[300px]">
              {item.description}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
