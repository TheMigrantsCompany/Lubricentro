import React, { useEffect, useState } from 'react';
import { Card, Button } from '@tremor/react';
import ModalModifyClient from '../modal_modify_client/ModalModifyClient';
import ModalServiceDetail from '../modal_service_detail/ModalServiceDetail';
import { FaQrcode } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'; 
import { getCars, getServiceOrders, fetchServiceDetails, deleteCar } from '../../redux/actions/actions';

export function ClientesPlacasTable() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);
  const serviceOrders = useSelector((state) => state.serviceOrders);
  const serviceDetail = useSelector((state) => state.serviceDetail);
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedServiceId, setSelectedServiceId] = useState(null);

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

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto md:ml-16">
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
                {cars.map((cliente) => (
                  <tr key={cliente.id_Car} className="bg-gray-100 border-b">
                    <td className="px-6 py-4">{cliente.Name}</td>
                    <td className="px-6 py-4">{cliente.LicensePlate}</td>
                    <td className="px-6 py-4">{cliente.CC_NIT}</td>
                    <td className="px-6 py-4">
                      <span 
                        className={`cursor-pointer underline ${cliente.Active ? 'text-blue-600' : 'text-red-600'}`} 
                        onClick={() => dispatch(toggleCarActive(cliente.id_Car))}
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
                      <Button
                        onClick={() => handleModificar(cliente)}
                        className="py-1 px-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Modificar
                      </Button>
                      <Button
                        onClick={() => handleDetalle(cliente)}
                        className="py-1 px-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Detalle
                      </Button>
                      <Button
                        onClick={() => handleEliminar(cliente.CC_NIT, cliente.LicensePlate)}
                        className="py-1 px-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        Eliminar
                      </Button>
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