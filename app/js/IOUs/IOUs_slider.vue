<template>
  <div :class="$style.fslider">
      <slider :items="items" :cname="$style.slider" :options="options"></slider>
  </div>  
</template>
<script>
import slider from '../core/slider'
import panel from '../core/panel'
export default {
  components: {
      panel,
      slider
  },
  data(){
      return {
          items:[
              {
                  href:'/home',
                  src:'//img12.360buyimg.com/jrpmobile/jfs/t8437/321/1758527686/40952/f66d552f/59bf1f41N50d846f9.jpg?width=750&height=320'
              },
              {
                  href:'/home',
                  src:'//img12.360buyimg.com/jrpmobile/jfs/t8491/303/504628479/60643/100648de/59a94358N92475fca.jpg?width=750&height=320'
              }
          ],
          options:{
                 autoplay:true,
                 loop:true,
                 pagination: {
                    el: '.swiper-pagination',
                    bulletClass: "yj",
                    bulletActiveClass:"yj-active"
                 },
                 noNextTick:false
          }
      }
  }
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.fslider{
    padding-top:200px;
}
.slider{
    margin-top: 20px;
   img{
       vertical-align:middle;
       width:100%;
   }
}
.list{
    @include list(row);
    background-color: #fff;
    padding-top: 40px;
    padding-bottom: 20px;
    justify-content: space-around;
    a{
        text-decoration: none;
    }
    .item{
        text-align: center;
        img{
            display: inline-block;
            width:90px;
            height:90px;
        }
        h4{
            font-size: 26px;
            margin-top: 12px;
            color:#666;
        }
    }
}
</style>
