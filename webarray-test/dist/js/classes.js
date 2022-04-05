class OpenModals {
    constructor(selector) {
        this.$el = document.querySelector(selector)
        this.$elem = document.querySelector(selector + '-window')
    }

    click() {
        this.$el.addEventListener('click', () => {
            this.$elem.classList.remove('hidden')
        })
    }

    open() {
        this.$elem.classList.remove('hidden')
    }

    close() {
        this.$elem.classList.add('hidden')
    }
}

class Modals extends OpenModals {
    constructor(options) {
        super(options.selector);
    }
}

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
    selector: '.edit-bookmark'
})
editBookmark.click()

