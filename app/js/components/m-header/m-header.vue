<template>
  <div class="m-header">
      
      <div class="left-wrapper">
          <span>注册 | 登录</span>
      </div>
      <div class="center-wrapper">
          <img src="//m.jr.jd.com/spe/qyy/main/images/jr-logo.png">
      </div>
      <div class="right-wrapper">APP下载</div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
.m-header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    line-height: 100px;
    background: #fff;
    z-index: 999;
        .left-wrapper{
            position: absolute;
            left: 24px;
            font-size: 28px;
            color: #666;
        }
        .center-wrapper{
            position: absolute;
            left: 50%;
            top: 50%;
            img{
                display: block;
                width: 210px;
                margin-left:-104px; 
                margin-top: -32px;
            }
        }
        .right-wrapper{
            position: absolute;
            top: 50%;
            right: 24px;
            width: 120px;
            height: 56px;
            margin-top: -28px;
            font-size: 24px;
            line-height: 56px;
            text-align: center;
            color: #fff;
            background: #f04752;
        }
    
}
</style>
