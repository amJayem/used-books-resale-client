import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center backdrop-blur-[9xl]">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#00ADA4"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;
