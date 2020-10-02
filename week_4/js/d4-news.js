
function nullCheck(label) {
    if (label == null) {
        return ""
    } else {
        return label
    }
}

function nullCheckImage(label) {
    if (label == null) {
        return 'https://tinyurl.com/y5fcqdr6'
    } else {
        return label
    }
}

function getSourceUrl(sourceId) {
    let foundSource = sources.sources.find((source) => {
        return source.id == sourceId
    })

    return foundSource == null ? "": foundSource.url
}

let articleList = document.getElementById("articleList")

let art = news.articles.map((art) => {
    return ` <li>
            <p>${nullCheck(art.author)}</p>
            <b>${nullCheck(art.title)}</b>
            <p>${nullCheck(art.description)}</p>
            <a class = "urlToArt" href = ${nullCheck(art.url)}>Article Link</a>
            <img class = "artImage" src = ${nullCheckImage(art.urlToImage)} />
            <p>${nullCheck(art.publishedAt)}</p>
            <a class = "urlToSource" href = "${getSourceUrl(art.source.id)}" = >${nullCheck(art.source.id)}</a>
            </li>`
})

articleList.insertAdjacentHTML('beforeend', art)
