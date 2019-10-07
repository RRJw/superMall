<template>
  <div v-if="Object.keys(detailInfo).length !==0">
    <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" @load="detailGoodsImage">
  </div>
</template>

<script>
export default {
  name:'DetailGoodsInfo',
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    detailGoodsImage(){
      this.$emit('detailloadimg')
    }
  }
}
</script>

<style scoped>
img{
  width: 100%;
}
</style>