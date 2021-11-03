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
                            message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit distinctio autem in, repellat facilis doloremque minima. Necessitatibus atque, adipisci quo iusto quam aliquid fuga sed veniam ipsum magni eligendi.',
                            messageDate : new Date().toLocaleString(),
                            sender : 'user'
                        },
                        {
                            message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit distinctio autem in, repellat facilis doloremque minima. Necessitatibus atque, adipisci quo iusto quam aliquid fuga sed veniam ipsum magni eligendi.',
                            messageDate : new Date().toLocaleString(),
                            sender : 'contact'
                        },
                        {
                            message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit distinctio autem in, repellat facilis doloremque minima. Necessitatibus atque, adipisci quo iusto quam aliquid fuga sed veniam ipsum magni eligendi.',
                            messageDate : new Date().toLocaleString(),
                            sender : 'contact'
                        }
                    ]
                },
                {
                    contactName : 'Mario',
                    contactImage : './images/avatar_2.jpg',
                    messages : [
                        {
                            message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit distinctio autem in, repellat facilis doloremque minima. Necessitatibus atque, adipisci quo iusto quam aliquid fuga sed veniam ipsum magni eligendi.',
                            messageDate : new Date().toLocaleString()
                        }
                    ]
                },
                {
                    contactName : 'Giovanni',
                    contactImage : './images/avatar_3.jpg',
                    messages : [
                        {
                            message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit distinctio autem in, repellat facilis doloremque minima. Necessitatibus atque, adipisci quo iusto quam aliquid fuga sed veniam ipsum magni eligendi.',
                            messageDate : new Date().toLocaleString()
                        }
                    ]
                },
                {
                    contactName : 'Alessandra',
                    contactImage : './images/avatar_4.jpg',
                    messages : [
                        {
                            message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit distinctio autem in, repellat facilis doloremque minima. Necessitatibus atque, adipisci quo iusto quam aliquid fuga sed veniam ipsum magni eligendi.',
                            messageDate : new Date().toLocaleString()
                        }
                    ]
                },
                {
                    contactName : 'Paola',
                    contactImage : './images/avatar_5.jpg',
                    messages : [
                        {
                            message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit distinctio autem in, repellat facilis doloremque minima. Necessitatibus atque, adipisci quo iusto quam aliquid fuga sed veniam ipsum magni eligendi.',
                            messageDate : new Date().toLocaleString()
                        }
                    ]
                },
                {
                    contactName : 'Sofia',
                    contactImage : './images/avatar_6.jpg',
                    messages : [
                        {
                            message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit distinctio autem in, repellat facilis doloremque minima. Necessitatibus atque, adipisci quo iusto quam aliquid fuga sed veniam ipsum magni eligendi.',
                            messageDate : new Date().toLocaleString()
                        }
                    ]
                },
                {
                    contactName : 'Marco',
                    contactImage : './images/avatar_7.jpg',
                    messages : [
                        {
                            message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit distinctio autem in, repellat facilis doloremque minima. Necessitatibus atque, adipisci quo iusto quam aliquid fuga sed veniam ipsum magni eligendi.',
                            messageDate : new Date().toLocaleString()
                        }
                    ]
                },
                {
                    contactName : 'Tiziano',
                    contactImage : './images/avatar_8.jpg',
                    messages : [
                        {
                            message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit distinctio autem in, repellat facilis doloremque minima. Necessitatibus atque, adipisci quo iusto quam aliquid fuga sed veniam ipsum magni eligendi.',
                            messageDate : new Date().toLocaleString()
                        }
                    ]
                }
            ],
            activeIndex : 0,
            newMessage : undefined
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
                    messageDate : new Date().toLocaleString(),
                    sender : 'user'
                })
                this.newMessage = undefined
            },
            autoMessage(){

                this.contacts[this.activeIndex].messages.push({
                    message : 'auto message',
                    messageDate : new Date().toLocaleString(),
                    sender : 'contact'
                })
                
            }
        },
        mounted(){
            const chatContainer = document.querySelector('.application-main-section-chat-container')
            chatContainer.scrollTop = chatContainer.scrollHeight
        }
    })
})
