<template>
  <panel :title="title" :class="$style.panel">
      <div :class="$style.container">
        <slider :items="items" :options="options"></slider>
        <div :class="$style.arrow">更多尖货></div>
      </div>
  </panel>
</template>
<script>
import panel from '../core/panel'
import slider from '../core/slider'
export default {
  components: {
      panel,
      slider
  },
  data(){
      return{
          title:"新品推荐",
          items:[
              {
                src:'//img12.360buyimg.com/jrpmobile/jfs/t16591/349/2066779042/42386/92c7a2f6/5a7d5b56N263586c8.jpg?width=335&height=421',
                href:'/home'
              },
              {
                src:'//img12.360buyimg.com/jrpmobile/jfs/t16858/332/448124625/49189/717a1c58/5a7d5b8cNa734cd9f.jpg?width=335&height=421',
                href:'/home'
              },
              {
                src:'//img12.360buyimg.com/jrpmobile/jfs/t18736/21/452113740/50445/b97274fb/5a7d5bc4N592e324e.jpg?width=335&height=421',
                href:'/home'
              },
              {
                src:'//img12.360buyimg.com/jrpmobile/jfs/t19438/256/457591773/38627/1f0fb065/5a7d5bd0N656c015c.jpg?width=335&height=421',
                href:'/home'
              }
          ],
          options:{
             grabCursor : true,
             spaceBetween:30,
             slidesPerView:2.3,
             freeMode:true
          }
      }
  }
}
</script>
<style lang="scss">
.panel .swiper-container{
    box-sizing: border-box;
    padding:0 24px;
    .swiper-slide{
        display: inline-block;
        width: 100%;
        img{
            width:100%;
            display: block;
            height:314px;
            border:1px solid #fafafa;
        }
    }
}
</style>
<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
}
.container{
    position: relative;
    .arrow{
        font-size:28px;
        color:#999;
        height:112px;
        position: absolute;
        top:-70px;
        right:40px;
        
    }
}
</style>

