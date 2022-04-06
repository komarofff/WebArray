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



//new file
const newFile = new Modals({
    selector: ".new-file"
})
newFile.click()


// bookmarks
const addBookmark = new Modals({
    selector: '.add-bookmark'
})
addBookmark.click()

const editBookmark = new Modals({
    selector: '.edit-bookmark',
    // data: JSON.stringify({
    //     id: 1,
    //     title: 'title',
    //     link: 'https://webarray.ca',
    //     notes: 'some notes here',
    //     image: 'https://webarray.ca/images/test.jpg'
    // })
})
editBookmark.clickAll()

const editFile = new Modals({
    selector: '.edit-file',
    // data: JSON.stringify({
    //     id: 1,
    //     title: 'title',
    //     link: 'https://webarray.ca',
    //     notes: 'some notes here',
    //     image: 'https://webarray.ca/images/test.jpg'
    // })
})
editFile.click()

