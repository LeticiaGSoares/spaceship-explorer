document.addEventListener('DOMContentLoaded', () => {
    baseURL = "https://images-api.nasa.gov/search?q=apollo&media_type=image&page_size=1"

    fetch(baseURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro de rede! Código: ' + response.status)
            };

            return response.json();
        })
        .then((data) => {
            console.log(data.items[0].links)
        })
        .catch((err) => console.log(err));
})