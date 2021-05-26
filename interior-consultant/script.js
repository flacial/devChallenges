const $ = (el) => document.querySelector(el)
const l = (el) => console.log(el)

const hamburger = $('.header__items__container--menu')
const menu = $('.menu')
const close = $('.menu--close')
const body = document.body

const handleHamburgerClick = (e) => {
    menu.style.display = 'flex'
    body.style.overflow = 'hidden'
    menu.style.animation = ''
    menu.style.opacity = '1'
}

hamburger.addEventListener('click', handleHamburgerClick)

const handleClose = (e) => {
    menu.style.opacity = '0'
    setTimeout(() => {
        menu.style.display = ''
        body.style.overflow = ''
    }, 300)
}

close.addEventListener('click', handleClose)