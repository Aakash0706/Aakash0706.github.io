let searching = document.getElementById('search');
let search_icons = document.getElementsByClassName('icon');

searching.addEventListener('click', (event) => {
    if (search_icons.length > 0) {
        // Access the first element with class 'icon'
        search_icons[0].style.opacity = 0;
    }
    // Prevent the click event from propagating to the body click event
    event.stopPropagation();
});

document.body.addEventListener('click', () => {
    if (search_icons.length > 0) {
        // Access the first element with class 'icon'
        search_icons[0].style.opacity = 1;
    }
});

window.onload = function () {
    window.addEventListener('scroll', function (e) {
        if (window.pageYOffset > 100) {
            document.querySelector("header").classList.add('is-scrolling');
        }
        else {
            document.querySelector("header").classList.add('is-scrolling');
        }
    });
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');
    const search_bar = document.getElementById('search');
    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        search_bar.style.zIndex = -1;
    });
}