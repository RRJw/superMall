<template>
  <div class="good-list">
    <good-list-item v-for="(item,index) in good" :key="index" :gooditem="item"></good-list-item>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem'

export default {
  name: 'GoodList',
  components:{
    GoodListItem
  },
  props:{
    good:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.good-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 6px;
}
</style>