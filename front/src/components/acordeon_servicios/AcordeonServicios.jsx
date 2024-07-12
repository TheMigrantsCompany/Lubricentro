import React from "react";
import { Accordion,Checkbox,Label, } from "flowbite-react"


const AcordeonServicios = ({ onAddService }) => {
  const services = [
    { id: 1, name: 'Servicio 1', price: 50 },
    { id: 2, name: 'Servicio 2', price: 75 },
    { id: 3, name: 'Servicio 3', price: 100 },
    { id: 4, name: 'Servicio 4', price: 125 },
    { id: 5, name: 'Servicio 5', price: 150 },
  ];

  const handleServiceSelect = (service, event) => {
    if (event.target.checked) {
      onAddService({ ...service, quantity: 1 });
    } else {
      onAddService(service, 'remove');
    }
  };

  return (
    <Accordion collapseAll className="mt-5 block">
      <Accordion.Panel>
        <Accordion.Title>Servicio</Accordion.Title>
        <Accordion.Content>
          <div className="flex max-w-md flex-col gap-4" id="checkbox">
            {services.map((service) => (
              <div key={service.id} className="flex items-center gap-2">
                <Checkbox id={`service-${service.id}`} onChange={(e) => handleServiceSelect(service, e)} />
                <Label htmlFor={`service-${service.id}`} className="flex">
                  {service.name}
                </Label>
              </div>
            ))}
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default AcordeonServicios;