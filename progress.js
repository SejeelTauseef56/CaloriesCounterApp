let calorieList = [];

function calculate() {
  const calories = document.getElementById("calories").value;
  const goal = document.getElementById("goal").value;
  
  if (calories <= goal) {
    document.getElementById("result").innerHTML = "You have consumed less than your target.";
  } else {
    document.getElementById("result").innerHTML = "You have consumed more than your target.";
  } if (calories == goal) {
    document.getElementById("result").innerHTML = "Great! You're on track";
  }
}

function addToList() {
  const date = document.getElementById("date").value;
  const calories = document.getElementById("calories").value;
  
  calorieList.push({ date: date, calories: calories });
  
  const listContainer = document.getElementById("list-container");
  const list = document.createElement("ul");
  
  for (let i = 0; i < calorieList.length; i++) {
    const item = document.createElement("li");
    const text = document.createTextNode(`Date: ${calorieList[i].date}, Calories: ${calorieList[i].calories}`);
    item.appendChild(text);
    list.appendChild(item);
  }
  
  listContainer.innerHTML = "";
  listContainer.appendChild(list);
}
