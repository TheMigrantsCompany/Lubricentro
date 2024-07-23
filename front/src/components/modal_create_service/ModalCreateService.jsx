"use client";
import React, { useState } from 'react';
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { Card, Title } from '@tremor/react';

const ModalCreateService = () => {
  const [openModal, setOpenModal] = useState(false);

  const onCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="m-7">+ Añadir servicio</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <Card className="p-5 bg-white shadow-md">
            <Title className="text-center text-2xl mb-4">Añade tu nuevo Servicio</Title>
            <div className="space-y-6">
              <div>
                <Label htmlFor="nombre" value="Nombre" className="text-black mb-2 block" />
                <TextInput id="nombre" placeholder="Ingrese nombre" required className="w-full" />
              </div>
              <div>
                <Label htmlFor="descripcion" value="Descripción" className="text-black mb-2 block" />
                <TextInput id="descripcion" placeholder="Ingrese descripción" required className="w-full" />
              </div>
              <div>
                <Label htmlFor="servicio" value="Servicio" className="text-black mb-2 block" />
                <TextInput id="servicio" placeholder="Ingrese servicio" required className="w-full" />
              </div>
              <div className="w-full">
              <Button>Crear producto</Button>
            </div>
            </div>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalCreateService;