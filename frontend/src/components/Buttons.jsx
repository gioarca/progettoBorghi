import React from "react";

function Buttons() {
  return (
    <div className="flex flex-row m-2 text-center justify-center items--center">
      <a href={"/registrazione"}>
        <button>Registrati</button>
      </a>
      <p className="py-7">oppure</p>
      <a href={"/loginSuccess"}>
        <button>Login</button>
      </a>
    </div>
  );
}

export default Buttons;
