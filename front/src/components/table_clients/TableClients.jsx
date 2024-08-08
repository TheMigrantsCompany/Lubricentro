import React, { useEffect, useState } from 'react';
import { Card } from '@tremor/react';
import ModalModifyClient from '../modal_modify_client/ModalModifyClient';
import ModalServiceDetail from '../modal_service_detail/ModalServiceDetail';
import { FaQrcode } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'; 
import { getCars, getServiceOrders, fetchServiceDetails, toggleCarActiveState, deleteCar } from '../../redux/actions/actions';

export function ClientesPlacasTable() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);
  const serviceOrders = useSelector((state) => state.serviceOrders);
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('plate'); // 'plate' or 'cc-nit'

  useEffect(() => {
    dispatch(getCars());
    dispatch(getServiceOrders());
  }, [dispatch]);

  useEffect(() => {
    if (selectedServiceId) {
      dispatch(fetchServiceDetails(selectedServiceId));
    }
  }, [selectedServiceId, dispatch]);

  useEffect(() => {
    console.log('Cars:', cars);
    console.log('Service Orders:', serviceOrders);
  }, [cars, serviceOrders]);

  const handleModificar = (client) => {
    setSelectedClient(client);
  };

  const handleDetalle = (cliente) => {
    console.log('Cliente seleccionado:', cliente);

    const order = serviceOrders.find(order => order.id_Car === cliente.id_Car);
    
    console.log('Orden encontrada:', order);

    if (order) {
      setSelectedServiceId(order.id_Service_Order);
    } else {
      console.error('ID de orden de servicio no encontrado para el cliente');
    }
  };

  const handleEliminar = (CC_NIT, licensePlate) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este carro?')) {
      dispatch(deleteCar(CC_NIT, licensePlate));
    }
  };

  const handleVerQRCode = (client) => {
    console.log(`Mostrar código QR para el cliente con Cedula/NIT: ${client.CC_NIT}`);
  };

  const handleToggleActive = (id) => {
    dispatch(toggleCarActiveState(id));
  };

  // Filtrar los carros basado en la búsqueda
  const filteredCars = cars.filter(car => {
    const searchValue = searchType === 'plate' ? car.LicensePlate : car.CC_NIT;
    return searchValue && searchValue.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Ordenar los carros: activos primero y luego inactivos
  const sortedCars = [...filteredCars].sort((a, b) => b.Active - a.Active);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto md:ml-16">
        <div className="flex flex-col mb-4">
          <div className="flex gap-2 mb-2">
            <button
              onClick={() => setSearchType('plate')}
              className={`px-3 py-1 text-sm rounded-lg ${searchType === 'plate' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              Placa
            </button>
            <button
              onClick={() => setSearchType('cc-nit')}
              className={`px-3 py-1 text-sm rounded-lg ${searchType === 'cc-nit' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              CC-NIT
            </button>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Buscar por ${searchType === 'plate' ? 'placa' : 'CC-NIT'}`}
            className="border border-gray-300 rounded-lg p-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
          />
        </div>
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-800">
              <thead className="text-xs text-black uppercase bg-gray-300">
                <tr>
                  <th scope="col" className="px-6 py-3">Cliente</th>
                  <th scope="col" className="px-6 py-3">Placa</th>
                  <th scope="col" className="px-6 py-3">Cedula/NIT</th>
                  <th scope="col" className="px-6 py-3">Status</th>
                  <th scope="col" className="px-6 py-3">QR</th>
                  <th scope="col" className="px-6 py-3">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {sortedCars.map((cliente) => (
                  <tr key={cliente.id_Car} className="bg-gray-100 border-b">
                    <td className="px-6 py-4">{cliente.Name}</td>
                    <td className="px-6 py-4">{cliente.LicensePlate}</td>
                    <td className="px-6 py-4">{cliente.CC_NIT}</td>
                    <td className="px-6 py-4">
                      <span 
                        className={`cursor-pointer hover:underline ${cliente.Active ? 'text-blue-600' : 'text-red-600'}`}
                        onClick={() => handleToggleActive(cliente.id_Car)}
                      >
                        {cliente.Active ? 'Activo' : 'Inactivo'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <FaQrcode 
                        className="text-xl text-gray-600 hover:text-gray-800 cursor-pointer" 
                        onClick={() => handleVerQRCode(cliente)} 
                      />
                    </td>
                    <td className="px-6 py-4 flex space-x-2">
                      <button
                        onClick={() => handleModificar(cliente)}
                        className="py-1 px-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Modificar
                      </button>
                      <button
                        onClick={() => handleDetalle(cliente)}
                        className="py-1 px-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Detalle
                      </button>
                      <button
                        onClick={() => handleEliminar(cliente.CC_NIT, cliente.LicensePlate)}
                        className="py-1 px-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
      {selectedClient && (
        <ModalModifyClient
          client={selectedClient}
          closeModal={() => setSelectedClient(null)}
        />
      )}
      {selectedServiceId && (
        <ModalServiceDetail
          serviceId={selectedServiceId}
          closeModal={() => setSelectedServiceId(null)}
        />
      )}
    </div>
  );
}
