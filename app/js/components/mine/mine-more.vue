<template>
<div  :class="$style.moreWrapper">
  <div :class="$style.serviceContent">
      <module :leftTitle='mineMore.leftTitle'></module>
      <ul>
          <li v-for="(item,index) in mineMore.service" :key="index">
              <img :src="item.icon">
              <p>{{item.name}}</p>
          </li>
      </ul>
  </div>
</div>
</template>

<script>
import module from '../base/module'
export default {
    props:{
        mineMore:{
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

<style lang='scss' module>
@import '../../../css/element';
.moreWrapper{
    position: relative;
    top: 20px;
}

</style>
