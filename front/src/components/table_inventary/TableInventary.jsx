import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, updateProduct } from "../../redux/actions/actions";
import { Table, Button, Modal, TextInput, Label } from "flowbite-react";
import { FaChevronLeft, FaChevronRight, FaStepBackward, FaStepForward } from "react-icons/fa";

const TableInventary = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const category = useSelector((state) => state.category);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const productsPerPage = 15;

    useEffect(() => {
        if (!category) {
            dispatch(getAllProducts());
        }
    }, [dispatch, category]);

    useEffect(() => {
        setCurrentPage(1); 
    }, [products]);

    const handleEditClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const handleSaveChanges = () => {
        if (selectedProduct) {
            dispatch(updateProduct(selectedProduct));
        }
        handleModalClose();
    };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(products.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const maxPageButtons = 5;
    const pageButtons = [];

    for (let i = 1; i <= totalPages; i++) {
        pageButtons.push(i);
    }

    const renderPageButtons = () => {
        if (totalPages <= maxPageButtons) {
            return pageButtons;
        }

        const startPage = Math.max(currentPage - Math.floor(maxPageButtons / 2), 1);
        const endPage = Math.min(startPage + maxPageButtons - 1, totalPages);

        return pageButtons.slice(startPage - 1, endPage);
    };

    return (
        <div>
            <Table>
                <Table.Head>
                    <Table.HeadCell>Nombre </Table.HeadCell>
                    <Table.HeadCell>Stock</Table.HeadCell>
                    <Table.HeadCell>Precio</Table.HeadCell>
                    <Table.HeadCell>Referencia</Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {currentProducts.map((product) => (
                        <Table.Row key={product.id_Product} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {product.Name || 'No Name'}
                            </Table.Cell>
                            <Table.Cell>{product.Quantity || 'N/A'} u.</Table.Cell>
                            <Table.Cell>${product.Price_Cl || '0'}</Table.Cell>
                            <Table.Cell>{product.Reference || 'N/A'}</Table.Cell>
                            <Table.Cell>
                                <button onClick={() => handleEditClick(product)} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                    Edit
                                </button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
            <div className="flex justify-center items-center mt-4">
                <Button
                    onClick={() => handlePageChange(1)}
                    className="mx-1"
                    disabled={currentPage === 1}
                >
                    <FaStepBackward />
                </Button>
                <Button
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="mx-1"
                    disabled={currentPage === 1}
                >
                    <FaChevronLeft />
                </Button>
                {renderPageButtons().map(pageNumber => (
                    <Button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`mx-1 ${currentPage === pageNumber ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                    >
                        {pageNumber}
                    </Button>
                ))}
                <Button
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="mx-1"
                    disabled={currentPage === totalPages}
                >
                    <FaChevronRight />
                </Button>
                <Button
                    onClick={() => handlePageChange(totalPages)}
                    className="mx-1"
                    disabled={currentPage === totalPages}
                >
                    <FaStepForward />
                </Button>
            </div>

            {selectedProduct && (
                <Modal show={isModalOpen} onClose={handleModalClose}>
                    <Modal.Header>Editar </Modal.Header>
                    <Modal.Body>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="productName">Nombre </Label>
                                <TextInput
                                    id="productName"
                                    type="text"
                                    value={selectedProduct.Name}
                                    onChange={(e) => setSelectedProduct({ ...selectedProduct, Name: e.target.value })}
                                />
                            </div>
                            <div>
                                <Label htmlFor="productStock">Stock</Label>
                                <TextInput
                                    id="productStock"
                                    type="number"
                                    value={selectedProduct.Quantity}
                                    onChange={(e) => setSelectedProduct({ ...selectedProduct, Quantity: parseInt(e.target.value, 10) || '' })}
                                />
                            </div>
                            <div>
                                <Label htmlFor="productPrice">Precio</Label>
                                <TextInput
                                    id="productPrice"
                                    type="text"
                                    value={selectedProduct.Price_Cl}
                                    onChange={(e) => setSelectedProduct({ ...selectedProduct, Price_Cl: parseFloat(e.target.value) || '' })}
                                />
                            </div>
                            <div>
                                <Label htmlFor="productReference">Referencia</Label>
                                <TextInput
                                    id="productReference"
                                    type="text"
                                    value={selectedProduct.Reference}
                                    onChange={(e) => setSelectedProduct({ ...selectedProduct, Reference: e.target.value })}
                                />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleSaveChanges}>Guardar Cambios</Button>
                        <Button color="gray" onClick={handleModalClose}>Cancelar</Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
};

export default TableInventary;

