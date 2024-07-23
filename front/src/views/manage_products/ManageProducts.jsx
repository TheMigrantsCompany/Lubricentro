import DrawerCategory from "../../components/drawer/DrawerCategory";
import ModalCreateProduct from "../../components/modal_create_product/ModalCreateProduct";
import TableManageProducts from "../../components/table_manage_products/TableManageProducts";
import ModalCreateService from "../../components/modal_create_service/ModalCreateService";

const ManageProducts = () => {
  return (
    <>
      <ModalCreateProduct></ModalCreateProduct>
      <ModalCreateService/>
      <DrawerCategory/>
      <TableManageProducts/>
    </>
  );
};

export default ManageProducts;
