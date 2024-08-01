import { Button, Drawer } from "flowbite-react";
import { useState } from "react";
import { HiBars2, HiSquaresPlus } from "react-icons/hi2";
import { FaOilCan } from "react-icons/fa";
import { MdCarCrash } from "react-icons/md";
import { FaCarOn } from "react-icons/fa6";
import { FaBottleDroplet } from "react-icons/fa6";
import { GiBrandyBottle } from "react-icons/gi";
import { GiCarWheel } from "react-icons/gi";
import { IoFilterCircleOutline } from "react-icons/io5";
import { FaCar } from 'react-icons/fa';


const DrawerCategory = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center m-4 space-y-4">
        <h2 className="text-slate-600 text-2xl md:text-3xl font-bold tracking-wider text-center mb-4">Inventario de Productos</h2>
       
        {!isOpen && (
          <Button onClick={handleOpen} className="bg-red-600 hover:bg-red-700 text-white">
            Mostrar Categorías
          </Button>
        )}
      </div>
      <Drawer
        edge
        open={isOpen}
        onClose={handleClose}
        position="bottom"
        anchor="right"
        style={{
          width: '100%',
          maxWidth: '1472px',
          height: '50vh', 
          margin: 'auto',
          bottom: isOpen ? '0' : '-75vh', 
          transition: 'bottom 0.3s ease', 
        }}
      >
        <Drawer.Header
          closeIcon={HiBars2}
          title="Mostrar Categorías"
          titleIcon={HiSquaresPlus}
          onClick={handleClose}
          className="cursor-pointer px-4 pt-4 hover:bg-gray-50 dark:hover:bg-gray-700"
        />
        <Drawer.Items className="p-4 overflow-y-auto">
          <div className="grid grid-cols-2 gap-4 p-4 lg:grid-cols-4">
            <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                <FaCarOn size="1.5em" />
              </div>
              <div className="text-center font-medium text-gray-500 dark:text-gray-400">
                Plumillas
              </div>
            </div>
            <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                <FaBottleDroplet size="1.5em" />
              </div>
              <div className="text-center font-medium text-gray-500 dark:text-gray-400">
                Aceites
              </div>
            </div>
            <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                <FaCarOn color="gray" size="1.5em" />
              </div>
              <div className="text-center font-medium text-gray-500 dark:text-gray-400">
                Bombillos
              </div>
            </div>
            <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                <GiBrandyBottle color="gray" size="1.5em" />
              </div>
              <div className="text-center font-medium text-gray-500 dark:text-gray-400">
                Aditivos
              </div>
            </div>
            <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                <FaOilCan color="gray" size="1.5em" />
              </div>
              <div className="text-center font-medium text-gray-500 dark:text-gray-400">
                Filtro de Aire
              </div>
            </div>
            <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                <MdCarCrash color="gray" size="1.5em" />
              </div>
              <div className="text-center font-medium text-gray-500 dark:text-gray-400">
                Filtro de Aceite
              </div>
            </div>
            <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                <GiCarWheel color="gray" size="1.5em" />
              </div>
              <div className="text-center font-medium text-gray-500 dark:text-gray-400">
                Filtro de Cabina
              </div>
            </div>
            <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                <IoFilterCircleOutline color="gray" size="1.5em" />
              </div>
              <div className="text-center font-medium text-gray-500 dark:text-gray-400">
                Filtro de Combustible
              </div>
            </div>
            <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                <FaBottleDroplet size="1.5em" />
              </div>
              <div className="text-center font-medium text-gray-500 dark:text-gray-400">
                Pastilla de Frenos
              </div>
            </div>
            <div className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                <FaBottleDroplet size="1.5em" />
              </div>
              <div className="text-center font-medium text-gray-500 dark:text-gray-400">
                Servicio
              </div>
            </div>
          </div>
          
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default DrawerCategory;