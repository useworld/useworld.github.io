const normalizedPath = window.location.pathname.replace(/\/+$/, "/");

if (normalizedPath === "/" || normalizedPath === "/index.html") {
    document.body.classList.add("page-home");
}

if (normalizedPath.startsWith("/category/")) {
    document.body.classList.add("page-category");
}

if (normalizedPath.startsWith("/guestbook/")) {
    document.body.classList.add("page-guestbook");
}

document.querySelectorAll('img').forEach(item => {
    item.addEventListener('click', function () {
        this.classList.toggle('image-zoom-large');
    })
});
