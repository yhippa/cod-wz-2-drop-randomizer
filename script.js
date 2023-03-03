const rows = 10;
const columns = 10;
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

// Generate the grid
const gridContainer = document.getElementById('grid-container');
for (let i = 0; i < rows + 1; i++) {
    for (let j = 0; j < columns + 1; j++) {
        const cell = document.createElement('div');
        if (i === 0 && j > 0) {
            // Add letter headers
            cell.textContent = letters[j - 1];
            cell.classList.add('header');
        } else if (j === 0 && i > 0) {
            // Add number headers
            cell.textContent = i - 1;
            cell.classList.add('header');
        } else {
            // Add empty cells
            cell.dataset.coordinate = `${letters[j - 1]}${i - 1}`;
        }
        gridContainer.appendChild(cell);
    }
}

// Select random drop site
const randomButton = document.getElementById('random-button');
const result = document.getElementById('result');
randomButton.addEventListener('click', () => {
    const cells = document.querySelectorAll('#grid-container div:not(.header)');
    const randomCell = cells[Math.floor(Math.random() * cells.length)];
    const coordinate = randomCell.dataset.coordinate;
    result.textContent = `Selected Drop Site: ${coordinate}`;
    // Highlight selected cell
    cells.forEach(cell => cell.classList.remove('selected'));
    randomCell.classList.add('selected');
});
