import Image from "next/image";
import React from "react";

const WhyChoose = () => {
  return (
    <div className="w-full grid gap-2 grid-cols-1 md:grid-cols-2 text-center bg-slate-200 rounded-lg py-2 justify-center mx-auto lg:grid-cols-4">
      <div className=" w-full justify-center">
        <div className="justify-center flex w-full">
          <Image src={"/bike.png"} width={200} height={200} />
        </div>
        <h1 className="text-gray-500 uppercase leading-4 text-center my-2 font-semibold">
          5 HOUR DELIVERY
        </h1>
        <p className="p-4">
          A very strong delivery network that let's us deliver a cake to your
          doorstep in any city in 5 hours.
        </p>
      </div>
      <div className=" w-full justify-center">
        <div className="justify-center flex w-full">
          <Image src={"/cakes.png"} width={200} height={200} />
        </div>
        <h1 className="text-gray-500 uppercase leading-4 text-center my-2 font-semibold">
          WIDEST RANGE OF CAKES
        </h1>
        <p className="p-4">
          We collaborate with bakeries around the country to bring you the
          widest selection of cakes at your doorstep.
        </p>
      </div>
      <div className=" w-full justify-center">
        <div className="justify-center flex w-full">
          <Image src={"/night.png"} width={200} height={200} />
        </div>
        <h1 className="text-gray-500 uppercase leading-4 text-center my-2 font-semibold">
          MIDNIGHT DELIVERY
        </h1>
        <p className="p-4">
          We can surprise your loved ones by delivering the cake at midnight if
          you order the cake before 1PM.
        </p>
      </div>
      <div className=" w-full justify-center">
        <div className="justify-center flex w-full">
          <Image src={"/city.png"} width={200} height={200} />
        </div>
        <h1 className="text-gray-500 uppercase leading-4 text-center my-2 font-semibold">
          DELIVERED IN 150 CITIES
        </h1>
        <p className="p-4">
          No city is too far or too remote for us. Just tell us where you want
          it delivered.
        </p>
      </div>
    </div>
  );
};

export default WhyChoose;
