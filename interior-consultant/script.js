const $ = (el) => document.querySelector(el)
const l = (el) => console.log(el)

const hamburger = $('.header__items__container--menu')
const menu = $('.menu')
const close = $('.menu--close')
const body = document.body

const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

const handleHamburgerClick = (e) => {
    menu.style.display = 'grid'
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

const changeCloseButtonRight = () => {
  close.style.right = `${(window.innerWidth - hamburger.getBoundingClientRect().right) / 16}rem`
}

window.addEventListener("resize", debounce(() => {
  if (window.innerWidth < 990) {
    changeCloseButtonRight()
  }
}))

close.addEventListener('click', handleClose)
