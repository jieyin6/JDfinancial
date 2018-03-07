<template>
  <div :class="$style.mineHeader">
      <div :class="$style.topContent">
          <p>总资产(元)</p>
          <p>0.00</p>
          <p>今日收益0元</p>
      </div>
      <ul :class="$style.bottomContent">
          <li v-for="item in bottom" :key="item.name" :class="$style.bottomItem">
              <p :class="$style.itemName">{{item.name}}</p>
              <p :class="$style.itemDesc">{{item.desc}}</p>
              <span :class="$style.itemRight">&gt;</span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:{
        bottom:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style lang='scss' module>
@import '../../../css/element';
        
    


</style>
