var foods = [
    { name: "ผัดไทย", type: "อาหารจานเดียว" },
    { name: "ข้าวผัด", type: "อาหารจานเดียว" },
    { name: "ต้มยำกุ้ง", type: "แกง" },
    { name: "แกงเขียวหวาน", type: "แกง" },
    { name: "ข้าวหมูกรอบ", type: "อาหารจานเดียว" },
    { name: "ส้มตำ", type: "อาหารจานเดียว" },
    { name: "ขนมจีน", type: "อาหารจานเดียว" },
    { name: "ก๋วยเตี๋ยว", type: "อาหารจานเดียว" },
    { name: "ข้าวมันไก่", type: "อาหารจานเดียว" },
    { name: "ข้าวหมูแดง", type: "อาหารจานเดียว" }
];
function getRandomFood() {
    var randomIndex = Math.floor(Math.random() * foods.length);
    return foods[randomIndex];
}
function displayRandomFood() {
    var randomFood = getRandomFood();
    var foodDisplay = document.getElementById("food-display");
    if (foodDisplay) {
        foodDisplay.innerText = "\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E48\u0E21\u0E44\u0E14\u0E49\u0E04\u0E37\u0E2D: ".concat(randomFood.name, " (").concat(randomFood.type, ")");
    }
}
