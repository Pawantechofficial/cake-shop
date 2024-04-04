import React from "react";
import { AiOutlineClose } from "react-icons/ai";
const Sidebar = ({ state }) => {
  return (
    <>
      <div
        className={`fixed ${
          state.isCart ? "translate-x-[-0%]" : "translate-x-[100%]"
        } top-16 right-0 h-screen bg-white text-zinc-900 z-50 w-full lg:w-1/2 xl:w-1/3 border border-gray-400 before:absolute before:top-[-10px] before:right-24 sm:before:right-20 xl:before:right-28 before:w-5 before:h-5 before:z-50 before:bg-white before:rotate-45 before:border-t before:border-l before:border-gray-400`}
      >
        <div className="py-4 flex justify-end text-2xl text-zinc-900 px-5">
          <AiOutlineClose
            className="cursor-pointer"
            onClick={() => state.isCartOpen(false)}
          />
        </div>
        <div className="mx-4">My Cart</div>
      </div>
    </>
    // <div className="flex flex-col md:flex-row md:justify-start mx-auto justify-center items-center py-2 mt-12">
    //   <div className="sidebar absolute top-16 min-h-full w-[92%] lg:w-1/2 xl:w-1/3 rounded-lg md:right-1 z-40 mx-auto border border-primary bg-slate-100 p-4">
    //     <h1 className="font-semibold text-center text-zinc-900 text-xl">
    //       Shopping Cart
    //     </h1>
    //     <hr className=" font-bold h-1 mt-2" />
    //     <div className="flex mt-2">
    //       <div className="w-2/4 font-semibold">
    //         <p>Products</p>
    //       </div>
    //       <div className="w-1/4 font-semibold items-center text-center justify-center">
    //         <p>Quantity</p>
    //       </div>
    //       <div className="w-1/4 font-semibold items-center text-center justify-center">
    //         <p>Price</p>
    //       </div>
    //     </div>

    //     {/* <div className="flex gap-2 justify-between rounded-lg mt-2 bg-slate-100 p-2">
    //       <div>Birthday cake</div>
    //       <div className="flex gap-1 items-center">
    //         <button className="bg-white px-2 rounded-md text-lg">-</button>
    //         <span>2</span>
    //         <button className="bg-white px-2 rounded-md text-lg">+</button>
    //       </div>
    //       <div>598</div>
    //     </div>

    //      */}

    //     <ol className="list-decimal font-semibold p-2">
    //       <li className="bg-slate-100 rounded-lg mt-2">
    //         <div className="item flex p-2">
    //           <div className="w-2/4 font-semibold text-primary">
    //             Birthday cake
    //           </div>
    //           <div className="flex w-1/4 font-semibold items-center justify-center">
    //             <button className="bg-white px-2 rounded-sm text-lg">-</button>
    //             <span className="px-1">1</span>
    //             <button className="bg-white px-2 rounded-sm text-lg">+</button>
    //           </div>
    //           <div className="flex w-1/4 font-semibold items-center justify-center">
    //             299
    //           </div>
    //         </div>
    //       </li>

    //       <li className="bg-slate-100 rounded-lg mt-2">
    //         <div className="item flex p-2">
    //           <div className="w-2/4 font-semibold">Chocolate cake</div>
    //           <div className="flex w-1/4 font-semibold items-center justify-center">
    //             <button className="bg-white px-2 rounded-sm text-lg">-</button>
    //             <span className="px-1">1</span>
    //             <button className="bg-white px-2 rounded-sm text-lg">+</button>
    //           </div>
    //           <div className="flex w-1/4 font-semibold items-center justify-center">
    //             499
    //           </div>
    //         </div>
    //       </li>

    //       <li className="bg-slate-100 rounded-lg mt-2">
    //         <div className="item flex p-2">
    //           <div className="w-2/4 font-semibold">Speacial cake</div>
    //           <div className="flex w-1/4 font-semibold items-center justify-center">
    //             <button className="bg-white px-2 rounded-sm text-lg">-</button>
    //             <span className="px-1">1</span>
    //             <button className="bg-white px-2 rounded-sm text-lg">+</button>
    //           </div>
    //           <div className="flex w-1/4 font-semibold items-center justify-center">
    //             549
    //           </div>
    //         </div>
    //       </li>

    //       <li className="bg-slate-100 rounded-lg mt-2">
    //         <div className="item flex p-2">
    //           <div className="w-2/4 font-semibold">Photo cake</div>
    //           <div className="flex w-1/4 font-semibold items-center justify-center">
    //             <button className="bg-white px-2 rounded-sm text-lg">-</button>
    //             <span className="px-1">1</span>
    //             <button className="bg-white px-2 rounded-sm text-lg">+</button>
    //           </div>
    //           <div className="flex w-1/4 font-semibold items-center justify-center">
    //             399
    //           </div>
    //         </div>
    //       </li>

    //       <li className="bg-slate-100 rounded-lg mt-2">
    //         <div className="item flex p-2">
    //           <div className="w-2/4 font-semibold">Black cake</div>
    //           <div className="flex w-1/4 font-semibold items-center justify-center">
    //             <button className="bg-white px-2 rounded-sm text-lg">-</button>
    //             <span className="px-1">1</span>
    //             <button className="bg-white px-2 rounded-sm text-lg">+</button>
    //           </div>
    //           <div className="flex w-1/4 font-semibold items-center justify-center">
    //             420
    //           </div>
    //         </div>
    //       </li>
    //     </ol>

    //     <div className="flex flex-col md:flex-row gap-2 items-center p-2 justify-between mt-6">
    //       <div>
    //         <h2 className="text-zinc-900 text-lg font-semibold">
    //           Total Price ₹<span>2166</span>
    //         </h2>
    //       </div>
    //       <div>
    //         <button className="bg-primary text-white p-2 rounded-lg">
    //           Proceed to checkout
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Sidebar;
