<template>
  <div :class="$style.raise">
      <vheader></vheader>
      <slide :options="options"></slide>
      <daliy></daliy>
      <introduce></introduce>
      <welfare></welfare>
      <vfooter :des="des" :cname="$style.change"></vfooter>
  </div>
</template>
<script>
import footer from "../publice/footer"
import Rslider from "../raise/Rsilder"
import header from "../publice/header"
import daliy from "../raise/daliy"
import introduce from "../raise/introduce"
import welfare from "../raise/welfare"
export default {
  components: {
    vfooter:footer,
    vheader:header,
    slide:Rslider,
    daliy,
    introduce,
    welfare
  },
  data(){
    return{
       des: {
          content: [
              {
                src:
                  "//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108",
                title: "客户端"
              },
              {
                src:
                  "//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108",
                title: "触屏版"
              },
              {
                src:
                  "//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108",
                title: "电脑版"
              }
            ],
          desc: [
            "Copyright © 2004-2018 京东JD.com 版权所有",
            "投资有风险，购买需谨慎",
            "京东金融平台服务协议",
            "京东金融隐私政策"
          ]
        },
        options:{
              autoplay: true,
              loop: true,
              direction: "vertical"
        }
    } 
  }
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.panel{
  @include panel;
}
.raise{
    position: absolute;
    left:0;
    right:0;
    bottom: 100px;
    overflow: auto;
    height:100%;
}
.change{
  margin-top: 0!important;
  ul{
      li:nth-child(2) ul{
        padding-top:0;
      }
    }
}

</style>

