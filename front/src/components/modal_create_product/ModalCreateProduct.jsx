"use client";
import { Button, Label, Modal, TextInput, Select, Checkbox } from "flowbite-react";
import { useState } from "react";
import Swal from 'sweetalert2';
import axios from 'axios';

const categories = [
  "Aceites",
  "Filtro de Aire",
  "Filtro de Aceite",
  "Aditivos",
  "Bombillos",
  "Filtro de Cabina",
  "Filtro de Combustible",
  "Pastillas de Frenos",
  "Plumillas",
  "Servicio"
];

const ModalCreateProduct = () => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState('');
  const [marca, setMarca] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [referencia, setReferencia] = useState('');
  const [precioPublico, setPrecioPublico] = useState('');
  const [precioMayorista, setPrecioMayorista] = useState('');
  const [stock, setStock] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isActive, setIsActive] = useState(true);

  const handleCreateProduct = async () => {
    if (!name || !marca || !descripcion || !referencia || !precioPublico || !precioMayorista || !stock || !selectedCategory) {
      Swal.fire('Error', 'Por favor, complete todos los campos', 'error');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/products/', {
        name,
        quantity: stock,
        reference: referencia,
        priceCl: precioPublico,
        priceTl: precioMayorista,
        category: selectedCategory,
        active: isActive
      });

      if (response.status === 201) {
        Swal.fire('Éxito', 'Producto creado exitosamente', 'success');
        onCloseModal(); // Cierra el modal y restablece los campos
      } else {
        Swal.fire('Error', 'No se pudo crear el producto', 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'No se pudo crear el producto', 'error');
    }
  };

  const onCloseModal = () => {
    setOpenModal(false);
    // Restablece los estados de los campos del formulario
    setName('');
    setMarca('');
    setDescripcion('');
    setReferencia('');
    setPrecioPublico('');
    setPrecioMayorista('');
    setStock('');
    setSelectedCategory('');
    setIsActive(true);
  };

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
                placeholder="Nombre de producto"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="marca" value="Marca" />
              </div>
              <TextInput
                id="marca"
                type="text"
                required
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="descripcion" value="Descripción" />
              </div>
              <TextInput
                id="descripcion"
                type="text"
                required
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="referencia" value="Referencia" />
              </div>
              <TextInput
                id="referencia"
                type="text"
                required
                value={referencia}
                onChange={(e) => setReferencia(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="precioPublico" value="Precio Público" />
              </div>
              <TextInput
                id="precioPublico"
                type="text"
                required
                value={precioPublico}
                onChange={(e) => setPrecioPublico(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="precioMayorista" value="Precio Mayorista" />
              </div>
              <TextInput
                id="precioMayorista"
                type="text"
                required
                value={precioMayorista}
                onChange={(e) => setPrecioMayorista(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="stock" value="Stock" />
              </div>
              <TextInput
                id="stock"
                type="text"
                required
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="categoria" value="Categoría" />
              </div>
              <Select
                id="categoria"
                required
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Selecciona una categoría</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </Select>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <Checkbox
                  id="activo"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                />
                <Label htmlFor="activo" className="ml-2">Activo</Label>
              </div>
            </div>
            <div className="w-full">
              <Button onClick={handleCreateProduct}>Crear producto</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalCreateProduct;