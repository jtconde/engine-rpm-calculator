var yearSelection;
var trimSelection;
var transmissionSelection;
var gearSelection;
var gearRatio;
var tireUno;
var tireDos;
var tireTres;
var speed;
var rearRatio

function calculate() {
    // User Input
    yearSelection = document.getElementById("yearSelect").value;
    trimSelection = document.getElementById("trimSelect").value;
    transmissionSelection = document.getElementById("transmissionSelect").value;
    gearSelection = document.getElementById("gearSelect").value;
    gearRatio = document.getElementById("transGearRatio").value;
    
    // Update Results Label 
    document.getElementById("resultsLabel").innerHTML = "Results for " + yearSelection + " Mustang " + trimSelection;
    // Test Data Line
    console.log(yearSelection + " Mustang " + trimSelection + " - " + transmissionSelection
        + " Gear: " + gearSelection + " - " + "Gear Ratio " + gearRatio);
}