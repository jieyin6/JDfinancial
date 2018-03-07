<template>
  <div :class="$style.container">
      <mine-header :bottom='mine.bottom'></mine-header>
      <center></center>
      <mine-more :mineMore='mine.mineMore'></mine-more>
      <bottom :class="$style.mineBottom"></bottom>
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
    },
    data(){
        return{
            mine:{}
        }
    },
    created(){
        let _this = this
        this.$http.get('/msg').then((res) => {
            _this.mine = res.data.mine
        })
    }
}
</script>

<style lang='scss' module>
@import '../../../css/element';
    .mineBottom{
        position: relative;
        top: 20px;
    }

</style>
