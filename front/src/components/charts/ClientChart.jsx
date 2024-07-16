'use Client'

import { BarChart } from '@tremor/react';

const chartdataClientes = [
  { name: 'Cliente A', value: 120 },
  { name: 'Cliente B', value: 75 },
  { name: 'Cliente C', value: 30 },
];

const dataFormatter = (number) => Intl.NumberFormat('us').format(number).toString();

export function ClientesChart() {
  return (
    <div className="border border-black rounded-lg p-4 bg-white">
      <h3 className="text-black text-tremor-default dark:text-dark-tremor-content">
        Clientes con Más y Menos Compras
      </h3>
      <p className="text-black text-tremor-metric font-semibold dark:text-dark-tremor-content ">
        8.3%
      </p>
      <p className="mt-4 text-black text-tremor-label dark:text-dark-tremor-content ">
        Clientes únicos que realizaron compras en los últimos 30 días.
      </p>
      <div className="flex justify-center">
        <BarChart
          className="mt-4 w-full max-w-md"
          data={chartdataClientes}
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


