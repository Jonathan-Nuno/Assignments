
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

let speakerListUL = document.getElementById("speakerListUL")

const speakers = [
    { name: 'John Doe', category: 'Javascript' },
    { name: 'Mary Doe', category: 'Python' },
    { name: 'Alex Doe', category: 'iOS' },
    { name: 'Steve Doe', category: 'Kotlin' },
    { name: 'Jerry Doe', category: 'Java' },
]

for (let index = 0; index < speakers.length; index++) {
    let speaker = speakers[index]

    speakerItem = `
                <li>
                    <b>${speaker.name}</b>
                    <i>${speaker.category}</i>
                </li>
    `
    // speakerListUL.insertAdjacentHTML('beforeend', speakerItem)

    // speakerListUL.innerHTML += speakerItem
}

// Activity Posts

let postListUL = document.getElementById("postListUL")

let postItems = posts.map(function(post) {
    return `<li>
                <b>${post.title}</b>
                <p>${post.body}</p>
            </li>
    `
})

// postListUL.insertAdjacentHTML('beforeend', postItems.join(" "))

// for (let index = 0; index < posts.length; index++) {
//     let post = posts[index]

//     const postItem = `
//         <li>
//             <b> ${post.title}</b>
//             <p>${post.body}</p>
//         </li>
//     `

//     // postListUL.insertAdjacentHTML('beforeend', postItem)
// }

// Array helpers in javascript
// only available on arrays

let numbers = [1,2,3,4,5,6]
let doubleNumbers = [] // [1,4,6,8,10,12]

for(let index = 0; index < numbers.length; index ++) {
    let number = numbers[index]
    doubleNumbers.push(number * 2)
}
console.log(doubleNumbers)

// MAP - helps to transform the final array

let result = numbers.map(function(no) {
    return no * 2
})

console.log(result)

// Filter

someNumbers = [3,5,6,7,8,-1,4,5,-6]

let positiveNumbers = someNumbers.filter(function(no) {
    return no > 0
})

console.log(positiveNumbers)

let userPost = posts.filter(function(post) {
    return post.userId == 1
})

console.log(userPost)