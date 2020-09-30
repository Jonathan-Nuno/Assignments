
// Activity 1

// let firstName = document.getElementById("fname")
// let lastName = document.getElementById("lname")
// let sButton = document.getElementById("submitButton")

// // UL
// let nameUL = document.createElement("ul")
// // appending ul to body
// document.body.appendChild(nameUL)

// // button function
// sButton.addEventListener("click", function() {
//     let fame = firstName.value
//     let lame = lastName.value
//     let fullName = fame + ", " + lame


//     //create an li
//     let li = document.createElement("li")

//     // add li to the UL
//     nameUL.appendChild(li)
//     li.innerHTML = fullName

//     fuName.innerHTML = fame + ", " + lame + " has been added"
// })

let speakerListUL = document.createElement("ul")

const speakers = [
    {name: 'John Doe', category: 'Javascript'},
    {name: 'Mary Doe', category: 'Python'},
    {name: 'Alex Doe', category: 'iOS'},
    {name: 'Steve Doe', category: 'Kotlin'},
    {name: 'Jerry Doe', category: 'Java'},
]

for(let index = 0; index < speakers.length; index ++) {
    let speaker = speakers[index]

    speakerItem = `
                <li>
                    <b>${speaker.name}</b>
                    <i>${speaker.category}</i>
                </li>
    `
    speakerListUL.insertAdjacentHTML('beforeend', speakerItem)

    // speakerListUL.innerHTML += speakerItem
}