import "./App.css";
import "flowbite";
import "flowbite/dist/flowbite.css";
import { useLocation } from "react-router-dom";
import FormOrdenServicio from "./components/form_orden_de_servicio/FormOrdenServicio";
import 'flowbite/dist/flowbite.css';
import {Route, Routes} from "react-router-dom";
import Landing from "./views/landing/Landing";
import FormNuevoCliente from "./components/form_nuevo_client/FormNuevoCliente";
import Inventario from "./views/inventario/Inventario";
import FooterComponent from "./components/footercomponent/FooterComponent";
import Services from "./views/services/Services";
import NavBar from "./components/navbar/NavBar";
import Signup from "./firebase/manua-login";

function App() {

  const location = useLocation();
  const showNavBar = !["/"].includes(location.pathname);

  return (
    <>
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        
        <Route path="/admin/manage_employees" element={ <h1>manage_employees</h1>} />
        <Route path="/admin/manage_products" element={<h1>manage_products</h1>} />
        <Route path="/admin/manage_orders" element={<h1>manage_orders</h1>} />
        <Route path="/employee/services" element={<Services />} />
        <Route path="/employee/create_order" element={<FormOrdenServicio />} />
        <Route path="/employee/inventary" element={<Inventario />} />
        <Route path="/employee/create_user" element={<FormNuevoCliente />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
