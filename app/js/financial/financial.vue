<template>
  <div :class="$style.financial">
    <vheader></vheader>
    <fslider></fslider>
    <bannar :src="top_bannar"></bannar>
    <money :title="title" :items="items"></money>
    <bannar :src="bot_bannar"></bannar>
    <choice :title="cont" :items="content"></choice>
    <vfooter :des="des"></vfooter>
  </div>
</template>
<script>
import header from '../publice/header'
import footer from '../publice/footer'
import fslider from './fslider'
import bannar from './bannar'
import money from '../home/money'
import choice from './choice'
export default {
  components: {
      vheader:header,
      vfooter:footer,
      fslider,
      bannar,
      money,
      choice
  },
  data(){
      return{
          des: {
          bannar:
            "//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120",
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
        top_bannar:{
          src:'//img12.360buyimg.com/jrpmobile/jfs/t5842/235/8356236245/38364/2112fd7e/597a95d4Ne01da140.png?width=750&height=270'
        },
        bot_bannar:{
          src:'//img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png?width=1080&height=240'
        },
        title:"精选推荐",
        items:[
              {
                  title:"定期理财",
                  sub:"90天可质押",
                  rate:"5.50%",
                  text:"历史年化结算利率"
              },
              {
                  title:"固收理财",
                  sub:"理财首选",
                  rate:"5.80%",
                  text:"综合年化收益率"
              },
              {
                  title:"基智账户",
                  sub:"组合投资",
                  rate:"8%-10%",
                  text:"止盈年化收益率"
              },
              {
                  title:"小白基金",
                  sub:"天天赚钱",
                  rate:"4.27%",
                  text:"7日年化收益率"
              }
          ],
        cont:'理财精选',
        content:[
          {
            src:'//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76',
            head:'月度理财',
            body:'预期年化收益率4.50%',
            href:'去赚钱'
          },
          {
            src:'//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76',
            head:'季度理财',
            body:'历史年化回报率5.50%',
            href:'去赚钱'
          },
          {
            src:'//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76',
            head:'一年理财',
            body:'历史年化回报率5.80%',
            href:'去赚钱'
          }
        ]      
      }
  }
}
</script>
<style lang="scss" module>
.financial{
    position: absolute;
    left:0;
    right:0;
    bottom: 100px;
    overflow: auto;
    height:100%;
}
</style>
