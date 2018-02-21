<template lang="html">
    <div>
        <vHeader></vHeader>
        <Slider></Slider>
        <novice></novice>
        <borrow></borrow>
        <money></money>
    </div>
</template>

<script>
import vHeader from '../publice/header'
import Slider from './Hslider'
import novice from './novice'
import borrow from './borrow'
import money from './money'
export default {
  components: {
    vHeader,
    Slider,
    novice,
    borrow,
    money
  }
}
</script>

<style lang="scss" module>
  @import '../../css/reset.scss';
  .home{
    color: red;
    font-size: 50px;
  }
</style>
