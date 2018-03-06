<template>
  <div class="more-wrapper">
      <module :leftTitle='leftTitle'></module>
      <ul>
          <li v-for="(item,index) in service" :key="index">
              <img :src="item.icon">
              <p>{{item.name}}</p>
          </li>
      </ul>
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
            leftTitle:'更多服务',
            service:[
                {
                    icon:'https://img12.360buyimg.com/jrpmobile/jfs/t4330/133/678123946/5169/caa95df0/58b7dc5bN18e35d4c.png?width=120&height=119',
                    name:'小白理财'
                },
                {
                    icon:"https://img12.360buyimg.com/jrpmobile/jfs/t3649/359/1635382237/5435/20453a2e/582c3666Ne77dec97.png?width=120&height=120",
                    name:'钢镚',
                },
                {
                    icon:'https://img12.360buyimg.com/jrpmobile/jfs/t3571/19/1630706642/1939/c4a48e76/582c359cN20a00758.png?width=135&height=135',
                    name:'小白信用',
                },
                {
                    icon:'https://img12.360buyimg.com/jrpmobile/jfs/t3400/21/1585015214/1646/8f5ad15f/582c35b9N8cd168a5.png?width=135&height=135',
                    name:'存工资',
                },{
                    icon:'https://img12.360buyimg.com/jrpmobile/jfs/t3385/44/1019888807/5770/d74683d1/58198963N4211803c.png?width=132&height=132',
                    name:'保障险',
                },
                {
                    icon:'https://img12.360buyimg.com/jrpmobile/jfs/t3751/361/989855936/1252/520512c7/58198a78N1b268658.png?width=132&height=132',
                    name:'惠加油',
                },
                {
                    icon:'https://img12.360buyimg.com/jrpmobile/jfs/t5770/169/890574525/8552/3ea39e99/592246a1Nb1511142.png?width=132&height=132',
                    name:'Go返利',
                },{
                    icon:'https://img12.360buyimg.com/jrpmobile/jfs/t3370/161/1008561930/1190/34c5e736/58198b1aNa12c45fa.png?width=132&height=132',
                    name:'定期还款',
                }
            ]
        }
    }
}
</script>

<style lang='scss'>
.more-wrapper{
    position: relative;
    top: 20px;
    background-color: #fff;
    ul{
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 40px;
        li{
            width: 25%;
            text-align: center;
            margin-bottom: 8px;
            img{
                display: block;
                width: 90px;
                height: 90px;
                margin: 0 auto;
            }
            p{
                margin-top: 12px;
                font-size: 26px;
                color: #666;
            }
        }
    }
}
</style>
