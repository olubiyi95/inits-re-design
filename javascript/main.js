const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const servicesMenu = document.querySelector('#services-page');
    let scrollPos = window.scrollY;
    console.log(scrollPos);

    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        servicesMenu.classList.remove('highlight');
        return;
}   if (window.innerWidth > 960 && scrollPos < 1491) {
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.add('highlight');
        return;
}
if (window.innerWidth > 960 && scrollPos < 3005) {
    homeMenu.classList.add('highlight');
    servicesMenu.classList.remove('highlight');
    return;
}
};
window.addEventListener('scroll', highlightMenu);