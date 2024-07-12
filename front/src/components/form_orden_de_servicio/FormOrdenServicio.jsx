"use client";
import React from "react";
import { Datepicker } from "flowbite-react";
import { Button, Label, TextInput, Textarea, Select } from "flowbite-react";
import AcordeonServicios from "../acordeon_servicios/AcordeonServicios";
import AcordeonProductos from "../acordeon_productos/AcordeonProductos";

const FormOrdenServicio = ({ formData, handleInputChange, handleAddProduct, handleAddService, handleSubmit }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 flex-col">
      <h1 className="text-slate-400 m-5 text-base font-bold tracking-wider">ORDEN DE SERVICIO</h1>
      <form className="flex max-w-md flex-col gap-4 bg-white p-5 rounded-lg text-gray-800" onSubmit={handleSubmit}>
        <Label htmlFor="date" value="Fecha" />
        <Datepicker id="date" placeholder="Selecciona la fecha" onChange={(value) => handleInputChange({ target: { id: 'date', value } })} />

        <Label htmlFor="paymentMethod" value="Método de Pago" />
        <Select id="paymentMethod" required onChange={handleInputChange}>
          <option value="">Selecciona un método de pago</option>
          <option value="efectivo">Efectivo</option>
          <option value="tarjeta">Tarjeta</option>
          <option value="transferencia">Transferencia</option>
        </Select>

        <AcordeonServicios onAddService={handleAddService} />
        <AcordeonProductos onAddProduct={handleAddProduct} />

        <div className="max-w-md">
          <Label htmlFor="warnings" value="Sugerencias" />
          <Textarea
            id="warnings"
            placeholder="Ingrese las sugerencias..."
            rows={4}
            onChange={handleInputChange}
            className="text-gray-800"
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default FormOrdenServicio;