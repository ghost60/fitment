import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Pagination } from "antd";
import { Link } from "react-router-dom";
import { caseDate } from "../../data/case";

export default function Case() {
  const [pagingNum, setPagingNum] = useState(1);
  const [data, setDate] = useState(caseDate.slice(0, 10));

  function onChange(page) {
    setPagingNum(page);
    setDate(caseDate.slice(10 * (page - 1), 10 * (page - 1) + 10));
  }
  return (
    <>
      <Header />
      <section className="mt-16">
        <img
          src="https://www-guilingzi-com.oss-cn-beijing.aliyuncs.com/wp-content/themes/module/images/banner.jpg"
          alt="banner"
        />
      </section>
      <section className="flex flex-col items-center mb-12">
        <span className="text-2xl font-medium my-14">客户案例</span>
        <ul className="flex flex-wrap px-2 sm:px-8 lg:px-28 mb-8">
          {data.map((item, index) => {
            return (
              <li className="py-2 w-1/2 sm:w-1/4" key={index + item.id}>
                <div className="mx-2 border border-gray-200 border-solid shadow hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                  <Link to={{ pathname: `/caseDetails/${item.id}` }}>
                    <img src={item.Image} alt={item.title} />
                  </Link>
                  <h3 className="flex justify-center items-center my-4">
                    <Link className="text-xs md:text-sm" to={`/caseDetails/${item.id}`}>
                      {item.title}
                    </Link>
                  </h3>
                </div>
              </li>
            );
          })}
        </ul>
        <Pagination
          pageSize={10}
          current={pagingNum}
          total={caseDate.length}
          onChange={onChange}
        />
      </section>
      <Footer />
    </>
  );
}
