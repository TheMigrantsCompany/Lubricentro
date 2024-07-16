import React from 'react';
//import SideBarAdmin from '../../components/sidebar/SideBarAdmin';
import { TableLubricadores } from '../../components/table_lubricadores/Table_Lubricadores';
import BestLubricador from '../../components/cardstat/CardStat1';
import { EmployeeChart } from '../../components/charts/EmployeeChart'; 


const GestionEmpleados = () => {
  return (
    <div className="flex">
      

      <div className="flex-1 p-4">
        <div className="flex justify-between mb-4">
          <BestLubricador />
        
        </div>
        
        <div className="flex">
          <div className="flex-1">
            <TableLubricadores />
          </div>
          <div className="w-1/3 p-4">
            <EmployeeChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestionEmpleados;

