let topMenu = document.querySelector('.top-navbar')
let smallNav = document.querySelector('.small-nav')
document.addEventListener('scroll', () => {
    let yCoordinate = window.pageYOffset
    if (yCoordinate > 0) {
        topMenu.classList.add('bg-white')
        smallNav.classList.add('d-none')
    } else {
        topMenu.classList.remove('bg-white')
        smallNav.classList.remove('d-none')
    }

    if (scrollY > yCoordinate) {
        smallNav.classList.remove('d-none')
    }
    if (scrollY < yCoordinate) {
        smallNav.classList.add('d-none')
    }
    scrollY = yCoordinate
})