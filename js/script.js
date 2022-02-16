const body = document.getElementsByTagName('body')[0];
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });
    hamburger.classList.toggle('toggle');

    if(navLinks.classList.contains('open')) {
        body.style.cssText = 'overflow: hidden';
    } else {
        body.style.cssText = 'overflow: none';
    }
});


const back_to_top = document.querySelector('.back-to-top');
back_to_top.addEventListener('click', () => {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
});


const cookie_alert = document.querySelector('.cookie-alert');
const accept_btn = document.querySelector('.accept');
const manage_btn = document.querySelector('.manage');
const close_btn = document.querySelector('.close-cookie-alert');
[accept_btn, manage_btn, close_btn].forEach(elem => {
    elem.addEventListener('click', () => {
        cookie_alert.className += ' cookie-close';
    });
});


window.addEventListener('scroll', () => {
    const height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    const top = window.pageYOffset || document.documentElement.scrollTop;
    const box = document.querySelectorAll('.box');
    for(let i=1;i<box.length+1;i++) {
        let boxi = document.querySelector('.box'+i);
        if(top > ((boxi.getBoundingClientRect().top))) {
            boxi.classList.add("fade");
        } else {
            boxi.classList.remove("fade");
        }
    }

    if(top > height/2) {
        back_to_top.classList.add('visible');
    } else {
        back_to_top.classList.remove('visible');
    }
});