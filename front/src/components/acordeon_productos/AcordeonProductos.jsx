import { Accordion,Checkbox,Label, } from "flowbite-react"

const AcordeonProductos = () => {
  return (
    <Accordion collapseAll className="mt-5 block">
          <Accordion.Panel>
            <Accordion.Title>Producto</Accordion.Title>
            <Accordion.Content>
              <div className="flex max-w-md flex-col gap-4" id="checkbox">
                <div className="flex items-center gap-2">
                  <Checkbox id="accept"  />
                  <Label htmlFor="accept" className="flex">
                    Producto 1
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="accept"  />
                  <Label htmlFor="accept" className="flex">
                    Producto 2
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="accept"  />
                  <Label htmlFor="accept" className="flex">
                    Producto 3
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="accept" />
                  <Label htmlFor="accept" className="flex">
                    Producto 4
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="accept"  />
                  <Label htmlFor="accept" className="flex">
                    Producto 5
                  </Label>
                </div>
               
              </div>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
  )
}

export default AcordeonProductos