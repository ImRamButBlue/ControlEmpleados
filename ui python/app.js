const routes = [
    {path:'/home',component:home},
    {path:'/empleado',component:empleado},
    {path:'/departamento',component:departamento},
    {path:'/sueldo',component:sueldo}
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

const app = Vue.createApp({
    
})
app.use(router)
app.mount('#app')