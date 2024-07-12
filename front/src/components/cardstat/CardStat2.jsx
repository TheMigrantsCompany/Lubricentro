import React from 'react';
import { Card, Text } from '@tremor/react';

const CardStat2 = () => {
    // Simulación de cantidad de lubricadores
    const cantidadLubricadores = 10;

    return (
        <Card className="mx-auto max-w-xs border-t-4 border-blue-500 rounded-t-lg overflow-hidden">
            <div className="p-4 text-center">
                <Text className="text-tremor-content dark:text-dark-tremor-content font-bold text-black">Cantidad de Lubricadores</Text>
                <div className="mt-1">
                    <Text className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold text-black">{cantidadLubricadores}</Text>
                </div>
            </div>
        </Card>
    );
};

export default CardStat2;