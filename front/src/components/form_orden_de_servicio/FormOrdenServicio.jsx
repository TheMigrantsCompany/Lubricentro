"use client";
import { Datepicker } from "flowbite-react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import AcordeonServicios from "../acordeon_servicios/AcordeonServicios";
import AcordeonProductos from "../acordeon_productos/AcordeonProductos";

const FormOrdenServicio = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 flex-col">
      <h1 className="text-slate-400 m-5 text-base font-bold tracking-wider">ORDEN DE SERVICIO</h1>
      <form className="flex max-w-md flex-col gap-4 bg-white p-5 rounded-lg">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="placa" value="Placa" />
          </div>
          <TextInput
            id="placa"
            type="text"
            placeholder="Ingrese placa"
            required
          />
        </div>

        <Label htmlFor="Fecha" value="Fecha" />
        <Datepicker placeholder="Selecciona la fecha" />
        <AcordeonServicios></AcordeonServicios>
        <AcordeonProductos></AcordeonProductos>

        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Observaciones" />
          </div>
          <Textarea
            id="comment"
            placeholder="Ingrese sus observaciones..."
            required
            rows={4}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default FormOrdenServicio;
