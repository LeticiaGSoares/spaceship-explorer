import { get } from "./api.js";

const galleryContainer = document.querySelector(`.gallery-container`)
const submitBtn = document.getElementById('submitBtnGallery')
let isGalleryOn = false

function searchImage(keyword) {
    const loadGallery = get(`nasa-gallery`, `q=${keyword}&page_size=15`);

    if (isGalleryOn) {
        const imagesOn = document.querySelectorAll('.gallery-image')

        imagesOn.forEach(image => {
            image.remove()
        })
    }

    loadGallery.then((data) => {
        data.collection.items.forEach(item => {
            const imgLink = item.links[0].href
            const box = document.createElement('div')

            box.innerHTML = `
                    <img src="${imgLink}" alt="">
                    <a href="${imgLink}" download target="_blank">
                        <i class="fa-solid fa-eye"></i>
                    </a>
                    
            `

            box.classList.add('gallery-image')

            galleryContainer.appendChild(box)
        })
    })
        .catch((error) => console.error('Searching gallery error! Code:', error));

    isGalleryOn = true
}

document.addEventListener('DOMContentLoaded', () => {
    searchImage("earth")
})

submitBtn.addEventListener('click', () => {
    const search = document.querySelector('#inSearchGallery').value;
    searchImage(search) 
});




