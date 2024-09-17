function randomFood() {
    const category = document.getElementById("foodCategory").value;
    const foodDisplay = document.getElementById("food");
    
    if (!category) {
        foodDisplay.innerText = "* โปรดระบุตัวเลือก";
        foodDisplay.style.color = "red";
        return;
    }
    
    let selectedFood = "";
    if (category === 'halal') {
        const halalFoods = Object.keys(foods.halal);
        selectedFood = halalFoods[Math.floor(Math.random() * halalFoods.length)];
    } else if (category === 'nonHalal') {
        const nonHalalFoods = Object.keys(foods.nonHalal);
        selectedFood = nonHalalFoods[Math.floor(Math.random() * nonHalalFoods.length)];
    } else {
        const allFoods = [...Object.keys(foods.halal), ...Object.keys(foods.nonHalal)];
        selectedFood = allFoods[Math.floor(Math.random() * allFoods.length)];
    }
    
    foodDisplay.innerText = "สุ่มได้ : " + selectedFood;
    foodDisplay.style.color = "black";
}


