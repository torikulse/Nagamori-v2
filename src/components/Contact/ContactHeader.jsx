import React from "react";
import Step from "./Step";

export default function ContactHeader(step) {
  return (
    <div>
      <h1 className="sikita text-center text-5xl md:text-[54px] lg:text-[60px] xl:text-[68px]">
        Contact
      </h1>
      <div className="mx-auto my-4 h-[1.5px] w-[152px] bg-[#707070] md:my-4.5 lg:my-5 xl:my-6"></div>
      <p className="text-center text-2xl lg:text-[25px]">お問合せ</p>

      <div className="my-12 flex w-full items-center justify-center xl:mt-[94px] xl:mb-[66px]">
        <Step step={1} text="ご入力" current={step} />
        <div className="mb-7 h-1 w-15 bg-[#D9D9D9] md:w-30"></div>
        <Step step={2} text="ご確認"  current={step} />
        <div className="mb-7 h-1 w-15 bg-[#D9D9D9] md:w-30"></div>
        <Step step={3} text="送信"  current={step} />
      </div>

      <p className="text-left leading-9 font-light md:text-center md:text-lg md:leading-12 lg:text-xl lg:font-normal xl:text-[25px]">
        下記の入力フォームに必須事項をご入力の上、
        <br />
        「入力内容を確認する」ボタンを押してください。
        <br />
        ※WEBでのご予約は受け付けておりません。
      </p>
    </div>
  );
}
