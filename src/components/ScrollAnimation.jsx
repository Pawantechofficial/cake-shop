import { motion, useScroll } from "framer-motion";
import React from "react";

const ScrollAnimation = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="fixed z-50 top-0 left-0 right-0 bg-[#48CAE4] h-1"
        style={{
          transformOrigin: "0%",
          scaleX: scrollYProgress,
        }}
      ></motion.div>
    </>
  );
};

export default ScrollAnimation;
