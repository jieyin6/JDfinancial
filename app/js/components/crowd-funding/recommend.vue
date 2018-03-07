<template>
  <div class="recommend">
      <module :title="recommendTitle">
          <ul class="recommend-item">
             <li v-for="(good,index) in goods" :key="index" class="good-content">
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
    components:{
        module
    },
    data(){
        return{
            recommendTitle:'In货推荐',
             goods:[
                {
                    banner:'https://img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200',
                    item:[{
                        pic:'https://img30.360buyimg.com/cf/s250x250_jfs/t15595/15/2136732080/41551/b26c2916/5a7c54cdN4ad03299.jpg',
                        name:'电动牙刷',
                        price:'79.00',
                        count:'155',
                        select:true
                        
                    },
                    {
                        pic:'https://img30.360buyimg.com/cf/s250x250_jfs/t16168/161/1968909024/148686/2a85179/5a7be4bdN01533e62.jpg',
                        name:'胶囊咖啡机',
                        price:'11.00' ,
                        count:'28',
                        select:false

                    }
                    ]
                },
                {
                    banner:'https://img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200',
                    item:[{
                        pic:'https://img30.360buyimg.com/cf/s250x250_jfs/t13834/192/2625202072/70435/e5b85a62/5a460eefN94289190.jpg',
                        name:'智能后视镜',    
                        price:'90.00',
                        count:'',
                        select:false,
                    },
                    {
                        pic:'https://img30.360buyimg.com/cf/s250x250_jfs/t5827/255/6140287884/111611/498f9693/59683808N9253369f.jpg',
                        name:'GPD口袋电脑',
                        price:'75.00',
                        count:'0',
                        select:false,
                    }
                    ]               
                },
                {
                    banner:'https://img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200',
                    item:[
                        {
                            pic:'https://img30.360buyimg.com/cf/s250x250_jfs/t19087/67/359234055/152112/75036460/5a6ecc5fN565775cd.jpg',
                            name:'层层轻薄雪花酥',
                            price:'29.00',
                            count:'369',
                            select:false,
                        },
                        {
                            pic:'https://img30.360buyimg.com/cf/s250x250_jfs/t14506/168/2096353267/153845/5bb0a2e6/5a6e9518N15da6f7c.jpg',
                            name:'华礼脸茶',
                            price:'29.00',
                            count:'266',
                            select:false,
                        }
                    ]               
                }
            ]
        
        }
    },
   computed:{
       setwidth(){
           return this.$refs.count.innerHTML 
       }
   }
}
</script>

<style lang='scss'>
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
