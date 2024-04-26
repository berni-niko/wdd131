document.addEventListener("DOMContentLoaded", function() {
    // Populate the current year
    var currentYearSpan = document.getElementById("currentyear");
    currentYearSpan.textContent = new Date().getFullYear(); // Set current year

    // Populate the last modified date
    var lastModifiedSpan = document.getElementById("lastModified");
    lastModifiedSpan.textContent = document.lastModified; // Set the last modified date
});
