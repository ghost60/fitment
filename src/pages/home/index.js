import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { BackTop } from 'antd';
import "../../styles/home.scss";

export default function Home() {
  return (
    <>
      <Header />
      <section className="mt-16">
        <div className="w-full relative">
          <div className="absolute w-full h-full bg-black bg-opacity-30"></div>
          <img
            className="w-full"
            src="https://www-guilingzi-com.oss-cn-beijing.aliyuncs.com/wp-content/uploads/2020/12/11-1.jpg"
            alt=""
          />
          <p className="absolute top-1/2 left-2 md:left-1/4 text-white text-md md:text-2xl">
            我们是设计师、造梦者、梦想者 也是您的用户体验专家
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center">
        <span className="text-2xl font-medium my-14">我们擅长的专业领域</span>
        <div className="w-4/5">
          <ul className="flex flex-wrap justify-center md:px-10">
            <li className="flex flex-col items-center justify-center bg-blue-500 h-56 md:w-1/4 w-1/2 p-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <p className="text-white text-xl font-medium my-1.5">前期咨询</p>
              <p className="text-white text-center">
                以用户为中心解答业主各类设计相关疑问
              </p>
            </li>
            <li className="flex flex-col items-center justify-center bg-red-500 h-56 md:w-1/4 w-1/2 p-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <p className="text-white text-xl font-medium my-1.5">硬装设计</p>
              <p className="text-white text-center">
                提供全套硬装设计和采购方案
              </p>
            </li>
            <li className="flex flex-col items-center justify-center bg-green-500 h-56 md:w-1/4 w-1/2 p-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <p className="text-white text-xl font-medium my-1.5">施工跟进</p>
              <p className="text-white text-center">
                全程跟进施工过程，并负责技术交底
              </p>
            </li>
            <li className="flex flex-col items-center justify-center bg-purple-500 h-56 md:w-1/4 w-1/2 p-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <p className="text-white text-xl font-medium my-1.5">软装搭配</p>
              <p className="text-white text-center">
                硬装完工后全程负责软装搭配
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col items-center">
        <span className="text-2xl font-medium my-14">精品客户案例</span>
        <div className="w-4/5">
          <ul className="flex flex-wrap justify-center md:px-10">
            <li>
              <a className="relative block" href="/">
                <img
                  className="h-60 w-full md:w-80 object-cover"
                  src="https://www-guilingzi-com.oss-cn-beijing.aliyuncs.com/wp-content/uploads/2020/12/11-2.jpg"
                  alt="四口之家"
                />
                <div className="absolute bottom-0 left-0 w-full h-10 text-center">
                  <h3 className="text-white font-medium">四口之家</h3>
                </div>
              </a>
            </li>
            <li>
              <a className="relative block" href="/">
                <img
                  className="h-60 w-full md:w-80 object-cover"
                  src="https://www-guilingzi-com.oss-cn-beijing.aliyuncs.com/wp-content/uploads/2020/12/11-2.jpg"
                  alt="四口之家"
                />
                <div className="absolute bottom-0 left-0 w-full h-10 text-center">
                  <h3 className="text-white font-medium">四口之家</h3>
                </div>
              </a>
            </li>
            <li>
              <a className="relative block" href="/">
                <img
                  className="h-60 w-full md:w-80 object-cover"
                  src="https://www-guilingzi-com.oss-cn-beijing.aliyuncs.com/wp-content/uploads/2020/12/11-2.jpg"
                  alt="四口之家"
                />
                <div className="absolute bottom-0 left-0 w-full h-10 text-center">
                  <h3 className="text-white font-medium">四口之家</h3>
                </div>
              </a>
            </li>
            <li>
              <a className="relative block" href="/">
                <img
                  className="h-60 w-full md:w-80 object-cover"
                  src="https://www-guilingzi-com.oss-cn-beijing.aliyuncs.com/wp-content/uploads/2020/12/11-2.jpg"
                  alt="四口之家"
                />
                <div className="absolute bottom-0 left-0 w-full h-10 text-center">
                  <h3 className="text-white font-medium">四口之家</h3>
                </div>
              </a>
            </li>
            <li>
              <a className="relative block" href="/">
                <img
                  className="h-60 w-full md:w-80 object-cover"
                  src="https://www-guilingzi-com.oss-cn-beijing.aliyuncs.com/wp-content/uploads/2020/12/11-2.jpg"
                  alt="四口之家"
                />
                <div className="absolute bottom-0 left-0 w-full h-10 text-center">
                  <h3 className="text-white font-medium">四口之家</h3>
                </div>
              </a>
            </li>
            <li>
              <a className="relative block" href="/">
                <img
                  className="h-60 w-full md:w-80 object-cover"
                  src="https://www-guilingzi-com.oss-cn-beijing.aliyuncs.com/wp-content/uploads/2020/12/11-2.jpg"
                  alt="四口之家"
                />
                <div className="absolute bottom-0 left-0 w-full h-10 text-center">
                  <h3 className="text-white font-medium">四口之家</h3>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="relative section-3 flex flex-col items-center mt-14 text-white">
        <div className="absolute w-full h-full bg-gray-500 bg-opacity-20"></div>
        <span className="text-2xl font-medium my-12">服务流程</span>
        <span>优化用户体验，创造品牌影响力，提升公司价值</span>
        <div class="modules-image-inner image-align-center">
          <img
            src="https://www-guilingzi-com.oss-cn-beijing.aliyuncs.com/wp-content/uploads/2018/02/step-1.png"
            alt="服务流程"
          />
        </div>
        <div className="w-4/5 mb-10">
          <p className="my-4">
            <span>
              第一步，客户咨询,设计师收集客户信息和需求，解答相关问题，业主有不懂的问题都可以问，前期可以在网上或者是微信沟通，我们会解答业主的所有问题，如果觉得合适可以到我们工作室详细沟通.
            </span>
          </p>
          <p className="my-4">
            <span>
              <strong>1</strong>
              、第二步，设计师和业主交换意见，综合意见，给客户面对面的沟通，交纳设计定金。
            </span>
          </p>
          <p className="my-4">
            <span>
              <strong>2</strong>、第三步，实际测量，设计师完成初步平面设计图。
            </span>
          </p>
          <p className="my-4">
            <span>
              <strong>3</strong>
              、第四步，客户确定平面方案，签订设计合同，支付第二笔设计款。
            </span>
          </p>
          <p className="my-4 text-green-500">
            <span>
              <strong>
                <a href="/flow">更多</a>
              </strong>
            </span>
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center bg-green-300 pb-14">
        <span className="text-2xl font-medium my-14">设计心得</span>
        <div className="w-4/5">
          <ul className="flex flex-wrap">
            <li className="flex w-full md:w-1/2 px-2 my-2">
              <div className="flex flex-col mr-2 w-32">
                <span className="text-5xl">27</span>
                <span className="whitespace-nowrap">2020-02</span>
              </div>
              <div>
                <a
                  className="long-title-text text-xl font-medium"
                  href="/"
                  title="室内设计如何搭配颜色，只需简单了解四个角色，小白也能搭配出美屋"
                >
                  室内设计如何搭配颜色，只需简单了解四个角色，小白也能搭配出美屋
                </a>
                <p className="long-content-text text-sm mt-1">
                  色彩搭配，其实没有大家想的那么难，而且在很多人看来还非常的简单，因为每个人都具有天生的审美感，所以在装修的时候，很多业主可以依靠自己的直觉或者是知识，或者是借鉴一些其他事物搭配出精美的装修案例，当然也有很多业主的搭配是非常的失败的，主次不分，杂乱无章。经常有业主咨询我们如何搭配色彩，其实很简单，只要大家知道了四个基本点，就可以搭配出自己的美屋了。在一个空间里面所有的色彩一定是要有主次之分的，所以在室内装修设计里面，我们可以把整个空间色彩分成四个部分：背景色，主角色，配角色，点缀色，如果是在搭配的…
                </p>
              </div>
            </li>
            <li className="flex w-full md:w-1/2 px-2 my-2">
              <div className="flex flex-col mr-2 w-32">
                <span className="text-5xl">27</span>
                <span className="whitespace-nowrap">2020-02</span>
              </div>
              <div>
                <a
                  className="long-title-text text-xl font-medium"
                  href="/"
                  title="室内设计如何搭配颜色，只需简单了解四个角色，小白也能搭配出美屋"
                >
                  室内设计如何搭配颜色，只需简单了解四个角色，小白也能搭配出美屋
                </a>
                <p className="long-content-text text-sm mt-1">
                  色彩搭配，其实没有大家想的那么难，而且在很多人看来还非常的简单，因为每个人都具有天生的审美感，所以在装修的时候，很多业主可以依靠自己的直觉或者是知识，或者是借鉴一些其他事物搭配出精美的装修案例，当然也有很多业主的搭配是非常的失败的，主次不分，杂乱无章。经常有业主咨询我们如何搭配色彩，其实很简单，只要大家知道了四个基本点，就可以搭配出自己的美屋了。在一个空间里面所有的色彩一定是要有主次之分的，所以在室内装修设计里面，我们可以把整个空间色彩分成四个部分：背景色，主角色，配角色，点缀色，如果是在搭配的…
                </p>
              </div>
            </li>
            <li className="flex w-full md:w-1/2 px-2 my-2">
              <div className="flex flex-col mr-2 w-32">
                <span className="text-5xl">27</span>
                <span className="whitespace-nowrap">2020-02</span>
              </div>
              <div>
                <a
                  className="long-title-text text-xl font-medium"
                  href="/"
                  title="室内设计如何搭配颜色，只需简单了解四个角色，小白也能搭配出美屋"
                >
                  室内设计如何搭配颜色，只需简单了解四个角色，小白也能搭配出美屋
                </a>
                <p className="long-content-text text-sm mt-1">
                  色彩搭配，其实没有大家想的那么难，而且在很多人看来还非常的简单，因为每个人都具有天生的审美感，所以在装修的时候，很多业主可以依靠自己的直觉或者是知识，或者是借鉴一些其他事物搭配出精美的装修案例，当然也有很多业主的搭配是非常的失败的，主次不分，杂乱无章。经常有业主咨询我们如何搭配色彩，其实很简单，只要大家知道了四个基本点，就可以搭配出自己的美屋了。在一个空间里面所有的色彩一定是要有主次之分的，所以在室内装修设计里面，我们可以把整个空间色彩分成四个部分：背景色，主角色，配角色，点缀色，如果是在搭配的…
                </p>
              </div>
            </li>
            <li className="flex w-full md:w-1/2 px-2 my-2">
              <div className="flex flex-col mr-2 w-32">
                <span className="text-5xl">27</span>
                <span className="whitespace-nowrap">2020-02</span>
              </div>
              <div>
                <a
                  className="long-title-text text-xl font-medium"
                  href="/"
                  title="室内设计如何搭配颜色，只需简单了解四个角色，小白也能搭配出美屋"
                >
                  室内设计如何搭配颜色，只需简单了解四个角色，小白也能搭配出美屋
                </a>
                <p className="long-content-text text-sm mt-1">
                  色彩搭配，其实没有大家想的那么难，而且在很多人看来还非常的简单，因为每个人都具有天生的审美感，所以在装修的时候，很多业主可以依靠自己的直觉或者是知识，或者是借鉴一些其他事物搭配出精美的装修案例，当然也有很多业主的搭配是非常的失败的，主次不分，杂乱无章。经常有业主咨询我们如何搭配色彩，其实很简单，只要大家知道了四个基本点，就可以搭配出自己的美屋了。在一个空间里面所有的色彩一定是要有主次之分的，所以在室内装修设计里面，我们可以把整个空间色彩分成四个部分：背景色，主角色，配角色，点缀色，如果是在搭配的…
                </p>
              </div>
            </li>
          </ul>
          <div class="module-more">
            <a
              class="btn btn-round btn-dark more-link"
              href="http://www.guilingzi.com/category/news"
            >
              查看更多
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center mb-12">
        <span className="text-xl md:text-2xl font-medium mt-14 text-center">我们已为超过200个楼盘的客户提供室内设计方案</span>
        <span className="text-xl md:text-2xl font-medium my-2 text-center">累计超过1000个设计案例</span>
      </section>
      <BackTop />
      <Footer />
    </>
  );
}
