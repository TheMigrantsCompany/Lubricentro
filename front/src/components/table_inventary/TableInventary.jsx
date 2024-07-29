import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../../redux/actions/actions';
import { Table, Button } from 'flowbite-react';
import SearchBar from '../searchbar/SearchBar';

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

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
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
        <div className="flex justify-between items-center mt-4">
          <Button disabled={currentPage === 1} onClick={handlePreviousPage}>
            Previous
          </Button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <Button disabled={currentPage === totalPages} onClick={handleNextPage}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TableInventary;
