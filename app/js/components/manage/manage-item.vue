<template>
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
</template>

<script>
import module from '../base/module'
export default {
    components:{
        module
    },
    data(){
        return{
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
        }
    }
}
</script>

<style lang='scss'>
 .manage-wrapper{
        margin-bottom: 20px;
        .manage-item{
            position: relative;
            height: 140px;
            &::after{
                content: '';
                position: absolute;
                bottom: 0;
                left:120px;
                width: 100%;
                height: 1px;
                background-color: #eee;
            }
            &:last-child::after{
                height: 0;
            }
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
</style>
