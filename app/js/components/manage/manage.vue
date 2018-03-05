<template>
<div class="manage">
     <slider :pics='slider' :isFlag='true' :autoplay='true' :loop='true'></slider>
     <div class="banner-top-wrapper">
         <img src="https://img12.360buyimg.com/jrpmobile/jfs/t14707/121/2335216734/37656/5611f3d9/5a97704dNca58d124.png?width=750&height=270">
     </div>
     <div class="choose-wrapper">
         <module :title="chooseTitle">
              <ul>
                  <li v-for="money in manageMoney" :key="money.mode" class="money-content">
                      <h2 class="mode">{{money.mode}}</h2>
                      <p class="num">{{money.num}}</p>
                      <p class="desc">{{money.desc}}</p>
                      <span class="more">{{money.more}}</span>
                  </li>
              </ul>
         </module>
     </div>
     <div class="banner-bottom-wrapper">
         <img src="//img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png?width=1080&height=240">
     </div>
     <div class="manage-wrapper">
         <module :title="manageTitle">
             <ul>
                 <li v-for="item in pick" :key="item.name" class="manage-item">
                     <img :src="item.icon">
                     <div class="manage-content">
                         <h2>{{item.name}}</h2>
                         <p>{{item.desc}}</p>
                    </div>
                     <p class="right">去赚钱</p>
                 </li>
             </ul>
         </module>
     </div>
     <bottom :src='bottomSrc'></bottom>
</div>
 
</template>

<script>
import slider from '../base/slider'
import module from '../base/module'
import bottom from '../base/bottom'
export default {
    components:{
        slider,
        module,
        bottom
    },
    data(){
        return{
            slider:[
                'https://img12.360buyimg.com/jrpmobile/jfs/t18724/53/552742550/28349/141d0cb1/5a976ab5N1f131e9c.jpg?width=750&height=400',
                'https://img12.360buyimg.com/jrpmobile/jfs/t18787/96/583735472/19041/545127d6/5a976b05N1a6a412a.jpg?width=750&height=400',
                'https://img12.360buyimg.com/jrpmobile/jfs/t15097/249/2268830415/20640/397e0ddf/5a976c28Nc5f227d1.jpg?width=750&height=400'
            ],
            chooseTitle:'精选推荐',
             manageMoney:[
                {
                    mode:'定期理财',
                    num:'5.50%',
                    desc:'历史年化结算利率',
                    more:'90天可抵押'
                },
                 {
                    mode:'固收理财',
                    num:'5.80%',
                    desc:'综合年化收益率',
                    more:'理财推荐'
                },
                 {
                    mode:'机智账户',
                    num:'8%-10%',
                    desc:'止盈年化收益率',
                    more:'组合投资'
                },
                 {
                    mode:'小白基金',
                    num:'5.00%',
                    desc:'7日年化收益率',
                    more:'超短期'
                }
            ],
            manageTitle:'理财精选',
            pick:[
                {
                    icon:'https://img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76',
                    name:'月度理财',
                    desc:'预期年化收益率4.50%'
                },
                {
                    icon:'https://img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76',
                    name:'季度理财',
                    desc:'历史年化回报率5.50%'
                },
                {
                    icon:'https://img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76',
                    name:'一年理财',
                    desc:'历史年化回报率5.80%'
                }
            ],
            bottomSrc:'//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120'
        }
    }
}
</script>

<style lang='scss'>
.manage{
    margin:100px 0;
    overflow: auto;
    .banner-top-wrapper{
        margin: 20px 0;
        background: #fff;
    }
    .choose-wrapper{
         margin-bottom: 20px;
        .money-content{
            position: relative;
            float: left;
            width: 50%;
            padding-left: 32px;
            height: 218px;
            box-sizing: border-box;
            .mode{
                height: 42px;
                box-sizing: border-box;
                margin: 34px 0 16px;
                line-height: 42px;
                font-size: 30px;
                font-weight: 700;
                font-family: PingFangSC-Medium;
                color: #333;
            }
            .num{
                height: 58px;
                line-height: 58px;
                font-size: 44px;
                color: #ff5155;
            }
            .desc{
                height: 34px;
                line-height: 34px;
                font-size: 24px;
                color: #999;
            }
            .more{
                position: absolute;
                top: 34px;
                left: 160px;
                height: 34px;
                padding: 0 8px;
                line-height: 34px;
                border: 2px solid #ff5155;
                font-size: 22px;
                color: #ff5155;
                text-align: center;
            }
        }
    }
    .banner-bottom-wrapper{
        margin: 20px 0;
        img{
            width: 100%;
        }
    }
    .manage-wrapper{
        margin-bottom: 20px;
        .manage-item{
            position: relative;
            height: 140px;
           img{
                display: block;
                float: left;
                margin: 24px 32px 0;
            }
            .manage-content{
                float: left;
                margin-top: 26px;
                text-align: left;
               h2{
                    height: 56px;
                    line-height: 56px;
                    font-size: 32px;
                    color: #333;
                }
                p{
                    font-size: 24px;
                    color: #ff3232;
                }
                
            }
            .right{
                    position: absolute;
                    right: 32px;
                    line-height: 140px;
                    padding: 0 36px 0 20px;
                    background: url(//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png) center right no-repeat;
                    font-size: 28px;
                    color: #ff801a;
                }
            
        }
    }
}

</style>

