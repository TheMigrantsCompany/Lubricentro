"use client";
import React from "react";
import { Label, Textarea, Select } from "flowbite-react";
const FormOrdenServicio = ({ formData, handleInputChange, }) => {
  return (
    <form className="max-w-4xl mx-auto flex flex-col gap-4 bg-tremor-background-default p-5 rounded-lg text-tremor-content-strong">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 px-2">
          <Label htmlFor="paymentMethod" value="Método de Pago" />
          <Select
            id="paymentMethod"
            required
            name="paymentMethod"
            onChange={handleInputChange}
            className="w-full border rounded-md p-2"
            value={formData.paymentMethod}
          >
            <option value="">Selecciona un método de pago</option>
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta">Tarjeta</option>
            <option value="transferencia">Transferencia</option>
          </Select>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <Label htmlFor="warnings" value="Sugerencias" />
          <Textarea
            id="warnings"
            name="warnings"
            placeholder="Ingrese las sugerencias..."
            rows={4}
            onChange={handleInputChange}
            value={formData.warnings}
            className="w-full border rounded-md p-2 text-tremor-content-strong"
          />
        </div>
      </div>
    </form>
  );
};

export default FormOrdenServicio;