import DrawerCategory from "../../components/drawer/DrawerCategory";
import ModalCreateProduct from "../../components/modal_create_product/ModalCreateProduct";
import TableManageProducts from "../../components/table_manage_products/TableManageProducts";

const ManageProducts = () => {
  return (
    <>
      <ModalCreateProduct></ModalCreateProduct>
      <DrawerCategory/>
      <TableManageProducts/>
    </>
  );
};

export default ManageProducts;
