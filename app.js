const form = document.querySelector('#searchForm');

let imageCounter = 0;
function showImages(shows) {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
            ++imageCounter;
        }
    }
}

function clearImages() {
    for (let i = 0; i < imageCounter; i++) {
        document.body.querySelector(img);
    }
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearImages();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    showImages(res.data);
})