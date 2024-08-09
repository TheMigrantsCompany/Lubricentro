import React, { useEffect } from "react";
import { Accordion, Select, Label } from "flowbite-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getAllProducts, getProductsByCategory } from "../../redux/actions/actions";

const AcordeonServicios = ({ onAddService }) => {
    const dispatch = useDispatch();
    const services = useSelector(state => state.products);
    const categories = useSelector(state => state.categories);
    const [serviceCategoryId, setServiceCategoryId] = useState(null);

    useEffect(() => {
        // Obtener todas las categorías
        dispatch(getAllCategories());
    }, [dispatch]);

    useEffect(() => {
        // Buscar el ID de la categoría "SERVICIO" y obtener los productos de esa categoría
        const serviceCategory = categories.find(category => category.Name.toLowerCase() === "servicio");
        if (serviceCategory) {
            setServiceCategoryId(serviceCategory.id_Category);
            dispatch(getProductsByCategory(serviceCategory.id_Category)); // Obtener productos de la categoría "SERVICIO"
        }
    }, [categories, dispatch]);

    const handleServiceSelect = (e) => {
        const selectedService = services.find(service => service.id_Product === e.target.value);
        if (selectedService) {
            onAddService(selectedService);
        }
    };

    // Filtrar solo los productos de la categoría "SERVICIO"
    const filteredServices = services.filter(service => service.id_Category === serviceCategoryId);

    return (
        <div className="mb-4">
            <Label htmlFor="service" value="Ingresar los servicios realizados" />
            <Select
                id="service"
                name="service"
                onChange={handleServiceSelect}
                className="w-full border rounded-md p-2"
            >
                <option value="">Selecciona un servicio</option>
                {filteredServices.map(service => (
                    <option key={service.id_Product} value={service.id_Product}>{service.Name}</option>
                ))}
            </Select>
        </div>
    );
};

export default AcordeonServicios;