import React from "react";
import viteLogo from "/vite.svg";

function Logo() {
  return (
    <div className="flex text-center justify-center items-center">
      <a href={"/"}>
        <img
          src={viteLogo}
          className="w-auto h-24 m-8 will-change-auto transition transition-duration:300ms hover:drop-shadow-lg"
          alt="Vite logo"
        />
      </a>
    </div>
  );
}

export default Logo;
