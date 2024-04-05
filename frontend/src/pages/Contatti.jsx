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
        <form
          action="submit"
          className="rounded shadow-sm ring-1 sm:max-w-80 flex flex-col items-center justify-center"
        >
          <input
            type="text"
            placeholder="Nome"
            className="rounded-lg shadow-sm ring-2 ring-slate-400 sm:max-w-80 flex flex-col m-2 px-2"
          />
          <input
            type="text"
            placeholder="Cognome"
            className="rounded-lg shadow-sm ring-2 ring-slate-400 sm:max-w-80 flex flex-col m-2 px-2"
          />
          <input
            type="text"
            placeholder="E-mail"
            className="rounded-lg shadow-sm ring-2 ring-slate-400 sm:max-w-96 flex flex-col m-2 px-2"
          />
          <textarea
            type="text"
            placeholder="Inserisci qui il tuo messaggio"
            className="rounded-lg shadow-sm ring-2 ring-slate-400 sm:max-w-80 flex flex-col m-2 px-2"
          />
        </form>
        <a href={"/grazie"}>
          <button action="submit">Invia</button>
        </a>
      </div>
      <p className="font-bold m-2">Contatti</p>
      <a href={""} className="hover:text-red-500 hover:transition-all">
        borghi@gmail.com
      </a>
      <p>333 12345678</p>
      <p>via Borghi 26, Cosenza, Italia</p>
    </div>
  );
}

export default Contatti;
