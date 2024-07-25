import React, { useState } from 'react';
import { Card, Title, Badge, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell } from '@tremor/react';
import SearchBar from '../searchbar/SearchBar';

const initialOrders = [
  { name: 'orden servicio 1', status: 'TERMINADA' },
  { name: 'orden servicio 2', status: 'TERMINADA' },
  { name: 'orden servicio 3', status: 'TERMINADA' },
  { name: 'orden servicio 4', status: 'TERMINADA' },
];

const OrderList2 = () => {
  const [orders, setOrders] = useState(initialOrders);

  return (
    <Card>
      <Title>ORDENES DE SERVICIO TERMINADAS</Title>
      <div className="flex justify-center mb-4">
        <SearchBar className="w-1/2" />
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Order Name</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={index}>
              <TableCell>{order.name}</TableCell>
              <TableCell><Badge color="green">{order.status}</Badge></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default OrderList2;
