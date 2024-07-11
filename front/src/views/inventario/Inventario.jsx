import DrawerCategory from "../../components/drawer/DrawerCategory";
import TableInventary from "../../components/table_inventary/TableInventary";
import SearchBar from "../../components/searchbar/SearchBar";


const Inventario = () => {
  return (
    <div>
      <SearchBar/>
      <DrawerCategory></DrawerCategory>
      <TableInventary></TableInventary>
    </div>
  );
};

export default Inventario;
