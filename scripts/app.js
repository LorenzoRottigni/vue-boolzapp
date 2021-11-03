Vue.config.devtools = true;

//at content loaded
window.addEventListener('DOMContentLoaded',()=>{
    //instantiate vue app
    const vueApp = new Vue({
        //root selector
        el: '#root',
        //app variables
        data: {
            //h1 text
            message: `Hello! i'm Lorenzo and i'm learning VueJs`,
            //img src attribute
            imageLocation: `images/vue-img.webp`
        }
    })
})