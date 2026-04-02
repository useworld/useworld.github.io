const normalizedPath = window.location.pathname.replace(/\/+$/, "/");

if (normalizedPath === "/" || normalizedPath === "/index.html") {
    document.body.classList.add("page-home");
}

if (normalizedPath.startsWith("/category/")) {
    document.body.classList.add("page-category");
}

if (normalizedPath.startsWith("/profile/")) {
    document.body.classList.add("page-profile");
}

document.querySelectorAll('.md-post--excerpt').forEach(card => {
    const titleLink = card.querySelector('.md-post__content h2 a');
    if (!titleLink) {
        return;
    }

    const href = titleLink.getAttribute('href');
    if (!href) {
        return;
    }

    card.querySelectorAll('.post-card-thumb, .post-summary').forEach(target => {
        target.style.cursor = 'pointer';
        target.addEventListener('click', event => {
            event.preventDefault();
            window.location.href = href;
        });
    });
});

document.querySelectorAll('img').forEach(item => {
    if (item.closest('.md-post--excerpt')) {
        return;
    }

    item.addEventListener('click', function () {
        this.classList.toggle('image-zoom-large');
    })
});
