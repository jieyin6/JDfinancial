<template>
  <div class="more-welfare">
      <module :title='moreWelfare.moreTitle' :more='moreWelfare.more'>
          <ul>
              <li v-for="(pic,index) in moreWelfare.welfarePics" :key="index">
                  <img :src="pic">
              </li>
          </ul>
      </module>
  </div>
</template>

<script>
import module from '../base/module'
export default {
    props:{
        moreWelfare:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    components:{
        module
    },
    
}
</script>

<style lang='scss' scoped>
@import '../../../css/layout';
.more-welfare{
    ul{
        @include flex();
        padding-bottom: 40px;
    }
}
</style>
