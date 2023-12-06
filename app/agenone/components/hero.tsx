import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="text-center items-center justify-center mt-[100px]">
      <div className="bg-white/10 w-fit mx-auto px-[16px] py-[12px] rounded-full text-white">
        <h1>NUMBER ONE CREATIVE DIGITAL AGENCY </h1>
      </div>
      <h1 className="mt-[12px] text-6xl font-bold text-white max-w-screen">
        {" "}
        <span className="text-[#00796D]">Smart Choices</span>
        <br /> For Your Business Growth
      </h1>
      <p className="mt-[24px] max-w-xl text-center mx-auto text-lg text-white">
        We&apos;re a team of experienced designers, developers,
        <br /> and marketers, passionate about delivering exceptional digital
        solutions.
      </p>

      <button className="bg-gradient-to-r from-[#00796D] to-[#38C682] py-[16px] px-[32px] rounded-full mt-[76px] text-white">
        Contact Us {"->"}
      </button>
      <div className="mt-[80px] mb-[100px]">
        <div className="relative">
          <Image
            src="/assets/agenone/banner.svg"
            width={1300}
            height={800}
            alt="Banner Benefit"
            className="items-center mx-auto"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="text-4xl font-bold py-[24px] transform -translate-x-1">
              Benefit of improving your business
            </h1>
            <div className="flex gap-x-12 mx-auto mt-[43px]">
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/agenone/benefit-1.svg"
                  alt="Benefit 1"
                  width={108}
                  height={108}
                />
                <h1 className="mt-4">Expanding the market</h1>
              </div>
              <div>
                <Image
                  src="/assets/agenone/benefit-2.svg"
                  alt="Benefit 1"
                  width={108}
                  height={108}
                />
                <h1 className="mt-4">Cost-Effective</h1>
              </div>
              <div>
                <Image
                  src="/assets/agenone/benefit-3.svg"
                  alt="Benefit 1"
                  width={108}
                  height={108}
                />
                <h1 className="mt-4">More Professional</h1>
              </div>
              <div>
                <Image
                  src="/assets/agenone/benefit-4.svg"
                  alt="Benefit 1"
                  width={108}
                  height={108}
                />
                <h1 className="mt-4">Attract Client</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
