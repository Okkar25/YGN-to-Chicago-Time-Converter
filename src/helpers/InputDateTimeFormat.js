export function formatDatetime(datetimeStr) {
  // Create a Date object from the input string
  const [dateStr, timeStr] = datetimeStr.split(" ");
  const [month, day, year] = dateStr.split("/").map(Number); // date - string to number
  const [hour, minute] = timeStr.split(":").map(Number); // time - string to number

  // Create a Date object in local time
  const localDate = new Date(year, month - 1, day, hour, minute);

  // Get month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Extract date components
  const monthAbbr = monthNames[localDate.getMonth()];
  const dayName = dayNames[localDate.getDay()];
  const dayOfMonth = localDate.getDate();
  const yearOfDate = localDate.getFullYear();
  let hours = localDate.getHours();
  const minutes = String(localDate.getMinutes()).padStart(2, "0");

  // Determine AM/PM
  const ampm = hours >= 12 ? "P.M" : "A.M";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Format the date as "Mon DD, YYYY HH:MM A.M/P.M"
  const formattedDate = `${dayName}, ${monthAbbr} ${String(dayOfMonth).padStart(
    2,
    "0"
  )}, ${yearOfDate} ${String(hours).padStart(2, "0")}:${minutes} ${ampm}`;

  return formattedDate;
}

// Example usage
// const inputDatetime = '09/04/2024 22:00';
// const convertedDatetime = formatDatetime(inputDatetime);
// console.log(`Formatted datetime: ${convertedDatetime}`);
