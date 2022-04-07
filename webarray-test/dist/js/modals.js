// close-modals
// function closeModals() {
//
//     const closeModals = document.querySelectorAll('.close-modal')
//     const modalsWindows = document.querySelectorAll('.modal')
//     closeModals.forEach((val) => {
//         val.addEventListener('click', () => {
//             for (let i = 0; i < modalsWindows.length; i++) {
//                 modalsWindows[i].classList.add('hidden')
//             }
//         })
//     })
//
// }
function closeEventModals() {
    const modalsWindows = document.querySelectorAll('.modal')
    modalsWindows.forEach((val) => {
        //val.classList.add('hidden')
        val.remove()
    })

}

//closeModals()

function select() {
    const selects = document.querySelectorAll('.select')
    selects.forEach((el) => {
        el.addEventListener('click', () => {
            el.classList.toggle('rotate-after')
            el.querySelector('.select-popup').classList.toggle('hidden')
        })
    })
}

// function selectEvents() {
//     const selects = document.querySelectorAll('.select')
//     selects.forEach((el) => {
//         el.classList.toggle('rotate-after')
//         el.querySelector('.select-popup').classList.toggle('hidden')
//         el.addEventListener('click', changeSelect)
//
//     })
// }
function selectEvents() {
    const selects = document.querySelectorAll('.select')
    selects.forEach((el) => {
        el.classList.toggle('rotate-after')
        el.querySelector('.select-popup').classList.toggle('hidden')
        el.addEventListener('click', changeSelect)


    })
}

function changeSelect(e) {
    let newTitle = null
    let oldTitleElement = null
    let oldTitle = null
    e.stopPropagation()
    newTitle = e.target.textContent
    oldTitleElement = e.target.parentNode.parentNode
    oldTitle = oldTitleElement.querySelector(".selectTile")
    console.log('e=', e.target)
    console.log('oldTitleElement=', oldTitleElement)
    console.log('newTitle=', newTitle)
    console.log('oldTitle=', oldTitle)
    // e.target.textContent = oldTitle
    // e.target.parentNode.parentNode.childNodes[1].textContent = newTitle
    //el.removeEventListener('click', changeSelect)
}



