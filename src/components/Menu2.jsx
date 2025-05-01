import React from "react";
import techniq from "../assets/techniq.png";
import menu2_1 from "../assets/menu2_1.png";
import menu2_2 from "../assets/menu2_2.png";
import menu2_3 from "../assets/menu2_3.png";
import menu2_4 from "../assets/menu2_4.png";
import tail from "../assets/Tail.png";
import shadow from "../assets/Shadow.png";
import hairline from "../assets/Hairline.png";
import lips from "../assets/Lips.png";

const Menu2 = () => {
  return (
    <div className="relative md:mt-20 lg:mt-30 xl:mt-44">
      <div className="absolute top-0 left-0 hidden h-[1036px] bg-[#B6BFBC] opacity-[12%] xl:block xl:w-[547px]"></div>
      <div className="large-con relative mt-12 flex flex-col items-center">
        <div className="relative flex items-center justify-center py-10 md:flex-col md:items-start">
          <img
            src={techniq}
            alt=""
            className="absolute left-1/2 w-36 -translate-x-1/2 -rotate-[20deg] opacity-40 md:relative md:w-40 md:rotate-0 lg:w-45 xl:w-52 xl:opacity-60"
          />
          <p className="text-[28px] tracking-[0.055em] text-[#606060] xl:text-[45px] xl:font-light xl:text-black">
            4つの特徴と強み
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-20 md:grid-cols-2 md:gap-8 xl:grid-cols-4">
          <div className="flex flex-col">
            <div>
              <img src={menu2_1} alt="" className="w-full" />
            </div>
            <div>
              <img src={tail} alt="" className="mt-9" />
              <p className="mt-1 text-xl leading-10 font-medium text-[#606060] md:-mt-4">
                テールアイライン
              </p>
              <p className="mt-[30px] leading-9 text-black">
                「きれいなテールライン」をつくります。
                <br />
                アートメイクで、美しいテールラインを入れることで、横幅のひろがりをつくり、目を大きく見せることができます。また、お化粧に時間をかける必要もなくなります。
                <br />
                この症例は、ドットの集合体により、メイクで描くよりも美しいアイラインを実現しています。
                <br />
                技法として難易度が高いことから、「きれいなテールライン」を入れられるアーティストはとても少なく、全国からお客様にご来院いただいております。
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div>
              <img src={menu2_2} alt="" className="w-full" />
            </div>
            <div>
              <img src={shadow} alt="" className="mt-9" />
              <p className="mt-1 text-xl leading-10 font-medium text-[#606060] md:-mt-4">
                シャドウアイライン
              </p>
              <p className="mt-[30px] leading-9 text-black">
                「シャドウアイラインで、魅力的な目もとにしています。
                <br />
                二重の幅や骨格に合わせてシャドウの入れる幅をかえることで、日本人に間に合うシャドウラインを実現しました。
                <br />
                これは、海外で習得した技法で、アイラインとアイシャドウを組み合わせています。
                <br />
                ブラックからブラウンのグラデーションにより柔らかいけど目元を華やかにしたい方におすすめです。
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div>
              <img src={menu2_3} alt="" className="w-full" />
            </div>
            <div>
              <img src={lips} alt="" className="mt-9" />
              <p className="mt-1 text-xl leading-10 font-medium text-[#606060] md:-mt-4">
                リップ
              </p>
              <p className="mt-[30px] leading-9 text-black">
                「美しい定着」により、口紅を塗ったような仕上がりとなります。薄くなりやすい内側は濃くしっかりと、外側は淡く優しくグラデーションで重ねます。
                <br />
                技法のバリエーションには自信があり、いくつかの技法を組み合わせることで、綺麗に発色しつつも、透明感のある仕上がりにします。
                <br />
                肌への負担や唇の状態に合わせて、
                <br />
                おひとりお一人に合った技法とカラーをご提案いたします。
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div>
              <img src={menu2_4} alt="" className="w-full" />
            </div>
            <div>
              <img src={hairline} alt="" className="mt-9" />
              <p className="mt-1 text-xl leading-10 font-medium text-[#606060] md:-mt-4">
                ヘアライン
              </p>
              <p className="mt-[30px] leading-9 text-black">
                自然なヘアラインを仕上げます。男性、女性ともにとても人気のメニューです。
                <br />
                マシンによるドットの集合体により、細くて繊細な毛並みを描くことで、本物のような自然なヘアラインにします。ひたいを丸く見せたり、おもながに見えることを気にしている方には、お顔のたて幅を和らげたり、また、M字の薄い部分を濃くしたり、ご要望に合わせたデザインが可能です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu2;
