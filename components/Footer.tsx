import React from "react";
import Logow from "@/assets/logow.png";
import Image from "next/image";
import Link from "next/link";
import {
  BsInstagram,
  BsLinkedin,
  BsPinterest,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative">
          <Image
            src={Logow}
            alt="Logo"
            className="h-12 w-auto relativebg-black"
            height={40}
            width={40}
          />
        </div>
        <nav className="flex md:flex-row md:justify-center flex-col gap-6 mt-6">
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Features</Link>
          <Link href={"#"}>Customers</Link>
          <Link href={"#"}>Pricing</Link>
          <Link href={"#"}>Help</Link>
          <Link href={"#"}>Careers</Link>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <BsTwitterX />
          <BsInstagram />
          <BsLinkedin />
          <BsPinterest />
          <BsYoutube />
        </div>
        <div className="text-white/60 mt-6">
          © {new Date().getFullYear()} Clodron. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
