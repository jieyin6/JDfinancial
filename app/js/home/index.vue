<template lang="html">
    <div :class="$style.home">
        <vHeader></vHeader>
        <Slider></Slider>
        <novice></novice>
        <borrow></borrow>
        <money></money>
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
