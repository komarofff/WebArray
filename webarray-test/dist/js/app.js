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
        //el.classList.add('hidden')
        el.remove()
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

        let folderMenu = `<div class="folder-section main-menu-box  animation-popup " 
         style="position:fixed; left: ${xCoordinate}px; top: ${yCoordinate}px"  data-data='${e.target.parentElement.dataset.data}'>
    <ul>
        <li class="open-folder">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-arrow-up-right">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
            <span>Open folder</span></li>
        <li class="download">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="feather feather-arrow-down-circle">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="8 12 12 16 16 12"></polyline>
                <line x1="12" y1="8" x2="12" y2="16"></line>
            </svg>
            <span>Zip & Download</span></li>
    </ul>
    <p class="stripe-gray"></p>
    <ul>
        <li class="flag">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-flag">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                <line x1="4" y1="22" x2="4" y2="15"></line>
            </svg>
            <span>Flag</span>
            <ul class="flag-menu-box">
                <li class="color-base">No flag</li>
                <li class="color-important">Important</li>
                <li class="color-approved">Approved</li>
                <li class="color-final">Final</li>
                <li class="color-good">Good</li>
                <li class="color-old">Old</li>
                <li class="color-bad">Bad</li>
            </ul>
        </li>
    </ul>
    <p class="stripe-gray"></p>
    <ul>
        <li class="share">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="feather feather-link">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
            <span>Share</span></li>
    </ul>
    <p class="stripe-gray"></p>
    <ul>
        <li class="rename">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-edit-3">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            <span>Rename</span></li>
        <li class="copy">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-copy">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>Copy</span></li>
        <li class="delete">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-trash-2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            <span>Delete</span></li>
    </ul>

</div>`
        let newFolderFile = document.createElement('div')
        newFolderFile.innerHTML = folderMenu
        document.body.append(newFolderFile)
        setTimeout(()=>{
            mainMenu('folder-section')
            console.log(JSON.parse(e.target.parentElement.dataset.data))
        },50)


    } else if (e.target.classList.contains('project')) {
        e.preventDefault()
        closeMainMenus()
        let projectMenu = `<div class="project-section main-menu-box  animation-popup " 
         style="position:fixed; left: ${xCoordinate}px; top: ${yCoordinate}px"  data-data='${e.target.dataset.data}'>
    <ul>
        <li class="open-file">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-arrow-up-right">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
            <span>Open</span></li>
        <li class="preview">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-eye">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span>Preview</span></li>
        <li class="download">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="feather feather-arrow-down-circle">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="8 12 12 16 16 12"></polyline>
                <line x1="12" y1="8" x2="12" y2="16"></line>
            </svg>
            <span>Download</span></li>
    </ul>
    <p class="stripe-gray"></p>
    <ul>
        <li class="flag">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-flag">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                <line x1="4" y1="22" x2="4" y2="15"></line>
            </svg>
            <span>Flag</span>
            <ul class="flag-menu-box">
                <li class="color-base">No flag</li>
                <li class="color-important">Important</li>
                <li class="color-approved">Approved</li>
                <li class="color-final">Final</li>
                <li class="color-good">Good</li>
                <li class="color-old">Old</li>
                <li class="color-bad">Bad</li>
            </ul>

        </li>
        <li class="branch">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-layers">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
            <span>Branch</span></li>
        <li class="edit-file">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-edit">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
            <span>Edit</span>
        </li>

    </ul>
    <p class="stripe-gray"></p>
    <ul>
        <li class="share">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="feather feather-link">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
            <span>Share</span></li>
    </ul>
    <p class="stripe-gray"></p>
    <ul>
        <li class="rename">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-edit-3">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            <span>Rename</span></li>
        <li class="copy">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-copy">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>Copy</span></li>
        <li class="delete">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-trash-2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            <span>Delete</span></li>
    </ul>
</div>`
        let newMenuFile = document.createElement('div')
        newMenuFile.innerHTML = projectMenu
        document.body.append(newMenuFile)
        setTimeout(()=>{
            mainMenu('project-section')

            //edit file
            const editFile = new Modals({
                selector: '.edit-file',
                data: e.target.dataset.data
            })
                console.log(JSON.parse(e.target.dataset.data))
            editFile.click()
        },50)

    } else {
        e.preventDefault()
        closeMainMenus()
        let mainPopup = `<div class="main main-menu-box animation-popup " style="position:fixed; left: ${xCoordinate}px; top: ${yCoordinate}px">
    <ul>
        <li class="new-folder">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="feather feather-folder-plus">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                <line x1="12" y1="11" x2="12" y2="17"></line>
                <line x1="9" y1="14" x2="15" y2="14"></line>
            </svg>
            <span>New folder</span></li>
        <li class="new-file">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="feather feather-file-plus">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="12" y1="18" x2="12" y2="12"></line>
                <line x1="9" y1="15" x2="15" y2="15"></line>
            </svg>
            <span>New file</span></li>
    </ul>
    <p class="stripe-gray"></p>
    <ul>
        <li class="upload">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="feather feather-arrow-up-circle">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="16 12 12 8 8 12"></polyline>
                <line x1="12" y1="16" x2="12" y2="8"></line>
            </svg>
            <span>Upload</span></li>
        <li class="paste">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="feather feather-plus-circle">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            <span>Paste</span></li>
        <li class="download">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="feather feather-arrow-down-circle">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="8 12 12 16 16 12"></polyline>
                <line x1="12" y1="8" x2="12" y2="16"></line>
            </svg>
            <span>Zip & Download</span></li>
    </ul>
    <p class="stripe-gray"></p>
    <ul>
        <li class="share">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="feather feather-link">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
            <span>Share</span></li>
    </ul>
</div>`
        let newMain = document.createElement('div')
        newMain.innerHTML = mainPopup
        document.body.append(newMain)

        setTimeout(()=>{
            //new file
            const newFile = new Modals({
                selector: ".new-file"
            })
            newFile.click()

            mainMenu('main')

        },50)
    }

    //


})

function mainMenu(section) {
    setTimeout(() => {
        let menuBox = document.querySelector(`.${section}`)
        //console.log(menuBox)
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
            e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.new-task').classList.toggle('hidden')
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








