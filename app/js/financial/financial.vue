<template>
  <div>
    <vheader></vheader>
    <vfooter :des="des"></vfooter>
  </div>
</template>
<script>
import header from '../publice/header'
import footer from '../publice/footer'
export default {
  components: {
      vheader:header,
      vfooter:footer
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
        }
      }
  }
}
</script>
<style lang="scss">

</style>
