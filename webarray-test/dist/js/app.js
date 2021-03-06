document.querySelector('.send-message-box').addEventListener('click', (e) => {
    console.log('send-message - ', e.target)
})
let xCoordinate = null
let yCoordinate = null
document.addEventListener('mousemove', (e) => {
    xCoordinate = e.pageX
    yCoordinate = e.pageY
    //console.log("x: " + xCoordinate + " y: " + yCoordinate)
})

function closeMainMenus() {
    const menus = document.querySelectorAll('.main-menu-box')
    menus.forEach((el) => {
        el.classList.add('hidden')
    })

}

//right mouse button
document.querySelector('.center-zone').addEventListener('click', (e) => {
    // e.preventDefault()
    closeMainMenus()
})
document.querySelector('.center-zone').addEventListener('contextmenu', (e) => {
    closeMainMenus()
    if (e.target.parentElement.classList.contains('folder')) {
        e.preventDefault()
        closeMainMenus()
        document.querySelector('.folder-section').classList.remove('hidden')
        document.querySelector('.folder-section').style.cssText = `position:fixed; left: ${xCoordinate}px; top: ${yCoordinate}px`
        mainMenu('folder-section')
    } else if (e.target.classList.contains('project')) {
        e.preventDefault()
        closeMainMenus()
        document.querySelector('.project-section').classList.remove('hidden')
        document.querySelector('.project-section').style.cssText = `position:fixed; left: ${xCoordinate}px; top: ${yCoordinate}px`
        mainMenu('project-section')
    } else {
        e.preventDefault()
        closeMainMenus()
        document.querySelector('.main').classList.remove('hidden')
        document.querySelector('.main').style.cssText = `position:fixed; left: ${xCoordinate}px; top: ${yCoordinate}px`
        mainMenu('main')
    }

    //


})

function mainMenu(section) {
    setTimeout(() => {
        let menuBox = document.querySelector(`.${section}`)
        console.log(menuBox)
        let menuBoxHeight = menuBox.getBoundingClientRect().height
        const clientHeight = document.documentElement.clientHeight
        let yCoordinateNew = yCoordinate
        if ((yCoordinate + menuBoxHeight) >= clientHeight) {
            yCoordinateNew = clientHeight - menuBoxHeight - 50
        }
        // console.log('yCoordinate + menuBoxHeight=',yCoordinate + menuBoxHeight)
        // console.log('xCoordinate=', xCoordinate)
        // console.log('yCoordinate=', yCoordinate)
        // console.log('clientHeight=', clientHeight)
        // console.log('menuBoxHeight=', menuBoxHeight)
        document.querySelector(`.${section}`).style.cssText = `position:fixed; left: ${xCoordinate}px; top: ${yCoordinateNew}px`
    }, 100)
}

////

const popupsZone = document.querySelector('.popups-zone')
popupsZone.addEventListener('click', (e) => {
    if (e.target.classList.contains('show-more')) {
        if (e.target.parentNode.parentNode.parentNode.classList.contains('info-box')) {
            e.target.parentNode.parentNode.parentNode.querySelector('.popup-box__inner-section').classList.toggle('hidden')
        }
        if (e.target.parentNode.parentNode.parentNode.parentNode.classList.contains('info-box')) {
            e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.popup-box__inner-section').classList.toggle('hidden')
            e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.add-new-task').classList.toggle('hidden')
        }
    }
})


// start timer
let timer = null
let time = null
const startTimer = document.querySelector('.start-timer')
startTimer.addEventListener('click', (e) => {
    startTimer.classList.toggle('button-green')
    startTimer.classList.toggle('button-red')

    startSearchAnimation()
})

function startSearchAnimation() {
    if (startTimer.classList.contains('button-green')) {
        startTimer.querySelector('.button-text').textContent = 'Start timer'
        stopTime()
        document.querySelector('.show-time').classList.add('hidden')
        document.querySelector('.search-icon').classList.toggle('rotate-180')
        setTimeout(() => {
            document.querySelector('.search-icon-section').classList.toggle('go-search-icon')
        }, 300)
        setTimeout(() => {
            document.querySelector('.search-icon').classList.toggle('rotate-180')
        }, 600)
        setTimeout(() => {
            document.querySelector('.search-zone').placeholder = 'Start the timer to start what you doing!'
            document.querySelector('.search-zone').classList.toggle('search-light')
        }, 950)
        setTimeout(() => {
            document.querySelector('.search-icon-section').classList.toggle('go-search-icon')
        }, 1800)

    }
    if (startTimer.classList.contains('button-red')) {
        startTimer.querySelector('.button-text').textContent = 'Stop timer'
        startTime(timerStart, 1000)

        document.querySelector('.search-icon').classList.toggle('rotate-180')
        setTimeout(() => {
            document.querySelector('.search-icon-section').classList.toggle('go-search-icon')
        }, 300)
        setTimeout(() => {
            document.querySelector('.search-icon').classList.toggle('rotate-180')
        }, 600)
        setTimeout(() => {
            document.querySelector('.search-zone').placeholder = 'Type what you doing!'
            document.querySelector('.search-zone').classList.toggle('search-light')
        }, 950)
        setTimeout(() => {
            document.querySelector('.search-icon-section').classList.toggle('go-search-icon')
        }, 1800)


    }
}

function stopSearchAnimation() {
    document.querySelector('.search-zone').value = 'Type what you doing!'
    document.querySelector('.search-zone').classList.add('search-light')
    document.querySelector('.search-icon').classList.remove('rotate-180')
    document.querySelector('.search-icon-section').classList.remove('go-search-icon')

}

startTimer.addEventListener('mouseover', () => {
    if (startTimer.classList.contains('button-red')) {
        document.querySelector('.show-time').classList.remove('hidden')
    }
})
startTimer.addEventListener('mouseout', () => {
    if (startTimer.classList.contains('button-red')) {
        document.querySelector('.show-time').classList.add('hidden')
    }
})

function startTime(func, time) {
    timer = setInterval(func, time)
}

function stopTime() {
    clearInterval(timer)
}

let timeCounter = 0

function timerStart() {
// timer
    timeCounter++
    let hours = Math.floor(timeCounter / 60 / 60);
    let minutes = Math.floor(timeCounter / 60) - (hours * 60);
    let seconds = timeCounter % 60;
    time = [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
    ].join(':')
    document.querySelector('.show-time').textContent = time
    //console.log('time', time)
}

// left section
const leftZone = document.querySelector('.left-zone')
leftZone.addEventListener('click', (e) => {
    // start stop left section full width
    if (e.target.classList.contains('left-zone') || e.target.classList.contains('open-left-section')) {
        leftZone.classList.toggle('left-zone-full')
    }
}, true)


// close-modals

const closeModals = document.querySelectorAll('.close-modal')
const modalsWindows = document.querySelectorAll('.modal')
closeModals.forEach((val) => {
    val.addEventListener('click', () => {
        for (let i = 0; i < modalsWindows.length; i++) {
            modalsWindows[i].classList.add('hidden')
        }
    })
})
const selects = document.querySelectorAll('.select')
selects.forEach((el) => {
    el.addEventListener('click', () => {
        el.classList.toggle('rotate-after')
        el.querySelector('.select-popup').classList.toggle('hidden')
    })
})






