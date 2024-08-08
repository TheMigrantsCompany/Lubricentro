import React, { useState, useEffect } from 'react';
import { Button, Label, Modal, TextInput, Checkbox } from "flowbite-react";
import { useDispatch } from 'react-redux';
import { updateClient, getCars } from '../../redux/actions/actions';

const ModalModifyClient = ({ client, closeModal }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        cedula: '',
        telefono: '',
        email: '',
        direccion: '',
        marca: '',
        diesel: false,
        gasolina: false,
        hibrido: false,
        kmActual: '',
        modelo: '',
        matricula: ''
    });

    useEffect(() => {
        if (client) {
            setFormData({
                nombre: client.Name || '',
                apellido: '', 
                cedula: client.CC_NIT || '',
                telefono: client.Phone || '',
                email: client.Mail || '',
                direccion: client.Address || '',
                marca: client.Brand || '',
                diesel: client.FuelType === 'Diesel',
                gasolina: client.FuelType === 'Gasolina',
                hibrido: client.FuelType === 'Híbrido',
                kmActual: client.KM || '',
                modelo: client.Model || '',
                matricula: client.LicensePlate || ''
            });
        }
    }, [client]);

    const handleInputChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [id]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async () => {
        try {
            await dispatch(updateClient(client.id_Car, {
                Name: formData.nombre,
                CC_NIT: formData.cedula,
                Phone: formData.telefono,
                Mail: formData.email,
                Address: formData.direccion,
                Brand: formData.marca,
                FuelType: formData.diesel ? 'Diesel' : formData.gasolina ? 'Gasolina' : 'Híbrido',
                KM: formData.kmActual,
                Model: formData.modelo,
                LicensePlate: formData.matricula
            }));
            dispatch(getCars());
            closeModal();
        } catch (error) {
            console.error('Error al modificar el cliente:', error);
        }
    };

    return (
        <Modal show={true} size="md" onClose={closeModal} popup>
            <Modal.Header />
            <Modal.Body>
                <div className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                        Modificar Cliente
                    </h3>
                    <div>
                        <Label htmlFor="nombre" value="Nombre" />
                        <TextInput id="nombre" value={formData.nombre} onChange={handleInputChange} required />
                    </div>
                    <div>
                        <Label htmlFor="apellido" value="Apellido" />
                        <TextInput id="apellido" value={formData.apellido} onChange={handleInputChange} required />
                    </div>
                    <div>
                        <Label htmlFor="cedula" value="Cédula" />
                        <TextInput id="cedula" value={formData.cedula} onChange={handleInputChange} required />
                    </div>
                    <div>
                        <Label htmlFor="telefono" value="Teléfono" />
                        <TextInput id="telefono" value={formData.telefono} onChange={handleInputChange} required />
                    </div>
                    <div>
                        <Label htmlFor="email" value="Email" />
                        <TextInput id="email" value={formData.email} onChange={handleInputChange} required />
                    </div>
                    <div>
                        <Label htmlFor="direccion" value="Dirección" />
                        <TextInput id="direccion" value={formData.direccion} onChange={handleInputChange} required />
                    </div>
                    <div>
                        <Label htmlFor="marca" value="Marca" />
                        <TextInput id="marca" value={formData.marca} onChange={handleInputChange} required />
                    </div>
                    <div className="flex space-x-4">
                        <div className="flex items-center">
                            <Checkbox id="diesel" checked={formData.diesel} onChange={handleInputChange} />
                            <label htmlFor="diesel" className="ml-2 text-black">Diesel</label>
                        </div>
                        <div className="flex items-center">
                            <Checkbox id="gasolina" checked={formData.gasolina} onChange={handleInputChange} />
                            <label htmlFor="gasolina" className="ml-2 text-black">Gasolina</label>
                        </div>
                        <div className="flex items-center">
                            <Checkbox id="hibrido" checked={formData.hibrido} onChange={handleInputChange} />
                            <label htmlFor="hibrido" className="ml-2 text-black">Híbrido</label>
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="kmActual" value="KM Actual" />
                        <TextInput id="kmActual" value={formData.kmActual} onChange={handleInputChange} required />
                    </div>
                    <div>
                        <Label htmlFor="modelo" value="Modelo (Año)" />
                        <TextInput id="modelo" value={formData.modelo} onChange={handleInputChange} required />
                    </div>
                    <div>
                        <Label htmlFor="matricula" value="Matrícula" />
                        <TextInput id="matricula" value={formData.matricula} onChange={handleInputChange} required />
                    </div>
                    <div className="flex justify-end">
                        <Button onClick={handleSubmit}>
                            Guardar
                        </Button>
                        <Button color="gray" onClick={closeModal}>
                            Cancelar
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ModalModifyClient;
;
