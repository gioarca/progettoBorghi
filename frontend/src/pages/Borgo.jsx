import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Arrow from "../components/Arrow";
import Loader from "../components/Loader"; // loader component

function BorgoNew() {
  let params = useParams();
  const [borghi, setBorghi] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // nuovo stato per il caricamento

  useEffect(() => {
    const fetchDetails = async () => {
      setTimeout(async () => {
        // inserito il timeout di 1.5 secondi
        setIsLoading(true);
        const data = await fetch(
          `http://localhost:3000/api/v1/borgo/660574bb01aa56deb40d7be1` // modificare la route sul backend
          // `http://localhost:3000/api/v1/borgo/${borghi._id}` // modificare la route sul backend
        ); // 3000 è la porta per il backend
        const detailBorgo = await data.json();
        setBorghi(detailBorgo);
        console.log(detailBorgo.name);
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
    <div className="flex flex-wrap justify-center transition-opacity ease-in delay-150">
      <div className="max-w-xl rounded-large overflow-hidden shadow-lg m-5">
        <img className="w-96" src={borghi.imgURL} alt={borghi.name} />
        <div key={borghi._id} className="px-6 py-4">
          <div className="font-bold text-xl m-2">
            <h3>Descrizione</h3>
            <p>{borghi.description}</p>
            <h3>Luogo</h3>
            <p>{borghi.place}</p>
            <h3>Qualità internet</h3>
            <p>{borghi.internet}</p>
            <h3>Prezzi delle case</h3>
            <p>{borghi.priceHouses}</p>
            <h3>Prezzo medio per un Airbnb</h3>
            <p>{borghi.airbnbFilter}</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button>
            <Arrow />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BorgoNew;
