let article = news.articles.find((article) => {
    return article.source.name == "Npr.org"
})

console.log(article)

function nullCheck(label) {
    if(label == null ) {
        return "Not Available"
    } else {
        return label
    }
}

function nullCheckImage(label) {
    if(label == null ) {
        return 'https://tinyurl.com/y5fcqdr6'
    } else {
        return label
    }
}

let articleList = document.getElementById("articleList")

let art = news.articles.map((art) => {
    return ` <li>
            <p>${nullCheck(art.author)}</p>
            <b>${nullCheck(art.title)}</b>
            <p>${nullCheck(art.description)}</p>
            <a class = "urlToArt" href = ${nullCheck(art.url)}> "Article Link"</a>
            <img class = "artImage" src = ${nullCheckImage(art.urlToImage)} />
            <p>${nullCheck(art.publishedAt)}</p>
            </li>`
})

articleList.insertAdjacentHTML('beforeend', art)
