import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Case() {
  return (
    <>
      <Header />
      <img
        src="https://www-guilingzi-com.oss-cn-beijing.aliyuncs.com/wp-content/themes/module/images/banner.jpg"
        alt="banner"
      />
      <section className="flex flex-col items-center mb-12">
        <span className="text-2xl font-medium my-14">客户案例</span>
        <ul className="flex flex-wrap px-2 sm:px-8 lg:px-28">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
            return (
              <li className="py-2 w-1/2 sm:w-1/4">
                <div className="mx-2 border border-gray-200 border-solid shadow hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  <a href="http://www.guilingzi.com/2762.html">
                    <img
                      src="https://www-guilingzi-com.oss-cn-beijing.aliyuncs.com/wp-content/uploads/2020/02/3-1-480x320.jpg"
                      alt="50平loft公寓北欧混搭设计"
                    />
                  </a>
                  <h3 className="flex justify-center items-center my-4">
                    <a className="text-sm" href="/">
                      50平loft公寓北欧混搭设计
                    </a>
                  </h3>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <Footer />
    </>
  );
}
