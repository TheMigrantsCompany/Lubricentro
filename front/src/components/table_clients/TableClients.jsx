import React from 'react';
import { Card } from '@tremor/react';

export function ClientesPlacasTable() {
  const clientesPlacas = [
    { id: 1, cliente: 'Juan Pérez', placa: 'ABC-123', status: 'activo' },
    { id: 2, cliente: 'Ana Gómez', placa: 'DEF-456', status: 'inactivo' },
    { id: 3, cliente: 'Carlos López', placa: 'GHI-789', status: 'activo' },
  ];

  const handleModificar = (id) => {
    // Lógica para modificar el cliente con el ID proporcionado
    console.log(`Modificar cliente con ID ${id}`);
  };

  const handleDetalle = (id) => {
    // Lógica para ver detalles del cliente con el ID proporcionado
    console.log(`Ver detalles del cliente con ID ${id}`);
  };

  const handleEliminar = (id) => {
    // Lógica para eliminar al cliente con el ID proporcionado
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
                    <td className="px-6 py-4">
                      {cliente.cliente}
                    </td>
                    <td className="px-6 py-4">
                      {cliente.placa}
                    </td>
                    <td className="px-6 py-4">
                      {cliente.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => handleModificar(clientesPlacas[0].id)}
              className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mx-2"
            >
              Modificar
            </button>
            <button
              onClick={() => handleDetalle(clientesPlacas[0].id)}
              className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mx-2"
            >
              Detalle
            </button>
            <button
              onClick={() => handleEliminar(clientesPlacas[0].id)}
              className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mx-2"
            >
              Eliminar
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}


