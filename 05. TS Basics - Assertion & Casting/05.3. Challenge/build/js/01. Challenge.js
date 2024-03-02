"use strict";
// DOM Challenge
// DOM Selection
const year = document.getElementById("year");
if (year) {
    year.style.color = "white";
    year.textContent = new Date().getFullYear().toString();
}
else
    console.error("Element with ID 'year' not found.");
