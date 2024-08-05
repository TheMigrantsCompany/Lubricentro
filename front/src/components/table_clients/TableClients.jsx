import React, { useEffect, useState } from 'react';
import { Card, Button } from '@tremor/react';
import ModalModifyClient from '../modal_modify_client/ModalModifyClient';
import ModalServiceDetail from '../modal_service_detail/ModalServiceDetail';
import { FaQrcode } from 'react-icons/fa'; // Importar el ícono QR de react-icons
import { useDispatch, useSelector } from 'react-redux'; 
import { getCars } from '../../redux/actions/actions';

export function ClientesPlacasTable() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars); // Obtén los datos del estado
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    dispatch(getCars()); // Llama a la acción para obtener los clientes cuando se monta el componente
  }, [dispatch]);

  const handleModificar = (client) => {
    setSelectedClient(client);
  };

  const handleDetalle = (service) => {
    setSelectedService(service);
  };

  const handleEliminar = (id) => {
    console.log(`Eliminar cliente con ID ${id}`);
  };

  const handleVerQRCode = (client) => {
    console.log(`Mostrar código QR para el cliente con Cedula/NIT: ${client.CC_NIT}`);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-4xl mx-auto md:ml-16">
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-800">
              <thead className="text-xs text-black uppercase bg-gray-300">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Cliente
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Placa
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Cedula/NIT
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    QR
                  </th>
                </tr>
              </thead>
              <tbody>
                {cars.map((cliente) => (
                  <tr key={cliente.id_Car} className="bg-gray-100 border-b">
                    <td className="px-6 py-4">{cliente.Name}</td>
                    <td className="px-6 py-4">{cliente.LicensePlate}</td>
                    <td className="px-6 py-4">{cliente.CC_NIT}</td>
                    <td className="px-6 py-4">{cliente.Rol ? 'Activo' : 'Inactivo'}</td>
                    <td className="px-6 py-4">
                      <FaQrcode 
                        className="text-xl text-gray-600 hover:text-gray-800 cursor-pointer" 
                        onClick={() => handleVerQRCode(cliente)} 
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            <Button
              onClick={() => handleModificar(cars[0])}
              className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Modificar
            </Button>
            <Button
              onClick={() => handleDetalle(cars[0])}
              className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Detalle
            </Button>
            <Button
              onClick={() => handleEliminar(cars[0].id_Car)}
              className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Eliminar
            </Button>
          </div>
        </Card>
      </div>
      {selectedClient && (
        <ModalModifyClient
          client={selectedClient}
          closeModal={() => setSelectedClient(null)}
        />
      )}
      {selectedService && (
        <ModalServiceDetail
          service={selectedService}
          closeModal={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}
