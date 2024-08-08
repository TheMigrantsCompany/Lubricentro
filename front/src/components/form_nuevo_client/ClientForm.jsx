import { Label, TextInput, Select, Radio } from "flowbite-react";

const ClienteForm = ({ handleChange, formData }) => (
  <>
    <div>
      <Label htmlFor="Name" value="Nombre" className="mb-2 block" />
      <TextInput id="Name" type="text" placeholder="Ingrese nombre" required onChange={handleChange} value={formData.Name} />
    </div>
    <div>
      <Label htmlFor="CC_NIT" value="Cédula" className="mb-2 block" />
      <TextInput id="CC_NIT" type="text" placeholder="Ingrese cédula" required onChange={handleChange} value={formData.CC_NIT} />
    </div>
    <div>
      <Label htmlFor="Phone" value="Teléfono" className="mb-2 block" />
      <TextInput id="Phone" type="number" placeholder="Ingrese teléfono" required onChange={handleChange} value={formData.Phone} />
    </div>
    <div>
      <Label htmlFor="Mail" value="E-Mail" className="mb-2 block" />
      <TextInput id="Mail" type="email" placeholder="Ingrese email" required onChange={handleChange} value={formData.Mail} />
    </div>
    <div>
      <Label htmlFor="Address" value="Dirección" className="mb-2 block" />
      <TextInput id="Address" type="text" placeholder="Ingrese dirección" required onChange={handleChange} value={formData.Address} />
    </div>
    <div>
      <Label htmlFor="Brand" value="Marca" className="mb-2 block" />
      <TextInput id="Brand" type="text" placeholder="Ingrese marca del vehículo" required onChange={handleChange} value={formData.Brand} />
    </div>
    <div>
      <Label htmlFor="LicensePlate" value="Placa" className="mb-2 block" />
      <TextInput id="LicensePlate" type="text" placeholder="Ingrese matrícula" required onChange={handleChange} value={formData.LicensePlate} />
    </div>
    <div>
      <Label htmlFor="Motor" value="Motor" className="mb-2 block" />
      <Select id="Motor" required onChange={handleChange} value={formData.Motor}>
        <option>1.3</option>
        <option>1.5</option>
        <option>1.6</option>
        <option>2.0</option>
      </Select>
    </div>
    <div>
      <Label htmlFor="KM" value="Km actual" className="mb-2 block" />
      <TextInput id="KM" type="number" placeholder="Ingrese km" required onChange={handleChange} value={formData.KM} />
    </div>
    <div>
      <Label htmlFor="Model" value="Modelo" className="mb-2 block" />
      <TextInput id="Model" type="text" placeholder="Ingrese modelo" required onChange={handleChange} value={formData.Model} />
    </div>
    <div>
      <Label value="Tipo de combustible" className="mb-2 block" />
      <div className="flex items-center space-x-4">
        <div>
          <Radio id="FuelType" name="FuelType" value="Diesel" onChange={handleChange} checked={formData.FuelType === "Diesel"} />
          <Label htmlFor="Diesel" className="ml-2">Diésel</Label>
        </div>
        <div>
          <Radio id="FuelType" name="FuelType" value="Gasolina" onChange={handleChange} checked={formData.FuelType === "Gasolina"} />
          <Label htmlFor="Gasolina" className="ml-2">Gasolina</Label>
        </div>
        <div>
          <Radio id="FuelType" name="FuelType" value="Hibrido" onChange={handleChange} checked={formData.FuelType === "Hibrido"} />
          <Label htmlFor="Hibrido" className="ml-2">Híbrido</Label>
        </div>
      </div>
    </div>
  </>
);

export default ClienteForm;