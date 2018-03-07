<template>
  <div class="recommend">
      <module :title="recommend.recommendTitle">
          <ul class="recommend-item">
             <li v-for="(good,index) in recommend.goods" :key="index" class="good-content">
                 <img :src="good.banner">
                 <ul class="good-ul">
                     <li v-for="(item,index) in good.item" :key="index" class="item-content">
                         <img :src="item.pic">
                         <p class="item-name">{{item.name}}</p>
                         <div class="item-price">
                             <span>￥</span>
                             <span>{{item.price}}</span>
                             <span>起</span>
                        </div>
                        <div class="item-progress" v-show="item.count">
                            <div class="progress-wrapper">
                                <div class="progress-inner" :style="{width:item.count+'%'}"></div>
                            </div>
                            <span class="progress-count" ref="count">{{item.count}}%</span>
                        </div>
                        <p class="item-select" v-show="item.select === true">精选</p>
                        <div class="item-done" v-show="!item.count">众筹结束</div>
                        
                     </li>
                 </ul>
            </li> 
          </ul>
      </module>
  </div>
</template>

<script>
import module from '../base/module'
export default {
    props:{
        recommend:{
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
.recommend{
    position: relative;
    &::before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #eee;
    }
    .recommend-item{
        .good-content{
            img{
                width: 100%;
            }
            .good-ul{
                display: flex;
                .item-content{
                    flex: 1;
                    margin: 0 10px 40px 20px;
                    background-color:rgba(0, 0, 0, .02);
                    position: relative;
                    &:last-child{
                       margin: 0 20px 40px 10px;
                    }
                    img{
                        display: block;
                        width: 180px;
                        height: 180px;
                        margin: 44px auto 20px;
                    }
                    .item-name{
                        font-family: PingFangSC-Medium;
                        font-size: 28px;
                        font-weight: 700;
                        height: 40px;
                        line-height: 40px;
                        margin: 0 24px;
                        color: #444;
                        text-align: center;
                    }
                    .item-price{
                        height: 48px;
                        line-height: 48px;
                        margin-bottom: 16px;
                        text-align: center;
                        display: flex;
                        justify-content: center;
                        span{
                            &:nth-of-type(1){
                                font-size: 28px;
                                color: #ff3232;
                                font-weight: 400;
                            }
                            &:nth-of-type(2){
                                font-size: 36px;
                                color: #ff3232;
                                font-weight: 700;
                            }
                            &:nth-of-type(3){
                                display: inline-block;
                                font-family: PingFangSC-Semibold;
                                font-size: 20px;
                                color: #999;
                                margin-left: 4px;
                                position: relative;
                                top: 4px;
                            }
                        }
                    }
                    .item-progress{
                       
                        height: 30px;
                        padding: 0 24px 18px;
                        .progress-wrapper{
                            float: left;
                            width: 70%;
                            height: 10px;
                            margin-top: 10px;
                            background-color: #f6e6e6;
                            border-radius: 22px;
                            .progress-inner{
                                font-weight: 700;
                                 max-width: 100%;
                                height: 10px;
                                background-image: linear-gradient(270deg,#F55 1%,#FF9C31 100%);
                                border-radius: 11px;
                            }
                        }
                        .progress-count{
                            font-weight: 700;
                            font-size: 24px;
                            color: #999;
                            float: right;
                            position: relative;
                            top: -1px;
                        }
                    }
                    .item-select{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 64px;
                        height: 42px;
                        line-height: 42px;
                        font-family: PingFangSC-Medium;
                        font-size: 20px;
                        color: #FF0000;
                        text-align: center;
                        background-color: #acacac;
                    }
                    .item-done{
                        height: 48px;
                        line-height: 48px;
                        text-align: center;
                        font-size: 24px;
                        color: #999;
                        background-color: #ededed;
                    }
                }
            }
        }
    }
}
</style>
