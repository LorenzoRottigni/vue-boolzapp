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
    })
})


