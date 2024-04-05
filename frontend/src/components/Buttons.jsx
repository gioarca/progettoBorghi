import React from "react";

function Buttons() {
  return (
    <div className="flex flex-row-1 m-2 text-center">
      <a href={"/registrazione"}>
        <button>Registrati</button>
      </a>
      <a href={"/loginSuccess"}>
        <button>Login</button>
      </a>
    </div>
  );
}

export default Buttons;
