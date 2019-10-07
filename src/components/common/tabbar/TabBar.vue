<template>
  <div>
    <div class="tabBar">
      <slot></slot>  
    </div>
  </div>
</template>
<script>
export default {
  name:'TabBar'
}
</script>
<style scoped>
.tabBar{
  display: flex;
  height: 49px;
  background: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>