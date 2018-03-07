<template>
   <div :class="$style.cHeader">
      <img :src='header.banner'>
      <module :title="header.headerTitle" :more='header.more'>
         <ul>
             <li v-for="pic in header.pics" :key="pic">
                 <img :class="$style.img" :src='pic'>
             </li>
         </ul>
     </module>
  </div>
</template>

<script>
import module from '../base/module'
export default {
    props:{
        header:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    components:{
        module
    },
    
}
</script>

<style lang='scss' module>
@import '../../../css/layout';
@import '../../../css/element';
.cHeader{
    position: relative;
    width: 100%;
    margin-bottom: 20px;
    padding-bottom: 40px;
    background: #fff;
    
    ul{
        @include flex()
    }
}
</style>
