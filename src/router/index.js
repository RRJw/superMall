import vue from 'vue'

import VueRouter from 'vue-router'

const home = () =>
    import ('views/home/home.vue')
const cart = () =>
    import ('views/cart/cart.vue')
const profile = () =>
    import ('views/profile/profile.vue')
const collect = () =>
    import ('views/collect/collect.vue')
const detail = () =>
    import ('views/detail/Detail.vue')

vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/home'
    }, {
        path: '/home',
        component: home
    },
    {
        path: '/cart',
        component: cart
    },
    {
        path: '/profile',
        component: profile
    },
    {
        path: '/collect',
        component: collect
    },
    {
        path: '/detail/:iid',
        component: detail
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router