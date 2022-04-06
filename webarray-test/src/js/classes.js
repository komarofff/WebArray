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

//////////////////////
class GetDataFromServer {
    constructor(url, method, data) {
        this.url = url
        this.method = method
        this.data = data
    }

    async get() {
        const response = await fetch(this.url);
        if (response.ok) {
            const json = await response.json();
            return json;
        } else {
            return 'error'
        }
    }

    async post() {
        const response = await fetch(this.url, {
            method: 'POST',
            body: this.data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        if (response.ok) {
            const jsonAnswer = await response.json();
            return jsonAnswer;
        }
    }

    async put() {
        const response = await fetch(this.url, {
            method: 'PUT',
            body: this.data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        if (response.ok) {
            const jsonAnswerPut = await response.json();
            return jsonAnswerPut;
        }
    }
    async delete() {
        const response = await fetch(this.url, {
            method: 'DELETE',
            body: this.data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        if (response.ok) {
            const jsonAnswerPut = await response.json();
            return jsonAnswerPut;
        }
    }

}

// if (response.ok) {
//     let result = await response.json();
//     return result;
// }
class DataS extends GetDataFromServer {
    constructor(options) {
        super(options.url, options.method, options.data);
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

