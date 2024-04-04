import React from "react";

const SectionHeader = ({ subHeader, mainHeader }) => {
  return (
    <div>
      <h3 className="text-gray-500 uppercase leading-4 font-semibold">
        {subHeader}
      </h3>
      <h2 className="text-[#48CAE4] font-bold text-2xl italic uppercase">
        {mainHeader}
      </h2>
    </div>
  );
};

export default SectionHeader;
