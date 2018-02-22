<template>
    <div>
        <vheader></vheader>
        <slider></slider>
        <choice :title="title" :items="items"></choice>
        <vfooter></vfooter>
    </div>
</template>
<script>
import panel from '../core/panel'
import footer from '../publice/footer'
import header from '../publice/header'
import Ious_slider from './IOUs_slider'
import choice from '../financial/choice'
export default {
  components: {
      panel,
      vfooter:footer,
      vheader:header,
      slider:Ious_slider,
      choice
  },
  data(){
      return{
          title:"白条福利",
          items:[
          {
            src:'//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120',
            head:'开通白条',
            body:'送188元礼包',
            href:'立即开通'
          },
          {
            src:'//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120',
            head:'白条闪付',
            body:'新手享158元礼包',
            href:'随机立减'
          },
          {
            src:'//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120',
            head:'白条提额',
            body:'金融app专享提额礼包',
            href:'去提额'
          }
        ]      
      }
  }
}
</script>
<style lang="scss">
@import "../../css/element.scss";
</style>
