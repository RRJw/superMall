<template>
  <div class="good-list-item" @click="detailR">
    <img v-lazy="gooditem.showLarge.img" alt="" @load="imageLoad">
    <div class="content">
      <div class="title">{{ gooditem.title }}</div>
      <span>{{ gooditem.price }}</span>
      <span>{{ gooditem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodHomeItem',
  props:{
    gooditem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imageLoad(){
      this.$bus.$emit('imgload')
    },
    detailR(){
      this.$router.push('/detail/'+this.gooditem.iid)
    }
  }
}
</script>

<style scoped>
.good-list-item{
  width: 48%;
  font-size: 8px;
}
.good-list-item img{
  width: 100%;
  border-radius: 5px;
}
.title{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 20px;
  line-height: 20px;
}
.content{
  text-align: center;
}
span:first-of-type{
  color: var(--color-high-text);
  margin-right: 20px;
}
span:last-of-type{
  position: relative;
}
span:last-of-type::before{
  content: '';
  position: absolute;
  left: -14px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>