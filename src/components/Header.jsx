import React from "react";

const Header = ({ ygnLocation }) => {
  return (
    <div>
      <h3 className="mt-5 mb-3 flex items-center justify-center gap-3 font-semibold text-center">
        <p className="font-bold font-Roboto text-[23px]">
          {`${
            ygnLocation === "Yangon to Chicago"
              ? "Yangon to Chicago"
              : "Chicago to Yangon"
          }`}
        </p>
        <p className="text-gray-800 text-[22px]">{` < Date - Time Converter >`}</p>
      </h3>

      <h5 className="text-center mb-5 text-gray-500 font-medium">{`${
        ygnLocation === "Yangon to Chicago"
          ? "Yangon, Myanmar time is 11:30 hours ahead of Chicago, United States"
          : "Chicago, United States time is 11:30 hours behind Yangon, Myanmar"
      }`}</h5>
    </div>
  );
};

export default Header;
