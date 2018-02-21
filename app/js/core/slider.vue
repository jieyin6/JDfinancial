<template>
 <section :class="[swiper,cname]">
     <swiper :options="options" :not-next-tick="options.notNextTick">
        <swiper-slide v-for="item in items">
            <router-link :to="item.href">
                <img :src="item.src" alt="">    
            </router-link>    
        </swiper-slide>   
        <div class="swiper-pagination" v-if="options.pagination" slot="pagination"></div>  
    </swiper> 
 </section>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
      swiper,
      swiperSlide
  },
  props:{
      swiper:{
          type:String,
          default:"swiper"
      },
      cname:{
          type:String,
          default:""
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
      },
      items:{
          type:Array,
          default(){
              return[]             
          }
      }
  },
  data(){
      return{
          
      }
  }
}
</script>
<style lang="scss" >
@import '~swiper/dist/css/swiper.css'; 
@import '../../css/base.scss'
</style>
