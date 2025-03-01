
const calorieForm = document.getElementById('calorie-form');
const calorieResult = document.getElementById('calorie-result');


calorieForm.addEventListener('submit', function (e) {
    e.preventDefault();

  
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value, 10);
    const activityLevel = parseFloat(document.getElementById('activity-level').value);
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    
    if (isNaN(weight) || isNaN(height) || isNaN(age) || isNaN(activityLevel) || !gender) {
        calorieResult.textContent = 'Please fill out all fields correctly.';
        calorieResult.style.color = 'red';
        return;
    }

    // BMR equation
    const bmr = gender === 'male'
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

    // Calculate total calories with activity levels
    const maintenanceCalories = bmr * activityLevel;

    // Calculate calorie deficit 
    const deficitCalories = maintenanceCalories - 500;

    // Display calories 
    calorieResult.textContent = `To maintain your weight: ${Math.round(maintenanceCalories)} calories/day.
To lose weight: ${Math.round(deficitCalories)} calories/day.`;
    calorieResult.style.color = 'green';
});

