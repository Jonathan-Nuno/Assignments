
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
        items: []
    }).then(function (docRef) {
        allStores()
    }).catch(function (error) {
        console.log(error)
    })
}

function addGroceryItems(storeId) {
    storeNameIdTextBox = document.getElementById(storeId)
    sName = storeNameIdTextBox.value
    db.collection('stores').doc(storeId)
        .update({
            items: firebase.firestore.FieldValue.arrayUnion(` ${sName}`)
        }).then(function() {
            allStores()
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
            <input type="text" id=${doc.id} placeholder="Enter Grocery Item" />
            <button onclick="addGroceryItems('${doc.id}')">Add Item</button>
            <p> - ${nullChecker(data.items)}</p>
            <button onclick="deleteStore('${doc.id}')">Remove List</button>
            </li>`

            storeList.insertAdjacentHTML('beforeend', storeInfo)
        })
    })
}

function nullChecker(item) {
    if(item == "") {
        return `<b>Grocery list is empty</b>`
    } else {
        return item
    }
}

allStores()