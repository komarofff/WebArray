document.querySelector('.send-message-box').addEventListener('click',(e)=>{
    console.log('send-message - ',e.target)
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
    e.preventDefault()
    closeMainMenus()
})
document.querySelector('.center-zone').addEventListener('contextmenu', (e) => {
    if (e.target.parentElement.classList.contains('folder')) {
        e.preventDefault()
        closeMainMenus()
        document.querySelector('.folder-section').classList.remove('hidden')
        document.querySelector('.folder-section').style.cssText = `position:fixed; left: ${xCoordinate}px; top: ${yCoordinate}px`
    } else if (e.target.classList.contains('project')) {
        e.preventDefault()
        closeMainMenus()
        document.querySelector('.project-section').classList.remove('hidden')
        document.querySelector('.project-section').style.cssText = `position:fixed; left: ${xCoordinate}px; top: ${yCoordinate}px`
    } else {
        e.preventDefault()
        closeMainMenus()
        document.querySelector('.main').classList.remove('hidden')
        document.querySelector('.main').style.cssText = `position:fixed; left: ${xCoordinate}px; top: ${yCoordinate}px`
    }


})

////

const popupsZone = document.querySelector('.popups-zone')
popupsZone.addEventListener('click', (e) => {
    if (e.target.classList.contains('show-more')) {
        console.log(e.target)
        if (e.target.parentElement.parentElement.nextElementSibling) {
            e.target.parentElement.parentElement.nextElementSibling.classList.toggle('hidden')
        }
        if (e.target.parentElement.parentElement.parentElement.nextElementSibling) {
            // .document.querySelector('.add-new-task')
            console.log(e.target.parentElement.parentElement.parentElement.parentElement.classList)
            e.target.parentElement.parentElement.parentElement.nextElementSibling.classList.toggle('hidden')
        }
        if(e.target.parentElement.parentElement.parentElement.parentElement.classList.contains('task-zone')){
            //e.target.parentElement.parentElement.parentElement.parentElement.querySelector('.add-new-task').classList.toggle('hidden')
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

////
// document.querySelector('.search-zone').addEventListener('focus',(e)=>{
//     if (startTimer.classList.contains('button-red')) {
//         stopSearchAnimation()
//     }
// })
// document.querySelector('.search-icon-section').addEventListener('click',(e)=>{
//     if (startTimer.classList.contains('button-red')) {
//         stopSearchAnimation()
//     }
// })
///
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

    // add bookmark
    if (e.target.classList.contains('add-bookmark')) {
        alert('add bookmark')
    }
    // edit bookmark
    if (e.target.classList.contains('edit-bookmark')) {
        alert('edit bookmark')
    }

},true)














