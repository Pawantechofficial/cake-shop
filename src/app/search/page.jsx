import React from "react";

const page = (props) => {
  console.log(props);
  return (
    <div className="mt-20">
      <h1 className="text-center">Query: {props.searchParams.query}</h1>
    </div>
  );
};

export default page;
