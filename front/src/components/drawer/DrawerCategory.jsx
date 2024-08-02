import { Button, Drawer } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiBars2, HiSquaresPlus } from "react-icons/hi2";
import { FaOilCan, FaCarOn, FaBottleDroplet } from "react-icons/fa6";
import { GiBrandyBottle, GiCarWheel } from "react-icons/gi";
import { IoFilterCircleOutline } from "react-icons/io5";
import { MdCarCrash } from "react-icons/md";
import { getProductsByCategory, getAllCategories, getAllProducts } from "../../redux/actions/actions";

const categoryNames = [
    "PLUMILLAS", "ACEITES", "BOMBILLOS", "ADITIVOS", 
    "FILTRO DE AIRE", "FILTRO DE ACEITE", "FILTRO DE CABINA", 
    "FILTRO DE COMBUSTIBLE", "PASTILLAS DE FRENOS", "SERVICIO"
];

const DrawerCategory = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const handleCategoryClick = async (categoryName) => {
        try {
            const category = categories.find(cat => cat.Name === categoryName);
            if (category) {
                await dispatch(getProductsByCategory(category.id_Category));
            } else {
                console.error("No se encontró la categoría con el nombre proporcionado.");
            }
        } catch (error) {
            console.error("Error fetching category or products:", error);
        }
    };

    const handleShowAllProducts = () => {
        dispatch(getAllProducts());
    };

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
                        <div
                            onClick={handleShowAllProducts}
                            className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                        >
                            <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                               
                                <HiSquaresPlus size="1.5em" />
                            </div>
                            <div className="text-center font-medium text-gray-500 dark:text-gray-400">
                                Todas las Categorías
                            </div>
                        </div>
                        {categoryNames.map(categoryName => (
                            <div
                                key={categoryName}
                                onClick={() => handleCategoryClick(categoryName)}
                                className="cursor-pointer rounded-lg bg-gray-50 p-4 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
                            >
                                <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                                  
                                    {categoryName === "ACEITES" && <FaBottleDroplet size="1.5em" />}
                                    {categoryName === "PLUMILLAS" && <FaCarOn size="1.5em" />}
                                    {categoryName === "BOMBILLOS" && <FaCarOn color="gray" size="1.5em" />}
                                    {categoryName === "ADITIVOS" && <GiBrandyBottle color="gray" size="1.5em" />}
                                    {categoryName === "FILTRO DE AIRE" && <FaOilCan color="gray" size="1.5em" />}
                                    {categoryName === "FILTRO DE ACEITE" && <MdCarCrash color="gray" size="1.5em" />}
                                    {categoryName === "FILTRO DE CABINA" && <GiCarWheel color="gray" size="1.5em" />}
                                    {categoryName === "FILTRO DE COMBUSTIBLE" && <IoFilterCircleOutline color="gray" size="1.5em" />}
                                    {categoryName === "PASTILLAS DE FRENOS" && <FaBottleDroplet size="1.5em" />}
                                    {categoryName === "SERVICIO" && <FaBottleDroplet size="1.5em" />}
                                </div>
                                <div className="text-center font-medium text-gray-500 dark:text-gray-400">
                                    {categoryName}
                                </div>
                            </div>
                        ))}
                    </div>
                </Drawer.Items>
            </Drawer>
        </>
    );
};

export default DrawerCategory;

