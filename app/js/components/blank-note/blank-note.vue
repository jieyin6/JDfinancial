<template>
<div :class="$style.container">
  <div :class="$style.marginBottom">
      <img :class="$style.img" src="https://img12.360buyimg.com/jrpmobile/jfs/t16798/322/621991060/49914/ec0d539b/5a991ebcN932c6731.jpg?width=750&height=320">
  </div>
  <note-item></note-item>
  <more-service></more-service>
  <bottom :src='bottomPic'></bottom>
</div>
</template>

<script>
import noteItem from './note-item'
import moreService from './more-service'
import bottom from '../base/bottom'
export default {
    components:{
        noteItem,
        moreService,
        bottom
    },
    data(){
        return{
            bottomPic:'https://img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252'
        }
    }
}
</script>

<style lang='scss' module>
@import '../../../css/element';
    
   

</style>
