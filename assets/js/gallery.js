import { get } from "./api.js";

let isGalleryOn = false
const submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener('click', () => {
    const search = document.querySelector('#inSearch').value;
    const loadGallery = get(`nasa-gallery`, `q=${search}&page_size=20`);

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

        // data.collection.items.forEach(item => {
        //     fetch(item.href)
        //         .then((res) => { return res.json() })
        //         .then((data) => {
        //         })
        //         .catch((error) => console.error('Searching Images Error! Code:', error));
        // });
    })
        .catch((error) => console.error('Searching gallery error! Code:', error));

    isGalleryOn = true
});

const galleryContainer = document.querySelector(`.gallery-container`)


