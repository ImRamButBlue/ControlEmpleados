import { createApp,h } from 'vue';
import BootstrapVue3 from 'bootstrap-vue-3'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue';
import ListadoDepartamentos from './components/ListadoDepartamentos.vue';
import ListadoEmpleados from './components/ListadoEmpleados.vue';
import ListadoSueldos from './components/ListadoSueldos.vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const routes = [
    {path:'/',component:App},
    {path:'/empleado',component:ListadoEmpleados},
    {path:'/departamento',component:ListadoDepartamentos},
    {path:'/sueldo',component:ListadoSueldos}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp({
    render: ()=>h(App)
})
app.use(BootstrapVue3)
app.use(router)
app.mount('#app')
