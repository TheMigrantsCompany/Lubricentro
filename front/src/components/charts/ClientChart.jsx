import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart } from '@tremor/react';

const dataFormatter = (number) => Intl.NumberFormat('us').format(number).toString();

export function ClientesChart() {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axios.get('http://localhost:3001/cars/');
                return response.data; // Devuelve la lista de coches
            } catch (error) {
                console.error('Error fetching cars:', error);
                return [];
            }
        };

        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:3001/orders/');
                return response.data; // Devuelve la lista de órdenes
            } catch (error) {
                console.error('Error fetching orders:', error);
                return [];
            }
        };

        const calculateSpendings = (orders) => {
            const spendings = {};

            orders.forEach(order => {
                const totalCost = order.Items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                const carId = order.id_Car; // Relaciona con el coche
                if (!spendings[carId]) {
                    spendings[carId] = 0;
                }
                spendings[carId] += totalCost;
            });

            return spendings;
        };

        const prepareChartData = async () => {
            const cars = await fetchCars();
            const orders = await fetchOrders();
            const spendings = calculateSpendings(orders);

            // Prepara los datos para el gráfico
            const chartData = Object.keys(spendings).map(carId => {
                const car = cars.find(car => car.id_Car === carId);
                return {
                    name: car ? car.Name : 'Desconocido',
                    value: spendings[carId],
                };
            });

            setChartData(chartData);
        };

        prepareChartData();
    }, []);

    return (
        <div className="border border-black rounded-lg p-6 bg-white">
            <h3 className="text-2xl font-bold text-black dark:text-dark-tremor-content text-center">
                Clientes con Más y Menos Compras
            </h3>
            
            <p className="mt-4 text-black text-tremor-label dark:text-dark-tremor-content">
                Clientes únicos que realizaron compras en los últimos 30 días.
            </p>
            <div className="flex justify-center">
                <BarChart
                    className="mt-6 w-full max-w-4xl h-80"
                    data={chartData}
                    index="name"
                    categories={['value']}
                    colors={['blue']}
                    valueFormatter={dataFormatter}
                    yAxisWidth={60}
                />
            </div>
        </div>
    );
}
