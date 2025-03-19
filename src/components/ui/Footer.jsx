"use client";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import NavLink from "../utils/nav/NavLink";

export default function Footer() {
  return (
    <footer className="bg-[#001e30c7] flex justify-between p-3 items-center ">
      <div className="relative w-[140px]">
        <Image alt="logo" src={"/img/logo.png"} width={100} height={100} />
      </div>
      <ul className="flex gap-8 font-thin font-secondary">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/services">Services</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </ul>

      <ul className="flex lg:flex-row flex-col gap-3">
        <li className="p-2 rounded-full bg-primary">
          <Facebook size={15} />
        </li>
        <li className="p-2 rounded-full bg-primary">
          <Twitter size={15} />
        </li>
        <li className="p-2 rounded-full bg-primary">
          <Linkedin size={15} />
        </li>
        <li className="p-2 rounded-full bg-primary">
          <Instagram size={15} />
        </li>
      </ul>
    </footer>
  );
}
