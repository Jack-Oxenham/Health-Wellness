const moodForm = document.getElementById("mood-form");
const moodEntries = document.getElementById("mood-entries");

moodForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const mood = document.getElementById("mood").value;
    const notes = document.getElementById("mood-notes").value;

    const entry = document.createElement("li");
    entry.innerHTML = `
        <strong>${mood}</strong> - ${notes}
        <button class="delete-entry">Delete</button>
    `;

    const deleteButton = entry.querySelector(".delete-entry");
    deleteButton.addEventListener("click", () => {
        entry.remove();
    });

    moodEntries.appendChild(entry);

    moodForm.reset();
});
