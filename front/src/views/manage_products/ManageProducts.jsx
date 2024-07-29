import DrawerCategory from "../../components/drawer/DrawerCategory";
import ModalCreateProduct from "../../components/modal_create_product/ModalCreateProduct";
import TableManageProducts from "../../components/table_manage_products/TableManageProducts";
import ModalCreateService from "../../components/modal_create_service/ModalCreateService";
import SearchBar from "../../components/searchbar/SearchBar";

const ManageProducts = () => {
  return (
    <>
      <div className="flex space-x-4">
        <ModalCreateProduct />
        <ModalCreateService />
      </div>
      <div className="flex items-start">
        <SearchBar className="w-1/4" />
      </div>
      <DrawerCategory />
      <TableManageProducts />
    </>
  );
};

export default ManageProducts;

