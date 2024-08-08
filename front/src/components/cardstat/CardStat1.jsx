import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Text } from '@tremor/react';

const BestLubricador = () => {
    const [bestLubricador, setBestLubricador] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:3001/orders/');
                return response.data; // Devuelve la lista de órdenes
            } catch (error) {
                console.error('Error fetching orders:', error);
                return [];
            }
        };

        const fetchLubricadores = async () => {
            try {
                const response = await axios.get('http://localhost:3001/users/');
                return response.data; // Devuelve la lista de lubricadores
            } catch (error) {
                console.error('Error fetching lubricadores:', error);
                return [];
            }
        };

        const calculateOrdersCount = (orders) => {
            const ordersCount = {};

            orders.forEach(order => {
                const lubricadorId = order.id_User; // Relaciona con el lubricador
                if (!ordersCount[lubricadorId]) {
                    ordersCount[lubricadorId] = 0;
                }
                ordersCount[lubricadorId] += 1;
            });

            return ordersCount;
        };

        const findBestLubricador = async () => {
            const orders = await fetchOrders();
            const lubricadores = await fetchLubricadores();
            const ordersCount = calculateOrdersCount(orders);

            // Encuentra el lubricador con el mayor número de órdenes
            const maxOrdersLubricadorId = Object.keys(ordersCount).reduce((a, b) => ordersCount[a] > ordersCount[b] ? a : b, null);

            if (maxOrdersLubricadorId) {
                const bestLubricador = lubricadores.find(lubricador => lubricador.id_User === maxOrdersLubricadorId);
                setBestLubricador(bestLubricador);
            } else {
                console.log('No se encontró el lubricador con más órdenes.');
            }
        };

        findBestLubricador();
    }, []);

    return (
        <Card className="mx-auto max-w-xs border-t-4 border-blue-500 rounded-t-lg overflow-hidden flex justify-center items-center">
            <div className="p-4">
                <Text className="dark:text-dark-tremor-content font-bold text-black text-center">Mejor Lubricador</Text>
                <div className="mt-1">
                    {bestLubricador ? (
                        <>
                            <Text className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold text-center">{bestLubricador.Name}⭐</Text>
                           
                        </>
                    ) : (
                        <Text className="text-center">Cargando...</Text>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default BestLubricador;
