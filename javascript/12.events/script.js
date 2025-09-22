let entry = []
let form = document.getElementById("form1")
let table = document.getElementById("table")

 form.addEventListener("submit",(e)=>{
   e.preventDefault()
   let newentry ={ name: e.target.name.value,
     email : e.target.email.value,
     address :e.target.address.value
   }
   entry.push(newentry)
   createtable(newentry)
 })
 
  function createtable(value){
     let  row = document.createElement("tr")
     let col1 = document.createElement('td')
      col1.textContent = value.name
     let col2 = document.createElement('td')
     col2.textContent = value.email
     let col3 = document.createElement('td')
     col3.textContent = value.address
     let col4 = document.createElement('td')
     let deleteBtn = document.createElement("button")
      deleteBtn.textContent = "Delete"
      deleteBtn.addEventListener("click", ()=>{
        row.remove()  
      })
      
      col4.appendChild(deleteBtn)
     row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)
        table.style.display="block"
    table.querySelector("tbody").appendChild(row)
  }






  // const cells = document.querySelectorAll('.cell');
// let currentPlayer = 'X';

// let scoreX = 0;
// let scoreO = 0;

// const turnEl = document.getElementById('turn');
// const scoreXEl = document.getElementById('scoreX');
// const scoreOEl = document.getElementById('scoreO');
// const resetBtn = document.getElementById('resetBtn');

// const WIN_COMBINATIONS = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// function updateTurnUI() {
//     turnEl.textContent = currentPlayer;
// }

// function updateScoreUI() {
//     scoreXEl.textContent = scoreX;
//     scoreOEl.textContent = scoreO;
// }


// function highlightWinner(player) {
//     WIN_COMBINATIONS.forEach(comb => {
//         if (comb.every(i => cells[i].textContent === player)) {
//             comb.forEach(i => cells[i].classList.add('winner'));
//         }
//     });
// }

// function checkWin(player) {
//     return WIN_COMBINATIONS.some(combination => {
//         return combination.every(i => cells[i].textContent === player);
//     });
// }

// cells.forEach(cell => {
//     cell.addEventListener('click', () => {
//         if (cell.textContent === "") {
//             cell.textContent = currentPlayer;

//             if (checkWin(currentPlayer)) {
//                 alert(currentPlayer + " Winner");
//                 highlightWinner(currentPlayer);
//                 if (currentPlayer === 'X') scoreX++;
//                 else scoreO++;
//                 updateScoreUI();
//             }
//             else if ([...cells].every(c => c.textContent !== "")) {
//                 alert("Match Draw");
//             }
//             else {
//                 currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//                 updateTurnUI();
//             }
//         }
//     }, { once: true });
// });

// resetBtn.addEventListener('click', () => {
//     cells.forEach(cell => {
//         cell.textContent = "";
//         cell.classList.remove('winner');
//     });
//     currentPlayer = 'X';
//     updateTurnUI();
// });
