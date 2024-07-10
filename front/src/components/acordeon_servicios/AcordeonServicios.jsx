import { Accordion,Checkbox,Label, } from "flowbite-react"


const AcordeonServicios = () => {
  return (
    <Accordion collapseAll className="mt-5 block">
          <Accordion.Panel>
            <Accordion.Title>Servicio</Accordion.Title>
            <Accordion.Content>
              <div className="flex max-w-md flex-col gap-4" id="checkbox">
                <div className="flex items-center gap-2">
                  <Checkbox id="accept"  />
                  <Label htmlFor="accept" className="flex">
                    Servicio 1
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="accept"  />
                  <Label htmlFor="accept" className="flex">
                    Servicio 2
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="accept"  />
                  <Label htmlFor="accept" className="flex">
                    Servicio 3
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="accept" />
                  <Label htmlFor="accept" className="flex">
                    Servicio 4
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="accept"  />
                  <Label htmlFor="accept" className="flex">
                    Servicio 5
                  </Label>
                </div>
               
              </div>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
  )
}

export default AcordeonServicios