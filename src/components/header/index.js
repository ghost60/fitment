import React from "react";
import classnames from 'classnames';
import {
  Link,
  useMatch,
  useResolvedPath
} from 'react-router-dom';

export default function Header() {
  return (
    <header className="h-20 flex flex-row justify-between items-center p-12">
      <div><span className="text-2xl">李天瑞工作室</span></div>
      <nav>
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
      </header>
  )
}

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
      <Link
        className={classnames("text-lg hover:text-green-500", {"text-green-500" : match})}
        to={to}
        {...props}
      >
      {children}
      </Link>
  )
}
