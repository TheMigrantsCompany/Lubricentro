import "./App.css";
import "flowbite";
import "flowbite/dist/flowbite.css";
import FormOrdenServicio from "./components/form_orden_de_servicio/FormOrdenServicio";
import { NavBar } from "./components/navbar/NavBar";
import 'flowbite/dist/flowbite.css';
import { Datepicker } from 'flowbite-react';
import {Route, Routes} from "react-router-dom";
import ProductCard from "./components/ProductCard";
import Landing from "./views/landing/Landing";

function App() {
  return (
    <>
      
      
      <Routes>
        
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
