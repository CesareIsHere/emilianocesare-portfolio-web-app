import React, { useState } from "react";
import { Layout, Menu, theme } from "antd";
import { Outlet, Link } from "react-router-dom";
import { WarningOutlined } from "@ant-design/icons";

export default function AppLayout(props: any) {
  // const [collapsed, setCollapsed] = useState(false);
  return (
    // header "the page at the moment is under development"
    <Layout className="h-full w-screen">
      <div className="bg-red-600 h-8 justify-center items-center flex flex-row">
        <WarningOutlined style={{ fontSize: "28px", color: "white" }} />
        <p className="text-white font-semibold m-2">
          Warning, this page is under development
        </p>
        <WarningOutlined style={{ fontSize: "28px", color: "white" }} />
      </div>

      {/* <Layout.Sider
    //     collapsible
    //     collapsed={collapsed}
    //     onCollapse={() => setCollapsed(!collapsed)}
    //   >
    //     <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
    //       <Menu.Item key="1">nav 1</Menu.Item>
    //       <Menu.Item key="2">nav 2</Menu.Item>
    //       <Menu.Item key="3">nav 3</Menu.Item>
    //     </Menu>
    //   </Layout.Sider> */}
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
}
