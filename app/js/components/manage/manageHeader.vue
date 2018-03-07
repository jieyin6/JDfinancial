<template>
  <div :class="$style.marginBottom">
      <slider :pics='sliderPic' :isFlag='true'></slider>
     <div :class="$style.bannerWrapper">
         <img src="https://img12.360buyimg.com/jrpmobile/jfs/t14707/121/2335216734/37656/5611f3d9/5a97704dNca58d124.png?width=750&height=270">
     </div>
  </div>
</template>

<script>
import slider from '../base/slider'
export default {
    props:{
        sliderPic:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        slider
    },
}
</script>

<style lang='scss' module>
@import '../../../css/element';
     .bannerWrapper{
        margin: 20px 0 0 0;
        background: #fff;
        img{
            width: 100%;
        }
    }
</style>
