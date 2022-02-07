import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <>
      <Header/>
      <section>
        <div className="w-full relative">
          <div className="absolute w-full h-full bg-black bg-opacity-30"></div>
          <img className="w-full"
               src="https://www-guilingzi-com.oss-cn-beijing.aliyuncs.com/wp-content/uploads/2020/12/11-1.jpg"/>
          <p className="absolute top-1/2 left-1/4 text-white text-2xl">我们是设计师、造梦者、梦想者 也是您的用户体验专家</p>
        </div>
      </section>
      <section>
        <div className="flex justify-center item-center my-12">
          <span className="text-2xl font-medium">我们擅长的专业领域</span>
        </div>
        <div>
          <ul className="flex flex-wrap justify-center px-10">
            <li className="flex flex-col items-center justify-center bg-blue-500 h-52 w-52 p-3">
              <p className="text-white text-xl font-medium my-1.5">前期咨询</p>
              <p className="text-white">以用户为中心解答业主各类设计相关疑问</p>
            </li>
            <li className="flex flex-col items-center justify-center bg-red-500 h-52 w-52 p-3">
              <p className="text-white text-xl font-medium my-1.5">硬装设计</p>
              <p className="text-white">提供全套硬装设计方案</p>
            </li>
            <li className="flex flex-col items-center justify-center bg-green-500 h-52 w-52 p-3">
              <p className="text-white text-xl font-medium my-1.5">施工跟进</p>
              <p className="text-white">全程跟进施工过程，并负责技术交底</p>
            </li>
            <li className="flex flex-col items-center justify-center bg-purple-500 h-52 w-52 p-3">
              <p className="text-white text-xl font-medium my-1.5">软装搭配</p>
              <p className="text-white">硬装完工后全程负责软装搭配</p>
            </li>
          </ul>
        </div>
      </section>
      <Footer/>
    </>
  );
}