import React, { useState } from 'react';
import { Card, Button } from '@tremor/react';
import ModalModifyClient from '../modal_modify_client/ModalModifyClient';
import ModalServiceDetail from '../modal_service_detail/ModalServiceDetail';

export function ClientesPlacasTable() {
  const clientesPlacas = [
    { id: 1, cliente: 'Juan Pérez', placa: 'ABC-123', status: 'activo', fecha: '2023-01-01', servicio: 'Mantenimiento', producto: 'Aceite', observacion: 'Ninguna' },
    { id: 2, cliente: 'Ana Gómez', placa: 'DEF-456', status: 'inactivo', fecha: '2023-02-01', servicio: 'Reparación', producto: 'Filtro', observacion: 'Cambio necesario' },
    { id: 3, cliente: 'Carlos López', placa: 'GHI-789', status: 'activo', fecha: '2023-03-01', servicio: 'Limpieza', producto: 'Agua', observacion: 'Ninguna' },
  ];

  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const handleModificar = (client) => {
    setSelectedClient(client);
  };

  const handleDetalle = (service) => {
    setSelectedService(service);
  };

  const handleEliminar = (id) => {
    console.log(`Eliminar cliente con ID ${id}`);
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
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {clientesPlacas.map((cliente) => (
                  <tr key={cliente.id} className="bg-gray-100 border-b">
                    <td className="px-6 py-4">{cliente.cliente}</td>
                    <td className="px-6 py-4">{cliente.placa}</td>
                    <td className="px-6 py-4">{cliente.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            <Button
              onClick={() => handleModificar(clientesPlacas[0])}
              className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Modificar
            </Button>
            <Button
              onClick={() => handleDetalle(clientesPlacas[0])}
              className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Detalle
            </Button>
            <Button
              onClick={() => handleEliminar(clientesPlacas[0].id)}
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

