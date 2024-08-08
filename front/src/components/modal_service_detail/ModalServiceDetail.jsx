import React, { useEffect } from 'react';
import { Modal, Button, Label } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServiceDetails } from '../../redux/actions/actions';

const ModalServiceDetail = ({ serviceId, closeModal }) => {
  const dispatch = useDispatch();
  const service = useSelector((state) => state.serviceDetail);

  useEffect(() => {
    if (serviceId) {
      dispatch(fetchServiceDetails(serviceId));
    }
  }, [serviceId, dispatch]);

  if (!service) return null;

  return (
    <Modal show={true} size="md" onClose={closeModal} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6 max-w-3xl mx-auto"> 
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Detalle del Servicio
          </h3>
          <div>
            <Label htmlFor="id_Service_Order" value="ID de Orden de Servicio" />
            <p id="id_Service_Order" className="text-gray-700 dark:text-gray-300">{service.id_Service_Order}</p>
          </div>
          <div>
            <Label htmlFor="id_User" value="ID de Usuario" />
            <p id="id_User" className="text-gray-700 dark:text-gray-300">{service.id_User}</p>
          </div>
          <div>
            <Label htmlFor="id_Car" value="ID del Carro" />
            <p id="id_Car" className="text-gray-700 dark:text-gray-300">{service.id_Car}</p>
          </div>
          <div>
            <Label htmlFor="date" value="Fecha" />
            <p id="date" className="text-gray-700 dark:text-gray-300">{new Date(service.Date).toLocaleString()}</p>
          </div>
          <div>
            <Label htmlFor="paymentMethod" value="Método de Pago" />
            <p id="paymentMethod" className="text-gray-700 dark:text-gray-300">{service.PaymentMethod}</p>
          </div>
          <div>
            <Label htmlFor="warnings" value="Advertencias" />
            <p id="warnings" className="text-gray-700 dark:text-gray-300">{service.Warnings}</p>
          </div>
          <div>
            <Label htmlFor="items" value="Items" />
            <ul id="items" className="text-gray-700 dark:text-gray-300">
              {service.Items.map((item, index) => (
                <li key={index} className="mb-4">
                  <p><strong>Item {index + 1}:</strong></p>
                  <p><strong>Product ID:</strong> {item.productId}</p>
                  <p><strong>Quantity:</strong> {item.quantity}</p>
                  <p><strong>Price:</strong> {item.price}</p>
                </li>
              ))}
            </ul>
          </div>
          <Button onClick={closeModal}>Cerrar</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalServiceDetail;
