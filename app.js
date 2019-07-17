var yearSelection;
var trimSelection;
var transmissionSelection;
var gearSelection;
var gearRatio;
var tWidth;
var tRatio;
var tRim;
var speed;


function calculate() {
    // User Input
    yearSelection = document.getElementById("yearSelect").value;
    trimSelection = document.getElementById("trimSelect").value;
    transmissionSelection = document.getElementById("transmissionSelect").value;
    gearSelection = document.getElementById("gearSelect").value;
    gearRatio = document.getElementById("transGearRatio").value;
    tWidth = document.getElementById("tireWidth").value;
    tRatio = document.getElementById("tireRatio").value;
    tRim = document.getElementById("tireRim").value;
    speed = document.getElementById("speedz").value;
    rearRatio = document.getElementById("rearGearRatio").value;
    
    // Calculate Tire Height
    var tireHeight = (tWidth)*(tRatio*0.01)/25.4*2+(parseInt(tRim))
    tireHeight = tireHeight.toFixed(1);
    

    // Update Results Label 
    document.getElementById("resultsLabel").innerHTML = "Results for " + yearSelection + " Mustang " + trimSelection;
    document.getElementById("diameterBox").value = tireHeight;
    
    // Log Test Data Line
    console.log(yearSelection + " Mustang " + trimSelection + " -> Transmission: " + transmissionSelection
        + " -> Gear: " + gearSelection + " -> Gear Ratio: " + gearRatio + " -> Tire Size: " + tWidth + "/" + tRatio + "-" + tRim
        + " -> Speed: " + speed + " " + tireHeight);
}