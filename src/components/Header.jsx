"use client";
import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaFacebook, FaInstagram, FaSnapchat } from "react-icons/fa";
import { useState } from "react";
import Sidebar from "./Sidebar";
import WishlistSidebar from "./WishlistSidebar";
import SearchBar from "./SearchBar";
import DropDownProfile from "./DropDownProfile";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { store } from "../provider/redux/store";

const Header = () => {
  const Authuser = useSelector((store) => store?.userSlice?.user);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  const [isCart, setIsCart] = useState(false);
  const isCartOpen = (d) => {
    setIsCart(d);
  };
  const [isOpen, setIsOpen] = useState(false);
  const isSidebarOpen = (d) => {
    setIsOpen(d);
  };
  const [openProfile, setOpenProfile] = useState(false);
  const router = useRouter();
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    e.preventDefault();
    if (!search) {
      return;
    }
    router.push(`/search?query=${search}`);
  };
  console.log({ Authuser });
  return (
    <>
      <ToastContainer />
      <nav className="fixed bg-white w-full h-16 z-50 top-0 ">
        <div className="text-white flex justify-between items-center z-50 h-full w-full px-4 sm:px-8 2xl:px-16">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={40}
              className="cursor-pointer"
            />
          </Link>
          <div className="flex">
            <ul className="hidden gap-6 md:flex text-[#18191E]">
              <Link href="/">
                <li className=" text-base lg:text-xl hover:text-[#00B4D8]">
                  Home
                </li>
              </Link>
              <Link href="/menu">
                <li className=" text-base lg:text-xl hover:text-[#00B4D8]">
                  Menu
                </li>
              </Link>
              <Link href="/cake">
                <li className=" text-base lg:text-xl hover:text-[#00B4D8]">
                  Cake
                </li>
              </Link>
              <Link href="/about">
                <li className=" text-base lg:text-xl hover:text-[#00B4D8]">
                  About
                </li>
              </Link>
              <Link href="/contact">
                <li className=" text-base lg:text-xl hover:text-[#00B4D8]">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex gap-4">
            <div className="hidden lg:block">
              <div className="w-full justify-center">
                <form
                  onSubmit={searchHandler}
                  className="relative flex justify-center w-full"
                >
                  <div className="relative h-8">
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      type="search"
                      placeholder="Search..."
                      className="w-full h-8 p-4 rounded-full focus:outline-[#00B4D8] text-zinc-900 bg-slate-100"
                    />
                    <button
                      type="submit"
                      className="absolute right-1 top-4 text-zinc-900 -translate-y-1/2 p-2 rounded-full"
                    >
                      <AiOutlineSearch />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="text-zinc-900 hover:text-[#00B4D8]">
              <FaRegHeart
                onClick={() => isSidebarOpen(true)}
                className="text-2xl hover:text-[#00B4D8] hidden md:block ml-2 text-zinc-900"
              />
            </div>
            <div className="text-zinc-900 hover:text-[#00B4D8]">
              <AiOutlineShoppingCart
                onClick={() => isCartOpen(true)}
                className="text-2xl hover:text-[#00B4D8] hidden md:block ml-2 text-zinc-900"
              />
            </div>
            <div className="text-zinc-900 hidden md:block hover:text-[#00B4D8]">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <CgProfile className="text-2xl text-zinc-900" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href={"/profile"}>Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={"/order"}>My Order</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="md:hidden pl-24 flex gap-4 text-[#18191E] cursor-pointer">
            <FaRegHeart
              onClick={() => isSidebarOpen(true)}
              className="text-2xl text-zinc-900"
            />
            <AiOutlineShoppingCart
              onClick={() => isCartOpen(true)}
              className="text-2xl text-zinc-900"
            />
            <DropdownMenu>
              <DropdownMenuTrigger>
                <CgProfile className="text-2xl text-zinc-900" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={"/profile"}>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/order"}>My Order</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <AiOutlineMenu onClick={handleNav} size={25} />
          </div>
        </div>

        <div
          className={
            menuOpen
              ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen z-50 bg-white text-[#18191E] p-10 ease-in duration-500"
              : "fixed left-[-100%] h-screen top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="flex-col py-4">
            <ul>
              <Link href="/">
                <li
                  onClick={handleNav}
                  className="py-4 px-3  uppercase cursor-pointer"
                >
                  Home
                </li>
              </Link>
              <Link href="/menu">
                <li
                  onClick={handleNav}
                  className="py-4 px-3 uppercase cursor-pointer"
                >
                  Menu
                </li>
              </Link>
              <Link href="/about">
                <li
                  onClick={handleNav}
                  className="py-4 px-3 uppercase cursor-pointer"
                >
                  About
                </li>
              </Link>

              <Link href="/contact">
                <li
                  onClick={handleNav}
                  className="py-4 px-3 uppercase cursor-pointer"
                >
                  contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-row justify-around pt-10 items-center">
            <Link href="https://facebook.com" target="_blank">
              <FaFacebook size={30} className="cursor-pointer" />
            </Link>
            <Link href="https://www.instagram.coms" target="_blank">
              <FaInstagram size={30} className="cursor-pointer" />
            </Link>
            <Link href="https://www.snapchat.com" target="_blank">
              <FaSnapchat size={30} className="cursor-pointer" />
            </Link>
          </div>
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={40}
              className="cursor-pointer pt-10"
            />
          </Link>
        </div>
        {/* <div
          className={
            cartOpen
              ? "block duration-500 ease-in"
              : "hidden duration-500 ease-in"
          }
        >
          <Sidebar />
        </div> */}
      </nav>
      <WishlistSidebar state={{ isOpen, isSidebarOpen }} />
      <Sidebar state={{ isCart, isCartOpen }} />
      <div className="pb-2 z-40 lg:hidden fixed w-full bg-white">
        <div className="w-full justify-center">
          <form
            onSubmit={searchHandler}
            className="relative flex justify-center w-full"
          >
            <div className="relative h-8">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search..."
                className="w-full h-8 p-4 rounded-full focus:outline-[#00B4D8] bg-slate-100"
              />
              <button
                type="submit"
                className="absolute right-1 top-4 text-zinc-900 -translate-y-1/2 p-2 rounded-full"
              >
                <AiOutlineSearch />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Header;
