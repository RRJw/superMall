<template>
      <swiper class="detail-swiper" :options="swiperOption" ref="mySwiper"> <!--ref="mySwiper"--> 
        <swiper-slide v-for="(item,index) in topimages" :key="index">
          <img :src="item"> 
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name:'DetailSwiper',
  props:{
    topimages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    swiper,
    swiperSlide
  },
  data() {
    return {
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
}
</script>

<style scoped>
.detail-swiper{
  height: 300px;
  overflow: hidden;
}
img{
  width: 100%;
}
</style>