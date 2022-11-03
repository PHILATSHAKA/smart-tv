import React, { ReactElement, ReactNode, useState } from "react";
import { Drawer, Button, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./navBar.css";

interface ParentCompProps {
  menu?: React.ReactNode;
}

const NavBar = ({ menu }: ParentCompProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <nav className="navbar">
      <Button
        className="menu"
        type="primary"
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
      />
      <Drawer
        title="Topics"
        placement="left"
        onClose={() => setVisible(false)}
        open={visible}
      >
        {menu}
      </Drawer>
      <a href="/">{/* <img src={logo} className="logo" alt="logo" /> */}</a>
    </nav>
  );
};
export default NavBar;
