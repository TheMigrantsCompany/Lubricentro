import React from 'react';
import { Card } from '@tremor/react';

export function TableLubricadores() {
  const lubricadores = [
    { id: 1, name: 'Juan Pérez', status: 'activo' },
    { id: 2, name: 'Ana Gómez', status: 'inactivo' },
    { id: 3, name: 'Carlos López', status: 'activo' },
  ];

  return (
    <Card>
      <table className="w-full text-sm text-left text-gray-800">
        <thead className="text-xs text-black uppercase bg-gray-300">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Status
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
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};