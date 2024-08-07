import { Card, Button as FlowbiteButton } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarSearch from "../searchbar/CarSearch";
import { getAllUsers, getUserById , createServiceOrder } from "../../redux/actions/actions";

const OrderSummary = ({
  paymentMethod,
  selectedProducts,
  selectedServices,
  warnings,
  onRemoveItem,
  onQuantityChange,
  calculateTotal,
  id_Car,
  handleSubmit
}) => {
  return (
    <Card className="w-full max-w-screen-lg mx-auto p-5 bg-white rounded-lg shadow-md text-black">
      <h2 className="text-lg font-bold mb-3 text-center">Resumen de Orden</h2>
      <div className="mb-4 text-center">
        <p><strong>Método de Pago:</strong> {paymentMethod}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h3 className="font-bold mb-2 text-center">Productos Seleccionados</h3>
          {selectedProducts.length > 0 ? (
            selectedProducts.map((product) => (
              <div key={product.id_Product} className="flex justify-between items-center mb-2 border-b pb-2">
                <div className="flex flex-col md:flex-row justify-between w-full items-center">
                  <p className="text-gray-700">{product.Name} - ${product.Price_Cl * product.Quantity}</p>
                  <div className="ml-2 flex items-center">
                    <button
                      onClick={() => onQuantityChange(product.id_Product, product.Quantity - 1)}
                      className="px-2 py-1 border rounded-md bg-gray-200 text-gray-700"
                    >
                      -
                    </button>
                    <span className="mx-2">{product.Quantity}</span>
                    <button
                      onClick={() => onQuantityChange(product.id_Product, product.Quantity + 1)}
                      className="px-2 py-1 border rounded-md bg-gray-200 text-gray-700"
                    >
                      +
                    </button>
                    <button
                      onClick={() => onRemoveItem(product, 'product')}
                      className="ml-2 px-2 py-1 border rounded-md bg-red-500 text-white"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No hay productos seleccionados.</p>
          )}
        </div>
        <div>
          <h3 className="font-bold mb-2 text-center">Servicios Seleccionados</h3>
          {selectedServices.length > 0 ? (
            selectedServices.map((service) => (
              <div key={service.id} className="flex justify-between items-center mb-2 border-b pb-2">
                <p className="text-gray-700">{service.name} - ${service.price}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No hay servicios seleccionados.</p>
          )}
        </div>
      </div>
      <div className="mb-4 text-center">
        <h3 className="font-bold mb-2">Sugerencias</h3>
        <p className="text-gray-700">{warnings || "No hay sugerencias."}</p>
      </div>
      <div className="mb-4 text-center">
        <h3 className="font-bold mb-2">Total</h3>
        <p className="text-gray-700">${calculateTotal()}</p>
      </div>
      <div className="text-center">
        <FlowbiteButton onClick={handleSubmit} className="w-full bg-red-600 hover:bg-red-700 text-white">
          Confirmar Orden
        </FlowbiteButton>
      </div>
    </Card>
  );
};

export default OrderSummary;