let folderList = null
let folderListServer = null
function getFoldersFromServer(url){
    // const foldersGet = new DataS({
    //     url: url
    // })
    // if (foldersGet) {
    //     foldersGet.get().then(data => {
    //         folderListServer = data
    //     }).catch((error) => {
    //         console.log('error get', error)
    //     })
    // }

      folderListServer = [
        {
            id: 0,
            foldername: 'Folder 0',
            link: 'https://webarray.ca/fggg.txt',
            author: 'Test author 0',
            createdAt: '22.03.2022',
            image: 'images//test-image-bookmark-preview.jpg',
            flag: 'none',
            type: 'folder'
        },
        {
            id: 1,
            foldername: 'Folder 1',
            link: 'https://webarray.ca/fggg.txt',
            author: 'Test author 1',
            createdAt: '22.03.2021',
            image: 'images//test-image-bookmark-preview.jpg',
            flag: 'good',
            type: 'folder'
        },
        {
            id: 2,
            foldername: 'Folder 2',
            link: 'https://webarray.ca/fggg.txt',
            author: 'Test author 2',
            createdAt: '22.04.2022',
            image: 'images//test-image-bookmark-preview.jpg',
            flag: 'important',
            type: 'folder'
        },
        {
            id: 3,
            foldername: 'Folder 3',
            link: 'https://webarray.ca/fggg.txt',
            author: 'Test author 3',
            createdAt: '15.04.2022',
            image: 'images//test-image-bookmark-preview.jpg',
            flag: 'approved',
            type: 'folder'
        }

    ]
    return  folderListServer
}
function showFolders() {
    let ifFolder = document.querySelectorAll('.folder')
    ifFolder.forEach((el)=>{
        el.remove()
    })
    // to get files data from server
    folderList = getFoldersFromServer('need url')
    folderList.sort((start,finish)=> finish.id - start.id)

    //['none','old', 'bad', 'good', 'important', 'approved', 'final']
    let counter = -1

    folderList.forEach((el) => {
        counter++
        let data = JSON.stringify(el)
        let itemVar = 'item'
        if(el.flag==='bad'){
            itemVar = null
        }
        let fileBox = `
                <div class="folder-name">
                    <p>${el.foldername}</p>
                </div>
            `
        let newFolder= document.createElement('div')
        newFolder.setAttribute('class', 'relative folder')
        newFolder.setAttribute('data-data', data)
        newFolder.setAttribute('data-folderstartid', el.id)
        newFolder.setAttribute('data-arrid', counter)
        newFolder.setAttribute('oncontextmenu', 'folderMenu(event)')
        newFolder.innerHTML = fileBox
        document.querySelector('.center-zone__inner-section').prepend(newFolder)
    })

}
showFolders()

let id= null
function folderMenu(e) {
    e.preventDefault()
    closeMainMenus()
    let folderData = null
    console.log('data=',JSON.parse(e.target.dataset.data))
    if (e.target.dataset.data) {
        folderData = e.target.dataset.data
    }
    if (e.target.parentNode.dataset.data) {
        folderData = e.target.parentNode.dataset.data
    }
    if (e.target.parentNode.parentNode.dataset.data) {
        folderData = e.target.parentNode.parentNode.dataset.data
    }
   let parseData = JSON.parse(folderData)
    id = parseData.id
    let folderMenu = `<div class="folder-section main-menu-box  animation-popup "
         style="position:fixed; left: ${xCoordinate}px; top: ${yCoordinate}px"  data-data='${folderData}'>
    <ul>
        <li class="open-folder" onclick="openFolder(${folderData.id})">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-arrow-up-right">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
            <span>Open folder</span></li>
        <li class="download" onclick="downloadFolder()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="feather feather-arrow-down-circle">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="8 12 12 16 16 12"></polyline>
                <line x1="12" y1="8" x2="12" y2="16"></line>
            </svg>
            <span>Zip & Download</span></li>
    </ul>
    <p class="stripe-gray"></p>
    <ul>
        <li class="flag">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-flag">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                <line x1="4" y1="22" x2="4" y2="15"></line>
            </svg>
            <span>Flag</span>
            <ul class="flag-menu-box folder-flag">
                <li class="color-none" onclick="folderFlag(event,'none')">No flag</li>
                <li class="color-important"  onclick="folderFlag(event,'important')">Important</li>
                <li class="color-approved"  onclick="folderFlag(event,'approved')">Approved</li>
                <li class="color-final"  onclick="folderFlag(event,'final')">Final</li>
                <li class="color-good"  onclick="folderFlag(event,'good')">Good</li>
                <li class="color-old"  onclick="folderFlag(event,'old')">Old</li>
                <li class="color-bad"  onclick="folderFlag(event,'bad')">Bad</li>
            </ul>
        </li>
    </ul>
    <p class="stripe-gray"></p>
    <ul>
        <li class="share" onclick="shareFolder()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="feather feather-link">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
            <span>Share</span></li>
    </ul>
    <p class="stripe-gray"></p>
    <ul>
        <li class="rename" onclick="renameFolder()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-edit-3">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            <span>Rename</span></li>
        <li class="copy" onclick="copyFolder()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-copy">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>Copy</span></li>
        <li class="delete" onclick="deleteFolder()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-trash-2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
            <span>Delete</span></li>
    </ul>

</div>`
    let newFolderFile = document.createElement('div')
    setTimeout(() => {
        newFolderFile.innerHTML = folderMenu
        document.body.append(newFolderFile)
    }, 100)

    setTimeout(() => {
        mainMenu('folder-section')

        console.log(JSON.parse(folderData))
    }, 200)
}

function folderFlag(event, flag = 'no') {
    let flag_menu_box = document.querySelector('.folder-flag')
    let liInFlags2 = flag_menu_box.querySelectorAll('li')
    liInFlags2.forEach((el) => {
        el.classList.remove('checked')
    })
    event.target.classList.add('checked')
    let newFlag = `flag-${flag}`
    for (let i = 0; i < flags_lists.length; i++) {
        del_flag = `flag-${flags_lists[i]}`
        //console.log('del-flag=',del_flag)
        document.querySelector(`[data-flagstartid="${fileId}"]`).classList.remove(del_flag)
    }
    document.querySelector(`[data-startid="${fileId}"]`).classList.add(newFlag)
    if (newFlag === 'flag-bad') {
        document.querySelector(`[data-startid="${fileId}"]`).querySelector('.no-click').src = 'images//no-image.png'
        document.querySelector(`[data-startid="${fileId}"]`).querySelector('.project-box').classList.remove('item')
    } else {
        let idxInArray = filesList.findIndex((el) => el.id === fileId)
        let idInArray = filesList[idxInArray].id
        document.querySelector(`[data-startid="${fileId}"]`).querySelector('.no-click').src = `${filesList[idxInArray].image}`
        document.querySelector(`[data-startid="${fileId}"]`).querySelector('.project-box').classList.add('item')
    }
}
function openFolder(){
    alert('open folder '+ id)
}
function downloadFolder(){
    alert('download folder '+id)
}
function shareFolder(){
    alert('shareFolder '+id)
}
function renameFolder(){
    alert('renameFolder '+id)
}
function copyFolder(){
    alert('copyFolder '+id)
}
function deleteFolder(){
    alert('deleteFolder '+id)
}
