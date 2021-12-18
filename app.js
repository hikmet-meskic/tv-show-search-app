const form = document.querySelector('#searchForm');
const row = document.querySelector('.row');

function showImages(shows) {
    for (let result of shows) {
        if (result.show.image) {
            const div = document.createElement('DIV');
            const anchorTag = document.createElement('A');
            const img = document.createElement('IMG');
            const paragraph = document.createElement('P');
            let paragraphText = '';
            anchorTag.href = `http://www.imdb.com/title/${result.show.externals.imdb}`;
            anchorTag.target = '_blank';
            img.src = result.show.image.medium;
            anchorTag.append(img);
            text = `<b>Name:</b> ${result.show.name} <br>
                    <b>Genres:</b> ${result.show.genres} <br>
                    <b>Average rating:</b> ${result.show.rating.average} <br>
                    <b>Summary:</b> ${result.show.summary}`;
            console.log(result.show.summary);
            paragraph.innerHTML = text;
            div.className = 'column';
            div.append(anchorTag);
            div.append(paragraph);
            row.append(div);
        }
        else {
            console.log(`Cannot display ${result.show.name} image`)
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
