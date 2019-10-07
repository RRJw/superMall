<template>
  <div id="home">
    <nav-bar class="home-nav"><h2 slot="center">购物街</h2></nav-bar>
    <tab-control v-show="isoffset" ref="tabcontrol1" class="tab-control" :titles="['流行','新款','精选']" @tabclick="tabClick">
    </tab-control>
    <scroll class="content" 
            ref="scroll" 
            :probe-type="3" 
            @scroll="showbackto"
            :pull-up-load="true"
            @pullingUp="loadMore" :data="banners">
      <home-swiper :banners="banners" @loadimg="loadimg"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <feature></feature>
      <tab-control ref="tabcontrol2" :titles="['流行','新款','精选']" @tabclick="tabClick"></tab-control>
      <good-list :good="goods[curvalue].list"></good-list>
    </scroll>
    <back-to @click.native="backto" v-show="isbackto"/>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'
  import {getHomeMultidata,getHomeGoods} from 'network/home.js'

  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommend from './childComps/HomeRecommend'
  import Feature from './childComps/Feature'
  //主页的控制栏
  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodList from 'components/content/homegoods/GoodList'
  import BackTo from 'components/content/backto/BackTo'

  import {debounce} from 'common/utils.js'

export default {
  name:'home',
  components:{
     NavBar,
     HomeSwiper,
     HomeRecommend,
     Feature,
     TabControl,
     GoodList,
     Scroll,
     BackTo
  },
  data() {
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      curvalue:'pop',
      isbackto:false,
      offsettop:0,
      isoffset:false,
      savey:0
    }
  },
  created(){
    //对网络请求进行二次封装，便于调用
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  activated() {
      this.$refs.scroll.scrollTo(0,this.savey,0)
      this.$refs.scroll.scrollref()
    },
    deactivated() {
      this.savey = this.$refs.scroll.savey()
    },
  mounted(){
    //当一个函数作为一个参数传入debounce方法中时，不要打()
    const refresh = debounce(this.$refs.scroll.scrollref,50)
    //对滑动bug的解决：通过监听每次图片加载来对可滚动区域高度的重新计算来实现流畅滚动
    //问题：refresj() 函数调用次数过多影响性能，可通过抖动函数解决
    this.$bus.$on('imgload',() =>{
       refresh()
    })
  },
  methods:{
    /**
     * 点击事件相关的方法
     */
    tabClick(index){
      switch(index){
        case 0:
          this.curvalue = 'pop'
          break
        case 1:
          this.curvalue = 'new'
          break
        case 2:
          this.curvalue = 'sell'
          break
      }
      this.$refs.tabcontrol1.curIndex = index
      this.$refs.tabcontrol2.curIndex = index
    },
    backto(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    showbackto(position){
      //当滚动到1000位置时，back显示
      this.isbackto = -position.y>1000
      //当滚动到偏移值时显示tab-control
      this.isoffset = -position.y>this.offsettop
    },
    loadMore(){
      //当上拉时，加载这个方法并调用请求数据方法加载更多的数据
      this.getHomeGoods(this.curvalue)
      this.$refs.scroll.scrollref()
    },
    loadimg(){
       this.offsettop = this.$refs.tabcontrol2.$el.offsetTop
       this.$refs.scroll.scrollref()
    },
    /*
    网络请求相关的方法
    */
    //通过axios框架请求接口的数据并保存到组件的data中
    getHomeMultidata(){
        getHomeMultidata().then(res =>{
          this.banners=res.data.banner.list
          this.recommends=res.data.recommend.list
        })
    },
    //复杂数据通过网络请求参数来获取不同的数据
    getHomeGoods(type){
        const page = this.goods[type].page+1
        getHomeGoods(type,page).then(res =>{
          // this.goods[type].list.push.apply(this.goods[type].list,res.data.list)
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1
          //当每次加载玩上一次的数据后，调用这个方法可以实现下次在下拉时再调用上面的下拉请求数据
          this.$refs.scroll.finishPullUp()
        })
    }
  }
}
</script>
<style scoped>
  #home{
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background: var(--color-tint);
    color:white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .tab-control{
    /* position: sticky;
    top: 44px; */
    position: relative;
    z-index: 9;
  }
  .content{
    /* overflow: hidden; */

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  /* height: calc(100%-93px)*/
</style>>