<template>
  <div v-if="Object.keys(goods).length !==0" class="detail-base-info">
    <div class="info-price">
      <span>{{ goods.newPrice }}</span>
      <span>{{ goods.oldPrice }}</span>
      <span>{{ goods.discount }}</span>
    </div>
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-other">
      <span> {{ goods.columns[0] }}</span>
      <span> {{ goods.columns[1] }}</span>
      <span> {{ goods.services[goods.services.length-1].name }}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{ goods.services[index-1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailBaseInfo',
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  },
}
</script>

<style scoped>
.detail-base-info{
  border-bottom: 10px solid #eee;
}

.info-price{
  margin: 14px 8px;
}
.info-price span:first-of-type{
  color: var(--color-high-text);
  font-size: 20px;
}
.info-price span:nth-of-type(2){
  margin:0px 5px;
  font-size: 10px;
  color: rgb(176, 185, 185);
  text-decoration: line-through;
}
.info-price span:last-of-type{
  background: var(--color-tint);
  color:white;
  font-size: 14px;
  border-radius: 5px;
}
.info-title{
  margin: 14px 8px;
  font-size: 14px;
  font-weight: bold;
}
.info-other{
  display: flex;
  font-size: 12px;
  justify-content: space-around;
  margin: 14px 8px;
}
.info-service{
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  margin: 20px 8px;
}
.info-service-item img{
  height: 12px;
  width: 12px;
}
</style>