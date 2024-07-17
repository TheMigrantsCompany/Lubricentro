import React from 'react';
import { Card, Title, TextInput, Button } from '@tremor/react';

const ServiceForm = () => {
  return (
    <Card className="p-5 bg-white shadow-md">
      <Title className="text-center text-2xl mb-4">(Formulario Creacion de Servicio)</Title>
      <div className="flex flex-col space-y-4">
        <div>
          <label className="text-black">Nombre</label>
          <TextInput placeholder="Ingrese nombre" className="w-full" />
        </div>
        <div>
          <label className="text-black">Descripción</label>
          <TextInput placeholder="Ingrese descripción" className="w-full" />
        </div>
        <div>
          <label className="text-black">Servicio</label>
          <TextInput placeholder="Ingrese servicio" className="w-full" />
        </div>
        <Button color="red" className="w-full md:w-auto mx-auto">CREAR</Button>
      </div>
    </Card>
  );
};

export default ServiceForm;