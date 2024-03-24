import { createApp } from 'vue'
import App from './App.vue'
import roteador from './roteador'
import'bootstrap/dist/css/bootstrap.min.css'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';

createApp(App)
    .use(roteador)
    .use(VueSweetalert2)
    .mount('#app')