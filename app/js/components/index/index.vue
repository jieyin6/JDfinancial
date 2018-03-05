<template>
  <div class="index">
      <slider :isFlag='true' :pics='sliderPic' :autoplay='true' :loop='true'></slider>
      <div class="menu-wrapper">
          <ul>
              <li v-for="item in menu" :key="item.name">
                  <img :src="item.img">
                  <span class="menu-name">{{item.name}}</span>
              </li>
          </ul>
      </div>
      <div class="money-wrapper">
          <module :title="title">
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
    <div class="new-wrapper">
        <module :title="newTitle" :more='more'>
           <slider :pics='newContent' :options='options'></slider>
        </module>
    </div>
    <div class="insurance-wrapper">
        <module :title="insuranceTitle">
            <slider :pics='insurancePic' :spaceBetween='30' :slidesPreView='2.3'></slider>
            <div class="insurance-banner">
                <img src="https://img12.360buyimg.com/jrpmobile/jfs/t15583/348/2209539372/42536/6bae28a8/5a953b19Nd7e46726.jpg?width=750&height=200">
            </div>
        </module>
    </div>
    <div class="bottom-wrapper">
        <bottom :src='bottomPic'></bottom>
    </div>
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
            options:{
               grabCursor : true,
              spaceBetween:30,
              slidesPerView:2.3,
              freeMode:true
             },
            sliderPic:[
                'https://img12.360buyimg.com/jrpmobile/jfs/t15916/144/2253458817/34879/bd72c0d6/5a992377Nd1404cf1.jpg?width=750&height=320',
                'https://img12.360buyimg.com/jrpmobile/jfs/t14998/160/2428790343/39218/930cc102/5a9923aeN85a3fead.jpg?width=750&height=320',
                'https://img12.360buyimg.com/jrpmobile/jfs/t16477/141/2166420353/34578/ec14201b/5a9923e0N99e63679.png?width=750&height=320',
                'https://img12.360buyimg.com/jrpmobile/jfs/t19222/60/580379841/45631/5d5f6245/5a992412Nd1ad6806.jpg?width=750&height=320'
            ],
            menu:[
                {
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
                    name:'优惠券'
                },
                {
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
                    name:'领红包'
                },
                {
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
                    name:'抢钢镚'
                },
                {
                    img:'//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
                    name:'白条提额'
                }

            ],
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
            newTitle:'众筹新品',
            more:'更多尖货 >',
            newContent:[
                'https://img12.360buyimg.com/jrpmobile/jfs/t17500/129/612741991/43773/b9be060d/5a9d02d3N79dd6e76.jpg?width=335&height=421',
                'https://img12.360buyimg.com/jrpmobile/jfs/t19381/282/641433664/36503/a7084d81/5a9d031cN6daf7d1d.jpg?width=335&height=421',
                'https://img12.360buyimg.com/jrpmobile/jfs/t18736/21/452113740/50445/b97274fb/5a7d5bc4N592e324e.jpg?width=335&height=421',
                'https://img12.360buyimg.com/jrpmobile/jfs/t14935/5/2384445307/37843/697e3be2/5a9d0375N91173d42.jpg?width=335&height=421',
                
            ],
            insuranceTitle:'保险保障',
            insurancePic:[
                'https://img12.360buyimg.com/jrpmobile/jfs/t12355/171/849656870/29064/92c9bc12/5a153643N04efba6e.jpg?width=210&height=260',
                'https://img12.360buyimg.com/jrpmobile/jfs/t9697/338/291348712/12737/27e1204/59cb6304Naef85042.jpg?width=210&height=260',
                'https://img12.360buyimg.com/jrpmobile/jfs/t10360/347/311063647/10881/14a5cd40/59cb632fNcac82571.jpg?width=210&height=260',
                'https://img12.360buyimg.com/jrpmobile/jfs/t13927/226/2090083878/14208/2746192a/5a31dde6Nbba7f26c.png?width=210&height=260',
                'https://img12.360buyimg.com/jrpmobile/jfs/t9703/119/296348375/11253/b9bc3ce7/59cb637dNf25b0dff.jpg?width=210&height=260'
            ],
            bottomPic:'https://img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252'
        }
    }

}
</script>

<style lang='scss'>
.index{
    margin:100px 0;
    overflow: auto;
    .menu-wrapper{
        position: relative;
        padding-top:40px;
        margin-bottom: 20px; 
        background: #fff;
        ul{
            display: flex;
            justify-content: space-around;
            height: 146px;
            li{
                img{
                    width: 90px;
                    height: 90px;
                }
                span{
                    display: block;
                    margin-top: 12px;
                    text-align: center;
                    font-size: 26px;
                    color: #666;
                }
            }
        }
    }
    .money-wrapper{
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
    .new-wrapper{
        margin-bottom: 20px;
        .swiper-container{
            box-sizing: border-box;
            padding:0 24px;
            .swiper-slide{
                display: inline-block;
                width: 100%;
                img{
                    width:100%;
                    display: block;
                    height:314px;
                    border:1px solid #fafafa;
                }
            }
        }
    }
    .insurance-wrapper{
        margin-bottom: 20px;
        
        .insurance-banner{
            margin-top: 40px;
            padding-bottom: 40px;
        }
    }
}
</style>
