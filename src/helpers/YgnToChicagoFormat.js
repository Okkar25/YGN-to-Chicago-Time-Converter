export function convertYangonToChicago(datetimeStr) {
    // Create a Date object from the input string
    const [dateStr, timeStr] = datetimeStr.split(' ');
    const [month, day, year] = dateStr.split('/').map(Number); // date - string to number
    const [hour, minute] = timeStr.split(':').map(Number);     // time - string to number
    
    // Create a Date object in Yangon time
    const yangonDate = new Date(Date.UTC(year, month - 1, day, hour - 6, minute)); // Yangon is UTC+6

    // Convert to Chicago time (Chicago is UTC-6 or UTC-5 with DST)
    const chicagoOffset = -6; // Standard time offset for Chicago
    const timeDifference = (chicagoOffset - 6) * 60 * 60 * 1000; // Calculate difference in milliseconds
    const chicagoDate = new Date(yangonDate.getTime() + timeDifference); // Add difference to Yangon time

    // Get month names
    const monthNames = ["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"];

    // Extract date components
    const monthName = monthNames[chicagoDate.getMonth()];
    const dayOfMonth = String(chicagoDate.getDate()).padStart(2, '0');
    const yearOfDate = chicagoDate.getFullYear();
    let hours = chicagoDate.getHours();
    const minutes = String(chicagoDate.getMinutes()).padStart(2, '0');

    // Determine AM/PM
    const ampm = hours >= 12 ? 'P.M' : 'A.M';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Format the Chicago date as "Month Day, Year HH:MM A.M/P.M"
    const formattedDate = `${monthName} ${dayOfMonth}, ${yearOfDate} ${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;

    return formattedDate;
}

// Example usage
// const inputDatetime = '09/11/2024 15:04';
// const convertedDatetime = convertYangonToChicago(inputDatetime);
// console.log(`Yangon time ${inputDatetime} is Chicago time ${convertedDatetime}`);

