"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import {
  useEditCartMutation,
  useGetCartsQuery,
} from "../provider/redux/query/Cart.query";
import { toast } from "react-toastify";
const ProductCard = ({ image, qty, name, price, id, refetch }) => {
  const [EditCart, EditCartResponse] = useEditCartMutation();
  const EditCartFunction = async (action) => {
    try {
      const { data, error } = await EditCart({ id, action });
      if (error) {
        toast.error(error?.data?.error);
        return;
      }
      refetch();
      toast.success(data.msg);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="px-2 flex bg-slate-300 rounded my-2 justify-between items-center">
      <div className="py-2">
        <Image
          src={image}
          height={100}
          width={100}
          alt="image"
          className="rounded"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold whitespace-nowrap text-lg">{name}</h1>
        <h1 className="font-semibold whitespace-nowrap text-lg">{price}</h1>
      </div>
      <div className="flex justify-center items-center gap-4">
        <button
          disabled={EditCartResponse.isLoading}
          onClick={() => EditCartFunction("increment")}
          className="bg-white p-1 rounded"
        >
          <FaPlus />
        </button>
        <span>{qty}</span>
        <button
          disabled={EditCartResponse.isLoading}
          onClick={() => EditCartFunction("decrement")}
          className="bg-white p-1 rounded"
        >
          <FaMinus />
        </button>
      </div>
    </div>
  );
};

const Sidebar = ({ state }) => {
  const { data, isLoading, isError, refetch } = useGetCartsQuery();
  useEffect(() => {
    refetch();
  }, [state.isCart]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Something went wrong.</div>;
  }

  return (
    <>
      <div
        className={`fixed ${
          state.isCart ? "translate-x-[-0%]" : "translate-x-[100%]"
        } top-16 right-0 h-screen bg-white text-zinc-900 z-50 w-full lg:w-1/2 xl:w-1/3 border border-gray-400 before:absolute before:top-[-10px] before:right-24 sm:before:right-20 xl:before:right-28 before:w-5 before:h-5 before:z-50 before:bg-white before:rotate-45 before:border-t before:border-l before:border-gray-400`}
      >
        <div className="py-4 flex justify-between text-2xl text-zinc-900 px-5">
          <p className="text-xl font-semibold">My Cart</p>
          <AiOutlineClose
            className="cursor-pointer"
            onClick={() => state.isCartOpen(false)}
          />
        </div>

        <div className="mx-4 ">
          {data && data.cart && data.cart.length > 0 ? (
            data.cart.map((cur, i) => {
              return (
                <ProductCard
                  key={i}
                  refetch={refetch}
                  image={cur.product.image.image_url}
                  name={cur.product.name}
                  qty={cur.qty}
                  price={cur.product.price}
                  id={cur._id}
                />
              );
            })
          ) : (
            <div className="flex flex-col justify-center items-center">
              <HiOutlineShoppingCart className="text-6xl" />
              <p className="text-blue-500 font-semibold text-xl">
                Cart is empty
              </p>
            </div>
          )}
          <div className="py-2 flex justify-between items-center">
            <h1 className="text-black text-xl">
              Total Price: &#8377;-{data && data.totalPrice} /-
            </h1>
            {data && data.totalPrice > 0 && (
              <Link
                href={"/checkout"}
                className="bg-black rounded text-white py-3 px-2"
              >
                Checkout
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
