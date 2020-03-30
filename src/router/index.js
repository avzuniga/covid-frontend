import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/public/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/userhome',
        name: 'userhome',
        component: () =>
            import ('../views/private/userhome.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/Home')
    } else {
        next()
    }
});


export default router
