import React from "react";

const page = () => {
  return (
    <>
      {Array(20).map((c, i) => {
        return (
          <div>
            <h1>Test</h1>
          </div>
        );
      })}
    </>
  );
};

export default page;
