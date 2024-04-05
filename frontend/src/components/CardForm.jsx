import { useState } from "react";

function CardForm({ addCity }) {
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    description: "",
    imgURL: "",
    internetSpeed: "",
    priceHouses: "",
    airbnbFilter: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = {
      id: Math.floor(Math.random()),
      name: formData.name,
      description: formData.description,
      imgURL: formData.imgURL,
      internetSpeed: formData.speed,
      priceHouses: formData.price,
      airbnbFilter: formData.airbnb,
    };
    addCity(city);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type == "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col ring-2 gap-3 w-80 mb-10 bg-grey-200 p-5 rounded-lg"
    >
      <div className="flex flex-col m-1 bg-transparent">
        <label>Nome Borgo</label>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleInputChange}
          className="bg-slate-300 text-black"
        ></input>
      </div>
      <div className="flex flex-col m-1 bg-transparent">
        <label>Luogo</label>
        <input
          type="text"
          name="name"
          value={formData.place}
          onChange={handleInputChange}
          className="bg-slate-300 text-black"
        ></input>
      </div>
      <div className="flex flex-col m-1">
        <label>Descrizione</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="bg-slate-300 text-black"
        ></textarea>
      </div>
      <div className="flex flex-col m-1">
        <label>Immagine</label>
        <input
          type="text"
          name="imgURL"
          value={formData.imgURL}
          onChange={handleInputChange}
          className="bg-slate-300 text-black"
        ></input>
      </div>
      <div className="flex flex-col m-1">
        <label>Prezzo medio case in vendita</label>
        <input
          type="link"
          name="linkHouses"
          value={formData.price}
          onChange={handleInputChange}
          className="bg-slate-300 text-black"
        ></input>
      </div>
      <div className="flex flex-col m-1">
        <label>Velocità internet</label>
        <input
          type="link"
          name="linkInternet"
          value={formData.speed}
          onChange={handleInputChange}
          className="bg-slate-300 text-black"
        ></input>
      </div>
      <div className="flex flex-col m-1">
        <label>Link Airbnb</label>
        <input
          type="link"
          name="linkAirbnb"
          value={formData.airbnb}
          onChange={handleInputChange}
          className="bg-slate-300 text-black"
        ></input>
      </div>
      {/* <div className="flex flex-col m-1">
        <label>Visitata?</label>
        <input
          type="checkbox"
          name="isVisited"
          checked={formData.isVisited}
          onChange={handleInputChange}
          className="bg-slate-300 text-black"
        ></input>
      </div> */}
      <button className="bg-zinc-700" type="submit">
        Aggiungi Borgo
      </button>
    </form>
  );
}

export default CardForm;
