import React from "react";
import DrawerCategory from "../../components/drawer/DrawerCategory";
import TableInventary from "../../components/table_inventary/TableInventary";
import SearchBar from "../../components/searchbar/SearchBar";

const Inventario = () => {
  return (
    <div>
      <div className="flex justify-center mb-4">
        <SearchBar className="w-1/2" />
      </div>
      <DrawerCategory />
      <TableInventary />
    </div>
  );
};

export default Inventario;
