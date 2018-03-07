<template>
  <div :class="$style.container">
    <c-header></c-header>
    <recommend></recommend>
    <more-welfare></more-welfare>
    <bottom class="bottom"></bottom>
</div>
</template>

<script>
import cHeader from './cheader'
import recommend from './recommend'
import moreWelfare from './more-welfare'
import bottom from '../base/bottom'
export default {
    components:{
        cHeader,
        recommend,
        moreWelfare,
        bottom
    },
    data(){
        return{
        }      
    }
}
</script>

<style lang='scss' module>
@import '../../../css/element' ;
    
    .bottom{
        margin-top: -40px;
    }

</style>
