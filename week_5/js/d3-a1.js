/*
// PROMISES

//takes 2 objects, usually resolve and reject
let promise = new Promise(function(resolve, reject) {
    resolve([1,2,3,4,5])
})

// then is fired when you resolve a functon
promise.then((numbers) => {
    console.log(numbers)
    console.log('promise has been resolved')
})
.then(() => {
    console.log("another then")
})
.catch((error) => {
    console.log('Error has happened')
})

function getAllCoffeeOrders() {

    return new Promise(function(resolve, reject) {
        
        let request = new XMLHttpRequest()
        request.open('GET', 'https://dc-coffeerun.herokuapp.com/api/coffeeorders/' )
        
        request.onload = function () {
            let orders = JSON.parse(this.responseText)
            if(orders) {
                resolve(orders)
        }
        else {
            reject('Unable to fetch orders!')
        }
    }

        request.send()

    })
}

getAllCoffeeOrders().then((orders) => {
    console.log(orders)
}).catch((error) => {
    console.log(error)
}) */

// FETCH API to fetch Coffee Orders
// Another library is called AXIOS - Axios is not part of the browser so you must add it explicitly

//by default fetch performs a get request
// fetch('https://dc-coffeerun.herokuapp.com/api/coffeeorders/')
//     .then((response) => {
//         return response.json()
//     }).then((json) => {
//         console.log(json)
//     }).catch((error) => {
//         console.log(error)
//     })

function getAllOrders(completion) {
    // return fetch('https://dc-coffeerun.herokuapp.com/api/coffeeorders/')
    
    fetch('https://dc-coffeerun.herokuapp.com/api/coffeeorders/')
        .then((response) => {
            return response.json()
        }).then((json) => {
            completion(json)
        }).catch((error) => {
            console.log(error)
        }) 
}
// getAllOrders().then(response => response.json())
// .then((json) => {
//     console.log(json)
// })
getAllOrders((orders) => {

})