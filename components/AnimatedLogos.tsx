"use client";
import React from "react";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const AnimatedLogos = (props: Props) => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              repeat: Infinity,
              duration: 7,
              ease: "linear",
              repeatType: "loop",
            }}>
            <Image src={acmeLogo} alt="Acme Logo" className="h-8 w-auto" />
            <Image
              src={quantumLogo}
              alt="Quantum Logo"
              className="h-8 w-auto"
            />
            <Image src={echoLogo} alt="Echo Logo" className="h-8 w-auto" />
            <Image
              src={celestialLogo}
              alt="Celestial Logo"
              className="h-8 w-auto"
            />
            <Image src={pulseLogo} alt="Pulse Logo" className="h-8 w-auto" />
            <Image src={apexLogo} alt="Apex Logo" className="h-8 w-auto" />
            <Image src={acmeLogo} alt="Acme Logo" className="h-8 w-auto" />
            <Image
              src={quantumLogo}
              alt="Quantum Logo"
              className="h-8 w-auto"
            />
            <Image src={echoLogo} alt="Echo Logo" className="h-8 w-auto" />
            <Image
              src={celestialLogo}
              alt="Celestial Logo"
              className="h-8 w-auto"
            />
            <Image src={pulseLogo} alt="Pulse Logo" className="h-8 w-auto" />
            <Image src={apexLogo} alt="Apex Logo" className="h-8 w-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedLogos;
