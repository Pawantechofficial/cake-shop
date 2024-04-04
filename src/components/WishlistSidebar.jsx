import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const WishlistSidebar = ({ state }) => {
  return (
    <>
      <div
        className={`fixed ${
          state.isOpen ? "translate-x-[-0%]" : "translate-x-[100%]"
        } top-16 right-0 h-screen bg-white text-zinc-900 z-50 w-full lg:w-1/2 xl:w-1/3 border border-gray-400 before:absolute before:top-[-10px] before:right-36 sm:before:right-32 xl:before:right-40 before:w-5 before:h-5 before:z-50 before:bg-white before:rotate-45 before:border-t before:border-l before:border-gray-400`}
      >
        <div className="py-4 flex justify-end text-2xl text-zinc-900 px-5">
          <AiOutlineClose
            className="cursor-pointer"
            onClick={() => state.isSidebarOpen(false)}
          />
        </div>
        <div className="mx-4">My Wishlist</div>
      </div>
    </>
  );
};

export default WishlistSidebar;
