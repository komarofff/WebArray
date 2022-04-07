
//new task
// const newTask = new Modals({
//     selector: ".new-task"
// })
// newTask.click()
document.querySelector('.new-task').addEventListener('click',()=>{
    let addTaskWindow = `<div class="black-background modal add-task-window ">
    <div class="modal-window">
        <div class="top-modal flex flex-between align-center w-full">
            <p class="mb-1">Add New Task</p>
            <svg onclick="closeEventModals()" class="close-modal pointer drop-shadow" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
        <form>
            <div class="center-modal">

                <div class="mb-20">
                    <label class="form-label">Task</label>
                    <input class="form-control" type="text" placeholder="new task">
                </div>
                
            </div>
        </form>
        <div class="bottom-modal">
            <div class="stripe-gray my-30"></div>
            <div class="flex flex-between align-center my-40">
                <div class="select"  onclick="selectEvents()">
                    <p class="mb-1">General</p>
                    <ul class="select-popup hidden">
                        <li>Text</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div class="flex">
                    <button class="button-blue-outline close-modal mr-10" onclick="closeEventModals()">Discard</button>
                    <button type="submit" class="button-blue edit-task-save">Save</button>
                </div>
            </div>
        </div>
    </div>

</div>`
    let box = document.createElement('div')
    setTimeout(() => {
        box.innerHTML = addTaskWindow
        document.body.appendChild(box)
    }, 100)

})

/// GET
const taskGet = new DataS({
    url: 'https://jsonplaceholder.typicode.com/todos/',
})
if(taskGet) {
    taskGet.get().then(data => {
        //console.log(data)
        todosList = data
        let task = document.querySelector('.task-data')
        let div = null
        if (todosList) {
            resTasks()
            todosList.forEach((el) => {
                div = document.createElement('div')
                div.setAttribute('class', ' ')
                if (el.completed === false) {
                    div.innerHTML = `<div class="flex flex-start align-start "><p class="line-vertical"><input class="mr-15 mt-3 check " type="checkbox" data-id="${el.id}"></p> <div class="flex-col flex-start items-start"><p class="mb-20 line flex flex-col">  <span class="changed edit-task" data-id="${el.id}">${el.title}</span> <span class="font-extra-small color-date mt-8">27 Feb. 2022</span></p></div></div>`
                } else {
                    div.innerHTML = `<div class="flex flex-start align-start "><p class="line-vertical"><input class="mr-15 mt-3 check " type="checkbox" data-id="${el.id}" checked></p> <p class="text-line mb-20 line  flex flex-col" > <span class="changed" data-id="${el.id}">${el.title}</span> <span class="font-extra-small color-date mt-8">27 Feb. 2022</span></p></div></div>`
                }
                task.insertAdjacentElement('beforeend', div)
            })
            task.addEventListener('click', (e) => {

                if (e.target.classList.contains('check')) {
                    let id = parseFloat(e.target.dataset.id)
                    e.target.parentNode.parentNode.querySelector('.line').classList.toggle('text-line')
                    e.target.parentNode.parentNode.querySelector('.changed').classList.toggle('edit-task')
                    //e.target.nextElementSibling.classList.toggle('text-line')
                    let arrId = todosList.findIndex(val => val.id === id)
                    todosList[arrId].completed = !todosList[arrId].completed
                    resTasks()
                }

            })
            task.addEventListener('contextmenu', (e) => {
                e.preventDefault()
                if (e.target.classList.contains('edit-task')) {
                    let arrIdNew = todosList.findIndex(val => val.id === parseFloat(e.target.dataset.id))
                    newData = todosList[arrIdNew]
                    let editWindow = `<div class="black-background modal edit-task-window ">
    <div class="modal-window">
        <div class="top-modal flex flex-between align-center w-full">
            <p class="mb-1">Edit Task id ${newData.id}</p>
            <svg onclick="closeEventModals()" class="close-modal pointer drop-shadow" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
        <form>
            <div class="center-modal">

                <div class="mb-20">
                    <label class="form-label">Task</label>
                    <input class="form-control" type="text" value="${newData.title}">
                </div>
                
            </div>
        </form>
        <div class="bottom-modal">
            <div class="stripe-gray my-30"></div>
            <div class="flex flex-between align-center my-40">
                <div class="select"  onclick="selectEvents()">
                    <p class="mb-1">General</p>
                    <ul class="select-popup hidden">
                        <li>Text</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div class="flex">
                    <button class="button-blue-outline close-modal mr-10" onclick="closeEventModals()">Discard</button>
                    <button type="submit" class="button-blue edit-task-save">Save</button>
                </div>
            </div>
        </div>
    </div>

</div>`
                    let box = document.createElement('div')
                    setTimeout(() => {
                        box.innerHTML = editWindow
                        document.body.appendChild(box)
                    }, 100)

                }
            })

        } else {
            div = document.createElement('div')
            div.innerHTML = `<p>No data available</p>`
            task.insertAdjacentElement('beforeend', div)
        }


    }).catch((error) => {
        console.log('error get',error)
    })

    function resTasks() {
        let allTasks = todosList.length
        let resolvedTasks = todosList.filter((val) => val.completed === true).length
        let notResolvedTasks = todosList.filter((val) => val.completed === false).length
        // document.querySelector('.not-resolved-tasks').innerHTML = notResolvedTasks
        //document.querySelector('.resolved-tasks').innerHTML = resolvedTasks
        document.querySelector('.all-tasks').innerHTML = allTasks
    }
}

/// POST
const taskPost = new DataS({
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: JSON.stringify({
        title: 'foo3',
        body: 'bar5',
        userId: 11,
    })
})
taskPost.post().then(data=>{
    //console.log('data',data)
}).catch((error) => {
    console.log('error post',error)
})

/// PUT
const taskPut = new DataS({
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    data: JSON.stringify({
        id: 13,
        title: 'foo56',
        body: 'bar789',
        userId: 1,
    })
})
taskPut.put().then(data=>{
    //console.log('data',data)
}).catch((error) => {
    console.log('error put',error)
})

/// DELETE
const taskDelete = new DataS({
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    data: JSON.stringify({
        id: 13
    })
})
taskPut.delete().then(data=>{
    //console.log('data',data)
}).catch((error) => {
    console.log('error delete',error)
})