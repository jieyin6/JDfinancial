<template>
  <div class="mine-header">
      <div class="top-content">
          <p>总资产(元)</p>
          <p>0.00</p>
          <p>今日收益0元</p>
      </div>
      <ul class="bottom-content">
          <li v-for="item in bottom" :key="item.name" class="bottom-item">
              <p class="item-name">{{item.name}}</p>
              <p class="item-desc">{{item.desc}}</p>
              <span>&gt;</span>
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

<style lang='scss'>
.mine-header{
    position: relative;
    top: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    .top-content{
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
                font-size: 66px;
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
        }
        .bottom-content{
            overflow: hidden;
            .bottom-item{
                position: relative;
                float: left;
                width: 50%;
                height: 142px;
                padding: 32px 32px 0;
                box-sizing: border-box;
                &::before{
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    background-color: #eee;
                }
                .item-name{
                    height: 44px;
                    line-height: 44px;
                    font-size: 32px;
                    color: #333;
                    font-weight: 400;
                }
                .item-desc{
                    height: 40px;
                    line-height: 40px;
                    font-size: 28px;
                    color: #999;
                }
                span{
                    display: inline-block;
                    position: absolute;
                    top: 50%;
                    right: 32px;
                    font-size: 24px;
                    margin-top: -12px;
                    color: #eee;
                }
                &:nth-of-type(2n+1)::after{
                   content: '';
                   position: absolute;
                   top: 0;
                   right: 0;
                   height: 100%;
                   width: 1px;
                   background-color: #eee;
                }
            }
        }
    }


</style>
