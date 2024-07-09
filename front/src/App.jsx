import "./App.css";
import "flowbite";
import 'flowbite/dist/flowbite.css';
import { Datepicker } from 'flowbite-react';

function App() {
  return (
    <>
     <h3 className="text-3xl font-bold ">Placa: VEX 45FDS</h3>
     <Datepicker placeholder="Select date" />
     <h3 className="text-3xl font-bold ">Categoria:</h3>
     <h3 className="text-3xl font-bold ">Productos escogidos:</h3>
     <h3 className="text-3xl font-bold ">Observaciones</h3>
           
    </>
  );
}

export default App;
