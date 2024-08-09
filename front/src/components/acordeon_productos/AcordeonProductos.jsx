import React, { useEffect, useState } from "react";
import { Select, Label } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getProductsByCategory } from "../../redux/actions/actions";

const AcordeonProductos = ({ onAddProduct }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const categories = useSelector(state => state.categories);
  const [selectedCategoryId, setSelectedCategoryId] = useState(""); // Usar "" para permitir el reset
  const [selectedProductId, setSelectedProductId] = useState(""); // Estado para el producto seleccionado

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    setSelectedCategoryId(categoryId);
    setSelectedProductId(""); // Resetear el producto seleccionado al cambiar la categoría
    dispatch(getProductsByCategory(categoryId));
  };

  const handleProductSelect = (e) => {
    const productId = e.target.value;
    setSelectedProductId(productId); // Actualizar el estado del producto seleccionado
    const selectedProduct = products.find(product => product.id_Product === productId);
    if (selectedProduct) {
      console.log("Producto seleccionado:", selectedProduct); 
      onAddProduct(selectedProduct);
      handleReset(); // Llamar a handleReset después de seleccionar un producto
    }
  };

  const handleReset = () => {
    setSelectedCategoryId(""); // Resetear la categoría
    setSelectedProductId(""); // Resetear el producto
  };

  const filteredProducts = selectedCategoryId 
    ? products.filter(product => product.id_Category === selectedCategoryId) 
    : [];

  // Filtrar categorías para excluir "servicio"
  const filteredCategories = categories.filter(category => category.Name.toLowerCase() !== "servicio");

  return (
    <div className="mb-4">
      <Label htmlFor="category" value="Seleccione la categoria de producto utilizado" />
      <Select 
        id="category" 
        name="category" 
        onChange={handleCategoryChange} 
        className="w-full border rounded-md p-2" 
        value={selectedCategoryId} // Vincular al estado
      >
        <option value="">Selecciona una categoría</option>
        {filteredCategories.map(category => (
          <option key={category.id_Category} value={category.id_Category}>{category.Name}</option>
        ))}
      </Select>

      <Label htmlFor="product" value="Productos disponibles:  "  className="mt-4" />
      <Select 
        id="product" 
        name="product" 
        onChange={handleProductSelect} 
        className="w-full border rounded-md p-2" 
        disabled={!selectedCategoryId} 
        value={selectedProductId} // Vincular al estado
      >
        <option value="">Selecciona un producto</option>
        {filteredProducts.map(product => (
          <option key={product.id_Product} value={product.id_Product}>{product.Name}</option>
        ))}
      </Select>
    </div>
  );
};

export default AcordeonProductos;