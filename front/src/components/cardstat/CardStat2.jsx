import React from 'react';
import { Card, Text } from '@tremor/react';

const BestCliente = () => {
   
    const cliente = {
        name: 'María Rodríguez',
        averageRating: 5.0,
    };

    return (
        <Card className="mx-auto max-w-xs border-t-4 border-blue-500 rounded-t-lg overflow-hidden flex justify-center items-center">
            <div className="p-4">
                <Text className="text-tremor-content dark:text-dark-tremor-content font-bold text-black text-center">Mejor Cliente</Text>
                <div className="mt-1">
                    <Text className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold text-black text-center">{cliente.name}</Text>
                    <Text className="text-tremor-content dark:text-dark-tremor-content text-black text-center">Valoración: {cliente.averageRating} ⭐</Text>
                </div>
            </div>
        </Card>
    );
};

export default BestCliente;