<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav"/>
    <scroll ref="detailScroll" class="detail-scroll" :probe-type="3" :pull-up-load="true" :data="topImages">
    <detail-swiper :topimages="topImages"/>
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop" />
    <detail-goods-info :detail-info="detailInfo" @detailloadimg="refreshimg"/>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import Scroll from 'components/common/scroll/Scroll'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailBottomBar from './childComps/DetailBottomBar'
import {getDetail,Goods,Shop} from 'network/detail.js'

export default {
  name:'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailBottomBar
  },
  data() {
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{}
    }
  },
  created(){
    this.iid = this.$route.params.iid
    //获取顶部轮播图信息
    getDetail(this.iid).then( (res)=>{
      const data = res.result
      this.topImages = data.itemInfo.topImages

      //获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      //创建店铺信息对象
      this.shop = new Shop(data.shopInfo)

      this.detailInfo = data.detailInfo
    })
  },
  methods:{
    refreshimg(){
      this.$refs.detailScroll.scrollref()
    },
    addToCart(){
      //向购物车添加商品
      const obj = {}
        obj.iid = this.iid;
        obj.imgURL = this.topImages[0]
        obj.title = this.goods.title
        obj.desc = this.goods.desc;
        obj.newPrice = this.goods.oldPrice;
        // 3.添加到Store中
        this.$store.dispatch('addCart', obj).then( res => {
          this.$toast.show(res,2000)
          console.log(this.$toast)
        })
    }
  }
}
</script>

<style scoped>
.detail{
  position: relative;
  z-index: 9;
  background: #fff;
  height: 100vh;
}
.detail-scroll{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}
.detail-nav{
  background: #fff;
  z-index: 9;
  position: relative;
}
</style>