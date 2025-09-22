
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';
    let gameActive = true;

    let scoreX = 0;
    let scoreO = 0;

    const playerXEl = document.getElementById('playerX');
    const playerOEl = document.getElementById('playerO');
    const scoreXEl = document.getElementById('scoreX');
    const scoreOEl = document.getElementById('scoreO');
    const resetBtn = document.getElementById('resetBtn');

    const WIN_COMBINATIONS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    function updateTurnUI() {
      if (currentPlayer === 'X') {
        playerXEl.classList.add('active');
        playerOEl.classList.remove('active');
      } else {
        playerOEl.classList.add('active');
        playerXEl.classList.remove('active');
      }
    }

    function updateScoreUI() {
      scoreXEl.textContent = scoreX;
      scoreOEl.textContent = scoreO;
    }

    function highlightWinner(player) {
      WIN_COMBINATIONS.forEach(comb => {
        if (comb.every(i => cells[i].textContent === player)) {
          comb.forEach(i => cells[i].classList.add('winner'));
        }
      });
    }

    function checkWin(player) {
      return WIN_COMBINATIONS.some(combination =>
        combination.every(i => cells[i].textContent === player)
      );
    }

    cells.forEach(cell => {
      cell.addEventListener('click', () => {
        if (!gameActive || cell.textContent !== "") return;

        cell.textContent = currentPlayer;

        if (checkWin(currentPlayer)) {
          highlightWinner(currentPlayer);
          alert(currentPlayer + " Wins!");
          if (currentPlayer === 'X') scoreX++;
          else scoreO++;
          updateScoreUI();
          gameActive = false;
        } 
        else if ([...cells].every(c => c.textContent !== "")) {
          alert("Match Draw!");
          gameActive = false;
        } 
        else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          updateTurnUI();
        }
      });
    });

    resetBtn.addEventListener('click', () => {
      cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove('winner');
      });
      currentPlayer = 'X';
      updateTurnUI();
      gameActive = true;
    });

    // initialize UI
    updateTurnUI();
    updateScoreUI();
