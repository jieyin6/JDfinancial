<template>
  <panel :title="title" :class="$style.panel">
      <ul>
        <li :class="$style.imgcontainer" v-for="item in items">
            <img :src="item" alt="">
        </li>
      </ul>
      <p>{{desc}}</p>
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
          title:"每日签到",
          desc:"不抢白不抢",
          items:["//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160","//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160"]
      }
  }
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
}
.panel{
    padding-bottom:40px!important; 
    position: relative;
    p{
        position: absolute;
        font-size: 28px;
        color:#999;
        line-height: 112px;
        right:32px;
        top:0;
    }
}
ul{
    box-sizing: border-box;
    @include flex(row);
    .imgcontainer{
        float:left;
        width:50%;
        box-sizing: border-box;
        img{
            display: block;
            width: 100%;
        }
    }
}
</style>
