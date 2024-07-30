"use client";
"use client";
import { useState } from "react";
import {useDispatch} from "react-redux";
import { postCar } from "../../redux/actions/actions";
import { Button, Label, TextInput, Select, Card, Radio } from "flowbite-react";
import Swal from "sweetalert2";
import ClienteForm from "./ClientForm";
import TallerForm from "./TallerForm";
// Componente principal para el formulario de nuevo cliente
const FormNuevoCliente = () => {
  const [formType, setFormType] = useState("cliente");
  const [formData, setFormData] = useState({
    Name: "",
    Rol: false, // false for client, true for taller
    LicensePlate: "",
    CC_NIT: "",
    Phone: "",
    Mail: "",
    Address: "",
    Brand: "",
    FuelType: "",
    KM: "",
    Model: "",
    Active: true,
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { id, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const adjustedData = {
      ...formData,
      Rol: formType === "taller",
    };

    if (formType === "taller") {
      delete adjustedData.LicensePlate;
      delete adjustedData.Brand;
      delete adjustedData.FuelType;
      delete adjustedData.KM;
      delete adjustedData.Model;
    }

    try {
      await dispatch(postCar(adjustedData));

      Swal.fire({
        title: formType === "cliente" ? "Cliente creado con éxito" : "Taller creado con éxito",
        icon: "success",
        confirmButtonText: "OK",
      });

      setFormData({
        Name: "",
        LicensePlate: "",
        CC_NIT: "",
        Phone: "",
        Mail: "",
        Address: "",
        Brand: "",
        FuelType: "",
        KM: "",
        Model: "",
        Active: true,
      });
      setFormType("cliente");
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Hubo un error al crear el cliente/taller",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 flex-col">
      <h1 className="text-slate-600 m-5 text-2xl md:text-3xl font-bold tracking-wider">
        Nuevo Cliente
      </h1>
      <div className="flex space-x-4 mb-4">
        <Button onClick={() => setFormType("cliente")} className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white">
          Cliente
        </Button>
        <Button onClick={() => setFormType("taller")} className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white">
          Taller
        </Button>
      </div>
      <Card className="w-full max-w-4xl p-5">
        {formType === "cliente" ? (
          <ClienteForm handleChange={handleChange} />
        ) : (
          <TallerForm handleChange={handleChange} />
        )}
        <div className="flex justify-center mt-2">
          <Button type="submit" onClick={handleSubmit} className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white">
            Submit
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default FormNuevoCliente;