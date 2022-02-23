// FOR THE UNDEX-PAGE NAVBAR SCROLL
var path = window.location.pathname; //window. location. pathname returns the path and filename of the current page. window.
var page = path.split("/").pop(); //TO GET FILENAME FROM PAGE URL
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const servicesMenu = document.querySelector('#services-page');
    const aboutMenu = document.querySelector('#aboutus-page')
    const portfolioMenu = document.querySelector('#portfolio-page')
    const careerMenu = document.querySelector('#career-page')
    let scrollPos = window.scrollY;
    console.log(scrollPos);
if(page=='index.html'){

    if (window.innerWidth > 960 && scrollPos < 950) {
        homeMenu.classList.add('highlight');
        servicesMenu.classList.remove('highlight');
        return;
}   if (window.innerWidth > 960 && scrollPos < 1891) {
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.add('highlight');
        return;
}
if (window.innerWidth > 960 && scrollPos < 3105) {
    homeMenu.classList.add('highlight');
    servicesMenu.classList.remove('highlight');
    return;
}
}
if(page=='about-us.html'){

    if (window.innerWidth > 960 && scrollPos >20) {
        aboutMenu.classList.add('highlight');
        return;
    }
}
if(page=='portfolio.html'){

    if (window.innerWidth > 960 && scrollPos >20) {
        portfolioMenu.classList.add('highlight');
        return;
    }
}
if(page=='career.html'){

    if (window.innerWidth > 960 && scrollPos >20) {
        careerMenu.classList.add('highlight');
        return;
    }
}
if(page=='it-consulting.html'){

    if (window.innerWidth > 960 && scrollPos >20) {
        servicesMenu.classList.add('highlight');
        return;
    }
}
if(page=='software-development.html'){

    if (window.innerWidth > 960 && scrollPos >20) {
        servicesMenu.classList.add('highlight');
        return;
    }
}
if(page=='resource-outsourcing.html'){

    if (window.innerWidth > 960 && scrollPos >20) {
        servicesMenu.classList.add('highlight');
        return;
    }
}
};

window.addEventListener('scroll', highlightMenu);


// FOR THE ABOUT-PAGE NAVBAR SCROLL
