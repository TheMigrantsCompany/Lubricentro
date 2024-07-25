import React from 'react';

const ClientServiceOrder = () => {
  const oilChangeDate = '20,000 KM'; // Datos de ejemplo, deberían venir del backend
  const oilType = 'Sintético';
  const nextOilChange = '25,000 KM';
  const isTransmissionChecked = true;
  const isBrakeFluidChecked = true;
  const isCoolantChecked = true;

  return (
    <div className="max-w-2xl mx-auto p-4 mt-10 bg-white shadow-md rounded-md">
      <h1 className="text-gray-700 text-3xl font-bold text-center mb-8">Aditivos y Lubricantes calle 6</h1>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Fecha de cambio de aceite a KM:
        </label>
        <p className="text-gray-500 w-full p-2 border border-gray-300 rounded-md bg-gray-100">{oilChangeDate}</p>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Tipo de aceite:
        </label>
        <p className="text-gray-500 w-full p-2 border border-gray-300 rounded-md bg-gray-100">{oilType}</p>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Próximo cambio de aceite a KM:
        </label>
        <p className="text-gray-500 w-full p-2 border border-gray-300 rounded-md bg-gray-100">{nextOilChange}</p>
      </div>
      
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="transmission"
          className="mr-2"
          checked={isTransmissionChecked}
          readOnly
        />
        <label className="text-gray-700 text-sm font-bold" htmlFor="transmission">
          Caja de Cambios: Cambiado
        </label>
      </div>
      
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="brakeFluid"
          className="mr-2"
          checked={isBrakeFluidChecked}
          readOnly
        />
        <label className="text-gray-700 text-sm font-bold" htmlFor="brakeFluid">
          Líquido Frenos: Cambiado
        </label>
      </div>
      
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="coolant"
          className="mr-2"
          checked={isCoolantChecked}
          readOnly
        />
        <label className="text-gray-700 text-sm font-bold" htmlFor="coolant">
          Líquido Refrigerante: Cambiado
        </label>
      </div>
    </div>
  );
};

export default ClientServiceOrder;