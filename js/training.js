
const form = document.getElementById('training-form');
const logEntries = document.getElementById('log-entries');

// Load entries from localStorage
let trainingLog = JSON.parse(localStorage.getItem('trainingLog')) || [];


function renderEntries() {
    logEntries.innerHTML = ''; 
    trainingLog.forEach((entry, index) => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${entry.date}</td>
            <td>${entry.exercise}</td>
            <td>${entry.weight}</td>
            <td>${entry.reps}</td>
            <td>${entry.sets}</td>
            <td>
                <button class="edit-btn" data-index="${index}">Edit</button>
                <button class="delete-btn" data-index="${index}">Delete</button>
            </td>
        `;
        logEntries.appendChild(newRow);
    });
}

// Save entries to localStorage
function saveToLocalStorage() {
    localStorage.setItem('trainingLog', JSON.stringify(trainingLog));
}

// Handle form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();

    
    const date = document.getElementById('date').value;
    const exercise = document.getElementById('exercise').value;
    const weight = document.getElementById('weight').value;
    const reps = document.getElementById('reps').value;
    const sets = document.getElementById('sets').value;

    if (!date || !exercise || !weight || !reps || !sets) {
        alert('Please fill out all fields!');
        return;
    }

    // Add new entry
    trainingLog.push({ date, exercise, weight, reps, sets });
    saveToLocalStorage();
    renderEntries();

    
    form.reset();
});

// Handle Edit and Delete actions
logEntries.addEventListener('click', function (e) {
    const index = e.target.dataset.index;

    if (e.target.classList.contains('delete-btn')) {
       
        trainingLog.splice(index, 1);
        saveToLocalStorage();
        renderEntries();
    } else if (e.target.classList.contains('edit-btn')) {
        
        const entry = trainingLog[index];
        document.getElementById('date').value = entry.date;
        document.getElementById('exercise').value = entry.exercise;
        document.getElementById('weight').value = entry.weight;
        document.getElementById('reps').value = entry.reps;
        document.getElementById('sets').value = entry.sets;

     
        trainingLog.splice(index, 1);
        saveToLocalStorage();
        renderEntries();
    }
});


renderEntries();


