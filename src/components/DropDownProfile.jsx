import React from "react";

const DropDownProfile = () => {
  return (
    <div className="flex flex-col fixed top-16 lg:top-14 right-8 md:right-2 xl:right-10 z-50 w-[160px] rounded bg-white border border-gray-400 p-4 dropDownProfile before:absolute before:top-[-10px] before:right-6 before:w-5 before:h-5 before:z-50 before:bg-white before:rotate-45 before:border-t before:border-l before:border-gray-400 ">
      <ul className="flex flex-col gap-4">
        <li>Profile</li>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </div>
  );
};

export default DropDownProfile;
