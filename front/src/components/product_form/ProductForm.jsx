import React from 'react';
import { Card, Title, TextInput, Button } from '@tremor/react';

const ProductForm = () => {
  return (
    <Card className="p-5 bg-white shadow-md">
      <Title className="text-center text-2xl mb-4">Formulario Creacion de Producto</Title>
      <div className="flex flex-col space-y-4">
        <div>
          <label className="text-black">Marca</label>
          <TextInput placeholder="Ingrese marca" className="w-full" />
        </div>
        <div>
          <label className="text-black">Descripción</label>
          <TextInput placeholder="Ingrese descripción" className="w-full" />
        </div>
        <div>
          <label className="text-black">Referencia</label>
          <TextInput placeholder="Ingrese referencia" className="w-full" />
        </div>
        <div>
          <label className="text-black">Precio Publico</label>
          <TextInput placeholder="Ingrese precio publico" className="w-full" />
        </div>
        <div>
          <label className="text-black">Precio Mayorista</label>
          <TextInput placeholder="Ingrese precio mayorista" className="w-full" />
        </div>
        <Button color="red" className="w-full md:w-auto mx-auto">CREAR</Button>
      </div>
    </Card>
  );
};

export default ProductForm;