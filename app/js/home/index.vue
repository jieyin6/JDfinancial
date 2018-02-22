<template lang="html">
    <div :class="$style.home">
        <vHeader></vHeader>
        <Slider></Slider>
        <novice></novice>
        <borrow></borrow>
        <money :title="title" :items="items"></money>
        <product></product>
        <service></service> 
        <vfooter></vfooter> 
    </div>
</template>

<script>
import vHeader from '../publice/header'
import Slider from './Hslider'
import novice from './novice'
import borrow from './borrow'
import money from './money'
import product from './product'
import service from './service'
import footer from '../publice/footer'
export default {
  components: {
    vHeader,
    Slider,
    novice,
    borrow,
    money,
    product,
    service,
    vfooter:footer
  },
  data(){
    return{
          title:"理财精选",
          items:[
              {
                  title:"定期理财",
                  sub:"理财首选",
                  rate:"5.60%",
                  text:"历史年化回报率"
              },
              {
                  title:"小白理财",
                  sub:"理财首选",
                  rate:"4.22%",
                  text:"7日年化收益率"
              },
              {
                  title:"月月盈",
                  sub:"养老保障",
                  rate:"5%",
                  text:"七日年化收益率"
              },
              {
                  title:"小白基金",
                  sub:"天天赚钱",
                  rate:"4.27%",
                  text:"7日年化收益率"
              }
          ]
    }
  }
}
</script>

<style lang="scss" module>
  @import '../../css/reset.scss';
  .home{
    position: absolute;
    left:0;
    right:0;
    bottom: 100px;
    overflow: auto;
    height:100%;
  }
</style>
