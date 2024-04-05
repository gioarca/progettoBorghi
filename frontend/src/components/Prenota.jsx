import React from "react";
import { CreditCardIcon } from "@heroicons/react/outline";

function Prenota() {
  return (
    <div className="flex justify-center items-center text-xl m-12 w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50">
      <a href="">
        <CreditCardIcon />
        Prenota
      </a>
    </div>
  );
}

export default Prenota;
