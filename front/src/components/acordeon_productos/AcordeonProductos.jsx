import React, { useEffect, useState } from "react";
import { Select, Label } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getProductsByCategory } from "../../redux/actions/actions";

const AcordeonProductos = ({ onAddProduct }) => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const categories = useSelector(state => state.categories);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  
    useEffect(() => {
      dispatch(getAllCategories());
    }, [dispatch]);
  
    const handleCategoryChange = (e) => {
      const categoryId = e.target.value;
      setSelectedCategoryId(categoryId);
      dispatch(getProductsByCategory(categoryId));
    };
  
    const handleProductSelect = (e) => {
      const selectedProduct = products.find(product => product.id_Product === e.target.value);
      if (selectedProduct) {
        console.log("Producto seleccionado:", selectedProduct); 
        onAddProduct(selectedProduct);
      }
    };
  
    const filteredProducts = selectedCategoryId 
      ? products.filter(product => product.id_Category === selectedCategoryId) 
      : [];
  
      return (
        <div className="mb-4">
          <Label htmlFor="category" value="Categorías" />
          <Select id="category" name="category" onChange={handleCategoryChange} className="w-full border rounded-md p-2">
            <option value="">Selecciona una categoría</option>
            {categories.map(category => (
              <option key={category.id_Category} value={category.id_Category}>{category.Name}</option>
            ))}
          </Select>
    
          <Label htmlFor="product" value="Productos" className="mt-4" />
          <Select id="product" name="product" onChange={handleProductSelect} className="w-full border rounded-md p-2" disabled={!selectedCategoryId}>
            <option value="">Selecciona un producto</option>
            {filteredProducts.map(product => (
              <option key={product.id_Product} value={product.id_Product}>{product.Name}</option>
            ))}
          </Select>
        </div>
      );
    };
  
  export default AcordeonProductos;