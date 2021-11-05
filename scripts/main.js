
window.addEventListener('DOMContentLoaded',()=>{

    // add contact chat section displayer button
    const createChatButton = document.querySelector('.application-side-section-chat-container button')
    // side chat list
    const chatContainer = document.querySelector('.application-side-section-chat-container')
    // hidden add contact chat section
    const newChatContainer = document.querySelector('.application-side-section-new-chat-container')
    
    createChatButton.addEventListener('click',()=>{
        // display none contact chat list
        chatContainer.style.display = 'none'
        // display hidden add contact chat section
        newChatContainer.classList.replace('d-none','d-flex')
    })

    //hidden add contact chat section button
    const addChatButton = document.querySelector('.application-side-section-new-chat-container button')

    addChatButton.addEventListener('click', ()=>{
        //display back contact list
        chatContainer.style.display = 'block'
        //hide add contact chat section
        newChatContainer.classList.replace('d-flex','d-none')
        //scroll chat list to top
        chatContainer.scrollTop = 0
    })

    //main top right search icon
    const mainSearchIcon = document.querySelector('.application-main-section .fa-search')
    //side search input
    const inputSearch = document.getElementById('search-input')

    mainSearchIcon.addEventListener('click',()=>{
        //set focus to side search
        inputSearch.focus()
    })

})


