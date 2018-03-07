<template>
  <div :class="$style.mineHeader">
      <div :class="$style.topContent">
          <p>白条可用额度(元)</p>
          <p :class="$style.fontSize">激活送百元大礼包</p>
          <p>灵活分期 超低费率</p>
          <span :class="$style.topIcon">&gt;</span>
      </div>
      <ul :class="$style.bottomContent">
          <li :class="$style.bottomItem">
              <p :class="$style.itemName">小白信用</p>
              <p :class="$style.itemDesc">
                  <span >64.2</span>
                  <span :class="$style.word">信用中等</span>
              </p>
              <span :class="$style.itemRight">&gt;</span>
          </li>
          <li :class="$style.bottomItem"></li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' module>
@import '../../../css/element';
    .topIcon{
         display: inline-block;
         position: absolute;
         top: 50%;
         right: 32px;
         font-size: 36px;
         margin-top: -12px;
         color: #eee;
    }
    .word{
         display: inline-block;
         height: 28px;
         line-height: 28px;
         padding: 0 12px;
         margin: -4px 0 0 -4px;
         border-radius: 16px;
         font-size: 18px;
         text-align: center;
         color: #fff;
         background-color: #508cee;
         vertical-align: middle;
        }
    .fontSize{
        font-size: 40px !important;
    }        
        
        
</style>
