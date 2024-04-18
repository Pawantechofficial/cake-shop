"use sever";
import Image from "next/image";
import Link from "next/link";

async function getCategories() {
  const data = await fetch("http://localhost:3000/api/public/get-categories");

  return await data.json();
}

const Category = async () => {
  const categories = await getCategories();
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-4">
      {categories.category.map((category, i) => {
        return (
          <div key={i} className="hover:bg-slate-200 border p-4 rounded-lg">
            <Image
              className="my-2 rounded-lg"
              src={category.image.image_url}
              width={300}
              height={300}
            />
            <Link
              href={`/product/${category.slug}`}
              className="bg-primary uppercase justify-center rounded-lg text-sm flex gap-2 items-center text-white px-4 py-2"
            >
              {category.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
