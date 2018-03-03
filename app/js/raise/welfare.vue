<template>
  <panel :title="title" :cname="$style.pos">
      <ul :class="$style.item">
          <li v-for="item in items">
              <img :src="item" alt="">
          </li>
      </ul>
      <span :class="$style.exclusive">专享福利></span>
  </panel>
</template>
<script>
import panel from "../core/panel"
export default {
    components: {
        panel    
    },
    data(){
      return{
          title:"更多福利",
          items:[
              "//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330",
              "//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330",
              "//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330"
          ]
      }
  }
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
}
.pos{
    position: relative;
    margin: 0!important;
    padding: 40px 0 80px 0!important;
}
.item{
    @include flex(row);
    box-sizing: border-box;
    li{
        width: 33.33333%;
        box-sizing: border-box;
        img{
            display: block;
            width: 100%;
        }
    }
}
.exclusive{
    display: inline-block;
    position: absolute;
    font-size: 28px;
    color: #999;
    height: 112px;
    line-height: 112px;
    margin-right: 32px;
    top:40px;
    right: 0;
}
</style>
