
window.addEventListener('DOMContentLoaded',()=>{


    const createChatButton = document.querySelector('.application-side-section-chat-container button')
    const chatContainer = document.querySelector('.application-side-section-chat-container')
    const newChatContainer = document.querySelector('.application-side-section-new-chat-container')
    createChatButton.addEventListener('click',()=>{
        chatContainer.style.display = 'none'
        newChatContainer.classList.replace('d-none','d-flex')
    })


    const addChatButton = document.querySelector('.application-side-section-new-chat-container button')
    addChatButton.addEventListener('click', ()=>{
        chatContainer.style.display = 'block'
        newChatContainer.classList.replace('d-flex','d-none')
        chatContainer.scrollTop = 0
    })


    const mainSearchIcon = document.querySelector('.application-main-section .fa-search')
    const inputSearch = document.getElementById('search-input')
    mainSearchIcon.addEventListener('click',()=>{
        inputSearch.focus()
    })


    
    const mainChatContainer = document.querySelector('.application-main-section-chat-container')
    const msg = document.querySelectorAll('.application-main-section-chat-container .msg')

    /*codice funzionante*/
    window.addEventListener('keyup', ({key}) => {
        if (key === "Enter") {
             mainChatContainer.scrollTop = mainChatContainer.scrollHeight
        }
    })

    /*codice non funzionante*/
    msg.forEach(message => {
        message.addEventListener('load', ()=>{
            mainChatContainer.scrollTop = mainChatContainer.scrollHeight
        })
    });
})


