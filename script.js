const randomDropBtn = document.getElementById('random-drop-btn');
const dropResult = document.getElementById('drop-result');
const historyList = document.getElementById('history-list');

const validDrops = [
    'D1', 'E1', 'F1', 'C2', 'D2', 'E2', 'F2', 'G2', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5', 'B5', 'C6', 'D6', 'E6', 'F6', 'G6', 'H6', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7', 'D8', 'E8', 'F8', 'G8'
];

function getRandomDrop() {
    const randomIndex = Math.floor(Math.random() * validDrops.length);
    return validDrops[randomIndex];
}

randomDropBtn.addEventListener('click', () => {
    const drop = getRandomDrop();
    dropResult.textContent = `Random Drop: ${drop}`;

    const li = document.createElement('li');
    li.textContent = drop;

    const resultSelect = document.createElement('select');
    resultSelect.innerHTML = `
        <option value="win">Win</option>
        <option value="loss">Loss</option>
        <option value="other">Other</option>
    `;

    li.appendChild(resultSelect);
    historyList.appendChild(li);
});

