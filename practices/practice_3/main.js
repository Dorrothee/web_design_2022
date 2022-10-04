let menu = document.querySelector('#menu_bars');
let header = document.querySelector('header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor = document.querySelector('.cursor');

window.onmousemove = (e) => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links => {
    links.onmouseenter = () => {
        cursor.classList.add('active');
    }
    links.onmouseleave = () => {
        cursor.classList.remove('active');
    }
})