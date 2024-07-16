import React from "react";
import { Accordion,Checkbox,Label, Select } from "flowbite-react"


const AcordeonServicios = ({ onAddService }) => {
  const services = [
    { id: 1, name: "Cambio de Aceite" },
    { id: 2, name: "Cambio de Filtros" },
  ];

  const handleServiceSelect = (e) => {
    const selectedService = services.find(service => service.id === parseInt(e.target.value));
    if (selectedService) {
      onAddService(selectedService);
    }
  };

  return (
    <div className="mb-4">
      <Label htmlFor="service" value="Servicios" />
      <Select id="service" name="service" onChange={handleServiceSelect} className="w-full border rounded-md p-2">
        <option value="">Selecciona un servicio</option>
        {services.map(service => (
          <option key={service.id} value={service.id}>{service.name}</option>
        ))}
      </Select>
    </div>
  );
};

export default AcordeonServicios;