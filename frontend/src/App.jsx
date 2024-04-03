import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Head from "./components/Head";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Card from "./components/Card";
import CardForm from "./components/CardForm";
import Pages from "./pages/Pages";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [cities, setCities] = useState([
    {
      id: 0,
      name: "Altomonte",
      description:
        "La Calabria custodisce un borgo delle meraviglie, Altomonte, situato a 490 metri sul livello del mare. Molto amato dagli sposi, questo borgo incastonato in un paesaggio collinare ricco di vigneti e uliveti, è ricco di storia. Da non perdere una passeggiata tra i vicoli medievali alla scoperta delle tante meraviglie: dal Teatro all’aperto al Museo Civico, dal Castello Feudale alla Torre dei Pallotta, fino al Complesso monastico di San Francesco di Paola.",
      imgURL:
        "https://plus.unsplash.com/premium_photo-1677048147724-5861c9c1e3d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QUxUT01PTlRFfGVufDB8fDB8fHww",
      isVisited: true,
    },
    {
      id: 1,
      name: "Cefalù",
      description:
        "In Sicilia merita senz’altro una visita il borgo di Cefalù, situato ai piedi di un promontorio roccioso nel Parco delle Madonie. Qui potrete godervi una bellissima spiaggia dorata e ammirare meraviglie architettoniche come la famosa Cattedrale dall’architettura Normanna, ma anche Piazza del Duomo, il Palazzo vescovile, Palazzo Piraino, il Lavatoio medievale. E non dimenticate di gustarvi un’ottima cena a base di pesce.",
      imgURL:
        "https://images.unsplash.com/photo-1524942434100-2b3f200f5b40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q0VGQUwlQzMlOTl8ZW58MHx8MHx8fDA%3D",
      isVisited: true,
    },
    {
      id: 2,
      name: "Scopello",
      description:
        "In Sicilia sorge Scopello, borgo marinaro situato in provincia di Trapani a 106 metri sul livello del mare. Qui è stata scoperta una delle necropoli mesolitiche più importanti d’Italia. La sua storia è infatti antichissima anche se il borgo, per com’è oggi, risale al XVII sec.. La natura di Scopello è spettacolare così come la veduta più famosa del borgo sui famosi Faraglioni, che ne sono anche il simbolo.",
      imgURL:
        "https://images.unsplash.com/photo-1523365154888-8a758819b722?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2NvcGVsbG98ZW58MHx8MHx8fDA%3D",
      isVisited: true,
    },
    {
      id: 3,
      name: "Alberobello",
      description:
        "In Puglia sorge il borgo famosissimo di Alberobello, celebre soprattutto per la presenza dei trulli, che gli sono valsi la qualifica di Patrimonio Mondiale dell’Unesco. Si tratta di particolari costruzioni coperte da cupole di cerchi concentrici realizzati in pietra. Li potete ammirare ovunque, come per esempio nel distretto di Rione Monti, allineati lungo le stradine irregolari.",
      imgURL:
        "https://images.unsplash.com/photo-1612819158276-461548c64b85?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWxiZXJvYmVsbG98ZW58MHx8MHx8fDA%3D",
      isVisited: true,
    },
    {
      id: 4,
      name: "Pietrapertosa",
      description:
        "Situato a 1.088 metri di altitudine, nel Parco di Gallipoli Cognato e delle Piccole Dolomiti Lucane, Pietrapertosa è un borgo della Basilicata che vale senz’altro la pena visitare. Sarà un vero piacere immergersi nella natura incontaminata, tra boschi, monti, torrenti e grotte naturali, tutte da scoprire.",
      imgURL:
        "https://images.unsplash.com/photo-1707232400083-7c2fe027fc02?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGlldHJhcGVydG9zYXxlbnwwfHwwfHx8MA%3D%3D",
      isVisited: true,
    },
    {
      id: 4,
      name: "Castiglione",
      description: "BORGO tutto da scoprire.",
      imgURL:
        "https://images.unsplash.com/photo-1595317177631-5b4dd3b738b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FzdGlnbGlvbmUlMjBkaSUyMHNpY2lsaWF8ZW58MHx8MHx8fDA%3D",
      isVisited: true,
    },
    {
      id: 5,
      name: "Conversano",
      description:
        "Fascino medievale, borgo di arte, storia e gustose ciliegie, Conversano vanta un centro completamente pedonale dove passeggiare alla scoperta di autentiche meraviglie. Qualche esempio? L'imponente castello sede della Pinacoteca comunale, la Cattedrale di Santa Maria Assunta in stile romanico pugliese, Piazza della Concordia e il Monastero di San Benedetto.",
      imgURL:
        "https://images.unsplash.com/photo-1707232400083-7c2fe027fc02?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGlldHJhcGVydG9zYXxlbnwwfHwwfHx8MA%3D%3D",
      isVisited: true,
    },
    {
      id: 6,
      name: "Cisternino",
      description:
        "In Puglia sorge un borgo di bianco vestito, Cisternino, dove si possono ammirare meraviglie architettoniche come il Palazzo vescovile e tanti palazzi nobiliari di incredibile bellezza. Meritano una visita anche la chiesetta di S. Lucia e la Torre. Per non parlare delle magnifiche campagne, dove perdersi tra oliveti, vigneti, masserie antiche e trulli. Imperdibile anche il bosco di Cisternino, il più grande della provincia di Brindisi.",
      imgURL:
        "https://images.unsplash.com/photo-1639317041742-c4b6909a1399?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENJU1RFUk5JTk98ZW58MHx8MHx8fDA%3D",
      isVisited: true,
    },
    {
      id: 7,
      name: "Savoca",
      description:
        "In provincia di Messina sorge il borgo di Savoca, famoso perché vi hanno girato alcune scene del celebre film “Il padrino”, e per le Mummie di Savoca, esposte nella cripta locale. Interessante anche il percorso che dal Pizzo di Cucco procede tra antiche trazzere e stradine, dove ammirare casolari di pietra. Il centro storico non è da meno con la sua impronta chiaramente medievale. Da vedere anche la Chiesa di Santa Maria in Cielo Assunta, la Chiesa di San Michele, e la Chiesa del Calvario.",
      imgURL:
        "https://images.unsplash.com/photo-1708685073858-dcc6e32c82ad?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true,
    },
    {
      id: 8,
      name: "Furore",
      description:
        "Furore è un delizioso e piccolissimo borgo di pescatori in provincia di Salerno. Qui le case spuntano dai costoni di roccia lungo il famoso Fiordo di Furore. Da vedere sicuramente i due mulini e le due fabbriche di carta, ma anche i celebri muri d’autore, bellissimi murales dipinti da artisti, che hanno ulteriormente contribuito alla sua fama.",
      imgURL:
        "https://images.unsplash.com/photo-1628082989518-22259034f4ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RnVyb3JlfGVufDB8fDB8fHww",
      isVisited: true,
    },
    {
      id: 9,
      name: "San Nicola Arcella",
      description:
        "Piccolo borgo marinaro situato in Calabria, San Nicola Arcella è una meta turistica molto ambita. La baia si contraddistingue per le acque cristalline, per le bellissime scogliere e le grotte della costa. La spiaggia dell’Arcomagno, qui situata, è una delle più belle della Calabria, e una delle più selvagge, dov’è possibile ammirare la grotta saracena. Il borgo cela anche una serie di affreschi che ne illustrano la storia e include meraviglie come la Torre saracena e il Palazzo del Principe.",
      imgURL:
        "https://images.unsplash.com/photo-1657965623394-cc8c0b25bb6e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FuJTIwbmljb2xhJTIwYXJjZWxsYXxlbnwwfHwwfHx8MA%3D%3D",
      isVisited: true,
    },
    {
      id: 10,
      name: "Cinquefrondi",
      description:
        "Una casa al prezzo di un caffè? Sì, non è una bufala, anche se può suonare difficile da credere. Il comune di Cinquefrondi, in Calabria, ha messo delle case all'asta al prezzo di un euro. Cinquefrondi si trova nel centro di una delle zone più belle e naturalisticamente ricche della Calabria: il Parco Nazionale dell'Aspromonte. E non è nemmeno così lontano dal mare: in auto ci si arriva tranquillamente. Per assicurarsi che il progetto di riqualifica vada a buon fine, il comune pone come condizione quella di dimostrare entro tre mesi l'inizio dei lavori di ristrutturazione. Ed entro tre anni i lavori devono essere ultimati.",
      imgURL:
        "https://hips.hearstapps.com/hmg-prod/images/cinquefrondi-1593506317.jpg",
      isVisited: true,
    },
  ]);

  const addCity = (city) => {
    setCities([...cities, city]);
  };

  return (
    <div className="App">
      <Nav />
      <Head />
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <a href={"/loginSuccess"}>
          <button>Accedi</button>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
