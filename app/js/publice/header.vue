<template>
  <div :class="$style.header">
      <span :class="$style.left">
          注册
          登录
      </span>
      <btn :class="$style.btn_download">APP下载</btn>
  </div>
</template>
<script>
import btn from '../core/btn'
export default {
  components: {
      btn
  }
}
</script>
<style lang="scss" module>
.header{
    color:#666;
    font-size:32px;
    height: 100px;
    line-height: 100px;
    position: fixed;
    top:0;
    left:0;
    right:0;
    background: #F9F9F9 url("//m.jr.jd.com/spe/qyy/main/images/jr-logo.png") center center no-repeat;
    background-size: auto 50%;
    z-index: 100;
    .left{
       font-size:28px;
       height:30px;
       line-height: 30px;
       margin:  17px 0 0 18px;
    }
    .btn_download{
       position: absolute;
       top:50%;
       right:24px;
       margin-top:-28px;
       font-size:24px;
       border-width:0;
       height: 56px;
       line-height: 56px;
       min-width: 120px;
       padding: 0;
       border-radius: 4px;
    }
}
</style>
