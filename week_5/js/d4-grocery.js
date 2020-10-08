
let storeName = document.getElementById("storeName")
let storeAddress = document.getElementById("storeAddress")
let addGroceryStore = document.getElementById("addGroceryStore")
let storeList = document.getElementById("storeList")

addGroceryStore.addEventListener('click', () => {
    let name = storeName.value
    let address = storeAddress.value

    saveToFirebase(name, address)
})

// function to add items to firebase
function saveToFirebase(name, address) {
    db.collection('stores').add({
        name: name,
        address: address,
    }).then(function (docRef) {
        allStores()
    }).catch(function (error) {
        console.log(error)
    })
}

function deleteStore(documentId) {
    db.collection('stores').doc(documentId).delete()
    .then(function() {
        // fetch to update store list
        allStores()
    }).catch(function(error) {

    })
}

function allStores() {
    storeList.innerHTML = ""

    db.collection('stores').get().then(snapshot => {
        snapshot.forEach((doc) => {
            let data = doc.data()
            let storeInfo = `<li>
            <label>${data.name} - ${data.address}</label>
            <button onclick="deleteStore('${doc.id}')">Remove</button>
            </li>`

            storeList.insertAdjacentHTML('beforeend', storeInfo)
        })
    })
}

allStores()