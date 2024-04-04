import React from "react";
import Link from "next/link";
import { FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer border m-2 rounded-lg z-10 border-[#33353F]  text-zinc-900">
      <div className="container p-2 sm:p-10 flex items-center justify-evenly sm:justify-between">
        <Link href={"/"}>
          <span className="hidden sm:block bg-clip-text bg-gradient-to-r from-secondary-600 to-primary-400">
            PAWAN RAI
          </span>
        </Link>
        <p className="text-center">
          Copyright &copy; 2024 All rights reserved by{" "}
          <Link href="https://www.pawantech.com">
            <span className="text-[#00B4D8] bg-clip-text bg-gradient-to-r from-secondary-600 to-primary-400">
              Pawan RAI
            </span>
          </Link>
        </p>
        <div>
          <Link href="/">
            <FaArrowCircleUp className="text-[#00B4D8] w-8 h-8 sm:w-10 sm:h-10" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
