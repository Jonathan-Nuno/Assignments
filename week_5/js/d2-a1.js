
// POST https://island-bramble.glitch.me/orders

// name: String
// coffeeName: String
// total: String
// size: String

// GET https://island-bramble.glitch.me/orders

let ordersUL = document.getElementById("ordersUL")

let request = new XMLHttpRequest()
request.open('GET', 'https://dc-coffeerun.herokuapp.com/api/coffeeorders/')

request.onload = function() {
    
    let result = JSON.parse(this.responseText)
    
    // preferred way of getting acess to orders
    let values = Object.values(result)

    values.map((order) => {
        // order.emailAddress
    })

    let emails = Object.keys(result)

    let orderItems = emails.map((email) => {
        let order = result[email]
        return `<li>${order.emailAddress} - ${order.coffee}</li>`

    })
    ordersUL.innerHTML = orderItems.join('')

}
request.send()