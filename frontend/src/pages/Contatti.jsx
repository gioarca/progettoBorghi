import React from "react";

function Contatti() {
  return (
    <div>
      <div>
        <p className="m-2">
          Lascia qui sotto un messaggio:
          <p>
            che sia un feedback, una richiesta di aiuto o semplicemente un
            ringraziamento
          </p>
        </p>
        <form action="submit" className="w-full">
          <input
            type="text"
            placeholder="Nome"
            className="m-2 w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          />
          <input
            type="text"
            placeholder="Cognome"
            className="m-2 w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          />
          <input
            type="text"
            placeholder="E-mail"
            className="m-2 w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          />
          <textarea
            type="text"
            placeholder="Inserisci qui il tuo messaggio"
            className="m-2 w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          />
        </form>
        <a href={"/grazie"}>
          <button action="submit">Invia</button>
        </a>
      </div>
      <div className="text-center justify-center items-center m-2 w-autopx-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white">
        <p className="font-bold m-2">Contatti</p>
        <a
          href={"mailto: borghi@gmail.com"}
          className="hover:text-red-500 hover:transition-all"
        >
          borghi@gmail.com
        </a>
        <p>+39 333 12345678</p>
        <p>via Borgo 1, Ischia, Italia</p>
      </div>
    </div>
  );
}

export default Contatti;
