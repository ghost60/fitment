import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Abstract() {
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
        <span className="text-2xl font-medium my-14">李天瑞设计室简介</span>
        <div className="w-4/5 subpixel-antialiased">
          <p className="text-lg font-light mb-8">
            官方网站：www.xxx.com
            <br />
            业务咨询：18888888888
            <br />
            QQ客服：xxxxxxx
            <br />
            微信号：xxx （注释：电话，QQ都可以直接加微信）
          </p>
          <p className="text-gray-700 leading-7">
            李天瑞设计成立于2013年初，五年来服务过上百家客户，目前已是汉中本地最具影响力的设计工作室之一。我们的所有设计都是根据业主需求所做的原创案例，秉承真实，设计完全收费，帮助业主控制预算规划，真正做到设计用实景来对话，施工用细节来诠释。
            <br />
            我们的设计除了图纸意外，我们还会出一份施工清单，包括立项，以及工程量，业主可以根据清单自己选择施工队伍。這样节约了其他施工队伍拿着图纸报价立项的时间，同时也上杜绝施工队伍自己立项导致的漏项。而且业主比价价格则是在同一平台比较，而市场大部分业主比较的价格其实完全没有任何参考性，因为所有项目以及工程量都不一样的价格比较是没有任何意义的。
            <br />
            <br />
          </p>
          <p className="text-red-500 leading-8">
            完全设计取费，对灰色收入说不！物以类聚，人以群分。
            <br />
            设计出现错误，我们没有任何借口不承担责任。
            <br />
            我们拒绝没有创意的设计。
            <br />
            对于您家的设计，我们再次的成功才是真正新的成功。
            <br />
            我们公司不求大规模，只是做工作室，只为更专业。
            <br />
            团队每月每人限制接3单，只为出更精品的作品。
            <br />
            我们拒绝平庸和肤浅的设计。
            <br />
            我们反对迎合客户的设计方式。
            <br />
            绝不偷项漏项，因为那是设计态度的最大罪过。
            <br />
            我们拒绝无用的墙顶面的设计材料堆砌。
            <br />
            舍弃是一种智慧，我们只为优质客户服务。
            <br />
            因为热爱，所以坚持：因为坚持，所以用心。
            <br />
            我们不只是为了赚钱，我们还有设计梦。
            <br />
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
