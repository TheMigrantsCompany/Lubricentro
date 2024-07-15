import { Card, Button as FlowbiteButton } from "flowbite-react";
import React from "react";

const OrderSummary = ({ date, paymentMethod, selectedProducts, selectedServices, warnings, onRemoveItem, onQuantityChange, calculateTotal, onConfirmOrder }) => {
    // Función para verificar si un producto está en la lista de productos seleccionados
    const isProductSelected = (productId) => {
        return selectedProducts.some((product) => product.id === productId);
    };

    // Función para verificar si un servicio está en la lista de servicios seleccionados
    const isServiceSelected = (serviceId) => {
        return selectedServices.some((service) => service.id === serviceId);
    };

    return (
        <Card className="max-w-sm p-5 bg-white rounded-lg shadow-md text-gray-800">
            <h2 className="text-lg font-bold mb-3">Resumen de Orden</h2>
            <div className="mb-4">
                <p><strong>Fecha:</strong> {date}</p>
                <p><strong>Método de Pago:</strong> {paymentMethod}</p>
            </div>

            <div className="mb-4">
                <h3 className="font-bold mb-2">Productos Seleccionados</h3>
                {selectedProducts.map((product) => (
                    <div key={product.id} className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-2">
                            <FlowbiteButton onClick={() => onQuantityChange(product, 'product', product.quantity - 1)} size="xs">-</FlowbiteButton>
                            <input type="number" value={product.quantity} readOnly className="w-12 text-center"/>
                            <FlowbiteButton onClick={() => onQuantityChange(product, 'product', product.quantity + 1)} size="xs">+</FlowbiteButton>
                        </div>
                        <p style={{ color: '#374151' }}>{product.name} - ${product.price * product.quantity}</p>
                        <FlowbiteButton onClick={() => onRemoveItem(product, 'product')} color="failure" size="xs">Eliminar</FlowbiteButton>
                    </div>
                ))}
            </div>

            <div className="mb-4">
                <h3 className="font-bold mb-2">Servicios Seleccionados</h3>
                {selectedServices.map((service) => (
                    <div key={service.id} className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-2">
                            <FlowbiteButton onClick={() => onQuantityChange(service, 'service', service.quantity - 1)} size="xs">-</FlowbiteButton>
                            <input type="number" value={service.quantity} readOnly className="w-12 text-center"/>
                            <FlowbiteButton onClick={() => onQuantityChange(service, 'service', service.quantity + 1)} size="xs">+</FlowbiteButton>
                        </div>
                        <p style={{ color: '#374151' }}>{service.name} - ${service.price * service.quantity}</p>
                        <FlowbiteButton onClick={() => onRemoveItem(service, 'service')} color="failure" size="xs">Eliminar</FlowbiteButton>
                    </div>
                ))}
            </div>

            <div className="flex justify-between items-center mb-4">
                <span className="font-bold">Total a Abonar:</span>
                <span>${calculateTotal()}</span>
            </div>

            <div className="mb-4">
                <h3 className="font-bold mb-2">Advertencias</h3>
                <p style={{ color: '#374151' }}>{warnings}</p>
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
};

export default OrderSummary;