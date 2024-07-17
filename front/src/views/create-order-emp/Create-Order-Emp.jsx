import React, { useState } from "react";
import FormOrdenServicio from "../../components/form_orden_de_servicio/FormOrdenServicio";
import OrderSummary from "../../components/order-summary/OrderSummary";

const CreateOrderEmp = () => {
  // State y funciones de manejo de datos
  const [formData, setFormData] = useState({
    date: "",
    paymentMethod: "",
    warnings: "",
  });

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  // Función para manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Funciones para agregar productos y servicios
  const handleAddProduct = (product, action) => {
    if (action === "remove") {
      setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
    } else {
      setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
    }
  };

  const handleAddService = (service) => {
    setSelectedServices([...selectedServices, { ...service, quantity: 1 }]);
  };

  // Función para remover un producto o servicio
  const handleRemoveItem = (item, type) => {
    if (type === "product") {
      setSelectedProducts(selectedProducts.filter((p) => p.id !== item.id));
    } else {
      setSelectedServices(selectedServices.filter((s) => s.id !== item.id));
    }
  };

  // Función para cambiar la cantidad de un producto o servicio
  const handleQuantityChange = (item, type, quantity) => {
    if (type === "product") {
      setSelectedProducts(
        selectedProducts.map((p) =>
          p.id === item.id ? { ...p, quantity } : p
        )
      );
    } else {
      setSelectedServices(
        selectedServices.map((s) =>
          s.id === item.id ? { ...s, quantity } : s
        )
      );
    }
  };

  // Función para calcular el total
  const calculateTotal = () => {
    const productsTotal = selectedProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    const servicesTotal = selectedServices.reduce(
      (total, service) => total + service.price * service.quantity,
      0
    );
    return productsTotal + servicesTotal;
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado: ", formData);
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-5">
      <div className="w-full max-w-6x1">
        <h1 className="text-2xl font-bold text-center text-slate-400 mb-5">
          Crear Orden de Servicio
        </h1>
        <div className="flex justify-center gap-10">
          <div className="w-1/2">
            <FormOrdenServicio
              formData={formData}
              handleInputChange={handleInputChange}
              handleAddProduct={handleAddProduct}
              handleAddService={handleAddService}
              handleSubmit={handleSubmit}
            />
          </div>
          <div className="w-7/7">
            <OrderSummary
              date={formData.date.toString()} // Asegúrate de que date sea una cadena aquí
              paymentMethod={formData.paymentMethod}
              selectedProducts={selectedProducts}
              selectedServices={selectedServices}
              warnings={formData.warnings}
              onRemoveItem={handleRemoveItem}
              onQuantityChange={handleQuantityChange}
              calculateTotal={calculateTotal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderEmp;