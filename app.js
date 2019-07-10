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
    tireUno = document.getElementById("tireOne").value;
    tireDos = document.getElementById("tireTwo").value;
    tireTres = document.getElementById("tireThree").value;
    speed = document.getElementById("speedz").value;
    rearRatio = tireUno = document.getElementById("rearGearRatio").value;
    
    // Update Results Label 
    document.getElementById("resultsLabel").innerHTML = "Results for " + yearSelection + " Mustang " + trimSelection;
    // Log Test Data Line
    console.log(yearSelection + " Mustang " + trimSelection + " -> Transmission: " + transmissionSelection
        + " -> Gear: " + gearSelection + " -> Gear Ratio: " + gearRatio + " -> Tire Size: " + tireUno + "/" + tireDos + "-" + tireTres
        + " -> Speed: " + speed + " -> Rear Gear Ratio: " + rearRatio);
}