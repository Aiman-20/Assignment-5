async function fetchLiveDate() {
    try {
        const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Dhaka');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const dateTime = new Date(data.datetime);

        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        const dayName = days[dateTime.getDay()];
        const day = dateTime.getDate();
        const month = months[dateTime.getMonth()];
        const year = dateTime.getFullYear();

        document.getElementById("day").innerText = dayName + ' ,';
        document.getElementById("date").innerText = month + ' ' + day + ' ' + year;
    } catch (error) {
        console.error('Error fetching date:', error);
    }
}

document.getElementById("updateButton").addEventListener("click", fetchLiveDate);

// Optionally, you can call the function on page load to set the initial date
fetchLiveDate();