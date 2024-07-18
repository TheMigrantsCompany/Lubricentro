import React from "react";
import { Accordion,Checkbox,Label, } from "flowbite-react"

const AcordeonProductos = ({ onAddProduct }) => {
  const categories = [
    {
      name: "Plumillas",
      products: [
        { id: 1, name: "Plumilla A", price: 10 },
        { id: 2, name: "Plumilla B", price: 15 },
      ],
    },
    {
      name: "Refrigerantes",
      products: [
        { id: 3, name: "Refrigerante A", price: 20 },
        { id: 4, name: "Refrigerante B", price: 25 },
      ],
    },
    {
      name: "Belleza Automotriz",
      products: [
        { id: 5, name: "Producto Belleza A", price: 30 },
        { id: 6, name: "Producto Belleza B", price: 35 },
      ],
    },
    {
      name: "Aditivos",
      products: [
        { id: 7, name: "Aditivo A", price: 40 },
        { id: 8, name: "Aditivo B", price: 45 },
      ],
    },
    {
      name: "Lubricantes",
      products: [
        { id: 9, name: "Lubricante A", price: 50 },
        { id: 10, name: "Lubricante B", price: 55 },
      ],
    },
    {
      name: "Sistema de Frenos",
      products: [
        { id: 11, name: "Freno A", price: 60 },
        { id: 12, name: "Freno B", price: 65 },
      ],
    },
    {
      name: "Filtros",
      products: [
        { id: 13, name: "Filtro A", price: 70 },
        { id: 14, name: "Filtro B", price: 75 },
      ],
    },
  ];

  const handleProductSelect = (product, event) => {
    if (event.target.checked) {
      onAddProduct({ ...product, quantity: 1 });
    } else {
      onAddProduct(product, "remove"); // Aquí pasamos la acción "remove"
    }
  };

  return (
    <Accordion collapseAll className="mt-2 block text-sm">
      {categories.map((category, index) => (
        <Accordion.Panel key={index} className="mb-1">
          <Accordion.Title className="py-2">{category.name}</Accordion.Title>
          <Accordion.Content className="p-2">
            <div className="flex flex-col gap-2" id="checkbox">
              {category.products.map((product) => (
                <div key={product.id} className="flex items-center gap-2">
                  <Checkbox
                    id={`product-${product.id}`}
                    onChange={(e) => handleProductSelect(product, e)}
                    className="h-4 w-4"
                  />
                  <Label htmlFor={`product-${product.id}`} className="text-sm">
                    {product.name}
                  </Label>
                </div>
              ))}
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      ))}
    </Accordion>
  );
};

export default AcordeonProductos;