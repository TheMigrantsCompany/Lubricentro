import React from 'react';
import SideBarAdmin from '../../components/sidebar/SideBarAdmin';
import { TableLubricadores } from '../../components/table_lubricadores/Table_Lubricadores';
import BestLubricador from '../../components/cardstat/CardStat1';
import CardStat2 from '../../components/cardstat/CardStat2';

const GestionEmpleados = () => {
  return (
    <div className="flex">
      <SideBarAdmin /> {/* Sidebar en el costado */}

      <div className="flex-1 p-4">
        <div className="flex justify-between mb-4">
          <BestLubricador />
          <CardStat2 />
        </div>
        
        <TableLubricadores />
      </div>
    </div>
  );
};

export default GestionEmpleados;

