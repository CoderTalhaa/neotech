import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};
export default function SerText() {
  const ref = useRef();
  const isInView = useInView(ref, { once: false, margin: "-150px" });

  return (
    <div className="container relative mt-10">
      <div className="flex flex-col gap-2 max-w-2xl ">
        <h1 className="~text-xl/3xl font-primary font-semibold">
          <span className="relative p-3">
            Why Choose US?
            <Underline_10 isInView={isInView} />
          </span>
        </h1>
        <motion.h2
          ref={ref}
          className="text-2xl md:text-5xl font-nunito pt-5 flex flex-col gap-2"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            "Are You Looking",
            "for Superior Technology",
            "and Marketing Support?",
          ].map((text, i) => (
            <motion.span key={i} custom={i} variants={textVariants}>
              {i === 1 ? (
                <>
                  for{" "}
                  <span className="text-[#30f3e3]">Superior Technology</span>
                </>
              ) : (
                text
              )}
            </motion.span>
          ))}
        </motion.h2>
        <motion.p
          className="pt-3 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Neo Technology has made its name by providing unmatched customer
          satisfaction to all our clients with every service package we offer.
        </motion.p>
      </div>
    </div>
  );
}

const Underline_10 = ({ isInView }) => (
  <svg
    viewBox="0 0 454 126"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-2 left-0 bottom-0 right-0"
  >
    <motion.path
      initial={{ pathLength: 0 }}
      animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
      transition={{
        duration: 1.23,
        ease: "easeInOut",
      }}
      d="M178.142 108.974C180.823 108.369 183.474 107.388 186.169 107.215C209.991 105.773 233.885 105.095 257.635 102.947C276.24 101.26 294.73 98.1017 313.191 95.0736C334.376 91.5984 355.69 88.5126 376.53 83.509C395.536 78.9379 414.757 74.2515 432.058 64.3452C434.193 63.1195 436.3 61.8506 438.35 60.4952C449.501 53.0834 446.706 43.9557 438.565 37.1352C428.059 28.3392 415.101 24.7487 402.072 21.6052C377.304 15.6211 352.121 12.5352 326.75 10.6463C283.621 7.44509 240.507 7.02692 197.306 9.24755C159.552 11.1798 122.185 15.9095 85.1332 23.1626C65.8548 26.9405 46.7485 31.7423 29.0754 40.6392C23.2131 43.5953 17.7378 47.7193 12.8501 52.1606C6.80141 57.6689 7.2314 64.7201 12.8357 70.8052C22.1954 80.9711 34.5794 86.1766 46.7771 91.5407C69.4812 101.519 93.2315 108.34 117.426 113.415C131.287 116.314 145.376 118.073 159.337 120.438C162.734 121.015 166.074 121.923 169.7 122.745C153.016 129.075 136.647 124.677 120.436 122.053C97.5889 118.347 75.2145 112.521 53.7288 103.682C37.4604 96.9914 21.4931 89.6373 8.20607 77.7411C-4.62228 66.2486 -1.25394 51.3963 10.3417 42.211C27.2408 28.8151 47.6228 23.0328 68.3058 18.5194C79.4572 16.0825 90.6228 13.6888 101.86 11.7133C113.069 9.75225 124.349 8.23818 135.63 6.79621C138.382 6.43571 141.263 7.09902 142.825 7.19996C146.279 6.46455 148.687 5.95987 151.081 5.42634C154.722 4.63326 158.821 4.70536 162.118 4.6621C166.991 4.59 171.936 0.88414 177.297 4.25835C179.318 5.52728 183.274 3.49409 186.37 3.23454C194.282 2.55681 202.208 1.98002 210.134 1.44649C218.634 0.884122 227.148 0.148718 235.662 0.00452076C240.779 -0.0819974 245.896 1.10043 251.027 1.2302C254.883 1.33114 258.753 0.350614 262.609 0.408292C268.901 0.494811 275.179 1.20136 281.471 1.31672C285.485 1.38882 289.813 -0.240602 293.468 0.783197C303.057 3.45084 312.718 1.9512 322.307 2.57125C334.018 3.32107 345.742 4.35928 357.381 5.90219C383.453 9.3485 409.669 12.5352 433.763 24.2152C438.422 26.4791 442.937 29.6082 446.592 33.2708C458.288 45.0228 455.779 60.7114 441.575 69.2335C422.483 80.6827 401.585 87.1283 380.056 91.4398C352.436 96.977 324.615 101.534 296.937 106.811C271.022 111.757 244.893 114.136 218.562 113.963C206.408 113.877 194.267 112.464 182.113 111.555C180.808 111.454 179.561 110.719 178.286 110.272C178.243 109.839 178.2 109.407 178.157 108.974H178.142Z"
      // fill="currentColor"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>
);
