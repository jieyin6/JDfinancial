<template>
  <div class="mine">
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

<style lang='scss'>
.mine{
    margin: 100px 0;
    overflow: auto;
    .mine-bottom{
        position: relative;
        top: 20px;
    }
}
</style>
