import AnimatedLink from "./nav/AnimatedLink";
import { twMerge } from "tailwind-merge";

export default function Button({ children, className }) {
  return (
    <button
      data-hover
      className={twMerge(
        "bg-text hover:bg-[#00d5ffc9] text-white font-medium py-2.5 px-6 rounded-full transition-colors duration-200",
        className
      )}
    >
      <AnimatedLink title={children} />
    </button>
  );
}
