import { Card, Button as FlowbiteButton } from "flowbite-react";
import React from "react";

const OrderSummary = ({ date, paymentMethod, selectedProducts, selectedServices, warnings, onRemoveItem, onQuantityChange, calculateTotal, onConfirmOrder }) => {
    return (
      <Card className="w-full max-w-screen-lg p-5 bg-white rounded-lg shadow-md text-gray-800">
        <h2 className="text-lg font-bold mb-3 text-center">Resumen de Orden</h2>
        <div className="mb-4 text-center">
          <p><strong>Fecha:</strong> {date}</p>
          <p><strong>Método de Pago:</strong> {paymentMethod}</p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="font-bold mb-2 text-center">Productos Seleccionados</h3>
            {selectedProducts.map((product) => (
              <div key={product.id} className="flex flex-col md:flex-row justify-between items-center mb-2 border-b pb-2 text-center md:text-left">
                <div className="flex items-center space-x-2 mb-2 md:mb-0">
                  <input type="number" value={product.quantity} readOnly className="w-12 text-center border rounded-md"/>
                  <FlowbiteButton onClick={() => onQuantityChange(product, "product", product.quantity - 1)} size="xs">-</FlowbiteButton>
                  <FlowbiteButton onClick={() => onQuantityChange(product, "product", product.quantity + 1)} size="xs">+</FlowbiteButton>
                </div>
                <p className="text-gray-700 flex-grow mx-2">{product.name} - ${product.price * product.quantity}</p>
                <FlowbiteButton onClick={() => onRemoveItem(product, "product")} color="failure" size="xs">Eliminar</FlowbiteButton>
              </div>
            ))}
          </div>
  
          <div>
            <h3 className="font-bold mb-2 text-center">Servicios Seleccionados</h3>
            {selectedServices.map((service) => (
              <div key={service.id} className="flex flex-col md:flex-row justify-between items-center mb-2 border-b pb-2 text-center md:text-left">
                <div className="flex items-center space-x-2 mb-2 md:mb-0">
                  <input type="number" value={service.quantity} readOnly className="w-12 text-center border rounded-md"/>
                  <FlowbiteButton onClick={() => onQuantityChange(service, "service", service.quantity - 1)} size="xs">-</FlowbiteButton>
                  <FlowbiteButton onClick={() => onQuantityChange(service, "service", service.quantity + 1)} size="xs">+</FlowbiteButton>
                </div>
                <p className="text-gray-700 flex-grow mx-2">{service.name} - ${service.price * service.quantity}</p>
                <FlowbiteButton onClick={() => onRemoveItem(service, "service")} color="failure" size="xs">Eliminar</FlowbiteButton>
              </div>
            ))}
          </div>
        </div>
  
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold">Total a Abonar:</span>
          <span>${calculateTotal()}</span>
        </div>
  
        <div className="mb-4 text-center">
          <h3 className="font-bold mb-2">Sugerencias</h3>
          <p className="text-gray-700">{warnings}</p>
        </div>
  
        <FlowbiteButton 
          type="button" 
          className="w-full rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
          onClick={onConfirmOrder}
        >
          Confirmar Orden de Servicio
        </FlowbiteButton>
      </Card>
    );
  }
  
  export default OrderSummary;