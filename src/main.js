import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Button from "./components/Button"

const app = createApp(App).use(store).use(router);

app.component('Button', Button);

app.mount('#app');