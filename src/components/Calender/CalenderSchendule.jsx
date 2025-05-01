import React from "react";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
const CalenderSchendule = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-80 overflow-x-hidden">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-center text-[8vw] md:text-[3.3vw] mb-2 cambria">
          Working Schedule
        </h1>
        <div className="w-25 h-[1.5px] bg-[#707070] relative mb-3"></div>
        <p className="text-center text-[clamp(1.3125rem,2vw,1.5625rem)] tracking-[0.076em]">
          出勤表
        </p>
      </div>

      {/* Content Section */}
      <p className="mb-6 text-sm text-center tracking-[0.076em] leading-[20px]">
        詳しくは、以下の在籍表を確認して公式LINEアカウントから予約から確認してください。
      </p>
      <p className="text-xs tracking-[0.076em]">横スクロールで確認できます。</p>
      {/* Calendar Section with Scroll */}
      <div className="w-full overflow-x-auto md:mt-4 mt-2">
        <div className="min-w-[700px]">
          {/* Month Header */}
          <div className="grid grid-cols-1 grid-rows-2">
            <div className="bg-[#787A98] flex justify-between px-5 items-center py-1 text-white font-bold text-lg sm:text-xl border-gray-600 border-[1px]">
              <BiSolidLeftArrow color="#A0A1BF" />
              <div>2025.1</div>
              <BiSolidRightArrow color="#A0A1BF" />
            </div>
            <div className="grid grid-cols-7 grid-rows-1">
              {["日", "月", "火", "水", "木", "金", "土"].map((day) => (
                <div
                  key={day}
                  className="border-[1px] border-gray-600 flex items-center justify-center h-12 sm:h-14 text-sm sm:text-base"
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
              <div className="border-[1px] border-gray-600 bg-gray-100 h-16 sm:h-20">
                <div className="pt-2 pr-2 text-right"></div>
              </div>
              <div className="border-[1px] border-gray-600 bg-gray-100 h-16 sm:h-20">
                <div className="pt-2 pr-2 text-right"></div>
              </div>
              <div className="border-[1px] border-gray-600 bg-gray-100 h-16 sm:h-20">
                <div className="pt-2 pr-2 text-right"></div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#ffe3e2] h-16 sm:h-20">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  1
                </div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#ffe3e2] h-16 sm:h-20">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  2
                </div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#fff] h-16 sm:h-20 flex flex-col justify-between">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  3
                </div>
                <div className="h-6 sm:h-7 bg-[#dd7e9e]"></div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#fff] h-16 sm:h-20 flex flex-col justify-between">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  4
                </div>
                <div className="h-6 sm:h-7 bg-[#7EB4E0]"></div>
              </div>
            </div>

            {/* Week 2 */}
            <div className="grid grid-cols-7">
              <div className="border-[1px] border-gray-600 bg-[#ffe3e2] h-16 sm:h-20">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  5
                </div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#fff] h-16 sm:h-20 flex flex-col justify-between">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  6
                </div>
                <div className="h-6 sm:h-7 bg-[#7EB4E0]"></div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#fff] h-16 sm:h-20 flex flex-col justify-between">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  7
                </div>
                <div className="h-6 sm:h-7 bg-[#7EB4E0]"></div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#fff] h-16 sm:h-20 flex flex-col justify-between">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  8
                </div>
                <div className="h-6 sm:h-7 bg-[#7EB4E0]"></div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#fff] h-16 sm:h-20 flex flex-col justify-between">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  9
                </div>
                <div className="h-6 sm:h-7 bg-[#7EB4E0]"></div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#fff] h-16 sm:h-20 flex flex-col justify-between">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  10
                </div>
                <div className="h-6 sm:h-7 bg-[#7EB4E0]"></div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#ffe3e2] h-16 sm:h-20">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  11
                </div>
              </div>
            </div>

            {/* Week 3 */}
            <div className="grid grid-cols-7">
              <div className="border-[1px] border-gray-600 bg-[#ffe3e2] h-16 sm:h-20">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  12
                </div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#fff] h-16 sm:h-20 flex flex-col justify-between">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  13
                </div>
                <div className="h-6 sm:h-7 bg-[#DAB47E]"></div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#fff] h-16 sm:h-20 flex flex-col justify-between">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  14
                </div>
                <div className="h-6 sm:h-7 bg-[#DAB47E]"></div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#fff] h-16 sm:h-20 flex flex-col justify-between">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  15
                </div>
                <div className="h-6 sm:h-7 bg-[#847ED8]"></div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#fff] h-16 sm:h-20 flex flex-col justify-between">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  16
                </div>
                <div className="h-6 sm:h-7 bg-[#847ED8]"></div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#fff] h-16 sm:h-20 flex flex-col justify-between">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  17
                </div>
                <div className="h-6 sm:h-7 bg-[#847ED8]"></div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#ffe3e2] h-16 sm:h-20 flex flex-col justify-between">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  18
                </div>
                <div className="h-6 sm:h-7 bg-[#7EB4E0]"></div>
              </div>
            </div>

            {/* Week 4 */}
            <div className="grid grid-cols-7">
              <div className="border-[1px] border-gray-600 bg-[#ffe3e2] h-16 sm:h-20">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  19
                </div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#fff] h-16 sm:h-20 flex flex-col justify-between">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  20
                </div>
                <div className="h-6 sm:h-7 bg-[#DD7D9D]"></div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#fff] h-16 sm:h-20 flex flex-col justify-between">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  21
                </div>
                <div className="h-6 sm:h-7 bg-[#7EB4E0]"></div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#fff] h-16 sm:h-20 flex flex-col justify-between">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  22
                </div>
                <div className="h-6 sm:h-7 bg-[#7EB4E0]"></div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#fff] h-16 sm:h-20 flex flex-col justify-between">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  23
                </div>
                <div className="h-6 sm:h-7 bg-[#857CDC]"></div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#fff] h-16 sm:h-20 flex flex-col justify-between">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  24
                </div>
                <div className="h-6 sm:h-7 bg-[#DBB47D]"></div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#fff] h-16 sm:h-20 flex flex-col justify-between">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  25
                </div>
                <div className="h-6 sm:h-7 bg-[#DBB47D]"></div>
              </div>
            </div>

            {/* Week 5 */}
            <div className="grid grid-cols-7">
              <div className="border-[1px] border-gray-600 bg-[#ffe3e2] h-16 sm:h-20 flex flex-col justify-between">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  26
                </div>
                <div className="h-6 sm:h-7 bg-[#7EB4E0]"></div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#fff] h-16 sm:h-20 flex flex-col justify-between">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  27
                </div>
                <div className="h-6 sm:h-7 bg-[#A8AE6F]"></div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#fff] h-16 sm:h-20 flex flex-col justify-between">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  28
                </div>
                <div className="h-6 sm:h-7 bg-[#DCB37B]"></div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#fff] h-16 sm:h-20 flex flex-col justify-between">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  29
                </div>
                <div className="h-6 sm:h-7 bg-[#7DB5DA]"></div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#fff] h-16 sm:h-20 flex flex-col justify-between">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  30
                </div>
                <div className="h-6 sm:h-7 bg-[#7EB4E0]"></div>
              </div>
              <div className="border-[1px] border-gray-600 bg-[#fff] h-16 sm:h-20 flex flex-col justify-between">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  31
                </div>
                <div className="h-6 sm:h-7 bg-[#DA7E9D]"></div>
              </div>
              <div className="border-[1px] border-gray-600 bg-gray-100 h-16 sm:h-20">
                <div className="pt-2 pr-2 text-right text-sm sm:text-base">
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend Section */}
      <div className="flex flex-col mt-9 gap-4 px-2">
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
          <div key={index} className="flex items-center gap-4 sm:gap-10">
            <div
              className="w-12 sm:w-20 h-8 sm:h-10"
              style={{ backgroundColor: category.color }}
            ></div>
            <div className="text-sm sm:text-base">{category.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalenderSchendule;
