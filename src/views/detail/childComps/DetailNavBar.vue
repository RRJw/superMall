<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" @click="imgClick">
        <img class="img" src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <div class="center-item" 
             v-for="(item,index) in detallist" 
             :key="index" 
             :class="{ active: curIndex === index }"
             @click="change(index)">
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name:'DetailNavBar',
  components:{
    NavBar
  },
  data() {
    return {
      detallist:['商品','参数','评论','推荐'],
      curIndex:0
    }
  },
  methods:{
    imgClick(){
      this.$router.back()
    },
    change(index){
      return this.curIndex = index
    }
  }
}
</script>

<style scoped>
.center{
  display: flex;
  font-size: 14px;
}
.center-item{
  flex: 1;
}
.img{
  margin-top: 12px;
}
.active{
  color: var(--color-high-text)
}
</style>