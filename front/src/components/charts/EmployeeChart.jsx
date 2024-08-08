import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart } from '@tremor/react';

const dataFormatter = (number) => Intl.NumberFormat('us').format(number).toString();

export function EmployeeChart() {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3001/users/');
                return response.data; // Devuelve la lista de usuarios (lubricadores)
            } catch (error) {
                console.error('Error fetching users:', error);
                return [];
            }
        };

        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:3001/orders/');
                return response.data; // Devuelve la lista de órdenes de servicio
            } catch (error) {
                console.error('Error fetching orders:', error);
                return [];
            }
        };

        const calculateLubricatorOrders = (orders) => {
            const orderCounts = {};

            orders.forEach(order => {
                const userId = order.id_User; // Relaciona con el lubricador
                if (!orderCounts[userId]) {
                    orderCounts[userId] = 0;
                }
                orderCounts[userId] += 1; // Cuenta las órdenes realizadas por cada lubricador
            });

            return orderCounts;
        };

        const prepareChartData = async () => {
            const users = await fetchUsers();
            const orders = await fetchOrders();
            const orderCounts = calculateLubricatorOrders(orders);

            // Prepara los datos para el gráfico
            const chartData = Object.keys(orderCounts).map(userId => {
                const user = users.find(user => user.id_User === userId);
                return {
                    name: user ? user.Name : 'Desconocido',
                    value: orderCounts[userId],
                };
            });

            setChartData(chartData);
        };

        prepareChartData();
    }, []);

    return (
        <div className="border border-black rounded-lg p-4 bg-white">
            <h3 className="text-2xl font-bold text-black dark:text-dark-tremor-content text-center">
                Mejor Lubricador
            </h3>
            
            <p className="mt-4 text-black text-tremor-label dark:text-dark-tremor-content">
                Lubricadores únicos que realizaron órdenes en los últimos 30 días.
            </p>
            <div className="flex justify-center">
                <BarChart
                    className="mt-4 w-full max-w-md"
                    data={chartData}
                    index="name"
                    categories={['value']}
                    colors={['blue']}
                    valueFormatter={dataFormatter}
                    yAxisWidth={48}
                />
            </div>
        </div>
    );
}
