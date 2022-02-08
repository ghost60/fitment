import React from "react";
import "../../styles/footer.scss";

export default function Footer() {
  return (
    <footer className="footer flex flex-col justify-center items-center py-4">
      <div className="text-white">
        <a className="mx-1.5" href="/" aria-current="page">
          首页
        </a>
        |
        <a className="mx-1.5" href="/abstract">
          工作室简介
        </a>
        |
        <a className="mx-1.5" href="/case">
          客户案例
        </a>
        |
        <a className="mx-1.5" href="/news">
          装修知识
        </a>
        |
        <a className="mx-1.5" href="/contact">
          联系我们
        </a>
      </div>
      <p className="mt-2 text-white text-sm">
        Copyright © 2022 版权所有 Powered by{" "}
        <a href="/" target="_blank">
          李天瑞工作室
        </a>
      </p>
    </footer>
  );
}
