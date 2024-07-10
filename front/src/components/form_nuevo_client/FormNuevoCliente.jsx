"use client";
import { Button, Label, TextInput, Select } from "flowbite-react";
import AcordeonServicios from "../acordeon_servicios/AcordeonServicios";

const FormNuevoCliente = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 flex-col">
      <h1 className="text-slate-400 m-5 text-base font-bold tracking-wider">
        Nuevo Cliente
      </h1>
      <form className="flex max-w-md flex-col gap-4 bg-white p-5 rounded-lg">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="nombre" value="Nombre" />
          </div>
          <TextInput
            id="nombre"
            type="text"
            placeholder="Ingrese nombre"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="cedula" value="Cédula" />
          </div>
          <TextInput
            id="cedula"
            type="text"
            placeholder="Ingrese cédula"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="cedula" value="Teléfono" />
          </div>
          <TextInput
            id="teléfono"
            type="number"
            placeholder="Ingrese teléfono"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="E-Mail" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="Ingrese email"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="nombre" value="Direccion" />
          </div>
          <TextInput
            id="nombre"
            type="text"
            placeholder="Ingrese direccion"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="marca" value="Marca" />
          </div>
          <Select id="marca" required>
            <option>Toyota</option>
            <option>Chevrolet</option>
            <option>Audi</option>
            <option>BMW</option>
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="matricula" value="Matricula" />
          </div>
          <TextInput
            id="nombre"
            type="text"
            placeholder="Ingrese matricula"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="marca" value="Motor" />
          </div>
          <Select id="motor" required>
            <option>1.3</option>
            <option>1.5</option>
            <option>1.6</option>
            <option>2.0</option>
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="km" value="Km actual" />
          </div>
          <TextInput
            id="km"
            type="number"
            placeholder="Ingrese km"
            required
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="Modelo" value="Modelo" />
          </div>
          <TextInput
            id="nombre"
            type="text"
            placeholder="Ingrese nombre"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="cedula" value="Teléfono" />
          </div>
          <TextInput
            id="Año"
            type="number"
            placeholder="Ingrese año"
            required
          />
        </div>
        <AcordeonServicios></AcordeonServicios>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default FormNuevoCliente;
