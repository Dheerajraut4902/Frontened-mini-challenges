const boardElem = document.getElementById('board');
const statusElem = document.getElementById('status');
const resetBtn = document.getElementById('reset');

let board; // array for X/O
let currentPlayer;
let gameActive;

function initGame() {
  board = Array(9).fill('');
  currentPlayer = 'X';
  gameActive = true;
  statusElem.textContent = `Player ${currentPlayer}'s turn`;
  renderBoard();
}

function renderBoard() {
  boardElem.innerHTML = '';
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.textContent = board[i];
    cell.dataset.index = i;
    cell.addEventListener('click', handleCellClick);
    boardElem.appendChild(cell);
  }
}

function handleCellClick(e) {
  const index = e.target.dataset.index;
  if (!gameActive || board[index]) return;
  board[index] = currentPlayer;
  renderBoard();
  if (checkWin()) {
    statusElem.textContent = `Player ${currentPlayer} wins!`;
    gameActive = false;
  } else if (board.every(cell => cell)) {
    statusElem.textContent = "It's a draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusElem.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function checkWin() {
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  return winPatterns.some(pattern =>
    pattern.every(index => board[index] === currentPlayer)
  );
}

resetBtn.addEventListener('click', initGame);

initGame();