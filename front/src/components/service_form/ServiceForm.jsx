import React from 'react';
import { Card, Title, TextInput, Button } from '@tremor/react';

const ServiceForm = () => {
    return (
      <Card>
        <Title>(formulario creacion de servicio)</Title>
        <div className="flex flex-col space-y-4">
          <div>
            <label>Nombre</label>
            <TextInput placeholder="Value" />
          </div>
          <div>
            <label>Descripcion</label>
            <TextInput placeholder="Value" />
          </div>
          <div>
            <label>Servicio</label>
            <TextInput placeholder="Value" />
          </div>
          <Button color="red">CREAR</Button>
        </div>
      </Card>
    );
  };

  export default ServiceForm;