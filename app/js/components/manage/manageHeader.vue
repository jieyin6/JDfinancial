<template>
  <div class="mheader">
      <slider :pics='sliderPic' :isFlag='true'></slider>
     <div class="banner-top-wrapper">
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

<style lang='scss'>
     .banner-top-wrapper{
        margin: 20px 0;
        background: #fff;
        img{
            width: 100%;
        }
    }
</style>
