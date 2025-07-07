let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")


function startGame(){
    sumEl.textContent = "Sum:" 
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    } else if(sum === 21){
        message = "You've got blackjack"
        hasBlackJack = true
    } else {
        message = "You're out of the game"
        isAlive = false
    }
    messageEl.textContent = message

    console.log(message)
    console.log(isAlive)
}




//CASH OUT!
//console.log(hasBlackJack)


// let age = 100

// if (age < 100) {
//     console.log("Not eligible")
// } else if(age === 100) {
//     console.log("Here is your birthday card from the king!")
// } else {
//     console.log("Not eligible, you have already gotten one")
// }
