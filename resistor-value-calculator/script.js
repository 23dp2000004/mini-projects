const colorMap = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,

  // for band3
  gold: -1, 
  silver: -2,
};

// for band4
const toleranceMap = {
  brown: 1,
  red: 2,
  green: 0.5,
  blue: 0.25,
  violet: 0.1,
  grey: 0.05,
  gold: 5,
  silver: 10,
  noBand: 20
};



// Get the button
const button = document.getElementById("calculateBttn");

// Add click event
button.addEventListener("click", function () {

    // Get Band 1 value
    const band1Value = document.getElementById("band1").value;

    // Get Band 2 value
    const band2Value = document.getElementById("band2").value;

    // Get Band 3 value
    const band3Value = document.getElementById("band3").value;

    // Get Band 4 value
    const band4Value = document.getElementById("band4").value;

    // Print to console
    console.log(band1Value, band2Value, band3Value, band4Value);

    // Convert to number
    const band1num = colorMap[band1Value]
    const band2num = colorMap[band2Value]
    const band3num = colorMap[band3Value]

    const tolerance = toleranceMap[band4Value];

    // Print to console
    console.log(band1num, band2num, band3num, tolerance);

    // Calculate the value
    const value = (10 * band1num + band2num) * (10 ** band3num);

    // Print to console
    console.log(value + " ohm")

    // make the html display the value
    const resultElement = document.getElementById("result");

    //resultElement.textContent = value;
     resultElement.textContent = value.toLocaleString() + " ohms ±" + tolerance + "%";

});