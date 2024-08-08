import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Text } from '@tremor/react';

const BestCliente = () => {
    const [bestClient, setBestClient] = useState(null);

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

        const findBestClient = async () => {
            const cars = await fetchCars();
            const orders = await fetchOrders();
            const spendings = calculateSpendings(orders);

            // Encuentra el coche con el mayor gasto
            const maxSpendingCarId = Object.keys(spendings).reduce((a, b) => spendings[a] > spendings[b] ? a : b, null);

            if (maxSpendingCarId) {
                const bestClient = cars.find(car => car.id_Car === maxSpendingCarId);
                setBestClient(bestClient);
            } else {
                console.log('No se encontró el coche con mayor gasto.');
            }
        };

        findBestClient();
    }, []);

    return (
        <Card className="mx-auto max-w-xs border-t-4 border-blue-500 rounded-t-lg overflow-hidden flex justify-center items-center">
            <div className="p-4">
                <Text className="text-tremor-content dark:text-dark-tremor-content font-bold text-center text-3xl">Mejor Cliente</Text>
                <div className="mt-1">
                    {bestClient ? (
                        <>
                            <Text className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold text-center">{bestClient.Name} ⭐</Text>
                        </>
                    ) : (
                        <Text className="text-xl text-center">Cargando...</Text>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default BestCliente;

