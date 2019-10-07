<template>
      <swiper class="homede-swiper" :options="swiperOption" ref="mySwiper"> <!--ref="mySwiper"--> 
        <swiper-slide v-for="(item,index) in banners" :key="index">
          <a :href="item.link">
          <img :src="item.image" @load="loadimg"> 
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name:'HomeSwiper',
   components: {
    swiper,
    swiperSlide
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
   data() {
      return {
        isload:false,
        swiperOption: {
          autoplay:{
            delay:2000,
            disableOnInteraction: false
          },
          slidesPerView: 1,
          centeredSlides: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
        }
      }
    },
    activated(){
      this.swiper.slideTo(2, 1000, false)
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(1, 1000, false)
    },
     methods:{
      loadimg(){
        if(!this.isload){
        this.$emit('loadimg')
          this.isload=true
        }
      }
  }
}
</script>
<style scoped>
.homede-swiper{
  width: 100%;
}
img{
  width: 100%;
  background-repeat: round;
}
</style>