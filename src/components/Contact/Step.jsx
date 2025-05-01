import React from "react";

export default function Step({ step, text, current }) {
  return (
    <div className="text-center">
      <div
        className={`flex h-15 w-15 items-center justify-center rounded-full ${current == step ? "bg-[#82CCC4]" : "bg-[#D9D9D9]"} text-xl text-white md:h-20 md:w-20 md:text-2xl lg:text-3xl xl:text-[42px]`}
      >
        {step}
      </div>
      <p className="mt-2 font-light">{text}</p>
    </div>
  );
}
