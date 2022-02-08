import React, { useState } from "react";
import classnames from "classnames";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Drawer } from "antd";
import { ReactComponent as NavBar } from "../../image/icon/nav.svg";
import "../../styles/header.scss";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <header className="fixed top-0 z-50 w-full h-16 flex flex-row justify-between items-center px-12 bg-white border border-solid border-gray-200 shadow">
      <div>
        <span className="text-2xl">李天瑞工作室</span>
      </div>
      <nav className="hidden sm:block">
        <ul className="flex flex-row">
          <li className="p-2 cursor-pointer">
            <CustomLink to="/">首页</CustomLink>
          </li>
          <li className="p-2 cursor-pointer">
            <CustomLink to="/abstract">简介</CustomLink>
          </li>
          <li className="p-2 cursor-pointer">
            <CustomLink to="/case">客户案例</CustomLink>
          </li>
          <li className="p-2 cursor-pointer">
            <CustomLink to="/contact">联系我们</CustomLink>
          </li>
        </ul>
      </nav>
      <NavBar className="nav-icon block sm:hidden" onClick={showDrawer} />
      <Drawer width="80%" placement="left" onClose={onClose} visible={visible}>
        <nav>
          <ul className="flex flex-col">
            <li className="p-2">
              <CustomLink to="/">首页</CustomLink>
            </li>
            <li className="p-2">
              <CustomLink to="/abstract">简介</CustomLink>
            </li>
            <li className="p-2">
              <CustomLink to="/case">客户案例</CustomLink>
            </li>
            <li className="p-2">
              <CustomLink to="/contact">联系我们</CustomLink>
            </li>
          </ul>
        </nav>
      </Drawer>
    </header>
  );
}

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      className={classnames("text-lg hover:text-green-500", {
        "text-green-500": match,
      })}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}
