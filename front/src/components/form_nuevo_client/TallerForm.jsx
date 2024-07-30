import { Label, TextInput } from "flowbite-react";

const TallerForm = ({ handleChange }) => (
  <>
    <div>
      <Label htmlFor="Name" value="Nombre" className="mb-2 block" />
      <TextInput id="Name" type="text" placeholder="Ingrese nombre" required onChange={handleChange} />
    </div>
    <div>
      <Label htmlFor="CC_NIT" value="Cédula/NIT" className="mb-2 block" />
      <TextInput id="CC_NIT" type="text" placeholder="Ingrese cédula/NIT" required onChange={handleChange} />
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
  </>
);

export default TallerForm;