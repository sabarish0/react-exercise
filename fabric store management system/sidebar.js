import React, { useState } from "react";
import {MdFilterAlt} from "react-icons/md";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";
import {BiUser} from "react-icons/bi";
import { GrUserWorker} from "react-icons/gr";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle
} from "react-icons/fi";
import {MdAccountCircle} from 'react-icons/md';
import "react-pro-sidebar/dist/css/styles.css";
import "./style.css";

const Sidebar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <p>Centuary Proceesing Mills</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<FiHome />}>
              <a href='/admin'>Home</a>
              </MenuItem>
              <MenuItem icon={<MdAccountCircle/>}><a href='/customer'>Customers</a></MenuItem>
              <MenuItem icon={<GrUserWorker/>}><a href='/employee'>Employee</a></MenuItem>
              <MenuItem icon={<BiUser/>}><a href='/user'>Users</a></MenuItem>
              <MenuItem icon={<GrUserWorker/>}><a href='/employeewages'>Employee <br/>wages</a></MenuItem>
              <MenuItem icon={<GrUserWorker/>}><a href='/adminproducts'>Products</a></MenuItem>   
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}><a href='/'>Logout</a></MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;