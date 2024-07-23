import "./App.css";
import "flowbite";
import "flowbite/dist/flowbite.css";
import { useLocation } from "react-router-dom";
import 'flowbite/dist/flowbite.css';
import {Route, Routes} from "react-router-dom";
//rutas employee//
import SideBarEmployee from "./components/sidebar/SideBarEmployee";
import NewClientEmp from "./views/new-client-emp/NewClientEmp";
import CreateOrderEmp from "./views/create-order-emp/Create-Order-Emp";
import Services from "./views/services/Services";

//rutas admin //
import ManageProducts from "./views/manage_products/ManageProducts";
import GestionClientes from "./views/manage_clients/Manage_Clients";
import GestionEmpleados from "./views/manage_employees/Manage_employees";
import SideBarAdmin from "./components/sidebar/SideBarAdmin";
import MangeOrders from "./views/manage_orders/ManageOrders";


//rutas en comun//
import Landing from "./views/landing/Landing";
import Inventario from "./views/inventario/Inventario";
import FooterComponent from "./components/footercomponent/FooterComponent";
import NavBar from "./components/navbar/NavBar";

function App() {

  const location = useLocation();
  const showNavBar = !["/"].includes(location.pathname);

  //separa las rutas para poder aplicar las sideBar segun corresponda//
  const employeeRoutes = [
    "/employee/services",
    "/employee/create_order",
    "/employee/inventary",
    "/employee/create_user",
    "/employee/sevices" 
  ];

  const adminRoutes = [
    "/admin/manage_employees",
    "/admin/manage_products",
    "/admin/manage_orders",
    "/admin/manage_clients",
   
  ];

  //determina si la ruta actual es una ruta de empleado o una ruta de administrador//
  const isEmployeeRoute = employeeRoutes.includes(location.pathname);
  const isAdminRoute = adminRoutes.includes(location.pathname);

  return (
    <>
      {showNavBar && <NavBar />}
      <div className="flex">
        {isEmployeeRoute && <SideBarEmployee />}
        {isAdminRoute && <SideBarAdmin />}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            {/* Rutas de admin */}
            <Route path="/admin/manage_employees" element={<GestionEmpleados />} />
            <Route path="/admin/manage_products" element={<ManageProducts />} />
            <Route path="/admin/manage_orders" element={<MangeOrders/>} />
            <Route path="/admin/manage_clients" element={<GestionClientes />} />
            {/* Rutas de employee */}
            <Route path="/employee/services" element={<Services />} />
            <Route path="/employee/create_order" element={<CreateOrderEmp />} />
            <Route path="/employee/inventary" element={<Inventario />} />
            <Route path="/employee/create_user" element={<NewClientEmp />} />
            <Route path="/employee/sevices" element={<Services />} /> 
          </Routes>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default App;