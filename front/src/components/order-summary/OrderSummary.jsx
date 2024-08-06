import { Card, Button as FlowbiteButton } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarSearch from "../searchbar/CarSearch";
import { getAllUsers, getUserById , createServiceOrder } from "../../redux/actions/actions";

const OrderSummary = ({
  date,
  paymentMethod,
  selectedProducts,
  selectedServices,
  warnings,
  calculateTotal,
  onConfirmOrder,
  onQuantityChange,
  readOnly,
  id_Car,
}) => {
  const [selectedCar, setSelectedCar] = useState(null);
  const dispatch = useDispatch();
  const id_User = useSelector(state => state.user?.id_User);
  const createServiceOrderError = useSelector(state => state.createServiceOrderError);

  useEffect(() => {
    console.log("Estado inicial:");
    console.log("Productos seleccionados:", selectedProducts);
    console.log("Servicios seleccionados:", selectedServices);
    console.log("Fecha:", date);
    console.log("Método de pago:", paymentMethod);
    console.log("Total:", calculateTotal());
    console.log("ID de usuario:", id_User);
    console.log("ID de carro:", id_Car);
  }, [selectedProducts, selectedServices, date, paymentMethod, id_User, id_Car]);

  useEffect(() => {
    dispatch(getAllUsers()); // Cargar todos los usuarios si el ID de usuario no está disponible
  }, [dispatch]);

  useEffect(() => {
    if (id_User) {
      console.log("Llamando a getUserById con ID de usuario:", id_User);
      dispatch(getUserById());
    }
  }, [id_User, dispatch]);

  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  const handleConfirmOrder = () => {
    if (!selectedCar) {
      alert("Por favor, seleccione un automóvil.");
      return;
    }

    const orderData = {
      id_Car: selectedCar.id_Car,
      paymentMethod,
      items: selectedProducts.map(product => ({
        productId: product.id,
        quantity: product.quantity,
        price: product.price
      })),
      warnings
    };

    if (!id_User) {
      alert("ID de usuario no definido.");
      return;
    }

    dispatch(createServiceOrder(id_User, orderData))
      .then(() => {
        if (onConfirmOrder) {
          onConfirmOrder();
        }
      })
      .catch(error => {
        console.error("Error al crear la orden:", error);
      });
  };

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
          {selectedProducts.length > 0 ? (
            selectedProducts.map((product) => (
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
                <p className="text-gray-700">{service.name} - ${service.price * service.quantity}</p>
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

      <div className="mb-4 text-center">
        <h3 className="font-bold mb-2">Buscar Auto</h3>
        <CarSearch onCarSelect={handleCarSelect} />
      </div>

      {selectedCar && (
        <div className="mb-4 text-center">
          <h3 className="font-bold mb-2">Automóvil Seleccionado</h3>
          <p className="text-gray-700">Placa: {selectedCar.LicensePlate}</p>
        </div>
      )}

      {/* New User ID Container */}
      <div className="mb-4 text-center">
        <h3 className="font-bold mb-2">Usuario creador de orden de servicio</h3>
        <p className="text-gray-700">{id_User || "ID de usuario no disponible."}</p>
      </div>

      {!readOnly && (
        <div className="text-center">
          <FlowbiteButton onClick={handleConfirmOrder} className="w-full bg-red-600 hover:bg-red-700 text-white">
            Confirmar Orden
          </FlowbiteButton>
        </div>
      )}

      {createServiceOrderError && (
        <div className="text-center text-red-500 mt-4">
          <p>Error al crear la orden: {createServiceOrderError}</p>
        </div>
      )}
    </Card>
  );
};

export default OrderSummary;