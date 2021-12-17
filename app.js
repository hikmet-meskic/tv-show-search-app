const form = document.querySelector('#searchForm');
const row = document.querySelector('.row');

function showImages(shows) {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            img.className = 'column';
            row.append(img);
        }
    }
}

function clearImages() {
    const imgArray = document.querySelectorAll('.column');
    for (img of imgArray) {
        img.remove();
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