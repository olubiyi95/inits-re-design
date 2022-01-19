const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    let scrollPos = window.scrollY;
    console.log(scrollPos);

    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        return;
    };
}
window.addEventListener('scroll', highlightMenu);