let entries = [];

function addEntry() {
    const dateInput = document.getElementById("date-input");
    const caloriesInput = document.getElementById("calories-input");

    const dateValue = dateInput.value;
    const caloriesValue = caloriesInput.value;

    if (dateValue && caloriesValue) {
        const entry = { date: dateValue, calories: caloriesValue };
        entries.push(entry);
        updateTracker();
        clearForm();
    }
}

function updateTracker() {
    const trackerBody = document.getElementById("tracker-body");
    trackerBody.innerHTML = "";

    entries.forEach(entry => {
        const row = document.createElement("tr");

        const dateCell = document.createElement("td");
        dateCell.innerText = entry.date;
        row.appendChild(dateCell);

        const caloriesCell = document.createElement("td");
        caloriesCell.innerText = entry.calories;
        row.appendChild(caloriesCell);

        trackerBody.appendChild(row);
    });
}

function clearForm() {
    const dateInput = document.getElementById("date-input");
    const caloriesInput = document.getElementById("calories-input");

    dateInput.value = "";
    caloriesInput.value = "";
}

updateTracker();
