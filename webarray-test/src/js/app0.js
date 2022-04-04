const popupsZone = document.querySelector('.popups-zone')
popupsZone.addEventListener('click', (e) => {
    if (e.target.classList.contains('show-more')) {
        if (e.target.parentElement.nextElementSibling) {
            e.target.parentElement.nextElementSibling.classList.toggle('hidden')
        }
    }
})

//right mouse button
document.querySelector('.center-zone').addEventListener('contextmenu', (e) => {
    e.preventDefault()
    alert('right button')
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
function startSearchAnimation(){
    if (startTimer.classList.contains('button-green')) {
        startTimer.querySelector('.button-text').textContent = 'Start timer'
        stopTime()
        document.querySelector('.show-time').classList.add('hidden')
        //document.querySelector('.search-icon').classList.toggle('rotate-180')
        setTimeout(()=>{
            document.querySelector('.search-icon-section').classList.toggle('go-search-icon')
            document.querySelector('.search-zone').classList.toggle('search-light')
            document.querySelector('.search-zone').value = 'Start the timer to start what you doing!'
        },300)

    }
    if (startTimer.classList.contains('button-red')) {
        startTimer.querySelector('.button-text').textContent = 'Stop timer'
        startTime(timerStart,1000)

        document.querySelector('.search-icon').classList.toggle('rotate-180')
        setTimeout(()=>{
            document.querySelector('.search-icon-section').classList.toggle('go-search-icon')
        },300)
        setTimeout(()=>{
            document.querySelector('.search-icon').classList.toggle('rotate-180')
        },600)
        setTimeout(()=>{
            document.querySelector('.search-zone').value = 'Type what you doing!'
            document.querySelector('.search-zone').classList.toggle('search-light')
        },950)


    }
}
function stopSearchAnimation(){
        document.querySelector('.search-zone').value = 'Type what you doing!'
        document.querySelector('.search-zone').classList.add('search-light')
        document.querySelector('.search-icon').classList.remove('rotate-180')
        document.querySelector('.search-icon-section').classList.remove('go-search-icon')

}
////
document.querySelector('.search-zone').addEventListener('focus',(e)=>{
    if (startTimer.classList.contains('button-red')) {
        stopSearchAnimation()
    }
})
document.querySelector('.search-icon-section').addEventListener('click',(e)=>{
    if (startTimer.classList.contains('button-red')) {
        stopSearchAnimation()
    }
})
///
startTimer.addEventListener('mouseover',()=>{
    if (startTimer.classList.contains('button-red')) {
        document.querySelector('.show-time').classList.remove('hidden')
    }
})
startTimer.addEventListener('mouseout',()=>{
    if (startTimer.classList.contains('button-red')) {
        document.querySelector('.show-time').classList.add('hidden')
    }
})

function startTime(func,time) {
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
    leftZone.addEventListener('click',(e)=>{
        // start stop left section full width
       if(!e.target.classList.contains('add-bookmark')){
            leftZone.classList.toggle('left-zone-full')
       }

        // add bookmark
        if(e.target.classList.contains('add-bookmark')){
            alert('add bookmark')
        }

})
