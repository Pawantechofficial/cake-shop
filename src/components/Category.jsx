import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = () => {
  const categories = [
    {
      title: "Birthday Cake",
      image: "/birthday.png",
      url: "/cake",
    },
    {
      title: "Chocolate Cake",
      image: "/chocolate.png",
      url: "/cake",
    },
    {
      title: "Heart Shaped Cakes",
      image: "/heartcake.png",
      url: "/cake",
    },
    {
      title: "Combo Products",
      image: "/combo.png",
      url: "/cake",
    },
    {
      title: "Eggless Cakes",
      image: "/edgeless.png",
      url: "/cake",
    },
    {
      title: "Photo Cakes",
      image: "/photo-cake.png",
      url: "/cake",
    },
    {
      title: "Black Forest Cake",
      image: "/black-cake.png",
      url: "/cake",
    },
    {
      title: "Speacial Cake",
      image: "/speacial-cake.png",
      url: "/cake",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-4">
      {categories.map((category, i) => {
        return (
          <div key={i} className="hover:bg-slate-200 border p-4 rounded-lg">
            {/* <h1 className="text-center text-primary font-bold text-xl lg:text-2xl italic uppercase">
              {category.title}
            </h1> */}
            <Image
              className="my-2 rounded-lg"
              src={category.image}
              width={300}
              height={300}
            />
            <Link
              href={category.url}
              className="bg-primary uppercase justify-center rounded-lg text-sm flex gap-2 items-center text-white px-4 py-2"
            >
              {category.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
