import React from 'react';
import { Sidebar } from 'flowbite-react';
import { HiUser, HiShoppingBag, HiInbox } from 'react-icons/hi';

const SideBarAdmin = () => {


  
  return (
    <div className="h-screen">
      <Sidebar aria-label="Sidebar with logo branding example" className="h-full custom-bg-color">
        <div className="flex flex-col h-full justify-between pt-24"> 
          <Sidebar.Items>
            <Sidebar.ItemGroup className="flex flex-col gap-4">
              <Sidebar.Item href="/admin/manage_employees" icon={HiUser}>
                Gestion de Empleados
              </Sidebar.Item>
              <Sidebar.Item href="/admin/manage_clients" icon={HiShoppingBag}>
                Gestion de Clientes
              </Sidebar.Item>
              <Sidebar.Item href="/admin/manage_products" icon={HiInbox}>
                Gestion de Productos/Servicios
              </Sidebar.Item>
              <Sidebar.Item href="/admin/manage_orders" icon={HiInbox}>
                Gestion de Ordenes de Servicio
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </Sidebar>
    </div>
  );
}
export default SideBarAdmin;