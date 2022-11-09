function createGame(player1, hour, player2){
    return `
    <li>
        <img src="assets/imgs/bandeiras/${player1}.svg" alt="bendeira brasil">
        <strong>${hour}</strong>
        <img src="assets/imgs/bandeiras/${player2}.svg" alt="bandeira serbia">
    </li>
    `
}
let delay = -0.4
function createCard(date, day, games){
    delay = delay + 0.4;
    return `
    <div class="card" style='animation-delay: ${delay}s'>
        <h2> ${date}<span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    `
}

document.querySelector('.cards').innerHTML = 
    createCard('20/11', 'domingo', createGame('catar', '13:00', 'equador'))
    + createCard('21/11', 'segunda', 
        createGame('inglaterra', '10:00', 'iran')
        + createGame('senegal', '13:00', 'holanda')
        + createGame('estadosunidos', '16:00', 'gales')
        )
    + createCard('22/11', 'terça', createGame('argentina', '07:00', 'saudi arabia')
        + createGame('denmark', '10:00', 'tunisia')
        + createGame('mexico', '13:00', 'poland')
        + createGame('france', '16:00', 'australia')
        )
    + createCard('23/11', 'quarta', createGame('switzerland', '07:00', 'cameroon')
        + createGame('uruguay', '10:00', 'south korea')
        + createGame('portugal', '13:00', 'ghana')
        + createGame('brazil', '16:00', 'serbia')
        )

