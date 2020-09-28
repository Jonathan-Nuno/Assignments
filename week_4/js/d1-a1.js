
//Activity 1

imageFriends = []

imageFriends.push("Prison")
imageFriends.push("Jim")
imageFriends.push("Mike")
imageFriends.push("Dwight")
imageFriends.push("Demntors")
imageFriends.push("Pam")

console.log("**For Loop**")
for (let index = 0; index < imageFriends.length; index++) {
    console.log(imageFriends[index])
}


console.log("**While Loop**")
let index = 0
while (index < imageFriends.length) {
    console.log(imageFriends[index])
    index += 2
}


// Activity 2
// Write a program which will check if the letter is a vowel
// if letter is vowel then print "VOWEL"
// if letter is not a vowel then print "NOT A VOWEL"

let letter = "a"

if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
    console.log(letter + " is a vowel")
} else {
    console.log(letter + " not a vowel")
}

function vowelChecker(input) {
    if (input == "a" || input == "e" || input == "i" || input == "o" || input == "u") {
        console.log(input + " is a vowel")
    } else {
        console.log(input + " not a vowel")
    }
}

vowelChecker("c")
vowelChecker("i")

// check if the letter is a vowel or not


// Activity 3
console.log("Activity 3")

function add(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber)
}
console.log('Value of variable "num" ')
let num = add(25, 39)

console.log("Assignment 2 answer")

function numCheck(number) {
    if (number >= 50 && number <= 80) {
        console.log(65)
    } else {
        console.log(80)
    }
}

numCheck(num)