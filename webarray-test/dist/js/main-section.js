function showCommonMenu(e) {

    e.preventDefault()
    closeMainMenus()
    let mainPopup = `<div class="main main-menu-box animation-popup " style="position:fixed; left: ${xCoordinate}px; top: ${yCoordinate}px">
    <ul>
        <li class="new-folder" onclick="createNewFolder()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="feather feather-folder-plus">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                <line x1="12" y1="11" x2="12" y2="17"></line>
                <line x1="9" y1="14" x2="15" y2="14"></line>
            </svg>
            <span>New folder</span></li>
        <li class="new-file" onclick="createNewFile()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="feather feather-file-plus">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="12" y1="18" x2="12" y2="12"></line>
                <line x1="9" y1="15" x2="15" y2="15"></line>
            </svg>
            <span>New file</span></li>
    </ul>
    <p class="stripe-gray"></p>
    <ul>
        <li class="upload" onclick="uploadFile()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="feather feather-arrow-up-circle">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="16 12 12 8 8 12"></polyline>
                <line x1="12" y1="16" x2="12" y2="8"></line>
            </svg>
            <span>Upload</span></li>
        <li class="paste"  onclick="pasteFile(event)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="feather feather-plus-circle">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            <span>Paste</span></li>
        <li class="download">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
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
        <li class="share" onclick="share()">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="feather feather-link">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
            <span>Share</span></li>
    </ul>
</div>`
    let newMain = document.createElement('div')

    setTimeout(() => {
        newMain.innerHTML = mainPopup
        document.body.append(newMain)
    }, 100)

    setTimeout(() => {
        //new file
        // const newFile = new Modals({
        //     selector: ".new-file"
        // })
        // newFile.click()

        mainMenu('main')

    }, 200)
}

function createNewFile() {
    let modal = `<div class="black-background modal new-file-window ">
    <div class="modal-window">
        <div class="top-modal flex flex-between align-center w-full">
            <p class="mb-1">Add New File</p>
            <svg onclick="closeEventModals()" class="close-modal pointer drop-shadow" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        
        </div>
        <form>
            <div class="center-modal">

                <div class="mb-20">
                    <label class="form-label">File Name</label>
                    <input class="form-control w-full" type="text" placeholder="File.txt">
                </div>
                <div class="mb-20">
                    <textarea class="form-control w-full" placeholder="Additional notes..."> need code editor</textarea>
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
<!--                <div class="select"  onclick="selectEvents()">-->
<!--                    <p class="mb-1 selectTitle">General</p>-->
<!--                    <ul class="select-popup hidden">-->
<!--                        <li>Text</li>-->
<!--                        <li>HTML</li>-->
<!--                        <li>CSS</li>-->
<!--                    </ul>-->
<!--                </div>-->
                <div class="flex">
                    <button class="button-blue-outline close-modal mr-10" onclick="closeEventModals()">Discard</button>
                    <button type="submit" class="button-blue new-file-save">Save</button>
                </div>
            </div>
        </div>
    </div>

</div>
`
    let box = document.createElement('div')
    setTimeout(() => {
        box.innerHTML = modal
        document.body.appendChild(box)
    }, 100)
}

function createNewFolder() {
    let modal = `<div class="black-background modal new-file-window ">
    <div class="modal-window">
        <div class="top-modal flex flex-between align-center w-full">
            <p class="mb-1">Create New Folder</p>
            <svg onclick="closeEventModals()" class="close-modal pointer drop-shadow" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        
        </div>
        <form>
            <div class="center-modal">

                <div class="mb-20">
                    <label class="form-label">Folder Name</label>
                    <input class="form-control w-full" type="text" placeholder="File.txt">
                </div>
               

            </div>
        </form>
        <div class="bottom-modal">
            <div class="stripe-gray my-30"></div>
            <div class="flex flex-between align-center my-40">
                
                <div class="flex">
                    <button class="button-blue-outline close-modal mr-10" onclick="closeEventModals()">Discard</button>
                    <button type="submit" class="button-blue new-file-save">Save</button>
                </div>
            </div>
        </div>
    </div>

</div>
`
    let box = document.createElement('div')
    setTimeout(() => {
        box.innerHTML = modal
        document.body.appendChild(box)
    }, 100)
}

function uploadFile() {
    // let input = document.createElement('input');
    // input.setAttribute('id','upload-new-file')
    // input.type = 'file';
    let input = document.getElementById('upload-new-file')
    input.click();

    input.addEventListener('change', () => {
        let filesFromInput = input.files
        console.log('upload-files:')
        for (let i = 0; i < filesFromInput.length; i++) {
            console.log(filesFromInput[i].name,filesFromInput[i])
        }
    })
}

function share() {
    let modal = `<div class="black-background modal new-file-window ">
    <div class="modal-window">
        <div class="top-modal flex flex-between align-center w-full">
            <p class="mb-1">Share URL</p>
            <svg onclick="closeEventModals()" class="close-modal pointer drop-shadow" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        
        </div>
        <form>
            <div class="center-modal">
            <label class="form-label">Permission</label>   
            <div class="form-select-div  mb-20">                 
              <select name="select" class="form-select big-select">
              <option selected>View+Edit</option>
                 <option>Only View</option>
                 <option>View+Edit+Delete</option>
              </select>            
            </div>
                <div class="mb-20">
                    <label class="form-label">Link</label>
                    <div class="flex align-center">
                    <input class="form-control w-full mr-20 " type="text" placeholder="https://webarray/test/project-23/">
                    <button class="form-control share-button" onclick="return false">
                    <span class=" flex flex-center align-center pointer ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    </span>
                    </button>
                    </div>
                </div>              

            </div>
            <div class="bottom-modal">
            <div class="stripe-gray my-30"></div>
            <div class="flex flex-end align-center my-40">
                
                <div class="flex">
                    <button class="button-blue-outline close-modal mr-10" onclick="closeEventModals()">Cancel</button>
                    <button type="submit" class="button-blue new-file-save">Copy</button>
                </div>
            </div>
        </div>
        </form>
        
    </div>

</div>
`
    let box = document.createElement('div')
    setTimeout(() => {
        box.innerHTML = modal
        document.body.appendChild(box)
    }, 100)
}

function pasteFile(e){
    e.stopPropagation();
    e.preventDefault();


document.onpaste=function(event) {
    let items = (event.clipboardData || event.originalEvent.clipboardData).items;
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (item.type.indexOf("image") != -1) {
            let file = item.getAsFile();
            upload_screenshot(file);
        }
    }
}

    function upload_screenshot(file) {
       let formData = new FormData();
        formData.append('screenshot', file);
        alert('screenshot and new file list', file)
        sendDropFileToServer(formData)
        // $.ajax('/wafm/index.php', {
        //     type: 'POST',
        //     contentType: false,
        //     processData: false,
        //     data: formData,
        //     error: function() {
        //         console.log("Error Occured");
        //     },
        //     success: function(res) {
        //         console.log("Screenshot Uploaded");
        //     }
        // });
    }

}