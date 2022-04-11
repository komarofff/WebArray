document.querySelector('.send-message-button').addEventListener('click', (e) => {
    let newMessage = document.querySelector('.send-message-input').value
    let now = getTimeNow()
    alert('message=' + newMessage + ' date=' + now)
    document.querySelector('.send-message-input').value = null

})

function getTimeNow() {
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }
    let date = new Date()
    let dateNow = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())
    return dateNow.toLocaleString("en-US", options)
}

let chat = document.querySelector('.chat-data')
let divChat = null
let chatId = null


/// GET
getChatFromServer('https://jsonplaceholder.typicode.com/todos/')
function getChatFromServer(url) {
    const chatGet = new DataS({
        url: url,
    })
    if (chatGet) {
        chatGet.get().then(data => {
            // console.log(data)
            chatList = data
            // let chat = document.querySelector('.chat-data')

            if (chatList) {
                showchatsInDiv()

            } else {
                divChat = document.createElement('div')
                divChat.innerHTML = `<p>No data available</p>`
                chat.insertAdjacentElement('beforeend', divChat)
            }
        }).catch((error) => {
            console.log('error get', error)
        })
    }
}
function showchatsInDiv() {
    chat.innerHTML = ``
    amounOfchats()
    chatList.forEach((el) => {
        divChat = document.createElement('div')
        divChat.setAttribute('class', ' ')
        if (el.completed === false) {
            divChat.innerHTML = `<div class="flex flex-start align-start "><p class="line-vertical"><input class="mr-15 mt-3 check " type="checkbox" data-id="${el.id}"></p> <div class="flex-col flex-start items-start"><p class="mb-20 line flex flex-col">  <span class="changed edit-chat" data-id="${el.id}">${el.title}</span> <span class="font-extra-small color-date mt-8">27 Feb. 2022</span></p></div></div>`
        } else {
            divChat.innerHTML = `<div class="flex flex-start align-start "><p class="line-vertical"><input class="mr-15 mt-3 check " type="checkbox" data-id="${el.id}" checked></p> <p class="text-line mb-20 line  flex flex-col" > <span class="changed" data-id="${el.id}">${el.title}</span> <span class="font-extra-small color-date mt-8">27 Feb. 2022</span></p></div></div>`
        }
        chat.insertAdjacentElement('beforeend', divChat)
    })


}

function amounOfchats() {
    let allchats = chatList.length
    let resolvedchats = chatList.filter((val) => val.completed === true).length
    let notResolvedchats = chatList.filter((val) => val.completed === false).length
    // document.querySelector('.not-resolved-chats').innerHTML = notResolvedchats
    //document.querySelector('.resolved-chats').innerHTML = resolvedchats
    document.querySelector('.all-chats').innerHTML = allchats
    return allchats
}


/// POST
const chatPost = new DataS({
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: JSON.stringify({
        title: 'foo3',
        body: 'bar5',
        userId: 11,
    })
})
chatPost.post().then(data => {
    //console.log('data',data)
}).catch((error) => {
    console.log('error post', error)
})

/// PUT
const chatPut = new DataS({
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    data: JSON.stringify({
        id: 13,
        title: 'foo56',
        body: 'bar789',
        userId: 1,
    })
})
chatPut.put().then(data => {
    //console.log('data',data)
}).catch((error) => {
    console.log('error put', error)
})

/// DELETE
const chatDelete = new DataS({
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    data: JSON.stringify({
        id: 13
    })
})
chatPut.delete().then(data => {
    //console.log('data',data)
}).catch((error) => {
    console.log('error delete', error)
})