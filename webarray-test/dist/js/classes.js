class OpenModals {
    constructor(selector, data) {
        this.selector = selector
        this.data = data
        this.$elems = document.querySelectorAll(selector)
        this.$el = document.querySelector(selector)
        this.$elem = document.querySelector(selector + '-window')
    }
    clickAll() {
        this.$elems.forEach((el)=>{
            el.addEventListener('click', () => {
                this.$elem.classList.remove('hidden')
                if(el.dataset.data){this.$elem.dataset.data = el.dataset.data}
                if (this.data) {
                    this.$elem.dataset.data = this.data
                }
            })
        })

    }

    click() {

        this.$el.addEventListener('click', () => {
            this.$elem.classList.remove('hidden')
            if(this.$el.dataset.data){this.$elem.dataset.data = this.$el.dataset.data}
            if (this.data) {
                 this.$elem.dataset.data = this.data
             }

        })
    }

    open() {
        this.$elem.classList.remove('hidden')
        if (this.data) {
            this.$elem.dataset.data = this.data
        }
    }

    close() {
        this.$elem.classList.add('hidden')
    }

    save() {
        this.$elem.classList.add('hidden')
        //if(this.$el.dataset.data){this.$elem.dataset.data = this.$el.dataset.data}
        if (this.data) {
            this.$elem.dataset.data = this.data
        }
    }
}

class Modals extends OpenModals {
    constructor(options) {
        super(options.selector, options.data);
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
            const jsonAnswerDelete = await response.json();
            return jsonAnswerDelete;
        }
    }

}

class DataS extends GetDataFromServer {
    constructor(options) {
        super(options.url, options.method, options.data);
    }
}

