// function folderSection(e){
//     closeMainMenus()
//     e.stopImmediatePropagation()
//     console.log(e.target)
//     if (e.target.parentElement.classList.contains('folder')  ) {
//         e.preventDefault()
//         closeMainMenus()
//
//         let folderMenu = `<div class="folder-section main-menu-box  animation-popup "
//          style="position:fixed; left: ${xCoordinate}px; top: ${yCoordinate}px"  data-data='${e.target.parentElement.dataset.data}'>
//     <ul>
//         <li class="open-folder">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                  stroke-linejoin="round" class="feather feather-arrow-up-right">
//                 <line x1="7" y1="17" x2="17" y2="7"></line>
//                 <polyline points="7 7 17 7 17 17"></polyline>
//             </svg>
//             <span>Open folder</span></li>
//         <li class="download">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                  fill="none"
//                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
//                  class="feather feather-arrow-down-circle">
//                 <circle cx="12" cy="12" r="10"></circle>
//                 <polyline points="8 12 12 16 16 12"></polyline>
//                 <line x1="12" y1="8" x2="12" y2="16"></line>
//             </svg>
//             <span>Zip & Download</span></li>
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
//         </li>
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
//
// </div>`
//         let newFolderFile = document.createElement('div')
//         setTimeout(()=>{
//             newFolderFile.innerHTML = folderMenu
//             document.body.append(newFolderFile)
//         },100)
//
//         setTimeout(() => {
//             mainMenu('folder-section')
//             console.log(JSON.parse(e.target.parentElement.dataset.data))
//         }, 200)
//
//
//     }
// //     if (e.target.parentElement.parentElement.classList.contains('folder')  ) {
// //         e.preventDefault()
// //         closeMainMenus()
// //
// //         let folderMenu = `<div class="folder-section main-menu-box  animation-popup "
// //          style="position:fixed; left: ${xCoordinate}px; top: ${yCoordinate}px"  data-data='${e.target.parentElement.parentElement.dataset.data}'>
// //     <ul>
// //         <li class="open-folder">
// //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
// //                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
// //                  stroke-linejoin="round" class="feather feather-arrow-up-right">
// //                 <line x1="7" y1="17" x2="17" y2="7"></line>
// //                 <polyline points="7 7 17 7 17 17"></polyline>
// //             </svg>
// //             <span>Open folder</span></li>
// //         <li class="download">
// //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
// //                  fill="none"
// //                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
// //                  class="feather feather-arrow-down-circle">
// //                 <circle cx="12" cy="12" r="10"></circle>
// //                 <polyline points="8 12 12 16 16 12"></polyline>
// //                 <line x1="12" y1="8" x2="12" y2="16"></line>
// //             </svg>
// //             <span>Zip & Download</span></li>
// //     </ul>
// //     <p class="stripe-gray"></p>
// //     <ul>
// //         <li class="flag">
// //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
// //                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
// //                  stroke-linejoin="round" class="feather feather-flag">
// //                 <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
// //                 <line x1="4" y1="22" x2="4" y2="15"></line>
// //             </svg>
// //             <span>Flag</span>
// //             <ul class="flag-menu-box">
// //                 <li class="color-base">No flag</li>
// //                 <li class="color-important">Important</li>
// //                 <li class="color-approved">Approved</li>
// //                 <li class="color-final">Final</li>
// //                 <li class="color-good">Good</li>
// //                 <li class="color-old">Old</li>
// //                 <li class="color-bad">Bad</li>
// //             </ul>
// //         </li>
// //     </ul>
// //     <p class="stripe-gray"></p>
// //     <ul>
// //         <li class="share">
// //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
// //                  fill="none"
// //                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
// //                  class="feather feather-link">
// //                 <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
// //                 <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
// //             </svg>
// //             <span>Share</span></li>
// //     </ul>
// //     <p class="stripe-gray"></p>
// //     <ul>
// //         <li class="rename">
// //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
// //                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
// //                  stroke-linejoin="round" class="feather feather-edit-3">
// //                 <path d="M12 20h9"></path>
// //                 <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
// //             </svg>
// //             <span>Rename</span></li>
// //         <li class="copy">
// //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
// //                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
// //                  stroke-linejoin="round" class="feather feather-copy">
// //                 <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
// //                 <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
// //             </svg>
// //             <span>Copy</span></li>
// //         <li class="delete">
// //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
// //                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
// //                  stroke-linejoin="round" class="feather feather-trash-2">
// //                 <polyline points="3 6 5 6 21 6"></polyline>
// //                 <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
// //                 <line x1="10" y1="11" x2="10" y2="17"></line>
// //                 <line x1="14" y1="11" x2="14" y2="17"></line>
// //             </svg>
// //             <span>Delete</span></li>
// //     </ul>
// //
// // </div>`
// //         let newFolderFile = document.createElement('div')
// //         setTimeout(()=>{
// //             newFolderFile.innerHTML = folderMenu
// //             document.body.append(newFolderFile)
// //         },100)
// //
// //         setTimeout(() => {
// //             mainMenu('folder-section')
// //             console.log(JSON.parse(e.target.parentElement.parentElement.dataset.data))
// //         }, 200)
// //
// //
// //     }
// }
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
            <ul class="flag-menu-box">
                <li class="color-base">No flag</li>
                <li class="color-important">Important</li>
                <li class="color-approved">Approved</li>
                <li class="color-final">Final</li>
                <li class="color-good">Good</li>
                <li class="color-old">Old</li>
                <li class="color-bad">Bad</li>
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
