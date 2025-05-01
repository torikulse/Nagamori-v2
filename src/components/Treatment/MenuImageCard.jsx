import React from "react";

import schedule1 from "../../assets/schedule1.svg";
import schedule2 from "../../assets/schedule2.svg";

export default function MenuImageCard() {
  return (
    <div className="small-con flex flex-col gap-5 md:flex-row">
      <div>
        <img src={schedule1} className="w-full" alt="" />
      </div>
      <div>
        <img src={schedule2} className="w-full" alt="" />
      </div>
    </div>
  );
}
