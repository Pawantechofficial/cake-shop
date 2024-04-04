import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurClient = () => {
  const reviews = [
    {
      name: `Pawan Rai`,
      image: `/man.png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ab esse quo a quod expedita quibusdam eveniet.`,
    },
    {
      name: `Karan Momi`,
      image: `/man.png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ab esse quo a quod expedita quibusdam eveniet.`,
    },
    {
      name: `Sona Singh`,
      image: `/man.png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ab esse quo a quod expedita quibusdam eveniet.`,
    },
    {
      name: `Jeetu Verma`,
      image: `/man.png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ab esse quo a quod expedita quibusdam eveniet.`,
    },
    {
      name: `Mukesh Mehra`,
      image: `/man.png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ab esse quo a quod expedita quibusdam eveniet.`,
    },
    {
      name: `Jashan Singh`,
      image: `/man.png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ab esse quo a quod expedita quibusdam eveniet.`,
    },
    {
      name: `Amar Singh`,
      image: `/man.png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ab esse quo a quod expedita quibusdam eveniet.`,
    },
    {
      name: `Rahul Kumar`,
      image: `/man.png`,
      review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ab esse quo a quod expedita quibusdam eveniet.`,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-1 mb-4">
        <Slider {...settings}>
          {reviews.map((data, i) => (
            <div className="bg-white h-full">
              <div className="bg-slate-300 mx-1 lg:mx-2 h-full text-black rounded-xl">
                <div className="rounded-t-xl h-20 max-h-20 bg-indigo-400 flex justify-center items-center">
                  <Image
                    src={data.image}
                    width={72}
                    height={72}
                    className="rounded-full bg-white"
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-xl text-primary font-semibold">
                    {data.name}
                  </p>
                  <p className="text-sm">{data.review}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurClient;
