// bookmarks

let bookmarksData = [
    {
        id: 1,
        title: 'Bookmark title1',
        link: 'https://webarray.ca',
        notes: 'some notes here',
        image: 'https://webarray.ca/images/test.jpg'
    },
    {
        id: 2,
        title: 'Bookmark title2',
        link: 'https://webarray.ca',
        notes: 'some notes here',
        image: 'https://webarray.ca/images/test.jpg'
    },
    {
        id: 3,
        title: 'Bookmark title3',
        link: 'https://webarray.ca',
        notes: 'some notes here',
        image: 'https://webarray.ca/images/test.jpg'
    },

]


function addBookmark() {
    // document.querySelector('.add-bookmark').addEventListener('click', () => {
    let addBookmarks = `<div class="black-background modal add-bookmark-window ">
    <div class="modal-window">
        <div class="top-modal flex flex-between align-center w-full">
            <p>Add New Bookmark</p>
            <svg onclick="closeEventModals()" class="close-modal pointer drop-shadow" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
        <form id="new-bookmark">
            <div class="center-modal">
                <div class="mb-20">
                    <label class="form-label">Title</label>
                    <input class="form-control" type="text" placeholder="Bookmark title..." required>
                </div>
                <div class="mb-20">
                    <label class="form-label">Link</label>
                    <input class="form-control" type="text" placeholder="Link to page you want to bookmark..." required>
                </div>
                <div class="mb-20">
                    <label class="form-label">Notes</label>
                    <textarea class="form-control" placeholder="Additional notes..." required></textarea>
                </div>
            </div>
            <div class="bottom-modal">
            <div class="stripe-gray my-30"></div>
            <div class="flex flex-end align-center my-40">
                <button class="button-blue-outline close-modal" onclick="closeEventModals()">Discard</button>
                <button type="submit" class="button-blue add-new-bookmark" onclick="saveNewBookmark()">Save</button>
            </div>
        </div>
        </form>
       
    </div>

</div>`
    let box = document.createElement('div')
    setTimeout(() => {
        box.innerHTML = addBookmarks
        document.body.appendChild(box)
    }, 100)

    // })
}

function saveNewBookmark() {
    alert('save new bookmark')
   // closeEventModals()
}

function editBookmark(id) {
    // document.querySelector('.edit-bookmark').addEventListener('click', () => {
    let bookId = bookmarksData.findIndex(el => el.id === parseFloat(id))
    let editData = bookmarksData[bookId]
    console.log('bookmarksData=', bookmarksData[bookId])
    let editBookmarks = `<div class="black-background modal edit-bookmark-window ">
    <div class="modal-window">
        <div class="top-modal flex flex-between align-center w-full">
            <p class="mb-1">Edit Bookmark</p>
            <svg onclick="closeEventModals()" class="close-modal pointer drop-shadow" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
               </div>
        <form id="changes-in-bookmark">
            <div class="center-modal flex-modal">
                <div>
                    <div class="mb-20">
                        <label class="form-label">Preview</label>
                        <p class="preview-box">
                            <img src="../images/test-image-bookmark-preview.jpg" alt="test image">
                        </p>
                    </div>
                </div>
                <div>
                    <div class="mb-20">
                        <label class="form-label">Title</label>
                        <input class="form-control" type="text" value="${editData.title}">
                    </div>
                    <div class="mb-20">
                        <label class="form-label">Link</label>
                        <input class="form-control" type="text" value="${editData.link}">
                    </div>
                    <div class="mb-20">
                        <label class="form-label">Notes</label>
                        <textarea class="form-control">${editData.notes}</textarea>
                    </div>
                </div>
            </div>
        </form>
        <div class="bottom-modal">
            <div class="stripe-gray my-30"></div>
            <div class="flex flex-end align-center my-40">
                <button class="button-blue-outline close-modal" onclick="closeEventModals()">Discard</button>
                <button type="submit" class="button-blue edit-new-bookmark" onclick="saveChangeInBookmark()">Save</button>
            </div>
        </div>
    </div>

</div>`
    let box = document.createElement('div')
    setTimeout(() => {
        box.innerHTML = editBookmarks
        document.body.appendChild(box)
    }, 100)

    // })
}

function saveChangeInBookmark() {
    alert('save changes ')
    closeEventModals()
}

