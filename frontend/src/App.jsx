import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Compare from "./components/Compare";
import Data from "./components/Data";
import { Route, Routes } from "react-router-dom";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.withCredentials = true;
function App() {
  return (
    <Routes>
      <Route path="/" element={<Data />} />
      <Route path="/compare" element={<Compare />} />
    </Routes>
  );
}

export default App;
