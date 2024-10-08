"use client";
import { ArrowRight } from "lucide-react";
import React, { useRef } from "react";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {};

const CallToAction = (props: Props) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to [#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto relative">
          <h2 className="text-center md:text-[54px] md:leading-[62px] text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#0c20b4] text-transparent bg-clip-text">
            Sign up for free today
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D0E] mt-5 max-w-[540px] mx-auto">
            Celebrate your brand. It means a lot to us. Track your growth with
            Clodron.
          </p>
          <motion.img
            style={{ y: translateY }}
            src={starImage.src}
            alt="Star Image"
            width={360}
            height={360}
            className="absolute -left-[350px] -top-[137px]"
          />
          <motion.img
            style={{ y: translateY }}
            src={springImage.src}
            alt="Spring Image"
            width={360}
            height={360}
            className="absolute -right-[331px] -top-[19px]"
          />
        </div>
        <div className="flex justify-center gap-4 mt-10">
          <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
            Get for free
          </button>
          <button className="text-black bg-transparent hover:bg-black/5 px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight group gap-1">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5 group-hover:rotate-90 transition-all duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
