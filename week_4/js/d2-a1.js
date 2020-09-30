
let firstName = document.getElementById("fname")
let lastName = document.getElementById("lname")
let sButton = document.getElementById("submitButton")

// create UL and append it to the body
let nameUL = document.createElement("ul")
// append nameUL to the body
document.body.appendChild(nameUL)
// attach an even handler to the submit button
sButton.addEventListener("click", function() {
    let fame = firstName.value
    let lame = lastName.value
    let fullName = fame + ", " + lame

    //create an li
    let li = document.createElement("li")

    // add li to the UL
    nameUL.appendChild(li)
    li.innerHTML = fullName

    fuName.innerHTML = fame + ", " + lame + " has been added"
})