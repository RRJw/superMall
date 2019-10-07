<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
      <img v-lazy="item.image">
      <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name:'HomeRecommend',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style scoped>
.recommend{
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 20px 0px 10px;
  border-bottom: 10px solid #eee;
}
.recommend-item{
  flex: 1;
   margin-bottom: 20px;
}
.recommend-item img{
  margin-bottom: 5px;
  height: 70px;
}
</style>