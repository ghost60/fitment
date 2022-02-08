import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Pagination } from "antd";
import { Link } from "react-router-dom";
import { newsDate } from "../../data/news";
import { ReactComponent as Text } from "../../image/icon/nav-txl.svg";
import { ReactComponent as Date } from "../../image/icon/date.svg";
import "../../styles/news.scss";

export default function News() {
  const [pagingNum, setPagingNum] = useState(1);
  const [data, setDate] = useState(newsDate.slice(0, 10));

  function onChange(page) {
    setPagingNum(page);
    setDate(newsDate.slice(10 * (page - 1), 10 * (page - 1) + 10));
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
        <span className="text-2xl font-medium my-14">装修知识</span>
        <ul className="flex flex-col px-2 sm:px-8 lg:px-28 mb-8 divide-y divide-gray-400">
          {data.map((item, index) => {
            return (
              <li
                className="flex py-4 w-full"
                key={index + item.id}
              >
                <div className="w-60 h-32 hidden sm:block ">
                  <Link to={{ pathname: `/caseDetails/${item.id}` }}>
                    <img
                      className="object-cover"
                      src={item.Image}
                      alt={item.title}
                    />
                  </Link>
                </div>
                <div className="ml-4">
                  <Link
                    className="text-xl md:text-xl long-title-text font-medium"
                    to={`/caseDetails/${item.id}`}
                  >
                    {item.title}
                  </Link>
                  <span className="mt-1 long-content-text text-gray-500">
                    <div
                      dangerouslySetInnerHTML={{ __html: item.content[0].src }}
                    />
                  </span>
                  <div className="flex items-start mt-1 text-gray-500">
                    <span className="flex mr-12 justify-center items-center">
                      <Text className="hidden sm:block" width={20} height={20} />
                      {item.subTitle}
                    </span>
                    <span className="flex justify-center items-center">
                      <Date className="hidden sm:block  mb-1" width={20} height={22} />
                      {item.date}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <Pagination
          pageSize={10}
          current={pagingNum}
          total={newsDate.length}
          onChange={onChange}
        />
      </section>
      <Footer />
    </>
  );
}
