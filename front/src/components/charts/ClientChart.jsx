'use client';

import { FunnelChart } from '@tremor/react';

const chartdataClientes = [
  { name: 'Cliente A', value: 120 },
  { name: 'Cliente B', value: 75 },
  { name: 'Cliente C', value: 30 },
];

export function ClientesChart() {
  return (
    <div className="border border-black rounded-lg p-4 bg-white">
      <h3 className="text-black text-tremor-default text-tremor-content dark:text-dark-tremor-content text-sm">
        Clientes con Más y Menos Compras
      </h3>
      <p className="text-black text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content text-sm">
        8.3%
      </p>
      <p className="mt-4 text-black text-tremor-label text-tremor-content dark:text-dark-tremor-content text-sm">
        Clientes únicos que realizaron compras en los últimos 30 días.
      </p>
      <div className="flex justify-center">
        <FunnelChart
          className="mt-4 w-full max-w-md"
          data={chartdataClientes}
          style={{
            label: { fill: 'black', fontSize: 12, fontWeight: 'bold' },
            tooltip: { background: 'white', border: '1px solid #ccc', color: 'black', fontSize: 12, fontWeight: 'normal' }
          }}
        />
      </div>
    </div>
  );
}