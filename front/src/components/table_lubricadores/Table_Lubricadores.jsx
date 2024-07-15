import React from 'react';
import { Card } from '@tremor/react';

export function TableLubricadores() {
  const lubricadores = [
    { id: 1, name: 'Juan Pérez', status: 'activo' },
    { id: 2, name: 'Ana Gómez', status: 'inactivo' },
    { id: 3, name: 'Carlos López', status: 'activo' },
  ];

  const handleSuspender = (id) => {
    // Lógica para suspender al lubricador con el ID proporcionado
    console.log(`Suspender lubricador con ID ${id}`);
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-800">
          <thead className="text-xs text-black uppercase bg-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {lubricadores.map((lubricador) => (
              <tr key={lubricador.id} className="bg-gray-100 border-b">
                <td className="px-6 py-4">
                  {lubricador.name}
                </td>
                <td className="px-6 py-4">
                  {lubricador.status}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleSuspender(lubricador.id)}
                    className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Suspender
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};



