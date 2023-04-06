const apiKey = "2ad9a2a382mshe6eb9d45375baf8p13e982jsn3d9e586c4483";
const apiHost = "nutritionix-api.p.rapidapi.com";

const form = document.querySelector("form");
const searchInput = document.querySelector("#search-input");
const searchResults = document.querySelector("#search-results");
const foodList = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchQuery = searchInput.value.trim();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": apiHost,
    },
  };

  fetch(
    `https://${apiHost}/v1_1/search/${searchQuery}?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat%2Cnf_total_carbohydrate%2Cnf_protein`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.hits.length === 0) {
        searchResults.textContent = "No results found.";
      } else {
        const item = data.hits[0];
        const itemName = item.fields.item_name;
        const calories = item.fields.nf_calories;
        const carbs = item.fields.nf_total_carbohydrate;
        const fat = item.fields.nf_total_fat;
        const protein = item.fields.nf_protein;
        foodList.push({
          name: itemName,
          calories: calories,
          carbs: carbs,
          fat: fat,
          protein: protein,
        });
        displayFoodList();
      }
    })
    .catch((error) => {
      console.error(error);
      searchResults.textContent = "An error occurred. Please try again later.";
    });
});

function displayFoodList() {
  let totalCalories = 0;
  let totalCarbs = 0;
  let totalFat = 0;
  let totalProtein = 0;

  let html = "<ul>";
  for (let i = 0; i < foodList.length; i++) {
    html += `<li>${foodList[i].name}: ${foodList[i].calories} calories, ${foodList[i].carbs}g carbs, ${foodList[i].fat}g fat, ${foodList[i].protein}g protein<button class="remove-btn" data-index="${i}">X</button></li>`;
    totalCalories += foodList[i].calories;
    totalCarbs += foodList[i].carbs;
    totalFat += foodList[i].fat;
    totalProtein += foodList[i].protein;
  }
  html += "</ul>";
  html += `<p>Total calories: ${totalCalories.toFixed(2)}</p>`;
  html += `<p>Total carbs: ${totalCarbs.toFixed(2)}g</p>`;
  html += `<p>Total fat: ${totalFat.toFixed(2)}g</p>`;
  html += `<p>Total protein: ${totalProtein.toFixed(2)}g</p>`;
  searchResults.innerHTML = html;

  // update chart data
  var xValues = ["Calories", "Carbs", "Fat", "Protein"];
  var yValues = [totalCalories, totalCarbs, totalFat, totalProtein];
  var barColors = ["#F01717", "#1756F0", "#17F04C", "#D717F0", "#1e7145"];

  var yValues = [
    parseFloat(totalCalories.toFixed(2)),
    parseFloat(totalCarbs.toFixed(2)),
    parseFloat(totalFat.toFixed(2)),
    parseFloat(totalProtein.toFixed(2)),
  ];
  var xValues = ["Calories", "Carbs (g)", "Fat (g)", "Protein (g)"];

  new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "YOUR TOTAL MACROS",
      },
    },
  });

  // add event listeners to remove buttons
  const removeBtns = document.querySelectorAll(".remove-btn");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = btn.getAttribute("data-index");
      foodList.splice(index, 1);
      displayFoodList();
    });
  });
  localStorage.setItem("foodList", JSON.stringify(foodList));
}

// Get the search button
var searchButton = document.getElementById("submit");
function openModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
  const closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

// When the user clicks on the button, open the modal
searchButton.addEventListener("click", function () {
  // Get the modal
  var modal = document.getElementById("openModal");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // Open the modal
  modal.style.display = "block";

  // Move the search button underneath the modal
  document.getElementById("search-button-container").style.position =
    "absolute";
  document.getElementById("search-button-container").style.bottom = "0";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
    // Code to close the modal goes here
    // ...

    // Reset the position of the search button
    document.getElementById("search-button-container").style.position =
      "static";
    document.getElementById("search-button-container").style.bottom = "auto";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      // Code to close the modal goes here
      // ...

      // Reset the position of the search button
      document.getElementById("search-button-container").style.position =
        "static";
      document.getElementById("search-button-container").style.bottom = "auto";
    }
  };
});

const scrollButton = document.querySelector(".button-58");
scrollButton.addEventListener("click", () => {
  const halfPageHeight = document.documentElement.scrollHeight / 2;
  window.scrollBy(0, halfPageHeight);
});
