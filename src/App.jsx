import React, { useState } from "react";
import DatePicker from "./components/DatePicker";
import DisplayDateTime from "./components/DisplayDateTime";
import TimePicker from "./components/TimePicker";
import { convertYangonToChicago } from "./helpers/YgnToChicagoFormat";

const App = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [ygnTime, setYgnTime] = useState("");
  const [chicagoTime, setChicagoTime] = useState("");

  const handleDateTime = () => {
    if (date && time) {
      const inputDatetime = `${date} ${time}`;
      const convertedDatetime = convertYangonToChicago(inputDatetime);

      setYgnTime(inputDatetime);
      setChicagoTime(convertedDatetime);
    }

    // console.log(
    //   `Yangon time ${formatDatetime(
    //     inputDatetime
    //   )} is Chicago time ${convertedDatetime}`
    // );
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-400">
      <div className="bg-yellow-50 w-[600px] h-[500px] rounded-lg flex flex-col">
        <h3 className="mt-7 mb-3 font-semibold text-2xl text-center">
          YGN to Chicago Date - Time Converter
        </h3>

        <h5 className="text-center mb-5 text-gray-500 font-medium">{`YGN - Chicago Time Difference => ( minus 11 : 30 )`}</h5>

        <div className="flex items-center justify-center gap-5 mt-3">
          <DatePicker date={date} setDate={setDate} />
          <TimePicker time={time} setTime={setTime} />
        </div>

        <div className="flex justify-center mt-5" onClick={handleDateTime}>
          <button type="button" className="converter-btn">
            Convert
          </button>
        </div>

        <div className="mt-3">
          <DisplayDateTime ygnTime={ygnTime} chicagoTime={chicagoTime} />
        </div>
      </div>
    </div>
  );
};

export default App;
