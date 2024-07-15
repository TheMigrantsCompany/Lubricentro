import React from 'react';
import SideBarAdmin from '../../components/sidebar/SideBarAdmin';
import { ClientesPlacasTable } from '../../components/table_clients/TableClients'; 
import BestCliente from '../../components/cardstat/CardStat2';
import { ClientesChart } from '../../components/charts/ClientChart';

const GestionClientes = () => {
    return (
      <div className="flex">
        <SideBarAdmin /> 
  
        <div className="flex-1 p-4">
          <div className="flex justify-between mb-4">
            <BestCliente />
          </div>
          
          <div className="flex">
            <div className="flex-1">
              <ClientesPlacasTable />
            </div>
            <div className="w-1/3 p-4">
              <ClientesChart />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default GestionClientes;
