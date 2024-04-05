import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Arrow from "../components/Arrow";
// import CardForm from "../components/CardForm";
import Loader from "../components/Loader";
import axios from "axios";
import Prenota from "../components/Prenota";

function LoginSuccess() {
  const [borghi, setBorghi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const fetchDetails = async () => {
      setTimeout(async () => {
        // inserito il timeout di 1.5 secondi
        setIsLoading(true);
        const data = await fetch(`http://localhost:3000/api/v1/borgo`); // porta per il backend
        // .then((response) => response.json())
        // .then((data) => {
        //   console.log(data);
        // });
        const borgo = await data.json();
        setBorghi(borgo);
        setIsLoading(false);
      }, 1000);
    };
    fetchDetails();
  }, []);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    // <div className="flex flex-wrap justify-center grid-flow-row-dense grid-cols-2 grid-rows-2 bg-zinc-900 max-w-l rounded-xl overflow-hidden shadow-lg m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300">
    //   {borghi.map((borgo) => {
    //     return (
    //       <div className="grid grid-cols-3 gap-7" key={borghi._id}>
    //         <div>
    //           <h3>{borgo.name}</h3>
    //           <img src={borgo.imgURL} />
    //           {/* <p>{borgo.description} </p>
    //         <p>{borgo.place} </p>
    //         <p>{borgo.internet} </p>
    //         <p>{borgo.priceHouses} </p>
    //         <p>{borgo.airbnbFilter} </p> */}
    //         </div>
    //       </div>
    //     );
    //   })}

    <div className="flex flex-wrap justify-center grid-flow-row-dense grid-cols-2 grid-rows-3">
      <div className="flex-wrap m-4 text-center justify-center">
        <p>Seleziona uno dei seguenti borghi per immergerti nella vita slow</p>
      </div>
      {borghi.map((borgo) => {
        return (
          <div
            className="max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
            key={borgo._id}
          >
            <Link to={"/borgo/" + borgo._id}>
              <img
                className="w-auto overflow-hidden m-auto"
                src={borgo.imgURL}
                alt={borgo.name}
              />
              <h1 className="flex flex-col text-center m-2">{borgo.name}</h1>
            </Link>
          </div>
        );
      })}
      <div className="flex flex-col">
        <Arrow />
      </div>
    </div>
  );
}

export default LoginSuccess;
