function createGame(player1, hour, player2){
    return `
    <li>
        <img src="assets/imgs/bandeiras/${player1}.svg" alt="bendeira brasil">
        <strong>${hour}</strong>
        <img src="assets/imgs/bandeiras/${player2}.svg" alt="bandeira serbia">
    </li>
    `
}

function createCard(date, day, games){
    return `
    <div class="card">
        <h2> ${date}<span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    `
}

document.querySelector('#app').innerHTML = `
        <header>
            <img src="./assets/imgs/logo.svg" alt="logo NLW Copa - Rocketseat">
        </header>
        <main class="cards">
            ${createCard('24/11', 'quinta', createGame('brazil', '16:00', 'serbia') + createGame('portugal', '16:00', 'uruguay'))}
            ${createCard('28/11', 'segunda', createGame('brazil', '13:00', 'switzerland') + createGame('portugal', '16:00', 'uruguay'))}
            ${createCard('02/12', 'sexta', createGame('brazil', '16:00', 'cameroon'))}
        </main>

`