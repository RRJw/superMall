import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    cartList: []
}

const store = new Vuex.Store({
    state,
    //在mutation中的方法进来做的事情尽量单一，方便跟踪
    mutations: {
        addCounter(state, info) {
            info.count++
        },
        addToCart(state, info) {
            info.checked = true
            state.cartList.push(info)
        }
    },
    actions: {
        addCart(context, info) {
            //通过返回promise对象来判断是添加了新的商品还是商品数加一。
            return new Promise((resolve, reject) => {
                //查看商品列表中是否存在这个商品
                const oldInfo = context.state.cartList.find(item => item.iid === info.iid)
                    //find方法如果找到这个对象就立刻返回他
                if (oldInfo) {
                    context.commit('addCounter', oldInfo)
                    resolve('添加商品+1')
                } else {
                    info.count = 1
                    info.checked = true
                        // context.state.cartList.push(info)
                    context.commit('addToCart', info)
                    resolve('成功添加一个商品')
                }
            })
        }
    },
    getters: {
        cartList(state) {
            return state.cartList
        }
    }
})

export default store