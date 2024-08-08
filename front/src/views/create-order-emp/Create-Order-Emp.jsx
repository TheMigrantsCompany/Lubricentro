import React, { useState, useEffect } from 'react';
import FormOrdenServicio from "../../components/form_orden_de_servicio/FormOrdenServicio";
import OrderSummary from "../../components/order-summary/OrderSummary";
import AcordeonProductos from "../../components/acordeon_productos/AcordeonProductos";
import AcordeonServicios from "../../components/acordeon_servicios/AcordeonServicios";
import { useFirebase } from '../../firebase/config';
import { useAuthState } from "react-firebase-hooks/auth";

const CreateOrderEmp = () => {

  //Asociacion de usuario logueado en firebase (LUBRICADOR) con la orden de servicios

  // Configuración de Firebase
  const { auth } = useFirebase(); // Obtiene la instancia de autenticación de Firebase
  const isAuthenticated = !!auth.currentUser; // Verifica si el usuario está autenticado
  const [user] = useAuthState(auth); // Hook para obtener el estado de autenticación del usuario
  const [userId, setUserId] = useState(null); // Estado para almacenar el ID del usuario autenticado

  // useEffect para obtener el ID del usuario basado en el email
  useEffect(() => {
    // Console log para verificar el usuario logueado
    console.log("Usuario logueado LAU:", user);

    if (user && user.email) {
      console.log("Usuario logueado LAU:", user.email); // Muestra el correo electrónico del usuario logueado

      // Obtener el ID del usuario basado en el correo electrónico
      fetch('http://localhost:3001/users')
        .then(response => {
          console.log("Respuesta de la API:", response); // Verifica la respuesta de la API
          return response.json();
        })
        .then(data => {
          console.log("Datos obtenidos:", data); // Muestra los datos obtenidos de la API
          const matchingUser = data.find(u => u.Mail === user.email); // Cambia `mail` a `Mail`
          if (matchingUser) {
            setUserId(matchingUser.id_User);
            console.log("ID de usuario encontrado:", matchingUser.id_User); // Muestra el ID en la consola
          } else {
            console.log("No se encontró el usuario con el correo:", user.email); // Usuario no encontrado
          }
        })
        .catch(error => console.error('Error fetching users:', error));
    }
  }, [user]);


  // Estado para manejar datos del formulario
const [formData, setFormData] = useState({
  paymentMethod: "", // Método de pago
  warnings: "", // Advertencias o notas adicionales
});

// Estados para manejar productos y servicios seleccionados
const [selectedProducts, setSelectedProducts] = useState([]);
const [selectedServices, setSelectedServices] = useState([]);
const [id_Car, setId_Car] = useState(null); // Estado para almacenar el ID del automóvil seleccionado
const [clientType, setClientType] = useState('cliente'); // Estado para manejar el tipo de cliente ('cliente' o 'taller')

// Maneja los cambios en los campos del formulario
const handleInputChange = (e) => {
  const { id, value } = e.target;
  setFormData({ ...formData, [id]: value });
};

// Maneja la adición de productos seleccionados
const handleAddProduct = (product) => {
  setSelectedProducts((prevProducts) => {
    const existingProduct = prevProducts.find(p => p.id_Product === product.id_Product);
    if (existingProduct) {
      // Si el producto ya existe, incrementa la cantidad
      return prevProducts.map(p => 
        p.id_Product === product.id_Product ? { ...p, Quantity: p.Quantity + 1 } : p
      );
    } else {
      // Si el producto no existe, agrégalo con una cantidad inicial de 1
      return [...prevProducts, { ...product, Quantity: 1 }];
    }
  });
};

// Maneja la adición de servicios seleccionados
const handleAddService = (service) => {
  setSelectedServices([...selectedServices, service]);
};

// Maneja la eliminación de un producto o servicio de la selección
const handleRemoveItem = (item, type) => {
  if (type === "product") {
    setSelectedProducts(selectedProducts.filter(p => p.id_Product !== item.id_Product));
  } else if (type === "service") {
    setSelectedServices(selectedServices.filter(s => s.id_Product !== item.id_Product));
  }
};

// Maneja los cambios en la cantidad de un producto
const handleQuantityChange = (productId, newQuantity) => {
  if (newQuantity < 1) return; // Evita que la cantidad sea menor que 1
  setSelectedProducts((prevProducts) => 
    prevProducts.map(p => 
      p.id_Product === productId ? { ...p, Quantity: newQuantity } : p
    )
  );
};

// Calcula el total basado en los productos y servicios seleccionados y el tipo de cliente
const calculateTotal = () => {
  const productsTotal = selectedProducts.reduce(
    (total, product) => total + (clientType === 'taller' ? product.Price_Tl : product.Price_Cl) * product.Quantity,
    0
  );
  const servicesTotal = selectedServices.reduce(
    (total, service) => total + (clientType === 'taller' ? service.Price_Tl : service.Price_Cl),
    0
  );
  return productsTotal + servicesTotal;
};

// Maneja el envío del formulario
const handleSubmit = () => {
  if (!id_Car) {
    alert("Por favor, seleccione un automóvil."); // Verifica si se ha seleccionado un automóvil
    return;
  }

  const orderData = {
    id_Car,
    paymentMethod: formData.paymentMethod,
    items: [
      ...selectedProducts.map(product => ({
        productId: product.id_Product,
        quantity: product.Quantity,
        price: clientType === 'taller' ? product.Price_Tl : product.Price_Cl
      })),
      ...selectedServices.map(service => ({
        productId: service.id_Product,
        quantity: 1,
        price: clientType === 'taller' ? service.Price_Tl : service.Price_Cl
      }))
    ],
    warnings: formData.warnings
  };

  console.log("Formulario enviado: ", orderData);
  // Aquí iría la lógica para enviar la orden al backend
};

return (
  <div className="flex justify-center items-start min-h-screen bg-gray-100 p-5">
    <div className="w-full max-w-6xl">
      <h1 className="text-slate-600 m-5 text-2xl md:text-3xl font-bold tracking-wider text-center">
        Crear Orden de Servicio
      </h1>
      <div className="flex justify-center gap-10">
        <div className="w-1/2">
          {/* Componente para el formulario de orden de servicio */}
          <FormOrdenServicio
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="w-1/2">
          {/* Componentes para seleccionar productos y servicios */}
          <AcordeonProductos onAddProduct={handleAddProduct} />
          <AcordeonServicios onAddService={handleAddService} />
        </div>
      </div>
      {/* Componente para mostrar el resumen de la orden */}
      <OrderSummary
        paymentMethod={formData.paymentMethod}
        selectedProducts={selectedProducts}
        selectedServices={selectedServices}
        warnings={formData.warnings}
        onRemoveItem={handleRemoveItem}
        onQuantityChange={handleQuantityChange}
        calculateTotal={calculateTotal}
        handleSubmit={handleSubmit}
        id_Car={id_Car}
        setClientType={setClientType} // Pasar función para cambiar tipo de cliente
      />
    </div>
  </div>
);
};

export default CreateOrderEmp;