let topMenu = document.querySelector('.top-navbar')
let smallNav = document.querySelector('.small-nav')
document.addEventListener('scroll', () => {
    let yCoordinate = window.pageYOffset
    if (yCoordinate > 0) {
        topMenu.classList.add('bg-white')
        topMenu.querySelector('.logo-image').src='images/logo-top.png'
        smallNav.style.cssText = 'opacity:0;'
    } else {
        topMenu.classList.remove('bg-white')
        topMenu.querySelector('.logo-image').src='images/logo.png'
        smallNav.style.cssText = ''
    }

    if (scrollY > yCoordinate) {
        smallNav.style.cssText = ''
    }
    if (scrollY < yCoordinate) {
        smallNav.style.cssText = 'opacity:0;'
    }
    scrollY = yCoordinate
})
/// tabs home page tabs-section  tabs-header
// tabs-content-section  tabs-content
let tabs = document.querySelector('.tabs-section').querySelectorAll('.tabs-header')
let tabsContent = document.querySelector('.tabs-content-section').querySelectorAll('.tabs-content')
for(let i=0; i<tabs.length;i++){
    tabs[i].addEventListener('click',()=>{
        tabsContent.forEach((el)=>{
            el.classList.add('d-none')
        })
        tabs.forEach((el)=>{
            el.classList.remove('active-tab')
        })
        tabs[i].classList.add('active-tab')
        tabsContent[i].classList.remove('d-none')
    })
}

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
});