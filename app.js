
function add(num1, num2) {
    return num1 + num2;
}

let button = document.getElementById("calcBtn");
let resultParagraph = document.getElementById("resultText");

button.addEventListener("click", function() {
    // بنجيب الأرقام اللي المستخدم كتبها في الخانات ونحولها لأرقام حقيقية باستخدام Number()
    let x = Number(document.getElementById("num1").value);
    let y = Number(document.getElementById("num2").value);
    
    let total = add(x, y);
    
    resultParagraph.innerText = "Calculation Result = " + total;
});