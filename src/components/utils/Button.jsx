import AnimatedLink from "./nav/AnimatedLink";
import { twMerge } from "tailwind-merge";

export default function Button({ children, className }) {
  return (
    <button
      data-hover
      className={twMerge(
        "bg-text hover:bg-[#00d5ffc9] text-base md:text-lg mt-1 md:mt-0 text-white font-medium md:py-2.5 md:px-6 py-1 px-2 rounded-full transition-colors duration-200",
        className
      )}
    >
      <AnimatedLink title={children} />
    </button>
  );
}
