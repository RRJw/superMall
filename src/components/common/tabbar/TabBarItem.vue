 <template>
   <div class="tab-bar-item" @click="changeColor">
        <slot v-if="!isActive" name="item-img"></slot>
        <slot v-else name="item-img-active"></slot>
     <div :class="{itemtext:isActive }">
        <slot name="item-text"></slot>
     </div>
   </div>
 </template>
 <script>
 export default {
   name:'tabBar-item',
   props:{
     path:String
   },
   data() {
     return {
      //  isActive:false
     }
   },
   computed:{
     isActive(){
       return this.$route.path.indexOf(this.path) !== -1
     }
   },
   methods:{
     changeColor(){
       this.$router.push(this.path)
     }
   },
 }
 </script>
 <style scoped>
 .tab-bar-item{
   flex: 1;
   text-align: center;
 }
 p{
   margin: 0;
   font-size: 12px;
 }
 img{
   margin-top: 4px;
   height: 24px;
   width: 24px;
   vertical-align: middle;
 }
 .itemtext{
   color: red; 
 }
 </style>