let request = new XMLHttpRequest()

let spiderList = document.getElementById("spiderList")

request.open('GET', 'http://www.omdbapi.com/?s=spider-man&apikey=f5da275d')

request.addEventListener('load', function () {

    let result = JSON.parse(this.responseText)

    let spiders = result.Search.map((spiders) => {
        return `<img onclick = "spiderInfo('${spiders.imdbID}')" src = ${spiders.Poster} alt = "${spiders.Title}" />
                <p>${spiders.Title}</p>`
    })

    spiderList.insertAdjacentHTML('beforeend', spiders.join(''))

})


request.send()

let featSpider = document.getElementById("featSpider")

function spiderInfo(imdbID) {
    let info = `http://www.omdbapi.com/?i=${imdbID}&apikey=f5da275d`
    fetch(info)
    .then(response => response.json())
    .then(movies => {
        console.log(movies)
    })

    featSpider.insertAdjacentHTML('beforeend', movies.join(''))
}
// function spiderInfo(imdbID) {
//     let reqInfo = new XMLHttpRequest()

//     let info = `http://www.omdbapi.com/?i=${imdbID}&apikey=f5da275d`
//     reqInfo.open('GET', info)

//     reqInfo.addEventListener("load", function () {
//         let spiderStats = JSON.parse(this.responseText)

//         return `<p>${spiderStats.Year}</p>`
        
//     })

//     featSpider.insertAdjacentHTML('beforeend', spiderStats)
// }