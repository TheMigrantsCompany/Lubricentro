"use client";
import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Label, TextInput, Textarea, Select } from "flowbite-react";
import AcordeonServicios from "../acordeon_servicios/AcordeonServicios";
import AcordeonProductos from "../acordeon_productos/AcordeonProductos";
import SearchBar from "../searchbar/SearchBar";
const FormOrdenServicio = ({ formData, handleInputChange, handleAddProduct, handleAddService }) => {
  const [searchResults, setSearchResults] = useState([]); // Estado para resultados de búsqueda

  const handleDateChange = (date) => {
    handleInputChange({ target: { id: "date", value: date } });
  };

  const handleSearch = (query) => {
    // Aquí debes implementar la lógica de búsqueda, por ejemplo, filtrando productos y servicios
    // Simularemos la búsqueda con datos ficticios
    console.log("Query for search:", query); // Depuración
    const results = [
      { id: 1, name: "Producto A", type: "product", price: 10 },
      { id: 2, name: "Servicio B", type: "service", price: 20 },
    ].filter(item => item.name.toLowerCase().includes(query.toLowerCase()) || item.id.toString().includes(query));
    
    console.log("Search results:", results); // Depuración
    setSearchResults(results);
  };

  const handleSelectResult = (result) => {
    if (result.type === "product") {
      handleAddProduct(result, "add");
    } else {
      handleAddService(result);
    }
    setSearchResults([]); // Limpiar resultados de búsqueda después de seleccionar
  };

  return (
    <form className="max-w-4xl mx-auto flex flex-col gap-4 bg-tremor-background-default p-5 rounded-lg text-tremor-content-strong">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 px-2 mb-4">
          <div className="mb-4">
            <Label htmlFor="date" value="Fecha" />
            <DatePicker
              id="date"
              selected={formData.date ? new Date(formData.date) : null}
              onChange={handleDateChange}
              className="w-full border rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="paymentMethod" value="Método de Pago" className="mb-2" />
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
          <div className="mb-4">
            <SearchBar onSearch={handleSearch} />
            {searchResults.length > 0 && (
              <div className="bg-white border rounded-md mt-2 max-h-60 overflow-y-auto">
                {searchResults.map(result => (
                  <div
                    key={result.id}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSelectResult(result)}
                  >
                    {result.name} - ${result.price}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <AcordeonServicios onAddService={handleAddService} />
          <AcordeonProductos onAddProduct={handleAddProduct} />
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