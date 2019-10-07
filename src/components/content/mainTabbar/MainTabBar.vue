<template>
  <tab-bar>
      <tabbar-item path="/home">
        <img slot="item-img" src="~assets/img/tabBar/home.png" alt="">
        <img slot="item-img-active" src="~assets/img/tabBar/home-active.png" alt="">
        <p slot="item-text">首页</p>
      </tabbar-item>
      <tabbar-item path="/collect">
        <img slot="item-img" src="~assets/img/tabBar/collect.png" alt="">
        <img slot="item-img-active" src="~assets/img/tabBar/collect-active.png" alt="">
        <p slot="item-text">分类</p>
      </tabbar-item>
      <tabbar-item path="/cart">
        <img slot="item-img" src="~assets/img/tabBar/cart.png" alt="">
        <img slot="item-img-active" src="~assets/img/tabBar/cart-active.png" alt=""> 
        <p slot="item-text">购物车</p>
      </tabbar-item>
      <tabbar-item path="/profile">
        <img slot="item-img" src="~assets/img/tabBar/profile.png" alt="">
        <img slot="item-img-active" src="~assets/img/tabBar/profile-active.png" alt=""> 
        <p slot="item-text">我的</p>
      </tabbar-item>
    </tab-bar>
</template>
<script>
import TabBar from '../../common/tabbar/TabBar'
import tabbarItem from '../../common/tabbar/TabBarItem'

export default {
  name:'MainTabBar',
  components:{
    TabBar,
    tabbarItem
  }
}
</script>
<style scoped>

</style>