import Image from "next/image";
import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import HeroCake from "../../public/hero-cake.png";

const Hero = () => {
  return (
    <div className="grid items-center grid-cols-1 w-[90%] mb-4 mx-auto lg:grid-cols-3">
      <div className="p-12 lg:col-span-2">
        <h1 className="text-4xl font-semibold">
          Everthing is <br />
          better with a&nbsp;
          <span className="text-[#48CAE4]">Cake's</span>
        </h1>
        <p className="my-6 text-gray-500">
          Cake is the missing piece that makes every day complete, a ssimple yet
          delicious joy in life. Cake is the missing piece that makes every day
          complete, a ssimple yet delicious joy in life.
        </p>
        <div className="flex flex-col sm:flex-row text-sm gap-4">
          <button className="bg-[#48CAE4] uppercase justify-center rounded-full flex gap-2 items-center text-white px-4 py-2">
            Order now <FaRegArrowAltCircleRight />
          </button>
          <button className="rounded-full flex justify-center gap-2 items-center text-[#48CAE4] px-4 py-2">
            Learn More <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <Image src={HeroCake} height={400} width={400} />
      </div>
    </div>
  );
};

export default Hero;
