import React from "react";
import logo from "../assets/newLogo.svg";
import instalogo from "../assets/instalogo.png";

const Footer = () => {
  return (
    <div className="mt-20 flex h-[470px] w-full flex-col items-center bg-[#FCFCFC] px-12 xl:h-[596px]">
      <div className="mt-20 flex flex-col items-center justify-between md:mt-24 md:flex-row md:justify-start md:gap-4 lg:mt-28 xl:mt-36 xl:gap-10">
        <img
          src={logo}
          alt=""
          className="md:w-[260px] lg:w-[450px] xl:w-[560px]"
        />
        <img
          onClick={() => {
            window.location.replace(
              "https://www.instagram.com/tomomi_nagamori_art?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            );
          }}
          src={instalogo}
          alt=""
          className="mt-[70px] aspect-square w-9.5 cursor-pointer md:mt-0 md:w-12 lg:w-16 xl:w-20"
        />
      </div>
      <p className="mt-[83px] text-center text-xs leading-[20px] md:mt-22 lg:mt-24 xl:mt-[106px] xl:text-xl">
        ご予約・お問い合わせは、LINEより受け付けております。ご不明点等ございましたら、お気軽にご連絡くださいませ。
      </p>
      <p className="mt-9 mb-12 text-center text-[8px] tracking-[0.099em] md:mt-10 lg:mt-11 xl:mt-12 xl:mb-25 xl:text-xl">
        Copyright © Nagamori art makeup All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
