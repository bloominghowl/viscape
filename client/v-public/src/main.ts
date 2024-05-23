/* Importing main.css */
import './assets/main.css'

/* Importing flowbite Vue styles */
import '../node_modules/flowbite-vue/dist/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
 

/* Importing Primevue's Vue styles and themes */
import 'primevue/resources/primevue.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'


import App from './App.vue'
import router from './router'

/* Importing Primvue Components */
import PrimeVue from 'primevue/config';
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.component('Sidebar', Sidebar)
app.component('Button', Button)
app.component('Avatar', Avatar)
app.mount('#app')
