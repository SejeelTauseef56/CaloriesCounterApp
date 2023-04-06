function calculateBMI() {
  var height = document.getElementById("height-bmi").value;
  var weight = document.getElementById("weight-bmi").value;
  var metricSystem = document.getElementById("metric-system").value;

  if (height === "" || weight === "") {
    document.getElementById("result-bmi").innerHTML =
      "Please enter your height and weight to calculate your BMI.";
    return;
  }

  if (metricSystem === "imperial") {
    // Convert height from inches to cm
    height = height * 2.54;
    // Convert weight from lbs to kg
    weight = weight * 0.45359237;
  }

  var bmi = weight / Math.pow(height / 100, 2);
  var bmiRounded = bmi.toFixed(1);

  var weightStatus = "";
  if (bmi < 18.5) {
    weightStatus = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    weightStatus = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    weightStatus = "Overweight";
  } else if (bmi >= 30) {
    weightStatus = "Obese";
  }

  if (metricSystem === "metric") {
    var result =
      "Your BMI is " + bmiRounded + ". You are " + weightStatus + ".";
  } else {
    var result =
      "Your BMI is " + bmiRounded + ". You are " + weightStatus + ".";
    result +=
      "<br>Your height is " +
      height.toFixed(1) +
      " in and your weight is " +
      weight.toFixed(1) +
      " lb.";
  }

  document.getElementById("result-bmi").innerHTML = result;
}

function calculateCalories() {
  const activityLevel = document.getElementById("activity").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;

  let bmr;
  if (gender === "male") {
    bmr = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
  } else {
    bmr = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
  }

  const dailyCalories = bmr * activityLevel;

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML =
    "Your daily calorie intake should be: " +
    dailyCalories.toFixed(0) +
    " calories";
}

function calculateCalories() {
  const activityLevel = document.getElementById("activity").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const height = document.getElementById("height-bmi").value;
  const weight = document.getElementById("weight-bmi").value;

  let bmr;
  if (gender === "male") {
    bmr = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
  } else {
    bmr = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
  }

  const dailyCalories = bmr * activityLevel;
  const calorieSurplus = dailyCalories + 500;
  const calorieDeficit = dailyCalories - 500;

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML =
    "Your daily calorie intake should be: " +
    dailyCalories.toFixed(0) +
    " calories.<br>";
  resultDiv.innerHTML +=
    "To be in a calorie surplus (+500 calories), consume " +
    calorieSurplus.toFixed(0) +
    " calories.<br>";
  resultDiv.innerHTML +=
    "To be in a calorie deficit (-500 calories), consume " +
    calorieDeficit.toFixed(0) +
    " calories.";
}

const scrollButton = document.querySelector(".button-58");
scrollButton.addEventListener("click", () => {
  const halfPageHeight = document.documentElement.scrollHeight / 2;
  window.scrollBy(0, halfPageHeight);
});
