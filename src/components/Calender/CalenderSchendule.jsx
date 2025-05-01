import React from "react";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
const CalenderSchendule = () => {
  return (
    <div className="small-con">
      <div className="flex flex-col items-center">
        <h1 className="sikita text-[35px] md:text-[45px] lg:text-[55px] xl:text-[68px]">
          Working Schedule
        </h1>
        <div className="mb-4.5 h-[1px] w-27 bg-[#707070] md:w-31 lg:w-36 xl:w-38"></div>
        <p className="mb-[32px] text-[21px] tracking-[0.076em] md:mb-[34px] md:text-[22px] lg:mb-[38px] lg:text-[23px] xl:mb-[41px] xl:text-[25px]">
          出勤表
        </p>
      </div>

      {/* Content Section */}

      <p className="mb-12 text-center text-sm leading-[20px] tracking-[0.076em] md:mb-10 md:text-left md:text-base md:tracking-normal lg:text-lg xl:text-xl">
        詳しくは、以下の在籍表を確認して公式LINEアカウントから予約から確認してください。
      </p>

      <div className="mb-2 text-xs tracking-[0.076em] md:hidden">
        横スクロールで確認できます。
      </div>
      {/* Calendar Section with Scroll */}
      <div className="mt-2 w-full overflow-x-auto md:mt-4">
        <div className="">
          {/* Month Header */}
          <div className="grid grid-cols-1 grid-rows-2">
            <div className="flex items-center justify-between border-[1px] border-gray-600 bg-[#787A98] px-5 py-1 text-lg font-bold text-white sm:text-xl">
              <BiSolidLeftArrow color="#A0A1BF" />
              <div>2025.1</div>
              <BiSolidRightArrow color="#A0A1BF" />
            </div>
            <div className="grid grid-cols-7 grid-rows-1">
              {["日", "月", "火", "水", "木", "金", "土"].map((day) => (
                <div
                  key={day}
                  className="flex h-12 items-center justify-center border-[1px] border-gray-600 text-sm sm:h-14 sm:text-base"
                >
                  {day}
                </div>
              ))}
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-1 grid-rows-5">
            {/* Week 1 */}
            <div className="grid grid-cols-7">
              <div className="h-16 border-[1px] border-gray-600 bg-gray-100 sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right"></div>
              </div>
              <div className="h-16 border-[1px] border-gray-600 bg-gray-100 sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right"></div>
              </div>
              <div className="h-16 border-[1px] border-gray-600 bg-gray-100 sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right"></div>
              </div>
              <div className="h-16 border-[1px] border-gray-600 bg-[#ffe3e2] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  1
                </div>
              </div>
              <div className="h-16 border-[1px] border-gray-600 bg-[#ffe3e2] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  2
                </div>
              </div>
              <div className="flex h-16 flex-col justify-between border-[1px] border-gray-600 bg-[#fff] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  3
                </div>
                <div className="h-6 bg-[#dd7e9e] sm:h-7"></div>
              </div>
              <div className="flex h-16 flex-col justify-between border-[1px] border-gray-600 bg-[#fff] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  4
                </div>
                <div className="h-6 bg-[#7EB4E0] sm:h-7"></div>
              </div>
            </div>

            {/* Week 2 */}
            <div className="grid grid-cols-7">
              <div className="h-16 border-[1px] border-gray-600 bg-[#ffe3e2] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  5
                </div>
              </div>
              <div className="flex h-16 flex-col justify-between border-[1px] border-gray-600 bg-[#fff] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  6
                </div>
                <div className="h-6 bg-[#7EB4E0] sm:h-7"></div>
              </div>
              <div className="flex h-16 flex-col justify-between border-[1px] border-gray-600 bg-[#fff] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  7
                </div>
                <div className="h-6 bg-[#7EB4E0] sm:h-7"></div>
              </div>
              <div className="flex h-16 flex-col justify-between border-[1px] border-gray-600 bg-[#fff] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  8
                </div>
                <div className="h-6 bg-[#7EB4E0] sm:h-7"></div>
              </div>
              <div className="flex h-16 flex-col justify-between border-[1px] border-gray-600 bg-[#fff] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  9
                </div>
                <div className="h-6 bg-[#7EB4E0] sm:h-7"></div>
              </div>
              <div className="flex h-16 flex-col justify-between border-[1px] border-gray-600 bg-[#fff] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  10
                </div>
                <div className="h-6 bg-[#7EB4E0] sm:h-7"></div>
              </div>
              <div className="h-16 border-[1px] border-gray-600 bg-[#ffe3e2] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  11
                </div>
              </div>
            </div>

            {/* Week 3 */}
            <div className="grid grid-cols-7">
              <div className="h-16 border-[1px] border-gray-600 bg-[#ffe3e2] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  12
                </div>
              </div>
              <div className="flex h-16 flex-col justify-between border-[1px] border-gray-600 bg-[#fff] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  13
                </div>
                <div className="h-6 bg-[#DAB47E] sm:h-7"></div>
              </div>
              <div className="flex h-16 flex-col justify-between border-[1px] border-gray-600 bg-[#fff] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  14
                </div>
                <div className="h-6 bg-[#DAB47E] sm:h-7"></div>
              </div>
              <div className="flex h-16 flex-col justify-between border-[1px] border-gray-600 bg-[#fff] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  15
                </div>
                <div className="h-6 bg-[#847ED8] sm:h-7"></div>
              </div>
              <div className="flex h-16 flex-col justify-between border-[1px] border-gray-600 bg-[#fff] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  16
                </div>
                <div className="h-6 bg-[#847ED8] sm:h-7"></div>
              </div>
              <div className="flex h-16 flex-col justify-between border-[1px] border-gray-600 bg-[#fff] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  17
                </div>
                <div className="h-6 bg-[#847ED8] sm:h-7"></div>
              </div>
              <div className="flex h-16 flex-col justify-between border-[1px] border-gray-600 bg-[#ffe3e2] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  18
                </div>
                <div className="h-6 bg-[#7EB4E0] sm:h-7"></div>
              </div>
            </div>

            {/* Week 4 */}
            <div className="grid grid-cols-7">
              <div className="h-16 border-[1px] border-gray-600 bg-[#ffe3e2] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  19
                </div>
              </div>
              <div className="flex h-16 flex-col justify-between border-[1px] border-gray-600 bg-[#fff] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  20
                </div>
                <div className="h-6 bg-[#DD7D9D] sm:h-7"></div>
              </div>
              <div className="flex h-16 flex-col justify-between border-[1px] border-gray-600 bg-[#fff] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  21
                </div>
                <div className="h-6 bg-[#7EB4E0] sm:h-7"></div>
              </div>
              <div className="flex h-16 flex-col justify-between border-[1px] border-gray-600 bg-[#fff] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  22
                </div>
                <div className="h-6 bg-[#7EB4E0] sm:h-7"></div>
              </div>
              <div className="flex h-16 flex-col justify-between border-[1px] border-gray-600 bg-[#fff] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  23
                </div>
                <div className="h-6 bg-[#857CDC] sm:h-7"></div>
              </div>
              <div className="flex h-16 flex-col justify-between border-[1px] border-gray-600 bg-[#fff] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  24
                </div>
                <div className="h-6 bg-[#DBB47D] sm:h-7"></div>
              </div>
              <div className="flex h-16 flex-col justify-between border-[1px] border-gray-600 bg-[#fff] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  25
                </div>
                <div className="h-6 bg-[#DBB47D] sm:h-7"></div>
              </div>
            </div>

            {/* Week 5 */}
            <div className="grid grid-cols-7">
              <div className="flex h-16 flex-col justify-between border-[1px] border-gray-600 bg-[#ffe3e2] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  26
                </div>
                <div className="h-6 bg-[#7EB4E0] sm:h-7"></div>
              </div>
              <div className="flex h-16 flex-col justify-between border-[1px] border-gray-600 bg-[#fff] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  27
                </div>
                <div className="h-6 bg-[#A8AE6F] sm:h-7"></div>
              </div>
              <div className="flex h-16 flex-col justify-between border-[1px] border-gray-600 bg-[#fff] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  28
                </div>
                <div className="h-6 bg-[#DCB37B] sm:h-7"></div>
              </div>
              <div className="flex h-16 flex-col justify-between border-[1px] border-gray-600 bg-[#fff] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  29
                </div>
                <div className="h-6 bg-[#7DB5DA] sm:h-7"></div>
              </div>
              <div className="flex h-16 flex-col justify-between border-[1px] border-gray-600 bg-[#fff] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  30
                </div>
                <div className="h-6 bg-[#7EB4E0] sm:h-7"></div>
              </div>
              <div className="flex h-16 flex-col justify-between border-[1px] border-gray-600 bg-[#fff] sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  31
                </div>
                <div className="h-6 bg-[#DA7E9D] sm:h-7"></div>
              </div>
              <div className="h-16 border-[1px] border-gray-600 bg-gray-100 sm:h-20 md:h-[100px] lg:h-[130px] xl:h-[150px]">
                <div className="pt-2 md:pt-3 lg:pt-4 xl:pt5 pr-2 md:pr-3 lg:pr-4 xl:pr5 text-right text-sm sm:text-base">
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend Section */}
      <div className="mt-9 flex flex-col gap-4 md:mt-[45px] lg:mt-[60px] xl:mt-[84px]">
        {[
          { color: "#DDB27F", text: "HAAB東京 ( 原宿）" },
          { color: "#7CB6DC", text: "アマソラクリニック（渋谷)" },
          {
            color: "#DB7D9E",
            text: "札幌ル・トロワビューティクリニックVogue（札幌）",
          },
          { color: "#837EDA", text: "SHIBAURA B.CLINIC（芝浦）" },
          { color: "#A7AD6E", text: " GRACY TOKYO CLINIC（表参道）" },
          { color: "#FEE3E3", text: "休診日" },
        ].map((category, index) => (
          <div key={index} className="flex items-center gap-2 sm:gap-10">
            <div
              className="h-5 w-[45px] flex-shrink-0 md:h-[25px] md:w-[55px] lg:h-[35px] lg:w-[80px] xl:h-[45px] xl:w-[101px]"
              style={{ backgroundColor: category.color }}
            ></div>
            <div className="text-xs md:text-base lg:text-lg xl:text-xl">
              {category.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalenderSchendule;
