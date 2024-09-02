import React from "react";
import { formatDatetime } from "../helpers/InputDateTimeFormat";
import TimeIcon from "../Icons/TimeIcon";

const DisplayDateTime = ({ ygnTime, chicagoTime, ygnLocation }) => {
  return (
    <div className="mt-5">
      {ygnLocation === "Yangon to Chicago" ? (
        <div className="flex flex-col items-center gap-5">
          <div className="YGN flex flex-col gap-2 bg-orange-100 py-3 px-7 rounded-lg">
            <div className="flex items-center gap-2 justify-center">
              <TimeIcon />
              <p className="text-lg font-semibold text-center font-serif">
                Yangon Time ( From )
              </p>
            </div>

            <span className="text-indigo-600 font-semibold text-lg">
              {ygnTime ? formatDatetime(ygnTime) : "Please select Yangon time"}
            </span>
          </div>

          <div className="Chicago flex flex-col gap-2 bg-orange-100 py-3 px-7 rounded-lg ">
            <div className="flex items-center gap-2 justify-center">
              <TimeIcon />
              <p className="text-lg font-semibold text-center font-serif">
                Chicago Time ( To )
              </p>
            </div>
            <span className="text-indigo-600 font-semibold text-lg">
              {chicagoTime ? chicagoTime : "Chicago Time to be Processed"}
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-7">
          <div className="Chicago flex flex-col gap-2 bg-rose-100 py-3 px-7 rounded-lg">
            <div className="flex items-center gap-2 justify-center">
              <TimeIcon />
              <p className="text-lg font-semibold text-center font-serif">
                Chicago Time ( From )
              </p>
            </div>
            <span className="text-indigo-600 font-semibold text-lg">
              {chicagoTime
                ? formatDatetime(chicagoTime)
                : "Please select Chicago time"}
            </span>
          </div>

          <div className="YGN flex flex-col gap-2 bg-rose-100 py-3 px-7 rounded-lg">
            <div className="flex items-center gap-2 justify-center">
              <TimeIcon />
              <p className="text-lg font-semibold text-center font-serif">
                Yangon Time ( To )
              </p>
            </div>
            <span className="text-indigo-600 font-semibold text-lg">
              {ygnTime ? ygnTime : "Yangon Time to be Processed"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayDateTime;
