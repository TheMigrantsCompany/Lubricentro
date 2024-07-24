"use client";
"use client";
import { useState } from "react";
import { Button, Label, TextInput, Select, Card, Radio } from "flowbite-react";

// Componente principal para el formulario de nuevo cliente
const FormNuevoCliente = () => {
  // Estado local para determinar qué tipo de formulario mostrar
  const [formType, setFormType] = useState("cliente");

  // Función para renderizar el formulario del cliente
  const renderClienteForm = () => (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="nombre" value="Nombre" className="mb-2 block" />
        <TextInput
          id="nombre"
          type="text"
          placeholder="Ingrese nombre"
          required
        />
      </div>
      <div>
        <Label htmlFor="cedula" value="Cédula" className="mb-2 block" />
        <TextInput
          id="cedula"
          type="text"
          placeholder="Ingrese cédula"
          required
        />
      </div>
      <div>
        <Label htmlFor="teléfono" value="Teléfono" className="mb-2 block" />
        <TextInput
          id="teléfono"
          type="number"
          placeholder="Ingrese teléfono"
          required
        />
      </div>
      <div>
        <Label htmlFor="email" value="E-Mail" className="mb-2 block" />
        <TextInput
          id="email"
          type="email"
          placeholder="Ingrese email"
          required
        />
      </div>
      <div>
        <Label htmlFor="direccion" value="Dirección" className="mb-2 block" />
        <TextInput
          id="direccion"
          type="text"
          placeholder="Ingrese dirección"
          required
        />
      </div>
      <div>
        <Label htmlFor="marca" value="Marca" className="mb-2 block" />
        <Select id="marca" required>
          <option>Toyota</option>
          <option>Chevrolet</option>
          <option>Audi</option>
          <option>BMW</option>
        </Select>
      </div>
      <div>
        <Label htmlFor="matricula" value="Placa" className="mb-2 block" />
        <TextInput
          id="matricula"
          type="text"
          placeholder="Ingrese matrícula"
          required
        />
      </div>
      <div>
        <Label htmlFor="motor" value="Motor" className="mb-2 block" />
        <Select id="motor" required>
          <option>1.3</option>
          <option>1.5</option>
          <option>1.6</option>
          <option>2.0</option>
        </Select>
      </div>
      <div>
        <Label htmlFor="km" value="Km actual" className="mb-2 block" />
        <TextInput
          id="km"
          type="number"
          placeholder="Ingrese km"
          required
        />
      </div>
      <div>
        <Label htmlFor="modelo" value="Modelo" className="mb-2 block" />
        <TextInput
          id="modelo"
          type="text"
          placeholder="Ingrese modelo"
          required
        />
      </div>
      <div>
        <Label htmlFor="año" value="Año" className="mb-2 block" />
        <TextInput
          id="año"
          type="number"
          placeholder="Ingrese año"
          required
        />
      </div>
      <div>
        <Label value="Tipo de combustible" className="mb-2 block" />
        <div className="flex items-center space-x-4">
          <div>
            <Radio id="diesel" name="combustible" value="diesel" />
            <Label htmlFor="diesel" className="ml-2">Diésel</Label>
          </div>
          <div>
            <Radio id="gasolina" name="combustible" value="gasolina" />
            <Label htmlFor="gasolina" className="ml-2">Gasolina</Label>
          </div>
          <div>
            <Radio id="hibrido" name="combustible" value="hibrido" />
            <Label htmlFor="hibrido" className="ml-2">Híbrido</Label>
          </div>
        </div>
      </div>
    </form>
  );

  // Función para renderizar el formulario del taller
  const renderTallerForm = () => (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="nombre" value="Nombre" className="mb-2 block" />
        <TextInput
          id="nombre"
          type="text"
          placeholder="Ingrese nombre"
          required
        />
      </div>
      <div>
        <Label htmlFor="cedula" value="Cédula/NIT" className="mb-2 block" />
        <TextInput
          id="cedula"
          type="text"
          placeholder="Ingrese cédula/NIT"
          required
        />
      </div>
      <div>
        <Label htmlFor="teléfono" value="Teléfono" className="mb-2 block" />
        <TextInput
          id="teléfono"
          type="number"
          placeholder="Ingrese teléfono"
          required
        />
      </div>
      <div>
        <Label htmlFor="email" value="E-Mail" className="mb-2 block" />
        <TextInput
          id="email"
          type="email"
          placeholder="Ingrese email"
          required
        />
      </div>
      <div>
        <Label htmlFor="direccion" value="Dirección" className="mb-2 block" />
        <TextInput
          id="direccion"
          type="text"
          placeholder="Ingrese dirección"
          required
        />
      </div>
    </form>
  );

  // Renderizado del componente principal
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 flex-col">
      <h1 className="text-slate-600 m-5 text-2xl md:text-3xl font-bold tracking-wider">
        Nuevo Cliente
      </h1>
      <div className="flex space-x-4 mb-4">
        {/* Botones para alternar entre formulario de cliente y taller */}
        <Button onClick={() => setFormType("cliente")} className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white">Cliente</Button>
        <Button onClick={() => setFormType("taller")} className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white">Taller</Button>
      </div>
      <Card className="w-full max-w-4xl p-5">
        {/* Renderizado condicional del formulario según el estado formType */}
        {formType === "cliente" ? renderClienteForm() : renderTallerForm()}
        <div className="flex justify-center mt-2">
          {/* Botón de submit */}
          <Button type="submit" className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white">Submit</Button>
        </div>
      </Card>
    </div>
  );
};

export default FormNuevoCliente;