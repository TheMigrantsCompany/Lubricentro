import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase/config';
import { updateProfile } from 'firebase/auth';

const PerfilUser = ({ isOpen, onClose }) => {
    const [user, setUser] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [perfilInfo, setPerfilInfo] = useState({
        displayName: '',
        photoURL: '',
        email: '',
        phoneNumber: '',  // Agregar campo phoneNumber
    });

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                setPerfilInfo({
                    displayName: user.displayName || '',
                    photoURL: user.photoURL || '',
                    email: user.email || '',
                    phoneNumber: user.phoneNumber || '',  // Obtener el número de teléfono
                });
            }
        });

        return () => unsubscribe();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPerfilInfo({ ...perfilInfo, [name]: value });
    };

    const handleSave = async () => {
        if (user) {
            try {
                await updateProfile(user, {
                    displayName: perfilInfo.displayName,
                    photoURL: perfilInfo.photoURL,
                    phoneNumber: perfilInfo.phoneNumber,  // Actualizar número de teléfono
                });
                setEditMode(false);
            } catch (error) {
                console.error("Error updating profile", error);
            }
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative dark:text-white w-96 p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800">
                <form className="p-8 rounded-xl shadow-2xl mb-8 flex flex-col md:py-5">
                    <div className='pb-6 flex items-center justify-center'>
                        <img src={perfilInfo.photoURL || 'https://via.placeholder.com/100'} className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300" alt="Profile" />
                    </div>
                    <div className="grid mb-6 md:grid-cols-1 lg:grid-cols-1">
                        {editMode ? (
                            <>
                                <input
                                    type="text"
                                    name="displayName"
                                    value={perfilInfo.displayName}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
                                    placeholder="Nombre y Apellido"
                                    required
                                />
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={perfilInfo.phoneNumber}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
                                    placeholder="Número de Teléfono"
                                    required
                                />
                                <input
                                    type="text"
                                    name="photoURL"
                                    value={perfilInfo.photoURL}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
                                    placeholder="URL de foto de perfil"
                                    required
                                />
                                <input
                                    type="text"
                                    name="email"
                                    value={perfilInfo.email}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
                                    placeholder="Correo electrónico"
                                    disabled
                                    required
                                />
                            </>
                        ) : (
                            <>
                                <label className="text-black">Nombre: {perfilInfo.displayName}</label>
                                <label className="text-black">Teléfono: {perfilInfo.phoneNumber}</label>
                                <label className="text-black">Correo: {perfilInfo.email}</label>
                                
                            </>
                        )}
                    </div>
                    <button
                        type="button"
                        onClick={editMode ? handleSave : () => setEditMode(true)}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2"
                    >
                        {editMode ? 'Guardar' : 'Editar'}
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    >
                        Cancelar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PerfilUser;
