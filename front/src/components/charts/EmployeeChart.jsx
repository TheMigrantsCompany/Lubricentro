'use client';

import { BarChart } from '@tremor/react';

const chartdata = [
  { name: 'Servicio A', value: 89 },
  { name: 'Servicio B', value: 6 },
  { name: 'Servicio C', value: 5 },
];

const dataFormatter = (number) => Intl.NumberFormat('us').format(number).toString();

export function EmployeeChart() {
  return (
    <div className="border border-black rounded-lg p-4 bg-white">
      <h3 className="text-black text-tremor-default dark:text-dark-tremor-content">
        Mejor Lubricador
      </h3>
      <p className="text-black text-tremor-metric font-semibold dark:text-dark-tremor-content">
        5.6%
      </p>
      <p className="mt-4 text-black text-tremor-label dark:text-dark-tremor-content">
        Lubricadores únicos en un orden específico que se convirtieron en los últimos 30 días.
      </p>
      <div className="flex justify-center">
        <BarChart
          className="mt-4 w-full max-w-md"
          data={chartdata}
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


