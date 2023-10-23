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
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');
    const search_bar = document.getElementById('search');
    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        search_bar.style.zIndex = -1;
    });
}

const darkMode = document.getElementById('dark');
const flex_nav = document.getElementsByClassName('flex-nav');

darkMode.addEventListener('click',()=>{
    document.body.classList.add("body-clr");

    for (const element of flex_nav) {
        element.classList.add("nav-clr");
    }
});

const navBar = document.querySelector('.flex-nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navBar.classList.add("scroll-shadow");
    } else {
        navBar.classList.remove("scroll-shadow");
    }
});



const lightMode = document.getElementById('light');
lightMode.addEventListener('click',()=>{
    document.body.classList.remove("body-clr");
    for (const element of flex_nav) {
        element.classList.remove("nav-clr");
    }
});

