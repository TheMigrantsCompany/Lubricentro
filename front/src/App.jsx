import "./App.css";
import "flowbite";
import "flowbite/dist/flowbite.css";
import FormOrdenServicio from "./components/form_orden_de_servicio/FormOrdenServicio";
import { NavBar } from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <FormOrdenServicio></FormOrdenServicio>
    </>
  );
}

export default App;
