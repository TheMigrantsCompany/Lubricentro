import { Card, Button as FlowbiteButton } from "flowbite-react";
import React from "react";

const OrderSummary = ({ date, paymentMethod, selectedProducts, selectedServices, warnings, calculateTotal, onConfirmOrder, onRemoveItem, onQuantityChange }) => {

  return (
    <Card className="w-full max-w-screen-lg mx-auto p-5 bg-white rounded-lg shadow-md text-black text-center">
      <h2 className="text-lg font-bold mb-3">Resumen de Orden</h2>
      <div className="mb-4">
        <p><strong>Fecha:</strong> {date}</p>
        <p><strong>Método de Pago:</strong> {paymentMethod}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h3 className="font-bold mb-2">Productos Seleccionados</h3>
          {selectedProducts.map((product) => (
            <div key={product.id} className="flex justify-between items-center mb-2 border-b pb-2">
              <p className="text-gray-700">{product.name} - ${product.price * product.quantity}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-bold mb-2">Servicios Seleccionados</h3>
          {selectedServices.map((service) => (
            <div key={service.id} className="flex justify-between items-center mb-2 border-b pb-2">
              <p className="text-gray-700">{service.name} - ${service.price * service.quantity}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-bold mb-2">Sugerencias</h3>
        <p className="text-gray-700">{warnings}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-bold mb-2">Total</h3>
        <p className="text-gray-700">${calculateTotal()}</p>
      </div>

      <FlowbiteButton onClick={onConfirmOrder} className="w-full">Confirmar Orden</FlowbiteButton>
    </Card>
  );
};

export default OrderSummary;