import React from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import p9 from "../assets/p9.png";
import p10 from "../assets/p10.png";
import p11 from "../assets/p11.png";
import p12 from "../assets/p12.png";
import SectionHeader from "./SectionHeader";
import SideShape from "./SideShape";
import BorderCutBtn from "./Button/BorderCutBtn";

const Portfolio = () => {
  return (
    <div className="relative">
      <SideShape height={"739px"} right={"0"} />
      <SideShape height={"739px"} left={"0"} bottom={"0"} />

      <div className="large-con relative mt-20 flex flex-col items-center md:mt-22 lg:mt-24 xl:mt-27">
        <SectionHeader heading={"Portfolio"} subheading={"施術例"} />
        <div className="mt-2 grid grid-cols-2 gap-4.5 md:mt-3 md:grid-cols-3 md:gap-6 lg:mt-4 lg:grid-cols-4 lg:gap-7 xl:mt-5 xl:gap-9">
          <img src={p1} alt="portfolio_image" />
          <img src={p2} alt="portfolio_image" />
          <img src={p3} alt="portfolio_image" />
          <img src={p4} alt="portfolio_image" />
          <img src={p5} alt="portfolio_image" />
          <img src={p6} alt="portfolio_image" />
          <img src={p7} alt="portfolio_image" />
          <img src={p8} alt="portfolio_image" />
          <img src={p9} alt="portfolio_image" />
          <img src={p10} alt="portfolio_image" />
          <img src={p11} alt="portfolio_image" />
          <img src={p12} alt="portfolio_image" />
        </div>
        <div className="mt-12 flex w-full cursor-pointer justify-center md:mt-20 lg:mt-25 xl:mt-30">
          <a
            className="w-full sm:w-fit"
            href="https://www.instagram.com/tomomi_nagamori_art?igsh=bmtpYzRvZXQ1bXE1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BorderCutBtn text={"詳細はこちら →"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
