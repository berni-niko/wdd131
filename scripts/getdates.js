document.addEventListener("DOMContentLoaded", function() {
    // Populate the current year
    var currentYearSpan = document.getElementById("currentyear");
    currentYearSpan.textContent = new Date().getFullYear(); // Set current year

    // Function to get current date and time in a specific format
    function currentDate() {
        var date = new Date();
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return date.toLocaleDateString(undefined, options);
    }

    // Function to update date and time in footer
    function updateDateTimeFooter() {
        var footerDateTimeSpan = document.getElementById("footerDateTime");
        footerDateTimeSpan.textContent = 'Last Modifications ' + currentDate(); // Update date and time in footer
    }

    // Call the function to update the date and time when the page loads
    updateDateTimeFooter();

    // Update the date and time every second
    setInterval(updateDateTimeFooter, 1000);
});
