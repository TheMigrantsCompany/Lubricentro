import React from "react";
import { Accordion,Checkbox,Label, } from "flowbite-react"

const AcordeonProductos = ({ onAddProduct }) => {
  const products = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 15 },
    { id: 3, name: 'Producto 3', price: 20 },
    { id: 4, name: 'Producto 4', price: 25 },
    { id: 5, name: 'Producto 5', price: 30 },
  ];

  const handleProductSelect = (product, event) => {
    if (event.target.checked) {
      onAddProduct({ ...product, quantity: 1 });
    } else {
      onAddProduct(product, 'remove');
    }
  };

  return (
    <Accordion collapseAll className="mt-5 block">
      <Accordion.Panel>
        <Accordion.Title>Producto</Accordion.Title>
        <Accordion.Content>
          <div className="flex max-w-md flex-col gap-4" id="checkbox">
            {products.map((product) => (
              <div key={product.id} className="flex items-center gap-2">
                <Checkbox id={`product-${product.id}`} onChange={(e) => handleProductSelect(product, e)} />
                <Label htmlFor={`product-${product.id}`} className="flex">
                  {product.name}
                </Label>
              </div>
            ))}
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default AcordeonProductos;