import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import vuelazyload from 'vue-lazyload'
import toast from 'components/common/toast/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */ )
Vue.use(toast)
Vue.use(vuelazyload, {
        loading: require('./assets/img/other/tu.jpg')
    })
    //当安装一个插件后，执行到main.js文件时，系统默认会执行这个插件文件的install函数
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
    store,
    render: h => h(App),
    router,
}).$mount('#app')