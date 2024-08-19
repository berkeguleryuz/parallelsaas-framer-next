import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

type Props = {};

const Nav = (props: Props) => {
  return (
    <header className="sticky top-0">
      <div className="flex group  justify-center items-center py-3 bg-black text-white gap-3 text-sm">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and take your business to the next level.
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started with Clodron</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center group-hover:rotate-90 transition-all items-center duration-300" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image
              src={Logo}
              alt="Clodron Logo"
              width={50}
              height={50}
              priority
              className="cursor-pointer hover:scale-105 duration-300 transition-all"
            />
            <RxHamburgerMenu className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link href={"#"}>About</Link>
              <Link href={"#"}>Features</Link>
              <Link href={"#"}>Customers</Link>
              <Link href={"#"}>Updates</Link>
              <Link href={"#"}>Help</Link>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
