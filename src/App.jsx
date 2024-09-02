import React, { useState } from "react";
import DatePicker from "./components/DatePicker";
import DisplayDateTime from "./components/DisplayDateTime";
import Header from "./components/Header";
import LocationDropdown from "./components/LocationDropdown";
import TimePicker from "./components/TimePicker";
import { convertYangonToChicago } from "./helpers/YgnToChicagoFormat";
import { convertChicagoToYangon } from "./helpers/ChicagoToYgnFormat";

const App = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [ygnLocation, setYgnLocation] = useState("Yangon to Chicago");

  const [ygnTime, setYgnTime] = useState("");
  const [chicagoTime, setChicagoTime] = useState("");

  const handleDateTime = () => {
    if (date && time) {


      if (ygnLocation === "Yangon to Chicago") {
        const inputDatetime = `${date} ${time}`;
        const convertedDatetime = convertYangonToChicago(inputDatetime);

        setYgnTime(inputDatetime);
        setChicagoTime(convertedDatetime);
      } 
      
      else {
        const inputDatetime = `${date} ${time}`; // chicago
        const convertedDatetime = convertChicagoToYangon(inputDatetime); // yangon

        setYgnTime(convertedDatetime);
        setChicagoTime(inputDatetime);
      }
    }

    // console.log(
    //   `Yangon time ${formatDatetime(
    //     inputDatetime
    //   )} is Chicago time ${convertedDatetime}`
    // );
  };

  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen bg-blue-400">
      <div className="">
        <LocationDropdown
          ygnLocation={ygnLocation}
          setYgnLocation={setYgnLocation}
        />
      </div>

      <div className="bg-yellow-50 w-[600px] h-[500px] rounded-lg flex flex-col">
        <Header ygnLocation={ygnLocation} />

        <div className="flex items-center justify-center gap-5 mt-2">
          <DatePicker date={date} setDate={setDate} />
          <TimePicker time={time} setTime={setTime} />
        </div>

        <div className="flex justify-center mt-5" onClick={handleDateTime}>
          <button type="button" className="converter-btn">
            Convert
          </button>
        </div>

        <div className="mt-3">
          <DisplayDateTime
            ygnTime={ygnTime}
            chicagoTime={chicagoTime}
            ygnLocation={ygnLocation}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
