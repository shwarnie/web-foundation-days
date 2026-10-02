let notes = [
  { id: 1, text: "Buy milk and bread", category: "personal" },
  { id: 2, text: "Finish the Day 3 assignment", category: "study" },
  { id: 3, text: "Email the project report to Grace", category: "work" },
  { id: 4, text: "Revise JavaScript arrays", category: "study" },
  { id: 5, text: "Call mum", category: "personal" },
  { id: 6, text: "Prepare presentation slides", category: "work" },
];

console.log("Open the Console to see the results.");


// 1. Search notes
function searchNotes(word) {
    return notes.filter(note =>
        note.text.toLowerCase().includes(word.toLowerCase())
    );
}


// 2. Find the longest note
function longestNote() {
    if (notes.length === 0) {
        return null;
    }
else
    return notes.reduce((longest, note) =>
        note.text.length > longest.text.length ? note : longest
    );
}


// 3. Count notes by category
function countByCategory() {
    const counts = {
        personal: 0,
        work: 0,
        study: 0
    };

    notes.forEach(note => {
        if (counts.hasOwnProperty(note.category)) {
            counts[note.category]++;
        }
    });

    return counts;
}


// 4. Get summary
function getSummary() {
    const counts = countByCategory();
    const total = notes.length;

    return `${total} notes: ${counts.personal} personal, ${counts.work} work, ${counts.study} study.`;
}


// 5. Check for duplicate note
function isDuplicate(text) {
    const normalisedText = text.trim().replace(/\s+/g, " ").toLowerCase();

    return notes.some(note => {
        const existingText = note.text
            .trim()
            .replace(/\s+/g, " ")
            .toLowerCase();

        return existingText === normalisedText;
    });
}


// 6. Add a new note
function addNote(text, category) {
    const validCategories = ["personal", "work", "study"];

    // Check text length
    if (text.length < 1 || text.length > 200) {
        console.log("Note was not added: text must be 1–200 characters.");
        return false;
    }

    // Check duplicate
    if (isDuplicate(text)) {
        console.log("Note was not added: duplicate note.");
        return false;
    }

    // Check category
    if (!validCategories.includes(category)) {
        console.log("Note was not added: invalid category.");
        return false;
    }

    notes.push({
        text: text.trim(),
        category: category
    });

    console.log("Note added successfully.");
    return true;
}


// =========================
// TESTS
// =========================

console.log("Search for 'javascript':");

console.log(searchNotes("javascript"));

console.log("Search for 'JAVASCRIPT':");
console.log(searchNotes("JAVASCRIPT"));

console.log("Longest note:");
console.log(longestNote());

console.log("Notes by category:");
console.log(countByCategory());

console.log("Summary:");
console.log(getSummary());

console.log("Is 'Buy groceries for the week' a duplicate?");
console.log(isDuplicate("Buy groceries for the week"));

console.log("Is '  buy   groceries   for the week  ' a duplicate?");
console.log(isDuplicate("  buy   groceries   for the week  "));

console.log("Adding a valid note:");
console.log(addNote("Practice DOM manipulation", "study"));

console.log("Adding a duplicate note:");
console.log(addNote("  Practice   DOM manipulation  ", "study"));

console.log("Adding an invalid category:");
console.log(addNote("Plan weekend activities", "random"));

console.log("Adding an empty note:");
console.log(addNote("", "personal"));

console.log("Updated notes:");
console.log(notes);

console.log("Updated summary:");
console.log(getSummary());