import React from "react";
import { Image } from "antd";

export default function TextRender({data, textClass, imageClass}) {
  return (
    <div className="flex flex-col justify-center items-center text-lg w-4/5">
          {data.content.map((item) => {
            if (item.type === "text") {
              return <div className={textClass}><div dangerouslySetInnerHTML={{ __html: item.src }} /></div>;
            }
            if (item.type === "image") {
              return <Image className={imageClass} src={item.src} />;
            }
            return '走丢了~'
          })}
        </div>
  );
}
