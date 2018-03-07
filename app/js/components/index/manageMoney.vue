<template>
   <div :class="$style.moneyWrapper">
          <module :title="title">
              <ul>
                  <li v-for="money in manageMoney" :key="money.mode" :class="$style.moneyContent">
                      <h2 :class="$style.mode">{{money.mode}}</h2>
                      <p :class="$style.num">{{money.num}}</p>
                      <p :class="$style.desc">{{money.desc}}</p>
                      <span :class="$style.more">{{money.more}}</span>
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
            title:'理财精选',
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

<style lang='scss' module>
@import '../../../css/element';
</style>
