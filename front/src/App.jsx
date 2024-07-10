import "./App.css";
import "flowbite";
import "flowbite/dist/flowbite.css";
import FormOrdenServicio from "./components/form_orden_de_servicio/FormOrdenServicio";
import { NavBar } from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <FormOrdenServicio></FormOrdenServicio>
      <Footer />
    </>
  );
}

export default App;



