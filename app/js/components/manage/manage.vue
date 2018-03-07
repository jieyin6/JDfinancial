<template>
<div :class="$style.container">
     <manage-header :sliderPic='manage.slider'></manage-header>
     <choose :chooseContent='manage.chooseContent'></choose>
     <div :class="$style.marginBottom">
         <img :class="$style.img" src="//img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png?width=1080&height=240">
     </div>
     <manage-item :manageItem='manage.manageItem'></manage-item>
     <bottom :src='manage.bottomSrc'></bottom>
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
            manage:{},
           
        }
    },
    created(){
        let _this = this
        this.$http.get('/msg').then((res)=>{
            _this.manage = res.data.manage
        })
    }
}
</script>

<style lang='scss' module>
@import '../../../css/element';
</style>

