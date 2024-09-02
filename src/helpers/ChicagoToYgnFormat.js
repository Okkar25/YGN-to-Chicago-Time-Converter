export function convertChicagoToYangon(input) {
  // Function to format date to "Monday, September 02, 2024 06:20 A.M"
  function formatDate(date) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    // Get the formatted date and time
    const formattedDate = date
      .toLocaleString("en-US", options)
      .replace("AM", "A.M")
      .replace("PM", "P.M");

    // Remove the comma between the date and time parts
    return formattedDate.replace("at"," ");
  }

  // Parse input string
  const [dateStr, timeStr] = input.split(" ");
  const [month, day, year] = dateStr.split("/").map(Number);
  const [hour, minute] = timeStr.split(":").map(Number);

  // Create a Date object for the Chicago time (Central Time)
  const chicagoDate = new Date(year, month - 1, day, hour, minute);

  // Chicago is UTC-5, Yangon is UTC+6:30, so the difference is 11 hours and 30 minutes
  const timeDifference = 11.5 * 60 * 60 * 1000; // milliseconds
  const yangonDate = new Date(chicagoDate.getTime() + timeDifference);

  // Format and return the result
  return formatDate(yangonDate);
}

// Example usage:
// const input = '09/11/2024 15:04';
// console.log(convertChicagoToYangon(input));




// Monday, September 02, 2024 06:46 A.M

// Chicago Time

// Sunday, September 01, 2024 07:16 P.M