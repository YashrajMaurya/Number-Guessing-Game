let input = document.getElementById('input')
let btn = document.getElementById('btn')
let wrong = document.querySelector('.wrong')
let guess = document.getElementById('guesses')

let ans = Math.floor(Math.random()*100)+1

let numGuesses = 0

btn.addEventListener('click',guessNumber)

function guessNumber(){
    if(input.value<0 || input.value>100 || input==""){
        wrong.innerHTML = `Enter number between 1 to 100`
    }else if(isNaN(input.value)){
        wrong.innerHTML = "Enter valid number"
    }else{
        numGuesses++
        if(input.value > ans){
            wrong.innerHTML = "Guess smaller number"
            guess.innerHTML = `No. of Guess: ${numGuesses}`
        }else if(input.value < ans){
            wrong.innerHTML = "Guess larger number"
            guess.innerHTML = `No. of Guess: ${numGuesses}`
        }else{
            wrong.style.color = "red"
            wrong.innerHTML = `Congratulations! You guessed it in ${numGuesses} guesses`
            guess.innerHTML = `No. of Guess: ${numGuesses}`
        }
    }
}