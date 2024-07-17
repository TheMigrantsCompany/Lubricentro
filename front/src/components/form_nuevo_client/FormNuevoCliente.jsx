"use client";
import { Button, Label, TextInput, Select, Card } from "flowbite-react";
import AcordeonServicios from "../acordeon_servicios/AcordeonServicios";

const FormNuevoCliente = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 flex-col">
      <h1 className="text-slate-600 m-5 text-2xl md:text-3xl font-bold tracking-wider">
        Nuevo Cliente
      </h1>
      <Card className="w-full max-w-4xl p-5">
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
            <Label htmlFor="matricula" value="Matrícula" className="mb-2 block" />
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
        </form>
        <AcordeonServicios />
        <div className="flex justify-center mt-2">
          <Button type="submit"  className="w-full md:w-auto">Submit</Button>
        </div>
      </Card>
    </div>
  );
};

export default FormNuevoCliente;