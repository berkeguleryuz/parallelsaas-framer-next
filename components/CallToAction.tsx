import { ArrowRight } from "lucide-react";
import React from "react";

type Props = {};

const CallToAction = (props: Props) => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to [#D2DCFF] py-24">
      <div className="container">
        <h2 className="text-center md:text-[54px] md:leading-[62px] text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#0c20b4] text-transparent bg-clip-text">
          Sign up for free today
        </h2>
        <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D0E] mt-5 max-w-[540px] mx-auto">
          Celebrate your brand. It means a lot to us. Track your growth with
          Clodron.
        </p>
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
