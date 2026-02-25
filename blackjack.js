let cards=[]
let sum=0
let hasBlackJack=false
let isAlive=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector('#sum-el')
let cardsEl=document.getElementById("cards-el")
let player={
    name:"Vaishnavi",
    chips:145
}
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $ "+player.chips
function getRandomCard(){
    let randomNumber= Math.floor(Math.random()*13)+1
    if(randomNumber>10){
        return 10
    }else if(randomNumber===1){
        return 11
    }else{
        return randomNumber
    }
}
function startGame(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}
function renderGame(){
    cardsEl.textContent="Cards:"+ " "
    for(let count=0;count<=cards.length;count+=1){
        cardsEl.textContent+=cards[count]+" "
    }
    sumEl.textContent="Sum: "+sum
    if(sum<=20){
    message="Do you want to draw a new card?"
}else if(sum=== 21){
    message="Whoo! You've got Blackjack!"
    hasBlackJack=true
}else{
    message="You're out of the game!"
    isAlive=false
}
messageEl.textContent=message
}
function newCard(){
    if(isAlive==true && hasBlackJack==false){
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    startGame()
    }
    
}
console.log(hasBlackJack)
console.log(isAlive)
//Objects resemble arrays but are buckets to store data in-depth;they are composite/complex datatype;functions or methods can be created inside the object
//Math.random() gives you numbers between 0.0000... and 0.9999...
//arrays are ordered lists of items;are 0 indexed;items of array can be composite/complex datatypes;elements of array can be added and removed using push and pop
//instead of getElementById querySelector can be used but here we need to be more specific that is if it an id we have to write # with the id and in case of class write .
//== does not compare the datatypes of the variables but === also considers the datatypes of the variables and does comparison on that basis
//boolean acts like a gate and allows us to take control whether to apply a logic or not
// console.log(4===3)//false
// console.log(5>2)//true
// console.log(12>12)//false
// console.log(3<0)//false
// console.log(3>=3)//true
// console.log(11<=11)//true
// console.log(3<=2)//false