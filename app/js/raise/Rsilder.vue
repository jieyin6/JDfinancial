<template>
<div :class="$style.slider">
    <swiper :options="options">
    <swiper-slide v-for="item in slide">
        <a href="#">{{item}}</a>
    </swiper-slide>
  </swiper>
</div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
export default {
    props:{
        options:{
            type:Object,
            default(){
                return{

                }
            }
        }
    },
    components: {
      swiper,
      swiperSlide  
    },
    data(){
      return{
          slide:["百万白条券免费送，速来领取！！","签到领流量，1元500M！"]
      }
  }
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.slider{
    padding-top: 200px;
    height: 72px;
    overflow: hidden;
    padding-left: 178px;
    background: #fff url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) 0 200px no-repeat;
    background-size: 144px 72px;
    a{
        text-decoration: none;
        color:#333;
        line-height: 72px;
        font-family: PingFangSC-Medium;
        font-size: 28px;
    }
}
</style>
