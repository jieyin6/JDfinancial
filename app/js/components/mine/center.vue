<template>
  <div class="center-wrapper">
      <div class="center-top">
          <p>白条可用额度(元)</p>
          <p>激活送百元大礼包</p>
          <p>灵活分期 超低费率</p>
          <span class="top-icon">&gt;</span>
      </div>
      <ul class="center-content">
          <li class="center-item">
              <p class="item-name">小白信用</p>
              <p class="item-desc">
                  <span class="num">64.2</span>
                  <span class="word">信用中等</span>
              </p>
              <span class="item-right">&gt;</span>
          </li>
          <li class="center-item"></li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
    .center-wrapper{
        position: relative;
        top: 20px;
        margin-bottom: 20px;
        background-color: #fff;
        .center-top{
            position: relative;
            padding: 0 32px;
            height: 240px;
            p{
                &:nth-of-type(1){
                    font-size: 28px;
                    height: 40px;
                    line-height: 40px;
                    padding-top: 40px;
                    color: #999;
                    }
                &:nth-of-type(2){
                    font-family: Sanfranciscodisplay;
                    font-size: 40px;
                    height: 80px;
                    line-height: 80px;
                    color: #424954;
                }
                &:nth-of-type(3){
                    font-size: 28px;
                    height: 40px;
                    line-height: 40px;
                    color: #FF801A;
                    }
                }
                .top-icon{
                    display: inline-block;
                    position: absolute;
                    top: 50%;
                    right: 32px;
                    font-size: 36px;
                    margin-top: -12px;
                    color: #eee;
                }
            }
            .center-content{
                 overflow: hidden;
            .center-item{
                position: relative;
                float: left;
                width: 50%;
                height: 142px;
                padding: 32px 32px 0;
                box-sizing: border-box;
                border-top: 1px solid #eee;
                .item-name{
                    height: 44px;
                    line-height: 44px;
                    font-size: 32px;
                    color: #333;
                    font-weight: 400;
                }
                .item-desc{
                    .num{
                    font-size: 28px;
                    color: #999;
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
                }
                .item-right{
                    display: inline-block;
                    position: absolute;
                    top: 50%;
                    right: 32px;
                    font-size: 36px;
                    margin-top: -12px;
                    color: #eee;
                }
                &:nth-of-type(2n+1){
                    border-right:1px solid #eee; 
                }
               
              }
        
            }
        }
</style>
