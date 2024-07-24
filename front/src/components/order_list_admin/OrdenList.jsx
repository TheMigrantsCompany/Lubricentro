import React, { useState, useRef } from 'react';
import { Card, Title, Badge, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Button } from '@tremor/react';
import { FaPrint, FaQrcode } from 'react-icons/fa';
import SearchBar from '../searchbar/SearchBar';

const initialOrders = [
  { name: 'orden servicio 1', status: 'PENDIENTE' },
  { name: 'orden servicio 2', status: 'PENDIENTE' },
  { name: 'orden servicio 3', status: 'PENDIENTE' },
  { name: 'orden servicio 4', status: 'PENDIENTE' },
];

const OrderList = () => {
  const [orders, setOrders] = useState(initialOrders);
  const printRefs = useRef([]);

  const handlePrint = (index) => {
    const printContents = printRefs.current[index].innerHTML;
    const newWindow = window.open('', '', 'height=600,width=800');
    newWindow.document.write('<html><head><title>Imprimir Orden de Servicio</title>');
    newWindow.document.write('</head><body>');
    newWindow.document.write(printContents);
    newWindow.document.write('</body></html>');
    newWindow.document.close();
    newWindow.print();
  };

  const handleStatusChange = (index) => {
    const updatedOrders = orders.map((order, i) =>
      i === index ? { ...order, status: 'TERMINADA' } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <Card>
      <Title>ORDENES DE SERVICIO PENDIENTES</Title>
      <div className="flex justify-center mb-4">
        <SearchBar className="w-1/2" />
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Order Name</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
            <TableHeaderCell>Change Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={index} ref={(el) => (printRefs.current[index] = el)}>
              <TableCell>{order.name}</TableCell>
              <TableCell><Badge color={order.status === 'PENDIENTE' ? 'red' : 'green'}>{order.status}</Badge></TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <FaPrint className="cursor-pointer" onClick={() => handlePrint(index)} />
                  <FaQrcode />
                </div>
              </TableCell>
              <TableCell>
                {order.status === 'PENDIENTE' && (
                  <Button onClick={() => handleStatusChange(index)}>Terminada</Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default OrderList;



