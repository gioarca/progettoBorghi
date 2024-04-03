import { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="sm:col-span-4 m-5 flex items-center justify-center float-center">
        <div className="mt-2 max-w-5xl">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-beige sm:max-w-md">
            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
              Borgo:
            </span>
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              value={input}
              className="block flex-1 border-0 bg-transparent py-4 pl-3 ml-3 placeholder:text-white text-white focus:ring-0 sm:text-sm sm:leading-6 transition ease-in delay-100 focus:bg-slate-900"
              placeholder="Inserisci il nome"
            ></input>
            <a href={"/searched/" + input}>
              <SearchIcon className="h-8 m-3 flex items-center justify-center float-right" />
            </a>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Search;
