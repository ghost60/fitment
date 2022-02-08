import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import TextRender from "../../components/textRender";
import { useParams } from "react-router-dom";
import { BackTop } from "antd";
import { ReactComponent as Text } from "../../image/icon/nav-txl.svg";
import { ReactComponent as Date } from "../../image/icon/date.svg";
import { caseDate } from "../../data/case";

export default function CaseDetails() {
  const params = useParams();
  const data = caseDate.filter((Item) => Item.id === params.id)[0];
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
        <span className="text-2xl font-medium mt-14">{data.title}</span>
        <div className="flex items-center mt-4 mb-12">
          <span className="flex mr-12 justify-center items-center">
            <Text width={20} height={20}/>
            {data.subTitle}
          </span>
          <span className="flex justify-center items-center">
            <Date className="mb-1" width={20} height={22} />
            {data.date}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center text-lg w-4/5">
          <TextRender data={data}/>
        </div>
      </section>
      <BackTop />
      <Footer />
    </>
  );
}
