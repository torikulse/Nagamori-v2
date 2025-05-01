import React from "react";

export default function DoctorCard2({ image, t1, t2, t3, t4 }) {
  return (
    <div className="mb-20 md:mb-0">
      <div>
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="mt-2">
          <p className="sikita text-[6vw] font-bold text-[#70707079] md:mb-[0.8vw] md:text-[1.3vw]">
            doctor
          </p>
          <h1 className="mb-3 text-[12vw] md:mb-2 md:text-[2.1vw]">{t1}</h1>
          <div className="flex flex-col">
            <p className="sikita text-[clamp(20px,4vw,24px)] italic">{t2}</p>
            <p className="sikita mb-3 text-[clamp(20px,4vw,24px)] italic">
              {t3}
            </p>
          </div>
          <p className="ttext-[3.9vw] leading-[6vw] text-[#707070] md:text-[1vw] md:leading-[1.5vw]">
            {t4}
          </p>
        </div>
      </div>
    </div>
  );
}
