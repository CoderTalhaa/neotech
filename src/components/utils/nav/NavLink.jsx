import { motion } from "framer-motion";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, className }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={twMerge(
          "relative text-white font-secondary  cursor-pointer ",
          isActive && "text-teal-300",
          className
        )}
      >
        {children}
        <span className="underline-effect"></span>
      </Link>
      <style jsx>{`
        .underline-effect {
          position: absolute;
          left: 0;
          bottom: 0;
          height: 1px;
          background-color: #5eead4; /* teal-300 equivalent */
          width: 0;
          transition: width 0.3s ease-in-out;
        }

        li:hover .underline-effect {
          width: 100%;
          transition: width 0.3s ease-in-out;
        }
      `}</style>
    </li>
  );
}
