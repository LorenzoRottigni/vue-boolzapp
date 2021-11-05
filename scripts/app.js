Vue.config.devtools = true;

//at content loaded
window.addEventListener('DOMContentLoaded',()=>{
    //instantiate vue app
    const vueApp = new Vue({
        //root selector
        el: '#application-container',
        //app variables
        data: {
            //array of contacts
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
            //current displayed index of contacts
            activeIndex : 0,
            //binded to input text send message
            newMessage : undefined,
            //string to be searched in side section
            substring : '',
            //new contact[0] on create chat
            newChatName : undefined
        },
        methods: {
            /**
             * @param {int} newIndex  new contacts[] index to be desplayed
             * @description sets the new active contact in main section
             */
            setActiveIndex(newIndex){
                this.activeIndex = newIndex
            },
            /**
             * @description push new message to contats[active].messages[] with sender 'user'
             */
            sendMessage() {
                /* push new message */
                this.contacts[this.activeIndex].messages.push({
                    message : this.newMessage,
                    messageDate : dayjs().format('LLLL'),
                    sender : 'user',
                    dropdownStatus : 0,
                    starred: false
                })
                /* reset input message */
                this.newMessage = undefined
            },
            /**
             * @description push new auto message to contats[active].messages[] with sender 'contact'
             */
            autoMessage(){
                /* push auto message */
                this.contacts[this.activeIndex].messages.push({
                    message : 'auto message',
                    messageDate : dayjs().format('LLLL'),
                    sender : 'contact',
                    dropdownStatus : 0,
                    starred: false
                })
            },
            /**
             * @param {int} index index to be removed
             * @description remove indexed message from contacts[activeIndex].messages[index]
             */
            removeMessage(index){
                /* remove indexed element and shift others */
                this.contacts[this.activeIndex].messages.splice(index, true)
                /* necessary dropdown status reset */
                this.contacts[this.activeIndex].messages.forEach(message => {
                    message.dropdownStatus = true;
                });
            },
            /**
             * @description push new contact to contats[]
             */
            createChat(){
                /* add new contact at start of array */
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
            /**
             * @param {int} index index to be removed
             * @description toggles star from indexed message from contacts[activeIndex].messages[index].starred
             */
            starMessage(index){
                // if message is starred set not starred 
                if(this.contacts[this.activeIndex].messages[index].starred)
                    this.contacts[this.activeIndex].messages[index].starred = false
                else// if message is not starred set it starred
                    this.contacts[this.activeIndex].messages[index].starred = true
            }
        },
        mounted(){

        },
        /**
         * @description called each vue dom rerender
         */
        updated(){
            const mainChatContainer = document.querySelector('.application-main-section-chat-container')
            /* scroll messages main container to bottom */
            mainChatContainer.scrollTop = mainChatContainer.scrollHeight
        }
    })
})
