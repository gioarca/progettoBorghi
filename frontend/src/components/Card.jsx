import React from "react";

function Card(imgURL, name, description, place) {
  return (
    <div className="flex flex-wrap justify-center grid-flow-row-dense grid-cols-2 grid-rows-2 bg-zinc-900 max-w-l rounded-xl overflow-hidden shadow-lg m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
      <img src={borgo.imgURL} className="text-left m-2" height="200"></img>
      {/* <div className="flex-wrap flex-col p-2">
        <h2 className="text-2xl font-bold">{borghi.name}</h2>
        <p className="text-left m-2">{borghi.description}</p>
        <p className="text-left m-2">{borghi.place}</p>
        <p className="text-left m-2">{borghi.priceHouses}</p>
        <p className="text-left m-2">{borghi.airbnbFilter}</p>
        <p className="text-left m-2">{borghi.internet}</p>
      </div> */}
    </div>
  );
}

export default Card;
