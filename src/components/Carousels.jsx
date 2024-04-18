"use client";
import Link from "next/link";
import React from "react";
import Carousel from "react-material-ui-carousel";
const Images = [
  { image: "/banner1.png", link: "/cake" },
  { image: "/banner2.png", link: "/" },
  { image: "/banner3.png", link: "/cake" },
  { image: "/banner4.png", link: "/cake" },
];

const Carousels = () => {
  return (
    <Carousel
      className="md:w-[90%] mt-2 w-full justify-center items-center rounded-lg"
      autoPlay={true}
      animation="slide"
      indicators={false}
      swipe={true}
    >
      {Images.map((image, i) => {
        return (
          <>
            <Link key={i} href={image.link}>
              <img src={image.image} className="rounded-lg" />
            </Link>
          </>
        );
      })}
    </Carousel>
  );
};

export default Carousels;
