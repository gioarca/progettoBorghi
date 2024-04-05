import Home from "./Home";
import About from "./About";
import Borgo from "./Borgo";
import Login from "./Login";
import LoginSuccess from "./LoginSuccess";
import Searched from "./Searched";
import { RequireAuth } from "react-auth-kit";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/borgo/:_id" element={<Borgo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginSuccess" element={<LoginSuccess />} />
        <Route path="/searched/:search" element={<Searched />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;