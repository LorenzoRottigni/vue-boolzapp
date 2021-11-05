Vue.config.devtools = true;

//at content loaded
window.addEventListener('DOMContentLoaded',()=>{
    //instantiate vue app
    const vueApp = new Vue({
        //root selector
        el: '#application-container',
        //app variables
        data: {
            contacts : [
                {
                    contactName : 'Luigi',
                    contactImage : './images/avatar_1.jpg',
                    messages : [
                        {
                            message : 'Message sent from me',
                            messageDate : dayjs().format('LLLL'),
                            sender : 'user',
                            dropdownStatus : false,
                            starred: false
                        },
                        {
                            message : 'Message recived 1',
                            messageDate : dayjs().format('LLLL'),
                            sender : 'contact',
                            dropdownStatus : false,
                            starred: false
                        },
                        {
                            message : 'Message recived 2',
                            messageDate : dayjs().format('LLLL'),
                            sender : 'contact',
                            dropdownStatus : 0,
                            starred: false
                        }
                    ]
                },
                {
                    contactName : 'Mario',
                    contactImage : './images/avatar_2.jpg',
                    messages : [
                        {
                            message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit distinctio autem in, repellat facilis doloremque minima. Necessitatibus atque, adipisci quo iusto quam aliquid fuga sed veniam ipsum magni eligendi.',
                            messageDate : dayjs().format('LLLL'),
                            dropdownStatus : false,
                            starred: false
                        }
                    ]
                },
                {
                    contactName : 'Giovanni',
                    contactImage : './images/avatar_3.jpg',
                    messages : [
                        {
                            message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit distinctio autem in, repellat facilis doloremque minima. Necessitatibus atque, adipisci quo iusto quam aliquid fuga sed veniam ipsum magni eligendi.',
                            messageDate : dayjs().format('LLLL'),
                            dropdownStatus : false,
                            starred: false
                        }
                    ]
                },
                {
                    contactName : 'Alessandra',
                    contactImage : './images/avatar_4.jpg',
                    messages : [
                        {
                            message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit distinctio autem in, repellat facilis doloremque minima. Necessitatibus atque, adipisci quo iusto quam aliquid fuga sed veniam ipsum magni eligendi.',
                            messageDate : dayjs().format('LLLL'),
                            dropdownStatus : false,
                            starred: false
                        }
                    ]
                },
                {
                    contactName : 'Paola',
                    contactImage : './images/avatar_5.jpg',
                    messages : [
                        {
                            message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit distinctio autem in, repellat facilis doloremque minima. Necessitatibus atque, adipisci quo iusto quam aliquid fuga sed veniam ipsum magni eligendi.',
                            messageDate : dayjs().format('LLLL'),
                            dropdownStatus : false,
                            starred: false
                        }
                    ]
                },
                {
                    contactName : 'Sofia',
                    contactImage : './images/avatar_6.jpg',
                    messages : [
                        {
                            message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit distinctio autem in, repellat facilis doloremque minima. Necessitatibus atque, adipisci quo iusto quam aliquid fuga sed veniam ipsum magni eligendi.',
                            messageDate : dayjs().format('LLLL'),
                            dropdownStatus : false,
                            starred: false
                        }
                    ]
                },
                {
                    contactName : 'Marco',
                    contactImage : './images/avatar_7.jpg',
                    messages : [
                        {
                            message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit distinctio autem in, repellat facilis doloremque minima. Necessitatibus atque, adipisci quo iusto quam aliquid fuga sed veniam ipsum magni eligendi.',
                            messageDate : dayjs().format('LLLL'),
                            dropdownStatus : false,
                            starred: false
                        }
                    ]
                },
                {
                    contactName : 'Tiziano',
                    contactImage : './images/avatar_8.jpg',
                    messages : [
                        {
                            message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit distinctio autem in, repellat facilis doloremque minima. Necessitatibus atque, adipisci quo iusto quam aliquid fuga sed veniam ipsum magni eligendi.',
                            messageDate : dayjs().format('LLLL'),
                            dropdownStatus : false,
                            starred: false
                        }
                    ]
                }
            ],
            activeIndex : 0,
            newMessage : undefined,
            substring : '',
            newChatName : undefined
        },
        methods: {
            setActiveIndex(newIndex){
                this.activeIndex = newIndex
            },
            randomDate() {
                const start = new Date(2012, 0, 1)
                const end = new Date()
                return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
            },
            sendMessage(sender) {
                this.contacts[this.activeIndex].messages.push({
                    message : this.newMessage,
                    messageDate : dayjs().format('LLLL'),
                    sender : 'user',
                    dropdownStatus : 0,
                    starred: false
                })
                this.newMessage = undefined
            },
            autoMessage(){
                this.contacts[this.activeIndex].messages.push({
                    message : 'auto message',
                    messageDate : dayjs().format('LLLL'),
                    sender : 'contact',
                    dropdownStatus : 0,
                    starred: false
                })
            },
            removeMessage(index){
                this.contacts[this.activeIndex].messages.splice(index, true)
                this.contacts[this.activeIndex].messages.forEach(message => {
                    message.dropdownStatus = true;
                });
            },
            createChat(){
                this.contacts.unshift({
                    contactName : this.newChatName,
                    contactImage : './images/avatar_none.png',
                    messages : [
                        {
                            message : 'Text to me please!',
                            messageDate : dayjs().format('LLLL'),
                            dropdownStatus : false
                        }
                    ]
                })
            },
            starMessage(index){
                if(this.contacts[this.activeIndex].messages[index].starred)
                    this.contacts[this.activeIndex].messages[index].starred = false
                else
                    this.contacts[this.activeIndex].messages[index].starred = true
            }
        },
        mounted(){

        },
        updated(){
            const mainChatContainer = document.querySelector('.application-main-section-chat-container')
            mainChatContainer.scrollTop = mainChatContainer.scrollHeight
        }
    })
})
