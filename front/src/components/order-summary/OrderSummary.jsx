import { Card, Button as FlowbiteButton } from "flowbite-react";
import React from "react";

const OrderSummary = ({ date, paymentMethod, selectedProducts, selectedServices, warnings, onRemoveItem, onQuantityChange, calculateTotal }) => {
    return (
        <Card className="mt-5 p-5 bg-white rounded-lg shadow-md text-gray-800">
          <h2 className="text-lg font-bold mb-3">Resumen de Orden</h2>
          <p><strong>Fecha:</strong> {date}</p>
          <p><strong>Método de Pago:</strong> {paymentMethod}</p>
    
          <h3 className="font-bold mt-3">Productos Seleccionados</h3>
          {selectedProducts.map((product) => (
            <div key={product.id} className="flex justify-between items-center mt-2">
              <p>{product.name} - {product.quantity} unidades</p>
              <FlowbiteButton onClick={() => onRemoveItem(product, 'product')} color="failure" size="xs">Eliminar</FlowbiteButton>
              <input type="number" value={product.quantity} onChange={(e) => onQuantityChange(product, 'product', e.target.value)} min="1" />
            </div>
          ))}
    
          <h3 className="font-bold mt-3">Servicios Seleccionados</h3>
          {selectedServices.map((service) => (
            <div key={service.id} className="flex justify-between items-center mt-2">
              <p>{service.name} - {service.quantity} unidades</p>
              <FlowbiteButton onClick={() => onRemoveItem(service, 'service')} color="failure" size="xs">Eliminar</FlowbiteButton>
              <input type="number" value={service.quantity} onChange={(e) => onQuantityChange(service, 'service', e.target.value)} min="1" />
            </div>
          ))}
    
          <div className="mt-4">
            <p className="font-bold">Total a Abonar: ${calculateTotal()}</p>
          </div>
    
          <div className="mt-4">
            <h3 className="font-bold">Advertencias</h3>
            <p>{warnings}</p>
          </div>
        </Card>
      );
    };
    
    export default OrderSummary;