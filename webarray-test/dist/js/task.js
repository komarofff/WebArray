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
    todosList = data
    let task = document.querySelector('.task-data')
    let div = null
    if(todosList) {
        resTasks()
        todosList.forEach((el) => {
            div = document.createElement('div')
            div.setAttribute('class', ' ')
            if (el.completed === false) {
                div.innerHTML = `<div class="flex flex-start align-start "><p class="line-vertical"><input class="mr-15 mt-3 check " type="checkbox" data-id="${el.id}"></p> <div class="flex-col flex-start items-start"><p class="mb-40 line flex flex-col" data-id="${el.id}">  <span>${el.title}</span> <span class="font-extra-small color-date mt-8">27 Feb. 2022</span></p></div></div>`
            } else {
                div.innerHTML = `<div class="flex flex-start align-start "><p class="line-vertical"><input class="mr-15 mt-3 check " type="checkbox" data-id="${el.id}" checked></p> <p class="text-line mb-40 line can-be-changed flex flex-col" data-id="${el.id}"> <span>${el.title}</span> <span class="font-extra-small color-date mt-8">27 Feb. 2022</span></p></div></div>`
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
