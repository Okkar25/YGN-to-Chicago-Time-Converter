import React from "react";
import { formatDatetime } from "../helpers/YgnInputDateTimeFormat";

const DisplayDateTime = ({ ygnTime, chicagoTime }) => {
  return (
    <div className="mt-5">
      <div className="flex flex-col items-center gap-7">
        <div className="YGN flex flex-col gap-2">
          <p className="text-lg font-semibold text-center font-serif">Yangon Time</p>
          <span className="text-blue-700 font-semibold text-lg">
            {ygnTime ? formatDatetime(ygnTime) : "Please select YGN time"}
          </span>
        </div>

        <div className="Chicago flex flex-col gap-2">
          <p className="text-lg font-semibold text-center font-serif">Chicago Time</p>
          <span className="text-blue-700 font-semibold text-lg">
            {chicagoTime ? chicagoTime : "Please wait for Chicago Time"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DisplayDateTime;
