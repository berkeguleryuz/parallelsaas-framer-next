import React from "react";
import productImage from "@/assets/productimage.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
type Props = {};

const Features = (props: Props) => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to [#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Boost your productivity
            </div>
          </div>
          <h2 className="text-center md:text-[54px] md:leading-[60px] text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#0c20b4] text-transparent bg-clip-text mt-5">
            Good way to boost your productivity
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D0E] mt-5">
            Turn your ideas into reality. Create functional and beautiful
            applications.
          </p>
        </div>
        <div className="relative">
          <Image
            src={productImage}
            alt="Product Image"
            className="mt-10 rounded-md"
            priority={true}
          />
          <Image
            src={pyramidImage}
            alt="Product Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            priority={true}
          />
          <Image
            src={tubeImage}
            alt="Product Image"
            height={262}
            width={262}
            className="hidden md:block absolute -left-32 -bottom-24"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
