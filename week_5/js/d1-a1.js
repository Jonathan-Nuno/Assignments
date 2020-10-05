/*
// built into JavaScript
let request = new XMLHttpRequest()

request.addEventListener('load', function() {
    console.log(this.responseText)

    let result = JSON.parse(this.response)
    console.log(result)

})

request.open('GET', 'https://jsonplaceholder.typicode.com/posts')

request.send()
*/

/*
let request = new XMLHttpRequest()

request.addEventListener('load', function () {

    let result = JSON.parse(this.responseText)

    result.all.forEach((fact) => {
        console.log(fact.text)
        // make sure user is not null or undefined
        if (fact.user) {
            console.log(fact.user.name.first)
            console.log(fact.user.name.last)
        }

    })


})

request.open('GET', 'https://cat-fact.herokuapp.com/facts')

request.send()
*/

// let request = new XMLHttpRequest()

//using event listener
// request.addEventListener('readystatechange', function() {

// })

// using anonymous functions
// request.onreadystatechange = function () {
//     if(this.status == 200) {
//         console.log(this.status)
//     }

// }

// request.open('GET', 'https://cat-fact.herokuapp.com/facts')

// request.send()

let request = new XMLHttpRequest()

let factList = document.getElementById("factList")

request.addEventListener('load', function () {

    let result = JSON.parse(this.responseText)

    let facts = result.all.map((facts) => {
        return `<li>
                <p>${facts.text}</p>
                <p>Submitted by ${facts.user ? facts.user.name.first : 'Not'} ${facts.user ? facts.user.name.last : 'available'}</p>       
                </li>`
    })

    factList.insertAdjacentHTML('beforeend', facts.join(''))


})

request.open('GET', 'https://cat-fact.herokuapp.com/facts')

request.send()