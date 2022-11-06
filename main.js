function createGame(player1, hour, player2) {
  return `
        <li>
          <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
          <strong>${hour}</strong>
          <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
        </li>
`
}
let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
   <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 
  createCard( "24/11","quinta", createGame ("uruguay", "10:00", "southkorea") + createGame("serbia", "16:00", "brazil")) + createCard("28/11","segunda", createGame("southkorea", "10:00", "ghana") + createGame("brazil", "13:00", "switzerland")) + createCard("02/12","sexta", createGame("southkorea", "12:00", "portugual") + createGame("cameroon", "16:00", "brazil"))
