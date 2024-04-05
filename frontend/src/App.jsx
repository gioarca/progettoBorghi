import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Head from "./components/Head";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import Card from "./components/Card";
// import CardForm from "./components/CardForm";
import Pages from "./pages/Pages";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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