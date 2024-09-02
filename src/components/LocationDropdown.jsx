import React from "react";

const LocationDropdown = ({ ygnLocation, setYgnLocation }) => {
  const availableLocations = [
    {
      id: 1,
      locationName: "Yangon to Chicago",
    },
    {
      id: 2,
      locationName: "Chicago to Yangon",
    },
  ];

  console.log(ygnLocation);

  return (
    <div>
      <form className="max-w-sm w-[220px] mx-auto">
        <select
          id="countries"
          value={ygnLocation}
          onChange={(e) => setYgnLocation(e.target.value)}
          className="bg-gray-50 border ps-5 border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {availableLocations.map((location) => (
            <option key={location.id} className="">{location.locationName}</option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default LocationDropdown;
