"use client";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Label, TextInput, Textarea, Select } from "flowbite-react";
import AcordeonServicios from "../acordeon_servicios/AcordeonServicios";
import AcordeonProductos from "../acordeon_productos/AcordeonProductos";
const FormOrdenServicio = ({ formData, handleInputChange, handleSubmit }) => {
  const handleDateChange = (date) => {
    console.log("Fecha seleccionada en DatePicker: ", date);
    handleInputChange({ target: { id: "date", value: date } });
  };

   return (
    <form className="max-w-4xl mx-auto flex flex-col gap-4 bg-tremor-background-default p-5 rounded-lg text-tremor-content-strong">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-2">
          <div className="mb-4">
            <Label htmlFor="date" value="Fecha" />
            <DatePicker
              id="date"
              selected={formData.date.toString()}
              onChange={handleDateChange}
              className="w-full border rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="paymentMethod" value="Método de Pago" />
            <Select
              id="paymentMethod"
              required
              name="paymentMethod"
              onChange={handleInputChange}
              className="w-full border rounded-md p-2"
            >
              <option value="">Selecciona un método de pago</option>
              <option value="efectivo">Efectivo</option>
              <option value="tarjeta">Tarjeta</option>
              <option value="transferencia">Transferencia</option>
            </Select>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <AcordeonServicios />
          <AcordeonProductos />
        </div>
      </div>
      <div className="w-full px-2">
        <Label htmlFor="warnings" value="Sugerencias" />
        <Textarea
          id="warnings"
          name="warnings"
          placeholder="Ingrese las sugerencias..."
          rows={4}
          onChange={handleInputChange}
          className="w-full border rounded-md p-2 text-tremor-content-strong"
        />
      </div>
    </form>
  );
};

export default FormOrdenServicio;