// Define the array of strings
const strings = ['D1', 'E1', 'F1', 'C2', 'D2', 'E2', 'F2', 'G2', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5', 'B6', 'C6', 'D6', 'E6', 'F6', 'G6', 'H6', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7', 'D8', 'E8', 'F8', 'G8'];

// Get references to the button and result elements
const button = document.getElementById('generate');
const result = document.getElementById('result');

// Add an event listener to the button
button.addEventListener('click', () => {
    // Generate a random index within the range of the array
    const randomIndex = Math.floor(Math.random() * strings.length);

    // Display the randomly selected string on the screen
    result.textContent = strings[randomIndex];
});