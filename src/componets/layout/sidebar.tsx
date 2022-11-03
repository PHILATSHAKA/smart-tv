import React from "react";
import { Layout } from "antd";
import "./sidebar.css";

interface ParentCompProps {
  menu?: React.ReactNode;
}

const SideBar = ({ menu }: ParentCompProps) => {
  return (
    <Layout.Sider
      className="sidebar"
      breakpoint={"lg"}
      theme="light"
      collapsedWidth={0}
      trigger={null}
    >
      {menu}
    </Layout.Sider>
  );
};
export default SideBar;
