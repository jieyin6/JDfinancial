<template>
  <div :class="$style.container">
      <mine-header></mine-header>
      <center></center>
      <mine-more></mine-more>
      <bottom class="mine-bottom"></bottom>
  </div>
</template>

<script>
import mineHeader from './mine-header'
import center from './center'
import mineMore from './mine-more'
import bottom from '../base/bottom'
export default {
    components:{
        mineHeader,
        center,
        mineMore,
        bottom
    }
}
</script>

<style lang='scss' module>
@import '../../../css/element';
    .mine-bottom{
        position: relative;
        top: 20px;
    }

</style>
