let task  = document.querySelector('.task-data')
let div = null
let taskId = null
document.querySelector('.new-task').addEventListener('click',()=>{
    let addTaskWindow = `<div class="black-background modal edit-task-window ">
    <div class="modal-window">
        <div class="top-modal flex flex-between align-center w-full">
            <p class="mb-1">Add New Task</p>
            <svg onclick="closeEventModals()" class="close-modal pointer drop-shadow" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
        <form>
            <div class="center-modal">

                <div class="mb-20">
                    <label class="form-label">Title</label>
                    <input class="form-control w-full" type="text" name="title" placeholder="Title of your task..." required>
                </div>
                 <div class="mb-20">
                    <label class="form-label">Task</label>
                    <textarea class="form-control w-full"  name="task" placeholder="Type here..." required></textarea>
                </div>
                <label class="form-label">For</label>
                <div class="form-select-div">            
                  <select name="select" class="form-select w-full">
                   <option selected>General</option>
                   <option>Orange</option>
                   <option>White</option>
                   <option>Purple</option>
                 </select>            
            </div>
                
            </div>
            <div class="bottom-modal">
            <div class="stripe-gray my-30"></div>
            <div class="flex flex-end align-center my-40">     
                <div class="flex">
                    <button class="button-blue-outline close-modal mr-10" onclick="closeEventModals()">Discard</button>
                    <button type="submit" class="button-blue edit-task-save" onclick="addNewTask()">Save</button>
                </div>
            </div>
        </div>
        </form>        
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
        // let task = document.querySelector('.task-data')

        if (todosList) {
            showTasksInDiv()

        } else {
            div = document.createElement('div')
            div.innerHTML = `<p>No data available</p>`
            task.insertAdjacentElement('beforeend', div)
        }


    }).catch((error) => {
        console.log('error get',error)
    })




}

function showTasksInDiv(){
    task.innerHTML = ``
    amounOfTasks()
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
            amounOfTasks()
        }

    })
    task.addEventListener('contextmenu',showEditTaskWindow)
}
function amounOfTasks() {
    let allTasks = todosList.length
    let resolvedTasks = todosList.filter((val) => val.completed === true).length
    let notResolvedTasks = todosList.filter((val) => val.completed === false).length
    // document.querySelector('.not-resolved-tasks').innerHTML = notResolvedTasks
    //document.querySelector('.resolved-tasks').innerHTML = resolvedTasks
    document.querySelector('.all-tasks').innerHTML = allTasks
}

function deleteTask(){
    alert('delete task id='+ taskId)
}
function addNewTask(){
    alert('add new task')
}
function showEditTaskWindow(e){
        e.preventDefault()
        if (e.target.classList.contains('edit-task')) {
                    let arrIdNew = todosList.findIndex(val => val.id === parseFloat(e.target.dataset.id))
                    newData = todosList[arrIdNew]
                    taskId = newData.id
                    let editWindow = `<div class="black-background modal edit-task-window ">
    <div class="modal-window">
        <div class="top-modal flex flex-between align-center w-full">
            <p class="mb-1">Edit Task id ${newData.id}</p>
            <svg onclick="closeEventModals()" class="close-modal pointer drop-shadow" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
        <form >
            <div class="center-modal">

                <div class="mb-20">
                    <label class="form-label">Title</label>
                    <input class="form-control w-full" type="text" name="title" value="${newData.title}" required>
                </div>
                 <div class="mb-20">
                    <label class="form-label">Task</label>
                    <textarea class="form-control w-full"  name="task" required>${newData.title}</textarea>
                </div>
                <label class="form-label">For</label>
                <div class="form-select-div">
                  <select name="select" class="form-select w-full">
                   <option selected>General</option>
                   <option>Text</option>
                   <option>HTML</option>
                   <option>CSS</option>
                 </select>
            </div>

            </div>
             <div class="bottom-modal">
            <div class="stripe-gray my-30"></div>
            <div class="flex flex-between align-center my-40">
              <p class="flex  align-center pointer" onclick="deleteTask()">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  stroke="#000" fill="rgba(0,23,55,.08)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
              <span class="font-small ml-8 weight-500">Delete</span></p>

                <div class="flex">
                    <button class="button-blue-outline close-modal mr-10" onclick="closeEventModals()">Discard</button>
                    <button type="submit" class="button-blue edit-task-save" onclick="editTask(${taskId})">Save</button>
                </div>
            </div>
        </div>
        </form>

    </div>

</div>`
                    let box = document.createElement('div')
                    setTimeout(() => {
                        box.innerHTML = editWindow
                        document.body.appendChild(box)
                    }, 100)
            showEditTaskWindow

        }

}
function editTask(){
    alert('edit task id='+ taskId)
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