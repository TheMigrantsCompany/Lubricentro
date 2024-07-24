/*en esta tabla el lubricador podra ver un listado de sus ordenes de servicio realizadas
  se verra la fecha, el cliente/placa y un boton que abrira un alert con el resumen de esa orden de servicio*/


  import React from 'react';
  import { Table, Button as FlowbiteButton } from "flowbite-react";
  import Swal from 'sweetalert2';
  import withReactContent from 'sweetalert2-react-content';
  import OrderSummary from '../../components/order-summary/OrderSummary';
  
  const MySwal = withReactContent(Swal);
  
  const Services = () => {
    const serviceOrders = [
      {
        id: 1,
        date: '2023-07-17',
        client: 'ABC-123',
        service: 'IDservice',
        price: '$2999',
        selectedProducts: [
          { id: 1, name: 'Producto 1', price: 500, quantity: 1 },
        ],
        selectedServices: [
          { id: 1, name: 'Servicio 1', price: 100, quantity: 1 },
        ],
        warnings: 'Ninguna',
        paymentMethod: 'Efectivo',
      },
      {
        id: 2,
        date: '2023-07-18',
        client: 'XYZ-789',
        service: 'IDservice',
        price: '$1999',
        selectedProducts: [],
        selectedServices: [],
        warnings: 'Ninguna',
        paymentMethod: 'Tarjeta',
      },
      {
        id: 3,
        date: '2023-07-19',
        client: 'GHI-456',
        service: 'IDservice',
        price: '$99',
        selectedProducts: [],
        selectedServices: [],
        warnings: 'Ninguna',
        paymentMethod: 'Efectivo',
      },
    ];
  
    const handleViewOrder = (order) => {
      MySwal.fire({
        title: 'Información de la Orden',
        html: (
          <OrderSummary
            date={order.date}
            paymentMethod={order.paymentMethod}
            selectedProducts={order.selectedProducts}
            selectedServices={order.selectedServices}
            warnings={order.warnings}
            calculateTotal={() =>
              order.selectedProducts.reduce((total, item) => total + item.price * item.quantity, 0) +
              order.selectedServices.reduce((total, item) => total + item.price * item.quantity, 0)
            }
            readOnly={true} // Aquí se establece la vista de solo lectura
          />
        ),
        showConfirmButton: false,
        customClass: {
          container: 'z-1050', // Añade una clase personalizada para el contenedor
        },
      });
    };
  
    return (
      <div className="flex justify-center items-center min-h-screen mt-[-150px]">
        <div className="overflow-x-auto w-full max-w-6xl">
          <h2 className="text-slate-600 m-5 text-2xl md:text-3xl font-bold tracking-wider text-center mb-4">Órdenes de servicio realizadas</h2>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Fecha de servicio</Table.HeadCell>
              <Table.HeadCell>Cliente/Placa</Table.HeadCell>
              <Table.HeadCell>Servicio</Table.HeadCell>
              <Table.HeadCell>Acciones</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {serviceOrders.map((order) => (
                <Table.Row key={order.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {order.date}
                  </Table.Cell>
                  <Table.Cell>{order.client}</Table.Cell>
                  <Table.Cell>{order.service}</Table.Cell>
                  <Table.Cell>
                    <FlowbiteButton onClick={() => handleViewOrder(order)} className="bg-red-600 hover:bg-red-700 text-white">
                      Ver Orden
                    </FlowbiteButton>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  };
  
  export default Services;