<template>
  <div class="tab-control">
    <div class="tab-control-item"
         v-for="(item,index) in titles" 
         :key="index"
         :class="{ active:index === curIndex }"
         @click="changstyle(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      curIndex:0
    }
  },
  methods:{
    changstyle(index){
      this.$emit('tabclick',index)
      return this.curIndex=index
    }
  }
}
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    background: #fff;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item span{
    padding:3px; 
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 3px solid var(--color-high-text);
  }
</style>