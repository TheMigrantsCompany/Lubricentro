"use client";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";



const ModalCreateProduct = () => {
  const [openModal, setOpenModal] = useState(false);
 

  function onCloseModal() {
    setOpenModal(false);
    
  }
  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="m-7">+ Añadir producto</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Añade tu nuevo producto
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="nombre" value="Nombre de producto" />
              </div>
              <TextInput
                id="nombre"
                placeholder="nombre de producto"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Marca" value="Marca" />
              </div>
              <TextInput id="marca" type="text" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="descripcion" value="Descripción" />
              </div>
              <TextInput id="descripcion" type="text" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="referencia" value="Referencia" />
              </div>
              <TextInput id="referencia" type="text" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="precio publico" value="Precio Publico" />
              </div>
              <TextInput id="referencia" type="text" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="referencia" value="Precio Mayorista" />
              </div>
              <TextInput id="referencia" type="text" required />
            </div>
            <div className="w-full">
              <Button>Crear producto</Button>
            </div>
         
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalCreateProduct;
