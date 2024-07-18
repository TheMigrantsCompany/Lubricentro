import { Card, Button as FlowbiteButton } from "flowbite-react";
import React from "react";

const OrderSummary = ({ date, paymentMethod, selectedProducts, selectedServices, warnings, calculateTotal, onConfirmOrder, onRemoveItem, onQuantityChange, readOnly }) => {

  return (
    <Card className="w-full max-w-screen-lg mx-auto p-5 bg-white rounded-lg shadow-md text-black">
      <h2 className="text-lg font-bold mb-3 text-center">Resumen de Orden</h2>
      <div className="mb-4 text-center">
        <p><strong>Fecha:</strong> {date}</p>
        <p><strong>Método de Pago:</strong> {paymentMethod}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h3 className="font-bold mb-2 text-center">Productos Seleccionados</h3>
          {selectedProducts.map((product) => (
            <div key={product.id} className="flex justify-between items-center mb-2 border-b pb-2">
              <div className="flex flex-col md:flex-row justify-between w-full items-center">
                <p className="text-gray-700">{product.name} - ${product.price * product.quantity}</p>
                {!readOnly && (
                  <div className="ml-2 flex items-center">
                    <button
                      onClick={() => onQuantityChange(product, "product", product.quantity - 1)}
                      className="px-2 py-1 border rounded-md bg-gray-200 text-gray-700"
                    >
                      -
                    </button>
                    <span className="mx-2">{product.quantity}</span>
                    <button
                      onClick={() => onQuantityChange(product, "product", product.quantity + 1)}
                      className="px-2 py-1 border rounded-md bg-gray-200 text-gray-700"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-bold mb-2 text-center">Servicios Seleccionados</h3>
          {selectedServices.map((service) => (
            <div key={service.id} className="flex justify-between items-center mb-2 border-b pb-2">
              <p className="text-gray-700">{service.name} - ${service.price * service.quantity}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4 text-center">
        <h3 className="font-bold mb-2">Sugerencias</h3>
        <p className="text-gray-700">{warnings}</p>
      </div>

      <div className="mb-4 text-center">
        <h3 className="font-bold mb-2">Total</h3>
        <p className="text-gray-700">${calculateTotal()}</p>
      </div>

      {!readOnly && (
        <div className="text-center">
          <FlowbiteButton onClick={onConfirmOrder} className="w-full bg-red-600 hover:bg-red-700 text-white">Confirmar Orden</FlowbiteButton>
        </div>
      )}
    </Card>
  );
};

export default OrderSummary;