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
    height: 50px;
    line-height: 50px;
    background: #fff;
        .left-wrapper{
            position: absolute;
            left: 12px;
            font-size: 14px;
            color: #666;
        }
        .center-wrapper{
            position: absolute;
            left: 50%;
            top: 50%;
            img{
                display: block;
                width: 105px;
                margin-left:-52px; 
                margin-top: -16px;
            }
        }
        .right-wrapper{
            position: absolute;
            top: 50%;
            right: 12px;
            width: 60px;
            height: 28px;
            margin-top: -14px;
            font-size: 12px;
            line-height: 28px;
            text-align: center;
            color: #fff;
            background: #f04752;
        }
    
}
</style>
