import React, { useState } from "react";
import FormOrdenServicio from "../../components/form_orden_de_servicio/FormOrdenServicio";
import OrderSummary from "../../components/order-summary/OrderSummary";
import AcordeonProductos from "../../components/acordeon_productos/AcordeonProductos";
import AcordeonServicios from "../../components/acordeon_servicios/AcordeonServicios";

const CreateOrderEmp = () => {
  const [formData, setFormData] = useState({
    paymentMethod: "",
    warnings: "",
  });

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [id_Car, setId_Car] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleAddProduct = (product) => {
    setSelectedProducts((prevProducts) => {
      const existingProduct = prevProducts.find(p => p.id_Product === product.id_Product);
      if (existingProduct) {
        return prevProducts.map(p => 
          p.id_Product === product.id_Product ? { ...p, Quantity: p.Quantity + 1 } : p
        );
      } else {
        return [...prevProducts, { ...product, Quantity: 1 }];
      }
    });
  };

  const handleAddService = (service) => {
    setSelectedServices([...selectedServices, service]);
  };

  const handleRemoveItem = (item, type) => {
    if (type === "product") {
      setSelectedProducts(selectedProducts.filter(p => p.id_Product !== item.id_Product));
    } else if (type === "service") {
      setSelectedServices(selectedServices.filter(s => s.id_Product !== item.id_Product));
    }
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setSelectedProducts((prevProducts) => 
      prevProducts.map(p => 
        p.id_Product === productId ? { ...p, Quantity: newQuantity } : p
      )
    );
  };

  const calculateTotal = () => {
    const productsTotal = selectedProducts.reduce(
      (total, product) => total + product.Price_Cl * product.Quantity,
      0
    );
    const servicesTotal = selectedServices.reduce(
      (total, service) => total + service.Price_Cl,
      0
    );
    return productsTotal + servicesTotal;
  };

  const handleSubmit = () => {
    if (!id_Car) {
      alert("Por favor, seleccione un automóvil.");
      return;
    }

    const orderData = {
      id_Car,
      paymentMethod: formData.paymentMethod,
      items: [
        ...selectedProducts.map(product => ({
          productId: product.id_Product,
          quantity: product.Quantity,
          price: product.Price_Cl
        })),
        ...selectedServices.map(service => ({
          productId: service.id_Product,
          quantity: 1,
          price: service.Price_Cl
        }))
      ],
      warnings: formData.warnings
    };

    console.log("Formulario enviado: ", orderData);
    // Aquí iría la lógica para enviar la orden al backend
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-5">
      <div className="w-full max-w-6xl">
        <h1 className="text-slate-600 m-5 text-2xl md:text-3xl font-bold tracking-wider text-center">
          Crear Orden de Servicio
        </h1>
        <div className="flex justify-center gap-10">
          <div className="w-1/2">
            <FormOrdenServicio
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </div>
          <div className="w-1/2">
            <AcordeonProductos onAddProduct={handleAddProduct} />
            <AcordeonServicios onAddService={handleAddService} /> {/* Agrega el componente aquí */}
          </div>
        </div>
        <OrderSummary
          paymentMethod={formData.paymentMethod}
          selectedProducts={selectedProducts}
          selectedServices={selectedServices}
          warnings={formData.warnings}
          onRemoveItem={handleRemoveItem}
          onQuantityChange={handleQuantityChange}
          calculateTotal={calculateTotal}
          handleSubmit={handleSubmit}
          id_Car={id_Car}
        />
      </div>
    </div>
  );
};

export default CreateOrderEmp;