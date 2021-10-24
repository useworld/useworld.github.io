document.querySelectorAll('img').forEach(item => {
    item.addEventListener('click', function () {
        this.classList.toggle('image-zoom-large');
    })
});