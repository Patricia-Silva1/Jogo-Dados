const dadosCpu = []
const dadosPlayer = []


const sorteio = () => {
    for (let i = 0; i < 3; i++) {
        dadosCpu[i] = Math.floor(Math.random() * 6) + 1 
        dadosPlayer[i] = Math.floor(Math.random() * 6) + 1
    }
    document.getElementById('cpu').innerHTML = `<img src="./img/dado${dadosCpu[0]}.png"> <img src="./img/dado${dadosCpu[1]}.png"> <img src="./img/dado${dadosCpu[2]}.png">`
    document.getElementById('player').innerHTML = `<img src="./img/dado${dadosPlayer[0]}.png"> <img src="./img/dado${dadosPlayer[1]}.png"> <img src="./img/dado${dadosPlayer[2]}.png">`
    const cpuResult = dadosCpu.reduce((acc, dadosCpu)=> {
        return acc + dadosCpu
    }, 0)
    const playerResult = dadosPlayer.reduce((acc, dadosPlayer) => {
        return acc + dadosPlayer
    }, 0)
    if (cpuResult > playerResult) {
        document.getElementById('winner').innerText = `O vencedor é o CPU (${cpuResult})!!!`
    } else{
        document.getElementById('winner').innerText = `O vencedor é o Player 1 (${playerResult})!!!`
    }
}

const newGame = () => window.location.reload()


