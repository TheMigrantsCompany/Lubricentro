import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/actions";
import { Table, Button } from "flowbite-react";
import { FaChevronLeft, FaChevronRight, FaStepBackward, FaStepForward } from "react-icons/fa";
import SearchBar from "../searchbar/SearchBar";

const TableInventary = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    if (!products.length) return <div>No products available.</div>;

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(products.length / itemsPerPage);

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
            <SearchBar className="w-1/4" />
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Product name</Table.HeadCell>
                        <Table.HeadCell>Price</Table.HeadCell>
                        <Table.HeadCell>Stock</Table.HeadCell>
                        <Table.HeadCell>Reference</Table.HeadCell>
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
                                <Table.Cell>${product.Price_Cl || '0'}</Table.Cell>
                                <Table.Cell>{product.Quantity || 'N/A'} u.</Table.Cell>
                                <Table.Cell>{product.Reference || 'N/A'}</Table.Cell>
                                <Table.Cell>
                                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                        Edit
                                    </a>
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
            </div>
        </div>
    );
};

export default TableInventary;
