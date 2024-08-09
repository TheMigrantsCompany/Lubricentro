import { Card, Button as FlowbiteButton } from "flowbite-react";
import React from "react";
import { useState, useEffect } from "react";
import CarSearch from "../searchbar/CarSearch";
/*import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getUserById , createServiceOrder } from "../../redux/actions/actions";*/

const OrderSummary = ({
  paymentMethod,
  selectedProducts,
  selectedServices,
  warnings,
  onRemoveItem,
  onQuantityChange,
  calculateTotal,
  handleSubmit,
  setClientType,
  onCarSelect,  // Asegúrate de que esta prop se pase desde el componente padre
  resetCar,
}) => {
  const [selectedCar, setSelectedCar] = useState(null); // Estado para el carro seleccionado
  const [searchType, setSearchType] = useState('plate'); // Estado para el tipo de búsqueda
  const [clientType, setClientTypeLocal] = useState('cliente'); // Estado local para tipo de cliente

  // Función para manejar la selección del carro
  const handleCarSelect = (car) => {
    setSelectedCar(car);
    setSearchType(car.LicensePlate ? 'plate' : 'cc-nit'); // Determinar el tipo de búsqueda basado en la propiedad disponible
    console.log("Car selected in OrderSummary:", car);
    if (onCarSelect) {
      onCarSelect(car); // Llama a la función pasada desde `CreateOrderEmp` si está definida
    }
  };

  const handleClientTypeChange = (e) => {
    const newClientType = e.target.value;
    setClientTypeLocal(newClientType);
    setClientType(newClientType); // Actualizar tipo de cliente en el estado principal
  };

  useEffect(() => {
    if (resetCar) {
      setSelectedCar(null);
      setSearchType('plate');
    }
  }, [resetCar]);

 
    return (
      <Card className="w-full max-w-screen-lg mx-auto p-5 bg-white rounded-lg shadow-md text-black">
        <h2 className="text-lg font-bold mb-3 text-center">Resumen de Orden</h2>
        <div className="mb-4 text-center">
          <p><strong>Método de Pago:</strong> {paymentMethod}</p>
        </div>
        <CarSearch onCarSelect={handleCarSelect} reset={selectedCar === null} /> {/* Usa la prop reset aquí */}
        {selectedCar && (
          <div className="mb-4 text-center">
            <h3 className="font-bold mb-2">Cliente Seleccionado</h3>
            <p><strong>{searchType === 'plate' ? 'Placa' : 'CC-NIT'}:</strong> {searchType === 'plate' ? selectedCar.LicensePlate : selectedCar.CC_NIT}</p>
            <p><strong>Nombre:</strong> {selectedCar.Name}</p>
          </div>
        )}
        {/* Selector de tipo de cliente */}
        <div className="mb-4 text-center">
          <label className="mr-2">Tipo de Cliente:</label>
          <select
            value={clientType}
            onChange={handleClientTypeChange}
            className="border rounded-md p-2"
          >
            <option value="cliente">Cliente</option>
            <option value="taller">Taller</option>
          </select>
        </div>
        <div
          className={`grid ${
            clientType === 'taller' ? 'grid-cols-1 justify-center' : 'grid-cols-1 md:grid-cols-2'
          } gap-4 mb-4`}
        >
          <div>
            <h3 className="font-bold mb-2 text-center">Productos Seleccionados</h3>
            {selectedProducts.length > 0 ? (
              selectedProducts.map((product) => (
                <div key={product.id_Product} className="flex justify-between items-center mb-2 border-b pb-2">
                  <div className="flex flex-col md:flex-row justify-between w-full items-center">
                    <p className="text-gray-700">{product.Name} - ${(clientType === 'taller' ? product.Price_Tl : product.Price_Cl) * product.Quantity}</p>
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
          {clientType !== 'taller' && (
            <div>
              <h3 className="font-bold mb-2 text-center">Servicios Seleccionados</h3>
              {selectedServices.length > 0 ? (
                selectedServices.map((service) => (
                  <div key={service.id_Product} className="flex justify-between items-center mb-2 border-b pb-2">
                    <p className="text-gray-700">{service.Name} - ${(clientType === 'taller' ? service.Price_Tl : service.Price_Cl)}</p>
                    <button
                      onClick={() => onRemoveItem(service, 'service')}
                      className="ml-2 px-2 py-1 border rounded-md bg-red-500 text-white"
                    >
                      Eliminar
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center">No hay servicios seleccionados.</p>
              )}
            </div>
          )}
        </div>
        <div className="mb-4 text-center">
          <h3 className="font-bold mb-2">Sugerencias</h3>
          <p className="text-gray-700">{warnings || "No hay sugerencias."}</p>
        </div>
        <div className="mb-4 text-center">
          <h3 className="font-bold mb-2">Total</h3>
          <p className="text-gray-700">${calculateTotal()}</p>
        </div>
      </Card>
    );
};

export default OrderSummary;