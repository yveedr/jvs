const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("circleradius").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("result").textContent = `the circumference is: ${circumference} + cm`;

}