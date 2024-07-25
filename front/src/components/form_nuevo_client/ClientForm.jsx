import { Label, TextInput, Select, Radio } from "flowbite-react";

const ClienteForm = ({ handleChange }) => (
  <>
    <div>
      <Label htmlFor="Name" value="Nombre" className="mb-2 block" />
      <TextInput id="Name" type="text" placeholder="Ingrese nombre" required onChange={handleChange} />
    </div>
    <div>
      <Label htmlFor="CC_NIT" value="Cédula" className="mb-2 block" />
      <TextInput id="CC_NIT" type="text" placeholder="Ingrese cédula" required onChange={handleChange} />
    </div>
    <div>
      <Label htmlFor="Phone" value="Teléfono" className="mb-2 block" />
      <TextInput id="Phone" type="number" placeholder="Ingrese teléfono" required onChange={handleChange} />
    </div>
    <div>
      <Label htmlFor="Mail" value="E-Mail" className="mb-2 block" />
      <TextInput id="Mail" type="email" placeholder="Ingrese email" required onChange={handleChange} />
    </div>
    <div>
      <Label htmlFor="Address" value="Dirección" className="mb-2 block" />
      <TextInput id="Address" type="text" placeholder="Ingrese dirección" required onChange={handleChange} />
    </div>
    <div>
      <Label htmlFor="Brand" value="Marca" className="mb-2 block" />
      <TextInput id="Brand" type="text" placeholder="Ingrese marca del vehículo" required onChange={handleChange} />
    </div>
    <div>
      <Label htmlFor="LicensePlate" value="Placa" className="mb-2 block" />
      <TextInput id="LicensePlate" type="text" placeholder="Ingrese matrícula" required onChange={handleChange} />
    </div>
    <div>
      <Label htmlFor="Motor" value="Motor" className="mb-2 block" />
      <Select id="Motor" required onChange={handleChange}>
        <option>1.3</option>
        <option>1.5</option>
        <option>1.6</option>
        <option>2.0</option>
      </Select>
    </div>
    <div>
      <Label htmlFor="KM" value="Km actual" className="mb-2 block" />
      <TextInput id="KM" type="number" placeholder="Ingrese km" required onChange={handleChange} />
    </div>
    <div>
      <Label htmlFor="Model" value="Modelo" className="mb-2 block" />
      <TextInput id="Model" type="text" placeholder="Ingrese modelo" required onChange={handleChange} />
    </div>
    <div>
      <Label value="Tipo de combustible" className="mb-2 block" />
      <div className="flex items-center space-x-4">
        <div>
          <Radio id="FuelType" name="FuelType" value="Diesel" onChange={handleChange} />
          <Label htmlFor="Diesel" className="ml-2">Diésel</Label>
        </div>
        <div>
          <Radio id="FuelType" name="FuelType" value="Gasolina" onChange={handleChange} />
          <Label htmlFor="Gasolina" className="ml-2">Gasolina</Label>
        </div>
        <div>
          <Radio id="FuelType" name="FuelType" value="Hibrido" onChange={handleChange} />
          <Label htmlFor="Hibrido" className="ml-2">Híbrido</Label>
        </div>
      </div>
    </div>
  </>
);

export default ClienteForm;