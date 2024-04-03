import React from "react";
import Login from "./Login";
import Search from "../components/Search";
import { motion } from "framer-motion";
import Axios from "axios";

function Home() {
  return (
    <motion.div>
      <Search />
      <Login />
    </motion.div>
  );
}

export default Home;
