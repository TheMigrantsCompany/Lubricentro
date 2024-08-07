import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars, getCarsPlate, getCarByCCNIT } from '../../redux/actions/actions'; // Asegúrate de ajustar la ruta a tu archivo de acciones

const CarSearch = ({ onCarSelect }) => {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [searchType, setSearchType] = useState('plate');
    const dispatch = useDispatch();
    const cars = useSelector(state => state.cars);
    const loading = useSelector(state => state.loading);

    useEffect(() => {
        dispatch(getCars()); // Cargar todos los autos cuando se monta el componente
    }, [dispatch]);

    const handleSearch = () => {
        if (query.trim()) {
            console.log(`Iniciando búsqueda por: ${query} (tipo: ${searchType})`);
            if (searchType === 'plate') {
                dispatch(getCarsPlate(query));
            } else {
                dispatch(getCarByCCNIT(query));
            }
            //setIsOpen(true);
        } else {
            console.log("Consulta vacía");
        }
    };

    const handleSelectCar = (car) => {
        setQuery(searchType === 'plate' ? car.LicensePlate : car.CC_NIT);
        setIsOpen(false);
        console.log("Carro seleccionado: ", car);
        onCarSelect(car);
    };

    //console.log("Lista de autos: ", cars);

    return (
        <div className="relative">
            <div className="flex gap-2 mb-2">
                <button
                    onClick={() => setSearchType('plate')}
                    className={`px-4 py-2 rounded-lg ${searchType === 'plate' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Buscar por Placa
                </button>
                <button
                    onClick={() => setSearchType('cc-nit')}
                    className={`px-4 py-2 rounded-lg ${searchType === 'cc-nit' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Buscar por CC-NIT
                </button>
            </div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsOpen(true)}
                onBlur={() => setTimeout(() => setIsOpen(false), 100)}
                placeholder={`Buscar por ${searchType === 'plate' ? 'placa' : 'CC-NIT'}`}
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleSearch}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
                Buscar
            </button>
            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 border border-gray-300 rounded-lg bg-white shadow-lg z-10">
                    {loading ? (
                        <div className="p-2 text-center text-gray-500">Cargando...</div>
                    ) : (
                        cars.length > 0 ? (
                            <ul className="max-h-60 overflow-y-auto">
                                {cars.map((car) => (
                                    <li
                                        key={car.id_Car}
                                        onClick={() => handleSelectCar(car)}
                                        className="p-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {searchType === 'plate' ? car.LicensePlate : car.CC_NIT}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="p-2 text-center text-gray-500">No se encontraron resultados</div>
                        )
                    )}
                </div>
            )}
        </div>
    );
};

export default CarSearch;