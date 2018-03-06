<template>
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
</template>

<script>
import module from '../base/module'
export default {
    components:{
        module
    },
    data(){
        return{
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
        }
    }
}
</script>

<style lang='scss'>
.choose-wrapper{
         margin-bottom: 20px;
        .money-content{
            position: relative;
            float: left;
            width: 50%;
            padding-left: 32px;
            height: 218px;
            box-sizing: border-box;
            border-bottom: 1px solid #eee;
             &:nth-of-type(2n+1)::after{
                content: '';
                position: absolute;
                right: 0;
                top: 38px;
                width: 1px;
                height: 140px;
                background-color: #eee;
            }
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
                top: 38px;
                left: 160px;
                height: 34px;
                padding: 0 8px;
                line-height: 34px;
                border: 1px solid #ff5155;
                font-size: 22px;
                color: #ff5155;
                text-align: center;
            }
        }
    }
</style>
