function convert() {

    var fromValue = parseFloat(document.getElementById("fromValue").value);
    
    var fromUnit = document.getElementById("fromUnit").value;
    
    var toUnit = document.getElementById("toUnit").value;
    
    var r;
    
    if (fromUnit === "cm" & toUnit === "m") {
    
    r = fromValue / 100;
    
    } else if (fromUnit === "cm" && toUnit === "km") {
    
    r = fromValue / 100000;
    
    } else if (fromUnit === "cm" && toUnit === "ft") { r = fromValue / 30.48;
    
    } else if (fromUnit === "cm" && toUnit === "in") {
    
    r = fromValue / 2.54;
    
    } else if (fromUnit === "m" && toUnit === "cm") {
    
    r = fromValue * 100; }
    else if (fromUnit === "m" && toUnit === "km") {
    
    r = fromValue / 1000;
    
    } 
    else if (fromUnit === "m" & toUnit === "ft") {
     r = fromValue * 3.281;
    
    } else if (fromUnit === "m" && toUnit === "in") {
    
    r = fromValue * 39.37;
    
    } else if (fromUnit === "km" && toUnit === "cm") { r = fromValue * 100000;
    

    } else if (fromUnit === "km" && toUnit === "m") {
    
    r=fromValue*1000;
    
    } else if (fromUnit == "km" && toUnit === "ft") { r = fromValue*3281;
    
    } else if (fromUnit === "km" && toUnit === "in") { r = fromValue*39370;
    
    } else if (fromUnit == "ft" && toUnit == "in") {
    
    r = fromValue * 12;
    
    } else if (fromUnit ==="ft" && toUnit === "m") {
    
    r = fromValue / 3.281;
    
    } else if (fromUnit ==="ft" && toUnit === "cm") { r = fromValue* 30.48;
    
    } else if (fromUnit === "ft" && toUnit == "km")
    {
    
    r = fromValue / 3281; } 
    else if (fromUnit === "in" && toUnit === "m") {
    
    r = fromValue / 39.37;
    
    } else if (fromUnit === "in" && toUnit === "cm") {
    
    r = fromValue*2.54;
    
    } else if (fromUnit === "in" && toUnit === "km") { r = fromValue / 39370;
    
    } else if (fromUnit === "in" && toUnit === "ft") {
    
    r = fromValue / 12;
    
    } else {
    
    r = fromValue;
    }
    
    document.getElementById("toValue").value = r;
    
    document.getElementById("result").textContent = `${fromValue}${fromUnit} = ${r}${toUnit}`;
}