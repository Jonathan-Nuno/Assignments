
let addDataButton = document.getElementById("addDataButton")
let moviesList = document.getElementById("moviesList")
let movieNameTextField = document.getElementById("movieNameTextField")
let movieYearTextField = document.getElementById("movieYearTextField")
let addMovieButton = document.getElementById("addMovieButton")

addMovieButton.addEventListener('click', () =>{
    let name = movieNameTextField.value
    let year = movieYearTextField.value

    saveDataToFirebase(name, year)
})

// write something to firestore database

function saveDataToFirebase(name, year) {
    db.collection('movies').add({
        name: name,
        year: year,
    }).then(function (docRef) {
        getAllMovies()
    }).catch(function (error) {
        console.log(error)
    })

}

function deleteMovie(documentId) {
    db.collection("movies").doc(documentId).delete()
    .then(function() {
        // fetch all movies again
        getAllMovies()
    }).catch(function(error) {

    })
}

function getAllMovies() {

    //reset the moviesList
    moviesList.innerHTML = ""

    db.collection("movies").get().then(snapshot => {
        snapshot.forEach((doc) => {
            let data = doc.data()
            let movieItem = `<li>
            <label>${data.name} - ${data.year}</label>
            <button onclick="deleteMovie('${doc.id}')">Delete</button>
            </li>`

            moviesList.insertAdjacentHTML('beforeend', movieItem)
        })
    })
}

getAllMovies()