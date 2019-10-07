<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
import { setTimeout } from 'timers';

BScroll.use(Pullup)

export default {
  name:'Scroll',
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  created(){
    this.scroll = null
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      scrollY:true,
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })
    this.scroll.on('scroll',(position) =>{
      this.$emit('scroll',position)
    })
    this.scroll.on('pullingUp',() =>{
      this.$emit('pullingUp')
    })
  },
  methods:{
    scrollref(){
      this.scroll && this.scroll.refresh()
    },
    scrollTo(x,y,time){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    savey(){
      return this.scroll.y ? this.scroll.y : 0
    }
  },
  watch:{
    data(){
      setTimeout(() =>{
        this.scrollref()
      },20)
    }
  }
}
</script>

<style scoped>

</style>