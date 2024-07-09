import "./App.css";
import "flowbite";
import 'flowbite/dist/flowbite.css';
import { Datepicker } from 'flowbite-react';
import ProductCard from "./components/ProductCard";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <h3 className="text-3xl font-bold">Placa: VEX 45FDS</h3>
        <Datepicker placeholder="Select date" />
        <h3 className="text-3xl font-bold">Categoria:</h3>
        <h3 className="text-3xl font-bold">Productos escogidos:</h3>
      </header>
      <main className="flex-grow">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <h3 className="text-3xl font-bold">Observaciones</h3>
      </main>
      <Footer />
    </div>
  );
}

export default App;



