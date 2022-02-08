import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import wechart from "../../image/common/wechart.jpg";
import map from "../../image/contact/map.png";
import "../../styles/contact.scss";

export default function Contact() {
  return (
    <>
      <Header />
      <section className="mt-16">
        <div className="w-full relative">
          <div className="absolute w-full h-full bg-black bg-opacity-30"></div>
          <div className="absolute w-full h-full flex flex-col justify-center items-center text-white">
            <p className="text-xl md:text-2xl font-medium">联系我们</p>
            <p className="text-md md:text-lg text-center">
              若对我们的服务有兴趣，欢迎联系我们，我们将竭诚为您服务
            </p>
          </div>
          <img
            className="w-full"
            src="https://www-guilingzi-com.oss-cn-beijing.aliyuncs.com/wp-content/uploads/2018/02/cot-1.jpg"
            alt=""
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-center items-center  my-28 md:my-14">
        <img className="image" src={wechart} alt="" />
        <div className="flex flex-col md:ml-20">
          <span>客服电话：xxx-xxx-xxx</span>
          <span>电子邮箱：xxx@qq.com</span>
          <span>公司地址：汉中市</span>
          <span>周一至周五 9：30：00~18：30 </span>
        </div>
      </section>
      <img src={map} alt="" />
      <Footer />
    </>
  );
}
