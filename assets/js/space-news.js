import { get } from "./api.js";
const spaceNews = document.querySelector('.news-container')
const submitBtnNews = document.querySelector('#submitBtnNews')
let isArticleOn = false

function searchArticle(keyword) {
    const loadArticles = get(`space-news`, `?limit=3&${keyword}`)
    console.log(isArticleOn)

    if(isArticleOn){
        const articlesOn = document.querySelectorAll('.article-box')
        articlesOn.forEach((article) => {article.remove()})
    }

    loadArticles.then((data) => {
        data.results.forEach((data => {
            const articleBox = document.createElement('div')
            articleBox.classList.add('article-box')

            articleBox.innerHTML = `
                <img src="${data.image_url}" class="img-section">
                <div class="info-section">
                    <div class="title">${data.title}</div>
                    <div class="summary">${data.summary}</div>
                    <div class="update">${data.updated_at}</div>
                    <div class="author">${data.news_site}</div>
                </div>
            `
            spaceNews.appendChild(articleBox)

        }))
    })
    isArticleOn = true
}

document.addEventListener('DOMContentLoaded', () => {
    searchArticle("")
})

submitBtnNews.addEventListener('click', () => {
    const inSearchNews = document.querySelector('#inSearchNews').value
    searchArticle("search=" + inSearchNews)
})