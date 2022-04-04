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
        e.target.parentElement.querySelector('.main-menu-box').classList.remove('hidden')
        e.target.parentElement.querySelector('.main-menu-box').style.cssText = `position:fixed; left: ${xCoordinate}px; top: ${yCoordinate}px`
    } else if (e.target.classList.contains('center-zone__project-box')) {
        e.preventDefault()
        closeMainMenus()
        e.target.querySelector('.main-menu-box').classList.remove('hidden')
        e.target.querySelector('.main-menu-box').style.cssText = `position:fixed; left: ${xCoordinate}px; top: ${yCoordinate}px`
    } else {
        e.preventDefault()
        closeMainMenus()
        document.querySelector('.main-section-menu').querySelector('.main-menu-box').classList.remove('hidden')
        document.querySelector('.main-section-menu').querySelector('.main-menu-box').style.cssText = `position:fixed; left: ${xCoordinate}px; top: ${yCoordinate}px`
    }


})

////

const popupsZone = document.querySelector('.popups-zone')
popupsZone.addEventListener('click', (e) => {
    if (e.target.classList.contains('show-more')) {

        if (e.target.parentElement.parentElement.nextElementSibling) {
            e.target.parentElement.parentElement.nextElementSibling.classList.toggle('hidden')
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
    if (!e.target.classList.contains('add-bookmark')) {
        leftZone.classList.toggle('left-zone-full')
    }

    // add bookmark
    if (e.target.classList.contains('add-bookmark')) {
        alert('add bookmark')
    }

})

// get todo list
let todoUrl = 'https://jsonplaceholder.typicode.com/todos/'
let todosList = []
const getData = async (url) => {
    let response = await fetch(url)
    if (response.ok) {
        let result = await response.json();
        return result;
    }
}
getData(todoUrl).then(data => {
    // data.forEach((val) => {
    //     todosList.push(val)
    //
    // })
    //console.log(todosList)
    todosList = data
    let task = document.querySelector('.task-data')
    let div = null
    if(todosList) {
        resTasks()
        todosList.forEach((el) => {
            div = document.createElement('div')
            div.setAttribute('class', ' ')
            if (el.completed === false) {
                div.innerHTML = `<div class="flex flex-start align-start "><p class="line-vertical"><input class="mr-15 mt-3 check " type="checkbox" data-id="${el.id}"></p> <p class="mb-40 line" data-id="${el.id}">  ${el.title}</p></div></div>`
            } else {
                div.innerHTML = `<div class="flex flex-start align-start "><p class="line-vertical"><input class="mr-15 mt-3 check " type="checkbox" data-id="${el.id}" checked></p> <p class="text-line mb-40 line can-be-changed" data-id="${el.id}">  ${el.title}</p></div></div>`
            }
            task.insertAdjacentElement('beforeend', div)
        })
        task.addEventListener('click', (e) => {
            if (e.target.classList.contains('check')) {
                let id = parseFloat(e.target.dataset.id)
                e.target.parentNode.parentNode.querySelector('.line').classList.toggle('text-line')
                e.target.parentNode.parentNode.querySelector('.line').classList.toggle('can-be-changed')
                //e.target.nextElementSibling.classList.toggle('text-line')
                let arrId = todosList.findIndex(val => val.id === id)
                todosList[arrId].completed = !todosList[arrId].completed
                resTasks()
            }
            if(e.target.classList.contains('can-be-changed')){
                alert(`Change task : id=${todosList[e.target.dataset.id].id} / ${todosList[e.target.dataset.id].title}`)
            }
        })
    } else{
        div = document.createElement('div')
        div.innerHTML = `<p>No data available</p>`
        task.insertAdjacentElement('beforeend', div)
    }


})

function resTasks() {
    let resolvedTasks = todosList.filter((val) => val.completed === true).length
    let notResolvedTasks = todosList.filter((val) => val.completed === false).length
    document.querySelector('.not-resolved-tasks').innerHTML = notResolvedTasks
    document.querySelector('.resolved-tasks').innerHTML = resolvedTasks
}













