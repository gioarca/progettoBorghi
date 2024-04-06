import React from "react";

function Contatti() {
  return (
    <div>
      <div>
        <p className="m-2">
          Lascia qui sotto un messaggio:
          <p>
            che sia un feedback, una richiesta o semplicemente un
            ringraziamento.
          </p>
        </p>
        <form action="submit" className="justify-center items-center md:mx-28">
          <input
            type="text"
            placeholder="Nome"
            className="m-2 w-2/3 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          />
          <input
            type="text"
            placeholder="Cognome"
            className="m-2 w-2/3 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          />
          <input
            type="text"
            placeholder="E-mail"
            className="m-2 w-2/3 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          />
          <textarea
            type="text"
            placeholder="Inserisci qui il tuo messaggio"
            className="m-2 w-2/3 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          />
        </form>
        <a href={"/grazie"}>
          <button action="submit">Invia</button>
        </a>
      </div>

      <div className="text-center justify-center items-center py-4 w-auto m-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm  md:w-2/3 justify-center items-center m-auto">
        {/* <div className="text-center justify-center items-center w-auto m-5 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm "> */}
        <div className="flex justify-center items-center m-10">
          <a
            target="_blank"
            href="https://www.facebook.com/borghi/"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png"
              width="50"
              height="50"
            />
          </a>
          &emsp;
          <a
            target="_blank"
            href="https://www.instagram.com/borghi/"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png"
              width="50"
              height="50"
            />
          </a>
          &emsp;
          <a
            target="_blank"
            href="https://www.linkedin.com/in/giorgio-arcamone/"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50"
          >
            <img
              src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
              width="50"
              height="50"
            />
          </a>
          &emsp;
          <a
            target="_blank"
            href={"mailto: borghi@gmail.com"}
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
              width="50"
              height="50"
            />
          </a>
          &emsp;
          <a
            target="_blank"
            href="https://github.com/gioarca"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              width="50"
              height="50"
            />
          </a>
        </div>
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
