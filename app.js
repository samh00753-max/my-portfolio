
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

    // 1. بنحدد هي صباحاً ولا مساءً بناءً على الوقت الحالي
    let ampm = hours >= 12 ? "PM" : "AM";

    // 2. بنحول نظام 24 ساعة لنظام 12 ساعة
    hours = hours % 12;
    hours = hours ? hours : 12; // لو الساعة طلعت 0 (يعني 12 بالليل)، بنخليها 12 بدل صفر

    // 3. عشان نضمن إن الأرقام أقل من 10 يظهر جنبها صفر على الشمال
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    // 4. بنركب الوقت مع الـ AM أو PM في سطر واحد
    let timeString = hours + ":" + minutes + ":" + seconds + " " + ampm;
    
    // بنطبع الوقت جوه الـ HTML
    document.getElementById("clockDisplay").innerText = timeString;
}

// بنقول للجافا سكريبت شغلي الدالة دي كل 1000 مللي ثانية (يعني كل ثانية)
setInterval(updateClock, 1000);

// بنشغلها مرة أول ما الصفحة تفتح علطول بدل ما يستنى ثانية
updateClock();
// 1. الكمبيوتر بيختار رقم عشوائي بين 1 و 20 أول ما الصفحة تفتح
let randomNumber = Math.floor(Math.random() * 20) + 1;

// 2. بنمسك عناصر اللعبة من الـ HTML
let guessButton = document.getElementById("guessBtn");
let gameMessageParagraph = document.getElementById("gameMessage");

// 3. لما المستخدم يضغط على زرار Check
guessButton.addEventListener("click", function() {
    // بنقرا الرقم اللي المستخدم كتبه
    let userGuess = Number(document.getElementById("guessInput").value);
    
    // شروط اللعبة بالـ if والـ else
    if (!userGuess) {
        gameMessageParagraph.innerText = "⛔ Please type a number!";
    } else if (userGuess === randomNumber) {
        gameMessageParagraph.innerText = "🎉 Correct Number! You Win! 🏆";
        gameMessageParagraph.style.color = "#4caf50"; // بنغير اللون للأخضر عشان كسب
    } else if (userGuess > randomNumber) {
        gameMessageParagraph.innerText = "📈 Too High! Try lower.";
        gameMessageParagraph.style.color = "#eee";
    } else if (userGuess < randomNumber) {
        gameMessageParagraph.innerText = "📉 Too Low! Try higher.";
        gameMessageParagraph.style.color = "#eee";
    }
});