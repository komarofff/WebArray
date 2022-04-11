let newData = null
let fileId = null
let filesList = []
// function fileSection(e) {
//     closeMainMenus()
//     if (e.target.classList.contains('project')) {
//         e.preventDefault()
//         closeMainMenus()
//         newData = JSON.parse(e.target.dataset.data)
//         let projectMenu = `<div class="project-section main-menu-box  animation-popup "
//          style="position:fixed; left: ${xCoordinate}px; top: ${yCoordinate}px" data-data='${e.target.dataset.data}'>
//     <ul>
//         <li class="open-file">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                  stroke-linejoin="round" class="feather feather-arrow-up-right">
//                 <line x1="7" y1="17" x2="17" y2="7"></line>
//                 <polyline points="7 7 17 7 17 17"></polyline>
//             </svg>
//             <span>Open</span></li>
//         <li class="preview">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                  stroke-linejoin="round" class="feather feather-eye">
//                 <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                 <circle cx="12" cy="12" r="3"></circle>
//             </svg>
//             <span>Preview</span></li>
//         <li class="download">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                  fill="none"
//                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
//                  class="feather feather-arrow-down-circle">
//                 <circle cx="12" cy="12" r="10"></circle>
//                 <polyline points="8 12 12 16 16 12"></polyline>
//                 <line x1="12" y1="8" x2="12" y2="16"></line>
//             </svg>
//             <span>Download</span></li>
//     </ul>
//     <p class="stripe-gray"></p>
//     <ul>
//         <li class="flag">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                  stroke-linejoin="round" class="feather feather-flag">
//                 <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
//                 <line x1="4" y1="22" x2="4" y2="15"></line>
//             </svg>
//             <span>Flag</span>
//             <ul class="flag-menu-box">
//                 <li class="color-base">No flag</li>
//                 <li class="color-important">Important</li>
//                 <li class="color-approved">Approved</li>
//                 <li class="color-final">Final</li>
//                 <li class="color-good">Good</li>
//                 <li class="color-old">Old</li>
//                 <li class="color-bad">Bad</li>
//             </ul>
//
//         </li>
//         <li class="branch">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                  stroke-linejoin="round" class="feather feather-layers">
//                 <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
//                 <polyline points="2 17 12 22 22 17"></polyline>
//                 <polyline points="2 12 12 17 22 12"></polyline>
//             </svg>
//             <span>Branch</span></li>
//         <li class="edit-file" onclick="editFile();">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                  stroke-linejoin="round" class="feather feather-edit">
//                 <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
//                 <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
//             </svg>
//             <span>Edit</span>
//         </li>
//
//     </ul>
//     <p class="stripe-gray"></p>
//     <ul>
//         <li class="share">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                  fill="none"
//                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
//                  class="feather feather-link">
//                 <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
//                 <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
//             </svg>
//             <span>Share</span></li>
//     </ul>
//     <p class="stripe-gray"></p>
//     <ul>
//         <li class="rename">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                  stroke-linejoin="round" class="feather feather-edit-3">
//                 <path d="M12 20h9"></path>
//                 <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
//             </svg>
//             <span>Rename</span></li>
//         <li class="copy">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                  stroke-linejoin="round" class="feather feather-copy">
//                 <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
//                 <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
//             </svg>
//             <span>Copy</span></li>
//         <li class="delete">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                  stroke-linejoin="round" class="feather feather-trash-2">
//                 <polyline points="3 6 5 6 21 6"></polyline>
//                 <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
//                 <line x1="10" y1="11" x2="10" y2="17"></line>
//                 <line x1="14" y1="11" x2="14" y2="17"></line>
//             </svg>
//             <span>Delete</span></li>
//     </ul>
// </div>`
//         let newMenuFile = document.createElement('div')
//         setTimeout(() => {
//             newMenuFile.innerHTML = projectMenu
//             document.body.appendChild(newMenuFile)
//         }, 100)
//
//
//         setTimeout(() => {
//             mainMenu('project-section')
//             //edit file
//             // const editFile = new Modals({
//             //     selector: '.edit-file',
//             //     data: e.target.dataset.data
//             // })
//             // editFile.click()
//             // editFile(JSON.parse(e.target.dataset.data))
//             console.log(JSON.parse(e.target.dataset.data))
//         }, 200)
//
//     }
//
//
// }
function showFiles(){
    // to get files data from server
    filesList=[
        {
            id:55,
            filename: 'Project 55',
            link: 'https://webarray.ca/fggg.txt',
            author: 'Test author',
            createdAt:'22.03.2022',
            image: '../images/test-image-bookmark-preview.jpg',
            flag: 'none',
            type: 'file'
        }
    ]
let data = JSON.stringify(filesList[0])
    let fileBox=`
                <div class="project-box item" data-src="${filesList[0].image}"
                     data-sub-html="<h4>${filesList[0].filename}</h4>"
                     data-external-thumb-image="${filesList[0].image}">
                    <img class="no-click" src="${filesList[0].image}" alt="image" onclick="fileClick(event)">
                </div>
                <div class="project-name">
                    <p>${filesList[0].filename}</p>
                </div>
                <div class="project-chat hidden" data-id="${filesList[0].id}"></div>
                <div class="project-tasks hidden" data-id="${filesList[0].id}"></div>
            `
let newFile = document.createElement('div')
    newFile.setAttribute('class','project')
    newFile.setAttribute('data-flag',filesList[0].flag)
    newFile.setAttribute('data-data',data)
    newFile.setAttribute('data-startid',filesList[0].id)
    newFile.setAttribute('oncontextmenu','showFileMenu(event)')
    newFile.innerHTML=fileBox
    document.querySelector('.center-zone__inner-section').appendChild(newFile)
}
showFiles()

function showFileMenu(e) {
    e.preventDefault()
    closeMainMenus()
    let fileData = null
    if (e.target.dataset.data) {
        fileData = e.target.dataset.data
    }
    if (e.target.parentNode.dataset.data) {
        fileData = e.target.parentNode.dataset.data
    }
    if (e.target.parentNode.parentNode.dataset.data) {
        fileData = e.target.parentNode.parentNode.dataset.data
    }
    newData = JSON.parse(fileData)
    fileId = newData.id
    let projectMenu = `<div class="project-section main-menu-box  animation-popup "
         style="position:fixed; left: ${xCoordinate}px; top: ${yCoordinate}px" data-data='${fileData}'>
    <ul>
        <li class="open-file" onclick="openFile()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-arrow-up-right">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
            <span>Open</span></li>
        <li class="preview" onclick="previewFile()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-eye">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span>Preview</span></li>
        <li class="download" onclick="downloadFile()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="feather feather-arrow-down-circle">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="8 12 12 16 16 12"></polyline>
                <line x1="12" y1="8" x2="12" y2="16"></line>
            </svg>
            <span>Download</span></li>
    </ul>
    <p class="stripe-gray"></p>
    <ul>
        <li class="flag" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-flag">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                <line x1="4" y1="22" x2="4" y2="15"></line>
            </svg>
            <span>Flag</span>
            <ul class="flag-menu-box">
                <li class="color-base" onclick="fileFlag('none')">No flag</li>
                <li class="color-important"  onclick="fileFlag('important')">Important</li>
                <li class="color-approved"  onclick="fileFlag('approved')">Approved</li>
                <li class="color-final"  onclick="fileFlag('final')">Final</li>
                <li class="color-good"  onclick="fileFlag('good')">Good</li>
                <li class="color-old"  onclick="fileFlag('old')">Old</li>
                <li class="color-bad"  onclick="fileFlag('bad')">Bad</li>
            </ul>

        </li>
        <li class="branch" onclick="branchFile()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-layers">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
            <span>Branch</span></li>
        <li class="edit-file" onclick="editFile();">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-edit">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
            <span>Edit</span>
        </li>

    </ul>
    <p class="stripe-gray"></p>
    <ul>
        <li class="share" onclick="shareFile()">
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
        <li class="rename" onclick="renameFile()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-edit-3">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            <span>Rename</span></li>
        <li class="copy" onclick="copyFile()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" class="feather feather-copy">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>Copy</span></li>
        <li class="delete" onclick="deleteFile()">
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
    let newMenuFile = document.createElement('div')
    setTimeout(() => {
        newMenuFile.innerHTML = projectMenu
        document.body.appendChild(newMenuFile)
    }, 100)

    setTimeout(() => {
        mainMenu('project-section')
        //console.log(JSON.parse(fileData))
    }, 200)

}

function fileClick(event) {
    event.stopPropagation();
    event.preventDefault()
    //console.log(event.target)
    let fileData = null
    let source = null
    if (event.target.dataset.data) {
        fileData = event.target.dataset.data
        source = event.target
    }
    if (event.target.parentNode.dataset.data) {
        fileData = event.target.parentNode.dataset.data
        source = event.target.parentNode
    }
    if (event.target.parentNode.parentNode.dataset.data) {
        fileData = event.target.parentNode.parentNode.dataset.data
        source = event.target.parentNode.parentNode
    }
    newData = JSON.parse(fileData)
    fileId = newData.id
    document.querySelector('.file-name').innerHTML = newData.filename
    document.querySelector('.file-date').innerHTML = newData.createdAt
    document.querySelector('.file-author').innerHTML = newData.author
    document.querySelector('.file-information').classList.remove('hidden')

    // show amount of messages and tasks
    let taskDivs = document.querySelectorAll('.project-tasks')
    taskDivs.forEach((el) => {
        el.classList.add('hidden')
    })

    let chatDivs = document.querySelectorAll('.project-chat')
    chatDivs.forEach((el) => {
        el.classList.add('hidden')
    })

    let allProjects = document.querySelectorAll('.project')
    source.querySelector('.project-tasks').classList.remove('hidden')
    source.querySelector('.project-chat').classList.remove('hidden')
// start request to server and get new data for task. use id of file for getting url
 getTasksFromServer('https://jsonplaceholder.typicode.com/todos/')
// start request to server and get new data for chat. use id of file for getting url
getChatFromServer('https://jsonplaceholder.typicode.com/todos/')

    let amountMessages = amounOfchats()
    let amountTasks = amounOfTasks()
    source.querySelector('.project-tasks').innerHTML = amountTasks
    source.querySelector('.project-chat').innerHTML= amountMessages

}
let flags_lists = ['none','old', 'bad', 'good', 'important', 'approved', 'final']
let del_flag = null
function fileFlag(flag = 'no'){
    alert('flag for file id='+fileId+' flag='+flag)

        for (let i = 0; i < flags_lists.length; i++) {
            del_flag = `flag-${flags_lists[i]}`
            console.log('del-flag=',del_flag)
            document.querySelector(`[data-startid="${fileId}"]`).classList.remove(del_flag)
        }
    document.querySelector(`[data-startid="${fileId}"]`).classList.add(`flag-${flag}`)
}

function editFile() {

    let data = newData
    let window = `<div class="black-background modal edit-file-window">
    <div class="modal-window">
        <div class="top-modal flex flex-between align-center w-full">
            <p class="mb-1">${data.filename}</p>
            <svg onclick="closeEventModals()" class="close-modal pointer drop-shadow" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            
        </div>
        <form>
            <div class="center-modal">
                <div class="mb-20">                
<!--<textarea  rows="10" class="form-control w-full textarea" placeholder="Additional notes..."></textarea> -->

<div id="file-editor" ></div>

                    
              
                </div>  
            </div>
        </form>
        <div class="bottom-modal">
            <div class="stripe-gray my-30"></div>
            <div class="flex flex-between align-center my-40">
                 <div class="form-select-div">            
              <select name="select" class="form-select">
              <option selected>General</option>
                 <option>Text</option>
                 <option>HTML</option>
                 <option>CSS</option>
              </select>            
            </div>
                <div class="flex">
                    <button class="button-blue-outline close-modal mr-10" onclick="closeEventModals()">Discard</button>
                    <button type="submit" class="button-blue edit-file-save">Save</button>
                </div>
            </div>
        </div>
    </div>

</div>`
    let newWindow = document.createElement('div')
    setTimeout(() => {
        newWindow.innerHTML = window
        document.body.appendChild(newWindow)
    }, 100)
    setTimeout(() => {

        let code = ` <div class="bottom-modal">
            <div class="stripe-gray my-30"></div>
            <div class="flex flex-between align-center my-40">
                 <div class="form-select-div">            
              <select name="select" class="form-select">
              <option selected>General</option>
                 <option>Text</option>
                 <option>HTML</option>
                 <option>CSS</option>
              </select>            
            </div>
                <div class="flex">
                    <button class="button-blue-outline close-modal mr-10" onclick="closeEventModals()">Discard</button>
                    <button type="submit" class="button-blue edit-file-save">Save</button>
                </div>
            </div>
        </div>
<script>
flask.onUpdate((code) => {
            // do something with code here.
            // this will trigger whenever the code
            // in the editor changes.
            //console.log(code)
        });
        flask.updateCode(code);

</script>
`
        let language = 'js'
        textEditor(language)

        function textEditor(lang) {
            let languageEditor = lang
            const flask = new CodeFlask('#file-editor', {language: languageEditor, lineNumbers: true});
            flask.onUpdate((code) => {
                // do something with code here.
                // this will trigger whenever the code
                // in the editor changes.
                //console.log(code)
            });
            flask.updateCode(code);

        }

        // document.querySelectorAll(".code").forEach(function(element) {
        //     element.innerHTML = element.innerHTML.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
        // });
        // document.querySelectorAll('textarea.code').forEach(el => {
        //     hljs.highlightElement(el);
        // });
        //
        // let fileCode = document.querySelector('.code').innerHTML
        // document.querySelector('.inner-code').innerHTML = fileCode


    }, 200)
}

function openFile() {
    let data = newData
    let fileText = `
<div class="black-background modal edit-file-window">
    <div class="modal-window">
        <div class="top-modal flex flex-between align-center w-full">
            <p class="mb-1">${data.filename}</p>
            <svg onclick="closeEventModals()" class="close-modal pointer drop-shadow" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            
        </div>
        <form>
            <div class="center-modal-small">
                <div class="mb-20">                
  <div class="code language-html">
  <!-- code-start-->
     <div class="bottom-modal">
            <div class="stripe-gray my-30"></div>
            <div class="flex flex-between align-center my-40">
                 <div class="form-select-div">            
              <select name="select" class="form-select">
              <option selected>General</option>
                 <option>Text</option>
                 <option>HTML</option>
                 <option>CSS</option>
              </select>            
            </div>
                <div class="flex">
                    <button class="button-blue-outline close-modal mr-10" onclick="closeEventModals()">Discard</button>
                    <button type="submit" class="button-blue edit-file-save">Save</button>
                </div>
            </div>
        </div>
<script>
flask.onUpdate((code) => {
            // do something with code here.
            // this will trigger whenever the code
            // in the editor changes.
            //console.log(code)
        });
        flask.updateCode(code);

</script>
<!-- code-end-->  
</div>  
              
                </div>  
            </div>
        </form>
        
    </div>

</div>
`

    let newWindow = document.createElement('div')
    setTimeout(() => {
        newWindow.innerHTML = fileText
        document.body.appendChild(newWindow)
    }, 100)

    setTimeout(() => {
        document.querySelectorAll(".code").forEach(function (element) {
            element.innerHTML = element.innerHTML.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
        });
        document.querySelectorAll('div.code').forEach(el => {
            hljs.highlightElement(el);
            hljs.lineNumbersBlock(el);
        });
    }, 200)


}

function previewFile() {

    let files = document.querySelectorAll('.project')
    files.forEach((el) => {
        let data = JSON.parse(el.dataset.data)
        if (fileId === data.id) {


            el.querySelector('.item').click()
            setTimeout(() => {

            }, 200)
        }
    })

}

// function flagFile() {
//     alert('flag file id=' + fileId)
// }

function downloadFile() {

    let data = newData
    url = newData.link
    download('url', newData.fileName);
}

function branchFile() {
    alert("branch File id=" + fileId)
}

function shareFile() {
    alert("share file id=" + fileId)
}

function renameFile() {
    alert("rename File id=" + fileId)
}

function copyFile() {
    alert("copy file id=" + fileId)
}

function deleteFile() {
    alert("delete file id=" + fileId)
}
