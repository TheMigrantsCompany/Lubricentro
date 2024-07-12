import React from 'react';
import { Sidebar } from 'flowbite-react';
import { HiUser, HiShoppingBag, HiInbox } from 'react-icons/hi';

const SideBarEmployee = () => {
  return (
    <div className="h-screen">
      <Sidebar aria-label="Sidebar with logo branding example" className="h-full bg-gray-400">
        <div className="flex flex-col h-full justify-between pt-24"> 
          <Sidebar.Items>
            <Sidebar.ItemGroup className="flex flex-col gap-4">
              <Sidebar.Item href="/employee/create_user" icon={HiUser}>
               Gestion de Empleados
              </Sidebar.Item>
              <Sidebar.Item href="/employee/create_order" icon={HiShoppingBag}>
                Gestion de Clientes
              </Sidebar.Item>
              <Sidebar.Item href="/employee/inventary" icon={HiInbox}>
                Gestion de Productos/Servicios
              </Sidebar.Item>
              <Sidebar.Item href="/employee/inventary" icon={HiInbox}>
                Gestion de Ordenes de Servicio
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </Sidebar>
    </div>
  );
};

export default SideBarEmployee;