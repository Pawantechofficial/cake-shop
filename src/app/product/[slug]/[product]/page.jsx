"use client";
import { useAddToCartMutation } from "@/src/provider/redux/query/Cart.query";
import { useGetProductQuery } from "@/src/provider/redux/query/Public.query";
import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const SingleProduct = ({ params }) => {
  const [pin, setPin] = useState();
  const [service, setService] = useState();
  const user = useSelector((store) => store.userSlice.user);
  const [AddToCartfn, AddToCartResponse] = useAddToCartMutation();
  const { data, isLoading, isError } = useGetProductQuery({
    slug: params.slug,
    product: params.product,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data.product) {
    return <div>Something went wrong.</div>;
  }

  const AddToCart = async (product_id) => {
    try {
      if (!user) {
        toast.error("please login first");
      }
      const { data, error } = await AddToCartfn(product_id);
      if (error) {
        toast.error(error?.data?.error);
        return;
      }
      toast.success(data.msg);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const checkServiceAbility = async () => {
    let pins = await fetch("/api/pincode");
    let pinJson = await pins.json();
    if (pinJson.includes(parseInt(pin))) {
      setService(true);
    } else {
      setService(false);
    }
  };
  const onChangePin = (e) => {
    setPin(e.target.value);
  };
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto  object-cover object-center rounded"
            src={data?.product?.image?.image_url}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 uppercase tracking-widest">
              {data?.product?.category?.name}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {data?.product?.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <ReactStars
                  edit={false}
                  isHalf={true}
                  count={data.product.rating}
                  size={24}
                  color="#ffd700"
                  activeColor="#ffd700"
                />
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed">{data?.product?.long_disc}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="pincode mt-2 justify-center md:justify-start flex text-sm space-x-2">
              <input
                onChange={onChangePin}
                className="px-2 text-black rounded w-32 border-2"
                type="text"
                min="6"
                max="8"
                placeholder="Pincode"
              />
              <button
                onClick={checkServiceAbility}
                className="flex ml-auto text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Check delivery
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-500 inline-flex items-center justify-center text-white">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>
            {!service && service != null && (
              <div className="text-red-700 flex justify-center md:justify-start text-sm mt-2">
                Sorry! We do not deliver to this pincode yet
              </div>
            )}
            {service && service != null && (
              <div className="text-green-600 justify-center md:justify-start flex text-sm mt-2">
                Yes! We can deliver to this pincode.
              </div>
            )}
            <div className="flex flex-col mt-4 items-center md:flex-row">
              <div className="flex gap-14 items-center">
                <span className="title-font font-medium text-xl items-center text-gray-900">
                  ₹{data?.product?.price}
                </span>
                <div className="flex gap-2">
                  <button className="flex  text-[#ff527b] bg-transparent text-sm border border-[#FF527B] py-2 px-4  focus:outline-none hover:bg-[#ff527b] hover:text-white rounded-full">
                    Buy Now
                  </button>
                  <button
                    disabled={AddToCartResponse.isLoading}
                    onClick={() => AddToCart(data?.product?._id)}
                    className="flex text-white bg-[#FF527B] text-sm border-0 py-2 px-4 focus:outline-none hover:border hover:border-[#FF527B] hover:bg-transparent hover:text-[#ff527b] rounded-full"
                  >
                    {AddToCartResponse.isLoading?`loading...`:"Add To Cart"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;