<template>
  <div class="detail-shop-info">
    <div class="detail-shop">
    <div class="shop-logo">
      <img :src="shop.logo" alt="">
      <div class="shop-name"> {{ shop.name }} </div> 
    </div>
    <div class="shop-enter">
      <button>进店逛逛</button>
    </div>
    </div>
    <div class="shop-middle">
      <div class="middle-left">
        <div class="middle-count">
          <span>{{ shop.sells | sellCount }}</span>
          <span>{{ shop.goodsCount }}</span>
          </div>
        <div class="middle-text"> 
          <span>总销量</span>
          <span>宝贝</span>
        </div>
      </div>
      <div class="middle-right">
        <div class="shop-message" v-for="(item,index) in shop.score" :key="index">
            <span> {{item.name}}</span>
            <span> {{item.score}}</span>
            <span v-if="item.isBetter" class="message-true">高</span>
            <span v-else class="message-false">低</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailShopInfo',
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    sellCount(data){
      const nub = data+" "
      if(data/10000>=1){
        return nub[0]+'.'+nub[1]+'万'
      }else{
        return 0+'.'+nub[0]+'万'
      }
    }
  }
}
</script>

<style scoped>
.detail-shop-info{
  border-bottom: 10px solid #eee;
}
.detail-shop{
  position: relative;
  margin: 30px 20px 10px;
}
.shop-logo{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #eee;
  position: relative;
}
.shop-logo img{
  height: 100%;
  border-radius: 50%;
  margin-right: 10px;
}
.shop-name{
  position: absolute;
  right: -100px;
  bottom: 16px;
  font-weight: bold;
}
.shop-enter{
  position: absolute;
  right: 40px;
  bottom: 18px;
}
.shop-enter button{
  padding: 3px 6px;
  border-radius: 5px;
  font-size: 14px;
  border: none;
  background: var(--color-tint);
  color: white;
}
.shop-middle{
  display: flex;
  margin: 20px;
  font-weight: bold;
  justify-content: space-around;
}
.middle-count{
  margin-bottom: 20px;
}
.middle-count span{
  padding: 10px 15px;
}
.middle-text span{
  padding: 10px 10px;
}
.shop-message span{
  margin: 10px;
  font-size: 14px;
  font-weight: normal; 
}
.middle-left{
  padding-right: 20px;
  border-right: 1px solid rgba(166, 179, 166, 0.3)
}
.message-true{
  background: rgb(236, 68, 68);
  color: white;
}
.message-false{
  background: rgb(115, 228, 92);
  color:white;
}
</style>