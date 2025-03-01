const questions = [
    { question: "What is the primary function of carbohydrates?", options: ["Provide energy", "Build muscle", "Enhance metabolism", "Improve digestion"], answer: 0 },
    { question: "Which vitamin is essential for bone health?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"], answer: 2 },
    { question: "What muscles are trained on a push day?", options: ["Legs", "Back and Biceps", "Shoulders and Arms", "Chest, Shoulders and Triceps"], answer: 3 },
    { question: "What is a training split?", options: ["A schedule that organizes workouts by muscle groups", "A stretching routine", "Skipping legs", "None of the above"], answer: 0 },
    { question: "Which of the following exercises targets the chest?", options: ["Deadlifts", "Squats", "Incline Bench Press", "Bicep Curl"], answer: 2 },
    { question: "How many days per week is it generally recommended to train each muscle group for optimal growth?", options: ["Twice a week", "Once a week", "Every day", "Once a month"], answer: 0 },
    { question: "What is a calorie deficit?", options: ["Eating anything and everything", "Going to McDonalds twice a day", "Consuming fewer calories than your body needs to maintain weight", "Eating more calories than your body needs"], answer: 2 },
    { question: "What macronutrient is most important for muscle repair and growth?", options: ["Proteins", "Carbohydrates", "Fats", "Vitamins"], answer: 0 },
    { question: "How do you ensure you are eating in a calorie deficit?", options: ["Eat what you want and guess the calories", "Track everything you consume accurately in a calorie tracking app", "Skip meals", "Eat the same thing every day"], answer: 1 },
    { question: "Which supplement has been proven to support muscle growth and recovery?", options: ["Fish Oils", "Caffeine", "Chocolate", "Creatine"], answer: 3 },
    { question: "Which of the following is important to check before starting a new supplement?", options: ["The taste", "Other people's opinions", "Social media reviews", "Scientific evidence supporting its effectiveness"], answer: 3 },
    { question: "How can physical exercise benefit mental health?", options: ["By reducing stress and anxiety", "Improving sleep quality", "Boosting mood and self-esteem", "All of the above"], answer: 3 },
    { question: "Which of the following is a healthy way to combat stress?", options: ["Avoid friends and family", "Exercising", "Overeating", "Ignoring responsibilities"], answer: 1 },
    { question: "How could having a coach benefit you?", options: ["They hold you accountable and provide you with guidance.", "They guarantee results", "You can put in less effort", "None of the above"], answer: 0 },
    { question: "How can a coach help with your diet?", options: ["By banning your favorite foods", "Giving you extreme diets", "By customizing a diet plan that suits your goals and preferences", "Making you eat things you don’t like"], answer: 2 },
    { question: "Why is accountability important in achieving health goals?", options: ["It prevents procrastination", "It keeps you motivated", "It helps track progress", "All of the above"], answer: 3 },
    { question: "What muscles are targeted by hammer curls?", options: ["Biceps", "Triceps", "Chest", "Hamstrings"], answer: 0 },
    { question: "What happens if you consume too many calories over time?", options: ["You lose weight", "Your body stores the extra energy and you gain weight", "You lose sleep", "Your training gets worse"], answer: 1 },
    { question: "What is the purpose of a pre-workout supplement?", options: ["Improve sleep", "Increase health", "Increase flexibility", "Boost energy and focus"], answer: 3 },
    { question: "Which muscles are trained on a pull day?", options: ["Back and Biceps", "Chest and Triceps", "Legs", "Arms"], answer: 0 },
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.querySelector('.question-text');
const optionButtons = document.querySelectorAll('.option-btn');
const nextButton = document.getElementById('next-btn');
const resultCard = document.getElementById('quiz-result');
const resultText = document.getElementById('result-text');
const restartButton = document.getElementById('restart-btn');


function loadQuestion(index) {
    const question = questions[index];

    questionText.textContent = `${index + 1}. ${question.question}`;
    optionButtons.forEach((btn, i) => {
        btn.textContent = question.options[i];
        btn.disabled = false;
        btn.style.backgroundColor = "";
        btn.style.color = "";
        btn.onclick = () => {
            if (i === question.answer) {
                score++;
                btn.style.backgroundColor = "#4CAF50";
                btn.style.color = "white";
            } else {
                btn.style.backgroundColor = "#f44336";
                btn.style.color = "white";
            }
            optionButtons.forEach(button => (button.disabled = true));
        };
    });

    nextButton.textContent = index < questions.length - 1 ? "Next" : "Finish";
}


function showResult() {
    resultCard.style.display = "block";
    document.getElementById('quiz-question').style.display = "none";
    resultText.textContent = `You scored ${score} out of ${questions.length}!`;
}


nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
});

restartButton.addEventListener('click', () => {
    score = 0;
    currentQuestionIndex = 0;
    resultCard.style.display = "none";
    document.getElementById('quiz-question').style.display = "block";
    loadQuestion(currentQuestionIndex);
});


loadQuestion(currentQuestionIndex);


