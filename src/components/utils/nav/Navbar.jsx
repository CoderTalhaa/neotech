"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import AnimatedLink from "./AnimatedLink";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { data } from "@/data/data";
import Button from "../Button";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";

export default function Navbar() {
  const pathname = usePathname();
  const [openModal, setOpenModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ padding: "1rem" }}
      animate={{ padding: scrolled ? "0.5rem" : "1rem" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 px-4 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-sm bg-transparent border-white/45 border-b-[1px]"
          : ""
      }`}
    >
      <nav className="hidden md:flex items-center justify-between px-20">
        <div className="relative w-[140px]">
          <Image alt="logo" src={"/img/logo.png"} width={100} height={100} />
        </div>
        <ul className="flex gap-8 font-thin font-secondary">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <li>
            <p
              data-hover
              className={`flex items-center gap-1 cursor-pointer ${
                pathname === "/services" ? "text-button" : ""
              }`}
              onClick={() => setOpenModal((prev) => !prev)}
            >
              Services
              <IoIosArrowDown />
            </p>
            <Modal open={openModal} setOpen={setOpenModal} />
          </li>
          <NavLink href="/contact">Contact</NavLink>
        </ul>
        <Button>Login</Button>
      </nav>
      <MobileNav />
    </motion.header>
  );
}

function Modal({ open, setOpen }) {
  const modalRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, setOpen]);

  const variants = {
    open: {
      width: 900,
      height: 400,
      transition: { duration: 0.6, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: 0,
      height: 0,
      transition: {
        duration: 0.6,
        delay: 0.35,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };
  return (
    <>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            variants={variants}
            initial="closed"
            exit="closed"
            animate={open ? "open" : "closed"}
            className="absolute top-16 left-1/2 -translate-x-1/2 max-w-[900px] min-h-[400px] bg-[#f7f5f5] rounded-lg  text-black z-10 overflow-clip "
          >
            <div className="flex flex-col gap-2 p-2">
              <h2 className="~text-2xl/5xl font-primary font-semibold">
                Services
              </h2>
              <div className="p-3">
                <motion.ul
                  className="grid grid-cols-3 gap-5"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                >
                  {data.map((item) => (
                    <motion.li key={item.name} variants={itemVariants}>
                      <Link href={item.path}>
                        <div className="flex flex-col hover:bg-white hover:shadow-md hover:shadow-teal-100 transition-all duration-300 ease-in-out rounded-lg cursor-pointer">
                          <p className="flex items-center gap-1 font-secondary font-medium">
                            {item.icon} {item.name}
                          </p>
                          <p className="text-[12px] w-[250px] pl-2 ">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
