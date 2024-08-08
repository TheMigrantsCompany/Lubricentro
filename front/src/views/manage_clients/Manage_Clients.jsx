import React from 'react';
import { ClientesPlacasTable } from '../../components/table_clients/TableClients'; 
import BestCliente from '../../components/cardstat/CardStat2';
import { ClientesChart } from '../../components/charts/ClientChart';


const GestionClientes = () => {
    return (
      <div className="flex flex-col p-4">
        <div className="flex justify-between mb-4">
          <BestCliente />
        </div>
        <div className="flex mb-4">
        
        </div>
        <div className="flex flex-1">
          <div className="w-2/3">
            <ClientesPlacasTable />
          </div>
          <div className="w-1/3 p-4">
            <ClientesChart />
          </div>
        </div>
      </div>
    );
  };

export default GestionClientes;


