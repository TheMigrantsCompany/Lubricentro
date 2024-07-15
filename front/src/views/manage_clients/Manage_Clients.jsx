import React from 'react';
import SideBarAdmin from '../../components/sidebar/SideBarAdmin';
import { ClientesPlacasTable } from '../../components/table_clients/TableClients'; 

const GestionClientes = () => {
  return (
    <div className="flex">
      <SideBarAdmin />
      <div className="ml-4"> 
        <ClientesPlacasTable /> 
      </div>
    </div>
  );
};

export default GestionClientes;