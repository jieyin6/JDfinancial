<template>
  <div :class="$style.fslider">
      <slider :items="items" :cname="$style.slider" :options="options"></slider>
  </div>
</template>
<script>
import slider from '../core/slider';
export default {
  components: {
      slider
  },
  data(){
      return {
          items:[
              {
                  href:'/home',
                  src:'//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400'
              },
              {
                  href:'/home',
                  src:'//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400'
              },
              {
                  href:'/home',
                  src:'//img12.360buyimg.com/jrpmobile/jfs/t10405/120/2592801005/36022/d8f57852/59f97c14Nfb960073.png?width=750&height=400'
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
    padding-top:100px;
}
.slider{
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
