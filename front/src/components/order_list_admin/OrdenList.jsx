import React, { useRef } from 'react';
import { FaPrint, FaQrcode } from 'react-icons/fa';

const orders = [
  { name: 'orden servicio 1', status: 'TERMINADA' },
  { name: 'orden servicio 1', status: 'TERMINADA' },
  { name: 'orden servicio 1', status: 'TERMINADA' },
  { name: 'orden servicio 1', status: 'TERMINADA' },
];

const OrderList = () => {
  const printRefs = useRef([]);

  const handlePrint = (index) => {
    const printContents = printRefs.current[index].innerHTML;
    const newWindow = window.open('', '', 'height=600,width=800');
    newWindow.document.write('<html><head><title>Imprimir Orden de Servicio</title>');
    newWindow.document.write('</head><body >');
    newWindow.document.write(printContents);
    newWindow.document.write('</body></html>');
    newWindow.document.close();
    newWindow.print();
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-200 rounded-lg">
      <h1 className="text-center text-gray-700 font-semibold mb-2">
        ORDENES DE SERVICIO PENDIENTES
      </h1>
      <h2 className="text-center text-gray-700 mb-4">
        CLIENTE / LUBRICADOR
      </h2>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Placa / Lubricador"
          className="p-2 border rounded"
        />
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        {orders.map((order, index) => (
          <div
            key={index}
            className="flex justify-between items-center mb-2"
            ref={(el) => (printRefs.current[index] = el)}
          >
            <span className="text-gray-700">{order.name}</span>
            <div className="flex space-x-2">
              <FaPrint
                className="text-gray-700 cursor-pointer"
                onClick={() => handlePrint(index)}
              />
              <FaQrcode className="text-gray-700" />
            </div>
            <span className="px-2 py-1 bg-red-600 text-white rounded-full text-sm">
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;