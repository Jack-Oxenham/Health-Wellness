// Save and Load Calorie Deficit
document.getElementById("save-calories").addEventListener("click", function () {
    const calories = document.getElementById("daily-calories").value;

    if (calories) {
        localStorage.setItem("calorieTarget", calories);
        document.getElementById("calorie-message").textContent = `Your daily calorie target is set to ${calories} kcal.`;
    }
});

// Load saved calorie target on page load
window.addEventListener("load", function () {
    const calorieTarget = localStorage.getItem("calorieTarget");
    if (calorieTarget) {
        document.getElementById("calorie-message").textContent = `Your daily calorie target is ${calorieTarget} kcal.`;
    }
});

// Goal Tracking Functionality
document.getElementById("save-goal").addEventListener("click", function () {
    const date = document.getElementById("goal-date").value;
    const description = document.getElementById("goal-description").value;

    if (date && description) {
        const savedGoals = JSON.parse(localStorage.getItem("goals")) || [];
        savedGoals.push({ date, description });
        localStorage.setItem("goals", JSON.stringify(savedGoals));

        addGoalToLog(date, description, savedGoals.length - 1);
        document.getElementById("goal-form").reset();
    }
});

// Load Goals on Page Load
window.addEventListener("load", function () {
    const savedGoals = JSON.parse(localStorage.getItem("goals")) || [];
    savedGoals.forEach((goal, index) => {
        addGoalToLog(goal.date, goal.description, index);
    });
});

// Add Goal to Log
function addGoalToLog(date, description, index) {
    const goalLog = document.getElementById("goal-log");

    const entry = document.createElement("div");
    entry.className = "goal-entry";
    entry.dataset.index = index;

    const entryText = document.createElement("p");
    entryText.textContent = `Goal Date: ${date} - ${description}`;
    entry.appendChild(entryText);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-button";
    editButton.addEventListener("click", () => editGoal(entry, index));
    entry.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", () => deleteGoal(index));
    entry.appendChild(deleteButton);

    goalLog.appendChild(entry);

    // Edit a Goal
function editGoal(entry, index) {
    const goals = JSON.parse(localStorage.getItem("goals")) || [];
    const goal = goals[index];

    if (goal) {
        // Populate the form with the existing goal details
        document.getElementById("goal-date").value = goal.date;
        document.getElementById("goal-description").value = goal.description;

        // Update the save button to save changes
        const saveButton = document.getElementById("save-goal");
        saveButton.textContent = "Update Goal";
        saveButton.onclick = function () {
            // Update the goal in localStorage
            const updatedDate = document.getElementById("goal-date").value;
            const updatedDescription = document.getElementById("goal-description").value;

            if (updatedDate && updatedDescription) {
                goals[index] = { date: updatedDate, description: updatedDescription };
                localStorage.setItem("goals", JSON.stringify(goals));
                location.reload(); // Reload the page to reflect changes
            }
        };
    }
}

// Delete a Goal
function deleteGoal(index) {
    const goals = JSON.parse(localStorage.getItem("goals")) || [];
    goals.splice(index, 1); // Remove the goal from the array
    localStorage.setItem("goals", JSON.stringify(goals));
    location.reload(); // Reload the page to reflect changes
}

}
