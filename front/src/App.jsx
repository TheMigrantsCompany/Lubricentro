import "./App.css";
import "flowbite";
import 'flowbite/dist/flowbite.css';
import { Datepicker } from 'flowbite-react';
import {Route, Routes} from "react-router-dom";
import ProductCard from "./components/ProductCard";
import Landing from "./views/landing/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <h3 className="text-3xl font-bold ">Placa: VEX 45FDS</h3>
          <Datepicker placeholder="Select date" />
          <h3 className="text-3xl font-bold ">Categoria:</h3>
          <h3 className="text-3xl font-bold ">Productos escogidos:</h3>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <h3 className="text-3xl font-bold ">Observaciones</h3>
        </>
      } />
      <Route path="/Landing" element={<Landing />} />
    </Routes>
  );
}

export default App;
