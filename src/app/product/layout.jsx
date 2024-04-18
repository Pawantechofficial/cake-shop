import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <section className="text-gray-600">
        <div className="px-5 py-10 mx-auto">
          <div className="flex flex-wrap justify-center">{children}</div>
        </div>
      </section>
    </>
  );
};

export default layout;
