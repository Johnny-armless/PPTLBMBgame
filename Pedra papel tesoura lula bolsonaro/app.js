const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

const choices = ['Pedra', 'Papel', 'Tesoura', 'Lula', 'Bolsonaro', 'Xandão','Moro']
let userChoice
let computerChoice

const handleClick = (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = 'User choice: ' + userChoice
  generateComputerChoice()
  getResult()
}

const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)]
  computerChoice = randomChoice
  computerChoiceDisplay.innerHTML = 'Computer choice: ' + computerChoice
}

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement('button')
  button.id = choices[i] // you can delete this id you want to use e.target.HTML in the handleClick
  button.innerHTML = choices[i]
  button.addEventListener('click', handleClick)
  gameGrid.appendChild(button)
}

const getResult = () => {
  switch (userChoice + computerChoice) {
    case 'TesouraPapel':
    case 'PedraTesoura':
    case 'PapelPedra':
      resultDisplay.innerHTML = "A ordem natural do Jogo. Você VENCEU!"
      break
    case 'PapelTesoura':
    case 'TesouraPedra':
    case 'PedraPapel':
      resultDisplay.innerHTML = "A ordem natural do Jogo. Você PERDEU!"
      break
    case 'PedraPedra':
    case 'TesouraTesoura':
    case 'PapelPapel':
    case 'BolsonaroBolsonaro':
    case 'LulaLula':
    case 'XandãoXandão':
    case 'MoroMoro':
    resultDisplay.innerHTML = "Empatou"
    break
    case 'PedraBolsonaro':
    case 'PedraXandão':
    case 'PedraLula':
      resultDisplay.innerHTML = "A Pedra esmaga a cabeça de corrupto. Você VENCEU!"
    break
    case 'BolsonaroPedra':
    case 'XandãoPedra':
    case 'LulaPedra':
      resultDisplay.innerHTML = "A Pedra esmaga a cabeça de corrupto. Você Perdeu!"
    break
  
    case 'PapelBolsonaro':
    case 'PapelLula':
    case 'PapelXandão':
      resultDisplay.innerHTML = "Viva a constituição Brasileira! Você VENCEU!"
    break
    case 'BolsonaroPapel':
    case 'LulaPapel':
    case 'XandãoPapel':
      resultDisplay.innerHTML = "Viva a constituição Brasileira! Você Perdeu!"
    break
    case 'MoroLula':
    case 'MoroBolsonaro':
    
      resultDisplay.innerHTML = "Você prende bandido, Você VENCEU!"
    break
    case 'LulaMoro':
    case 'BolsonaroMoro':
      
        resultDisplay.innerHTML = "Moro prende bandido, Você Perdeu!"
    break
  
    case 'MoroPedra':
    
      resultDisplay.innerHTML = "Uma pedra no cominho não te parará, Sergio Moro WINS!!!"
    break
    case 'MoroXandão':
    case 'LulaXandão':
    case 'BolsonaroXandão':
    
      resultDisplay.innerHTML = "STF sempre vence, Você PERDEU!!!"
     break
     case 'XandãoMoro':
     case 'XandãoLula':
     case 'XandãoBolsonaro':
    
      resultDisplay.innerHTML = "STF sempre vence, Você Predeu o bandido. Xandão WINS!!!"
     break
     case 'MoroPapel':
    
      resultDisplay.innerHTML = "Um unico papel sem assinatura poderá te prejudicar. Você PERDEU!!!"
    break
    case 'MoroTesoura':
    case 'XandãoTesoura':
    
      resultDisplay.innerHTML = "A tesoura corta beneficios, e papeis forjados! Você perdeu"
    break
    case 'LulaTesoura':
    
      resultDisplay.innerHTML = "A tesoura corta dedo. Mr President 9, Você PERDEU"
    break
    case 'PedraMoro':
    
      resultDisplay.innerHTML = "Uma pedra no cominho não é o suficiente, Você PERDEU!!"
    break
    case 'PapelMoro':
    
      resultDisplay.innerHTML = "Um papel sem assinatura não é prova, Você Venceu!!"
    break
    case 'TesouraMoro':
    case 'TesouraXandão':
    
      resultDisplay.innerHTML = "A tesoura corta beneficios, e papeis forjados! Você perdeu"
      break
      case 'TesouraBolsonaro':
    
      resultDisplay.innerHTML = "Nem tesoura nem faca eu sou imortal. Bolsonaro VENCE fácil"

      break
      case 'TesouraLula':
    
      resultDisplay.innerHTML = "Vou cortar mais um dedinho Mr 9! Você venceu"

      break
      case 'LulaBolsonaro':
      case 'BolsonaroLula':
    
      resultDisplay.innerHTML = "Tome picanha, vaza com sua cloroquina! Lula venceu"

      break

      case 'BolsonaroTesoura':
    
      resultDisplay.innerHTML = "Nem tesoura nem faca eu sou imortal. Bolsonaro VENCE fácil"

      break
      
      
    
    
}

}

