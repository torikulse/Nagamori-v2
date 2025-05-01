import React from "react";
import one from "../assets/menu1.png";
import two from "../assets/menu2.png";
import three from "../assets/menu3.png";
import four from "../assets/menu4.png";
import btn2 from "../assets/btn2.svg";
import btn3 from "../assets/btn3.svg";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import SideShape from "./SideShape";

const Menu = () => {
  return (
    <div className="relative md:mt-20 lg:mt-30 xl:mt-44">
      <div className="absolute top-0 right-0 hidden h-[950px] bg-[#B6BFBC] opacity-[12%] xl:block xl:w-[547px]"></div>
      <div className="large-con relative mt-24 flex flex-col items-center">
        <SectionHeader heading={"Menu"} subheading={"施術メニュー"} />
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 md:gap-8">
          <div>
            <div className="mb-1">
              <img src={one} alt="" />
            </div>
            <p className="s-card-heading">眉アートメイク</p>
            <p className="s-card-subheading">￥ 100,000~</p>
          </div>
          <div>
            <div className="mb-1">
              <img src={two} alt="" />
            </div>
            <p className="s-card-heading">アイラインアートメイク</p>
            <p className="s-card-subheading">￥ 100,000~</p>
          </div>
          <div>
            <div className="mb-1">
              <img src={three} alt="" />
            </div>
            <p className="s-card-heading">リップアートメイク</p>
            <p className="s-card-subheading">￥ 100,000~</p>
          </div>
          <div className="z-10">
            <div className="mb-1">
              <img src={four} alt="" />
            </div>
            <p className="s-card-heading">ヘアライン, 涙袋 etc</p>
            <p className="s-card-subheading">￥ 100,000~</p>
          </div>
        </div>
        <Link to="/treatment">
          <img
            src={btn3}
            alt=""
            className="mt-10 w-full cursor-pointer md:mt-13 lg:mt-17 xl:mt-20"
          />
        </Link>
        <p className="mt-8 text-[13px] tracking-[0.097em] md:mt-9 md:text-base lg:mt-10 lg:text-[22px] xl:mt-12 xl:text-[25px]">
          初めての方も、お気軽にお問い合わせください。
        </p>
      </div>
    </div>
  );
};

export default Menu;
