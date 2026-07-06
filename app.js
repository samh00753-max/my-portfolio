
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
// دالة لتحديث الوقت
function updateClock() {
    let now = new Date(); // بنجيب الوقت الحالي من الجهاز
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // عشان نخلي الأرقام شكلها حلو (لو الرقم أقل من 10 يزود صفر على الشمال)
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    // بنركب الوقت على بعضه
    let timeString = hours + ":" + minutes + ":" + seconds;

    // بنطبع الوقت جوه الـ HTML
    document.getElementById("clockDisplay").innerText = timeString;
}

// بنقول للجافا سكريبت شغلي الدالة دي كل 1000 مللي ثانية (يعني كل ثانية)
setInterval(updateClock, 1000);

// بنشغلها مرة أول ما الصفحة تفتح علطول بدل ما يستنى ثانية
updateClock();