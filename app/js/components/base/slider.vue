<template>
   
    <swiper :options = 'options' ref="mySwiper"  class="swiper">
        <swiper-slide v-for="(pic,index) in pics" :key="index" class="swiperSlide">
            <img :src='pic' />
        </swiper-slide>
       <div class="swiper-pagination" slot="pagination" v-show="isFlag"></div>
      </swiper>
   
</template>

<script>

import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    props:{
        isFlag:{
            type:Boolean,
            default:false
        },
        pics:{
            type:Array,
            default(){
                return []
            }
        },
        options:{
             type:Object,
             default(){
                 return{
                    autoplay:true,
                    loop:true,
                    pagination: {
                      el: '.swiper-pagination'
                    },
                    noNextTick:false
                 }
             }
         }
    },
    components:{
        swiper,
        swiperSlide
    },
    
  
}
</script>

<style lang='scss' scoped>
@import '~swiper/dist/css/swiper.css';
.swiper{
    .swiperSlide{
    img {
        width: 100%;
        }
    }
}

.swiper-pagination-bullet{
    width: 14px;
    height: 14px;
    background: url('https://m.jr.jd.com/spe/qyy/main/images/banner_point.png') center center;
}
.swiper-pagination-bullet-active{
    width: 14px;
    height: 14px;
    background: url('https://m.jr.jd.com/spe/qyy/main/images/banner_point_cur.png') center center;
}
</style>
