import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './main.css'
import * as ElIconModules from '@element-plus/icons-vue'
import JessibucaDemo from "./components/JessibucaDemo.vue";



var app = createApp(App)
app.use(ElementPlus);
app.use(router).mount('#app')
Object.keys(ElIconModules).forEach(key => {
    app.component(ElIconModules[key].name, ElIconModules[key])
})

app.component('JessibucaDemo', JessibucaDemo)