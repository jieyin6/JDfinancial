<template>
   <div class="c-header">
      <img :src='header.banner'>
      <module :title="header.headerTitle" :more='header.more'>
         <ul>
             <li v-for="pic in header.pics" :key="pic">
                 <img :src='pic'>
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

<style lang='scss'>
.c-header{
    position: relative;
    width: 100%;
    margin-bottom: 20px;
    padding-bottom: 40px;
    background: #fff;
    img{
        width: 100%;
    }
    ul{
        display: flex;
        justify-content: space-around
    }
}
</style>
