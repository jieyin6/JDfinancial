<template>
  <div :class="$style.container">
    <c-header :header='crowdFunding.header'></c-header>
    <recommend :recommend='crowdFunding.recommend'></recommend>
    <more-welfare :moreWelfare='crowdFunding.moreWelfare'></more-welfare>
    <bottom :class="$style.bottom"></bottom>
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
            crowdFunding:{}
        }      
    },
    created(){
        let _this = this
        this.$http.get('/msg').then((res)=>{
            _this.crowdFunding = res.data.crowdFunding
        })
    }
}
</script>

<style lang='scss' module>
@import '../../../css/element' ;
    
    .bottom{
        margin-top: -40px;
    }

</style>
