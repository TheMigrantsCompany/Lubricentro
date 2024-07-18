import React from 'react';
import { Modal, Button, Label } from "flowbite-react";

const ModalServiceDetail = ({ service, closeModal }) => {
  return (
    <Modal show={true} size="md" onClose={closeModal} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Detalle del Servicio
          </h3>
          <div>
            <Label htmlFor="placa" value="Placa" />
            <p id="placa" className="text-gray-700 dark:text-gray-300">{service.placa}</p>
          </div>
          <div>
            <Label htmlFor="fecha" value="Fecha" />
            <p id="fecha" className="text-gray-700 dark:text-gray-300">{service.fecha}</p>
          </div>
          <div>
            <Label htmlFor="servicio" value="Servicio" />
            <p id="servicio" className="text-gray-700 dark:text-gray-300">{service.servicio}</p>
          </div>
          <div>
            <Label htmlFor="producto" value="Producto" />
            <p id="producto" className="text-gray-700 dark:text-gray-300">{service.producto}</p>
          </div>
          <div>
            <Label htmlFor="observacion" value="Observación" />
            <p id="observacion" className="text-gray-700 dark:text-gray-300">{service.observacion}</p>
          </div>
          <div className="flex justify-end">
            <Button color="gray" onClick={closeModal}>
              Cerrar
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalServiceDetail;
