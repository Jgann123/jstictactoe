const gameBoard = document.querySelector('#gameBoard')
const infoDisplay = document.querySelector("#info")

const startCells = ["", "", "", "", "", "","", "", ""]

let go = "circle"
infoDisplay.textContent = "Circle goes first"
 
function createBoard() {
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement('div')
        cellElement.classList.add('square') 
        cellElement.id = index
        addEventListener('click', addGo)
        gameBoard.append(cellElement)
    })
} 

createBoard();

function addGo(e) {
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === "circle" ? "cross" : "circle"
    infoDisplay.textContent = "it is now" + go + "'s go."
    e.target.removeEventListenter("click", addGo)
}