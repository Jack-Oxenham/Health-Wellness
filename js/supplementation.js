
const form = document.getElementById('recommendation-form');
const goalSelect = document.getElementById('goal-select');
const result = document.getElementById('recommendation-result');


const recommendations = {
    muscle: "We recommend: Protein and Creatine.",
    weight_loss: "We recommend: A calorie deficit, Caffiene as an appetite suppressant and L-Carnitine.",
    energy: "We recommend: Pre-Workout, Caffeine, and Beta-Alanine.",
    recovery: "We recommend: Glutamine, Electrolytes, Creatine and Protein.",
    general_health: "We recommend: Multivitamins, Omega-3, Zinc, Magnesium, Vitamin B12 and D3."
};


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectedGoal = goalSelect.value;

    if (selectedGoal) {
        result.textContent = recommendations[selectedGoal];
    } else {
        result.textContent = "Please select a goal from the dropdown.";
        result.style.color = "red"; 
    }
});

