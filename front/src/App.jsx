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
        <Route path="/admin/manage_employees" element={ <h1>manage_employees</h1>} />
        <Route path="/admin/manage_products" element={<h1>manage_products</h1>} />
        <Route path="/admin/manage_orders" element={<h1>manage_orders</h1>} />
        <Route path="/employee/services" element={<h1>services</h1>} />
        <Route path="/employee/create_order" element={<FormOrdenServicio />} />
        <Route path="/employee/inventary" element={<h1>inventary</h1>} />
        <Route path="/employee/create_user" element={<h1>create_user</h1>} />
      </Routes>
    </>
  );
}

export default App;
