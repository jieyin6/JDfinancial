<template>
<div :class="$style.container">
     <manage-header></manage-header>
     <choose></choose>
     <div :class="$style.marginBottom">
         <img :class="$style.img" src="//img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png?width=1080&height=240">
     </div>
     <manage-item></manage-item>
     <bottom :src='bottomSrc'></bottom>
</div>
 
</template>

<script>

import bottom from '../base/bottom'
import manageHeader from './manageHeader'
import choose from './choose'
import manageItem from './manage-item'
export default {
    components:{
        bottom,
        manageHeader,
        choose,
        manageItem
    },
    data(){
        return{
           bottomSrc:'//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120'
        }
    }
}
</script>

<style lang='scss' module>
@import '../../../css/element';
</style>

