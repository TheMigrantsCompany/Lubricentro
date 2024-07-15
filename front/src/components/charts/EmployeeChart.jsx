'use client';

import { FunnelChart } from '@tremor/react';

const chartdata = [
  { name: 'Servicio A', value: 89 },
  { name: 'Servicio B', value: 6 },
  { name: 'Servicio C', value: 5 },
];

export function EmployeeChart() {
    return (
        <div className="border border-black rounded-lg p-4 bg-white">
          <h3 className="text-black text-tremor-default text-tremor-content dark:text-dark-tremor-content text-sm">
            Mejor Lubricador
          </h3>
          <p className="text-black text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content text-sm">
            5.6%
          </p>
          <p className="mt-4 text-black text-tremor-label text-tremor-content dark:text-dark-tremor-content text-sm">
          Lubricadores únicos en un orden específico que se convirtieron en los últimos 30 días.
          </p>
          <div className="flex justify-center">
            <FunnelChart
              className="mt-4 w-full max-w-md"
              data={chartdata}
              style={{
                label: { fill: 'black', fontSize: 12, fontWeight: 'bold' },
                tooltip: { background: 'white', border: '1px solid #ccc', color: 'black', fontSize: 12, fontWeight: 'normal' }
              }}
            />
          </div>
        </div>
      );
    }

