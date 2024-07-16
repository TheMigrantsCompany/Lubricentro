// import React, { useState } from 'react';
// import OrderList from '../order_list_admin/OrdenList';
// // import OrderList2 from '../order_list_admin/OrderList2';

// const initialPendingOrders = [
//   { name: 'orden servicio 1', status: 'PENDIENTE' },
//   { name: 'orden servicio 2', status: 'PENDIENTE' },
//   { name: 'orden servicio 3', status: 'PENDIENTE' },
//   { name: 'orden servicio 4', status: 'PENDIENTE' },
// ];

// const PendingComponent = () => {
//   const [pendingOrders, setPendingOrders] = useState(initialPendingOrders);
//   const [completedOrders, setCompletedOrders] = useState([]);

//   const handleStatusChange = (index) => {
//     const orderToComplete = pendingOrders[index];
//     setPendingOrders(pendingOrders.filter((_, i) => i !== index));
//     setCompletedOrders([...completedOrders, { ...orderToComplete, status: 'TERMINADA' }]);
//   };

//   return (
//     <div>
//       <OrderList orders={pendingOrders} onStatusChange={handleStatusChange} />
//       <OrderList2 orders={completedOrders} />
//     </div>
//   );
// };

// export default PendingComponent;
