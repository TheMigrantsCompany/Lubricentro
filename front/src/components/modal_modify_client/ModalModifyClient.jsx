import React, { useState } from 'react';
import { Button, Label, Modal, TextInput, Checkbox } from "flowbite-react";

const ModalModifyClient = ({ client, closeModal }) => {
  const [formData, setFormData] = useState({
    nombre: client.nombre,
    apellido: client.apellido,
    cedula: client.cedula,
    telefono: client.telefono,
    email: client.email,
    direccion: client.direccion,
    marca: client.marca,
    diesel: client.diesel,
    gasolina: client.gasolina,
    hibrido: client.hibrido,
    kmActual: client.kmActual,
    modelo: client.modelo,
    matricula: client.matricula
  });

  function handleInputChange(e) {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value
    });
  }

  function handleSubmit() {
    // Lógica para modificar el cliente con los datos del formulario
    console.log('Modifying client:', formData);
    closeModal();
  }

  return (
    <Modal show={true} size="md" onClose={closeModal} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Modificar Cliente
          </h3>
          <div>
            <Label htmlFor="nombre" value="Nombre" />
            <TextInput id="nombre" value={formData.nombre} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="apellido" value="Apellido" />
            <TextInput id="apellido" value={formData.apellido} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="cedula" value="Cédula" />
            <TextInput id="cedula" value={formData.cedula} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="telefono" value="Teléfono" />
            <TextInput id="telefono" value={formData.telefono} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="email" value="Email" />
            <TextInput id="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="direccion" value="Dirección" />
            <TextInput id="direccion" value={formData.direccion} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="marca" value="Marca" />
            <TextInput id="marca" value={formData.marca} onChange={handleInputChange} required />
          </div>
          <div className="flex space-x-4">
          <div className="flex items-center">
              <Checkbox id="diesel" checked={formData.diesel} onChange={handleInputChange} />
              <label htmlFor="diesel" className="ml-2 text-black">Diesel</label>
            </div>
            <div className="flex items-center">
              <Checkbox id="gasolina" checked={formData.gasolina} onChange={handleInputChange} />
              <label htmlFor="gasolina" className="ml-2 text-black">Gasolina</label>
            </div>
            <div className="flex items-center">
              <Checkbox id="hibrido" checked={formData.hibrido} onChange={handleInputChange} />
              <label htmlFor="hibrido" className="ml-2 text-black">Híbrido</label>
            </div>
          </div>
          <div>
            <Label htmlFor="kmActual" value="KM Actual" />
            <TextInput id="kmActual" value={formData.kmActual} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="modelo" value="Modelo (Año)" />
            <TextInput id="modelo" value={formData.modelo} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="matricula" value="Matrícula" />
            <TextInput id="matricula" value={formData.matricula} onChange={handleInputChange} required />
          </div>
          <div className="flex justify-end">
            <Button onClick={handleSubmit}>
              Guardar
            </Button>
            <Button color="gray" onClick={closeModal}>
              Cancelar
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalModifyClient;
