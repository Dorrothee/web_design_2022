for ( let i = 0; i < 300; i++){
    const span = document.createElement('span')
    span.style.width = 0.2 + Math.random() * 2.5 + 'px'
    span.style.left = Math.floor(Math.random() * window.innerWidth) + 'px'
    span.style.animationDelay = Math.random() * - 20 + 's'
    span.style.animationDuration = 1 + Math.random() * 5 + 's'
    document.querySelector('.info_video > .power').appendChild(span)
}