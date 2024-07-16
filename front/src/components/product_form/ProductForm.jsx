import React from 'react';
import { Card, Title, TextInput, Button } from '@tremor/react';

const ProductForm = () => {
  return (
    <Card>
      <Title>(formulario creacion de producto)</Title>
      <div className="flex flex-col space-y-4">
        <div>
          <label>Marca</label>
          <TextInput placeholder="Value" />
        </div>
        <div>
          <label>Descripción</label>
          <TextInput placeholder="Value" />
        </div>
        <div>
          <label>Referencia</label>
          <TextInput placeholder="Value" />
        </div>
        <div>
          <label>Precio Publico</label>
          <TextInput placeholder="Value" />
        </div>
        <div>
          <label>Precio Mayorista</label>
          <TextInput placeholder="Value" />
        </div>
        <Button color="red">CREAR</Button>
      </div>
    </Card>
  );
};

export default ProductForm;