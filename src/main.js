import { createApp, markRaw } from 'vue'
import App from './App.vue'
//routing library
import router from './router'
//bootstrap library
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.min.js";

//state management library
import { createPinia } from 'pinia'

const app = createApp(App)

//create a pinia root store
const pinia = createPinia();
//pinia should be able to use router - has to be setup as plugin
pinia.use(({ store }) => {
  store.$router = markRaw(router)
});

//add pinia object to our instance
app.use(pinia)
app.use(router)
app.mount('#app')
