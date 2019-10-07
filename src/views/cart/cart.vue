<template>
  <div class="cart">
    <nav-bar class="cart-nav-bar">
      <div slot="center">购物车</div>
    </nav-bar>
    <scroll class="content" :probe-type="3" :pull-up-load="true" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList" :key="index" :item-info="item"></cart-list-item>
    </scroll>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import {mapGetters} from 'vuex'
import CartListItem from './CartListItem'

export default {
  name:'cart',
  components:{
    NavBar,
    Scroll,
    CartListItem
  },
  computed:{
    ...mapGetters(['cartList'])
  },
  activated(){
    this.$refs.scroll.scrollref()
  }
}
</script>
<style scoped>
.cart{
  height: 100vh;
  position: relative;
}
.cart-nav-bar{
  background: var(--color-tint);
  color: #fff;
}
.content{
  position: absolute;
  top:44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>>