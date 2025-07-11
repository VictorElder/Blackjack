let player = {
    name:"Victor",
    chips:149,
}
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

 

function reload() {
    window.location.reload()
}



function getRandomNumber() {
        let randomNumber = Math.floor(Math.random()*13) + 1

    if(randomNumber === 1){
        return 11
    } else if(randomNumber > 10){
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
        if(hasBlackJack === true){
        reload()
    }
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}




function renderGame(){
    cardsEl.textContent = "Cards:"
    for(let i = 0; i < cards.length; i++){
         cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum:" + sum
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

function newCard() {
    if(isAlive === true && hasBlackJack === false) {
    console.log("Drawing a new card from the deck")
    let card = getRandomNumber()
    sum += card
    cards.push(card)
    renderGame()
    }

}

let messages = [
    "Hey, how's it going",
    "I'm great, thank you! How about you?",
    "All good, Been working on my portfolio lately",
    "Same here!",
    "Great to hear"
]

let randomNumber = Math.floor(Math.random()*6)

//console.log(randomNumber)


// TEST PRATICE FOR RETURN//
let player1Time = 102
let player2Time = 107

function totalRaceTime() {
    return player1Time + player2Time

}


//TEST PRACTICE FOR LOGICAL OPERATORS//
let likeDocumentaries = false
let likeStartups = false


if(likeDocumentaries === true || likeStartups === true) {
   recommendMovie()
} else {
    console.log("Sorry, we don't have any movie recommendation for you")
}


function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}


//TEST PRACTIcE FOR OBJECT//
let airbnb = {
    castle1: {
        name: ["Tower in Chinon", "Room in chinon", "Apartment in Chinon"],
        location: "Loire Valley",
        duration: "July 30 - Aug 4",
        rating: 4.65,
        isfree: false,
    },
    castle2: {
        name: ["Apartment in Saint-Lubin", "Home in Nonancourt", "Home in La Madeleine"],
        location: "france",
        rating: 4.96,
        isFree: true

    }
}

console.log(airbnb.castle1.name)




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
