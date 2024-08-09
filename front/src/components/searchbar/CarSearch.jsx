import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars, getCarsPlate, getCarByCCNIT } from '../../redux/actions/actions'; // Asegúrate de ajustar la ruta a tu archivo de acciones

const CarSearch = ({ onCarSelect, reset }) => {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [searchType, setSearchType] = useState('plate');
    const dispatch = useDispatch();
    const cars = useSelector(state => state.cars || []);
    const loading = useSelector(state => state.loading);
    const inputRef = useRef(null);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      if (query.trim() !== '') {
        if (searchType === 'plate') {
          dispatch(getCarsPlate(query));
        } else {
          dispatch(getCarByCCNIT(query));
        }
      } else {
        dispatch(getCars()); // Opcional: cargar todos los autos cuando la consulta está vacía
      }
    }, [query, searchType, dispatch]);
  
    const handleSearch = () => {
      if (query.trim()) {
        if (searchType === 'plate') {
          dispatch(getCarsPlate(query));
        } else {
          dispatch(getCarByCCNIT(query));
        }
      }
    };
  
    const handleSelectCar = (car) => {
      setQuery("");
      setIsOpen(false);
      onCarSelect(car);
    };
  
    // Agregar validación para evitar errores con valores nulos
    const filteredCars = cars.filter(car => {
      const searchValue = searchType === 'plate' ? car.LicensePlate : car.CC_NIT;
      return searchValue && searchValue.toLowerCase().includes(query.toLowerCase());
    });
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
            inputRef.current && !inputRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    const CarSearch = ({ onCarSelect, reset }) => {
      const [searchTerm, setSearchTerm] = useState('');
      const [selectedCar, setSelectedCar] = useState(null);
    
      useEffect(() => {
        if (reset) {
          setQuery('');  // Resetea el término de búsqueda
          setSelectedCar(null); // Limpia el carro seleccionado
        }
      }, [reset]);
      
    
      // Resto de la lógica del componente...
    };
  
    return (
        <div className="relative">
          <div className="flex flex-col items-center mb-2">
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
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsOpen(true)}
              placeholder={`Buscar por ${searchType === 'plate' ? 'placa' : 'CC-NIT'}`}
              className="border border-gray-300 rounded-lg p-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
              ref={inputRef}
            />
          </div>
          {isOpen && (
            <div ref={dropdownRef} className="absolute top-full left-0 right-0 mt-2 border border-gray-300 rounded-lg bg-white shadow-lg z-10 w-full sm:w-64 mx-auto">
              {loading ? (
                <div className="p-2 text-center text-gray-500">Cargando...</div>
              ) : (
                filteredCars.length > 0 ? (
                  <ul className="max-h-60 overflow-y-auto">
                    {filteredCars.map((car) => (
                      <li
                        key={car.id_Car}
                        onClick={() => handleSelectCar(car)}
                        className="p-2 hover:bg-gray-100 cursor-pointer text-black"
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