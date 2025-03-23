import { motion, useTransform } from "framer-motion";

const data = [
  // First 4 services for Case, Network, Camera, Meter
  {
    name: "Website Design and Hosting",
    description:
      "Our website designers are here to provide all digital needs for your business.",
    range: [0.065, 0.075, 0.175, 0.185], // Delayed fade-in (0.075) after Case stay starts (0.075), out with exit (0.175)
    positionX: "50%",
  },
  {
    name: "Network Infrastructure",
    description:
      "Our engineers will analyze your current network and advise you on the deployment of infrastructure devices, services, and technologies.",
    range: [0.315, 0.325, 0.425, 0.435], // Delayed fade-in (0.325) after Network stay starts (0.325), out with exit (0.425)
    positionX: "50%",
  },
  {
    name: "Home & Office Security",
    description:
      "Looking to keep your home or office safe? Look no further than our customized security solutions We deliver customized security solutions.",
    range: [0.565, 0.575, 0.675, 0.685], // Delayed fade-in (0.575) after Camera stay starts (0.575), out with exit (0.675)
    positionX: "0%",
  },
  {
    name: "Remote Monitoring",
    description:
      "Do you forget to patch your devices? Leave it to us to monitor your home or business network.",
    range: [0.815, 0.825, 0.925, 0.935], // Delayed fade-in (0.825) after Meter stay starts (0.825), out with exit (0.925)
    positionX: "5%",
  },
];
// Child component for each service item
function ServiceItem({ name, description, range, positionX, scrollY }) {
  const opacity = useTransform(
    scrollY,
    range, // [start, fade-in, fade-out, end]
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      className="flex flex-col gap-2 absolute translate-x-1/2"
      style={{ opacity, left: positionX, textAlign: "start" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h1 className="~text-2xl/6xl text-teal-300 font-primary font-bold tracking-wide w-[400px]">
        {name}
      </h1>
      <span className="text-white text-md font-secondary w-[300px]">
        {description}
      </span>
    </motion.div>
  );
}

export default function Services({ scrollY }) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center pointer-events-none z-10">
      {data.map((item, index) => (
        <ServiceItem
          key={index}
          name={item.name}
          description={item.description}
          range={item.range}
          positionX={item.positionX}
          scrollY={scrollY}
        />
      ))}
    </div>
  );
}
