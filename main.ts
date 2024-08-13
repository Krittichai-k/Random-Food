const foods: { name: string, type: string }[] = [
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


function getRandomFood(): { name: string, type: string } {
    const randomIndex = Math.floor(Math.random() * foods.length);
    return foods[randomIndex];
}


function displayRandomFood(): void {
    const randomFood = getRandomFood();
    const foodDisplay = document.getElementById("food-display");
    if (foodDisplay) {
        foodDisplay.innerText = `อาหารที่สุ่มได้คือ: ${randomFood.name} (${randomFood.type})`;
    }
}
