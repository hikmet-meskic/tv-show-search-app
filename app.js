const form = document.querySelector('#searchForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
})