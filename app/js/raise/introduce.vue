<template>
  <panel :title="title">
      <div :class="$style.item" v-for="item in items">
          <img :src="item.bannar" alt="">
          <ul>
              <li v-for="child in item.child">
                  <div :class="$style.container">
                    <label v-if="child.isChoose === true" :class="$style.isChoose">精选</label>
                    <img :src="child.src" alt="">
                    <p :class="$style.title">{{child.title}}</p>
                    <p :class="$style.price"><span :class="$style.type">￥</span><span :class="$style.count">{{child.price}}.00</span> <span :class="$style.desc">起</span></p>
                    <div :class="$style.progressWrapper" v-if="child.persent >= 0">
                        <div :class="$style.progressBar">
                            <div :class="$style.inner" :style="{width:child.persent+'%'}"></div>
                        </div>
                        <div :class="$style.persent">{{child.persent}}%</div>
                    </div>
                    <div v-else :class="$style.end">
                        众筹结束
                    </div>
                   </div> 
              </li>
          </ul>
      </div>
  </panel>
</template>
<script>
import panel from "../core/panel"
export default {
  components: {
      panel
  },
  data(){
      return{
          title:"In货推荐",
          items:[
               {
                  bannar:"//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200",
                  child:[
                      {
                          src:"//img30.360buyimg.com/cf/s250x250_jfs/t15595/15/2136732080/41551/b26c2916/5a7c54cdN4ad03299.jpg",
                          title:"电动牙刷",
                          price:79,
                          persent:139,
                          isChoose:true  
                      },
                      {
                          src:"//img30.360buyimg.com/cf/s250x250_jfs/t16168/161/1968909024/148686/2a85179/5a7be4bdN01533e62.jpg",
                          title:"胶囊咖啡机",
                          price:11,
                          persent:24,
                          isChoose:false    
                      }
                  ]
                },
                 {
                  bannar:"//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200",
                  child:[
                      {
                          src:"//img30.360buyimg.com/cf/s250x250_jfs/t13834/192/2625202072/70435/e5b85a62/5a460eefN94289190.jpg",
                          title:"智能后视镜",
                          price:90,
                          isChoose:false  
                      },
                      {
                          src:"//img30.360buyimg.com/cf/s250x250_jfs/t5827/255/6140287884/111611/498f9693/59683808N9253369f.jpg",
                          title:"GDP口袋电脑",
                          price:75,
                          persent:0,
                          isChoose:false    
                      }
                  ]
                },
                 {
                  bannar:"//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200",
                  child:[
                      {
                          src:"//img30.360buyimg.com/cf/s250x250_jfs/t19087/67/359234055/152112/75036460/5a6ecc5fN565775cd.jpg",
                          title:"层层轻薄雪花酥",
                          price:29,
                          persent:363,
                          isChoose:false  
                      },
                      {
                          src:"//img30.360buyimg.com/cf/s250x250_jfs/t14506/168/2096353267/153845/5bb0a2e6/5a6e9518N15da6f7c.jpg",
                          title:"华礼脸茶",
                          price:29,
                          persent:250,
                          isChoose:false    
                      }
                  ]
                }
          ]
      }
  }
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
}
.item{
    box-sizing: border-box;
    margin-bottom: 40px;
    img{
        width:100%;
        display: block;
    }
    ul{
        @include flex(row);
        box-sizing: border-box;
        padding: 0 20px;
        li{
            width:50%;
            box-sizing: border-box;
            text-align: center;
            position: relative;
            img{
                width:180px;
                height:180px;
                display: block;
                margin: 0 auto 20px;
            }
            &:nth-child(1){
                padding-right:10px;
            }
            &:nth-child(2){
                padding-left:10px;
            }
        }
    }
}
.container{
    background-color: rgba(0,0,0,.02);
    padding-top: 44px;
    box-sizing: border-box;
}
.title{
    font-family: PingFangSC-Medium;
    font-size: 28px;
    font-weight: 700;
    height: 40px;
    line-height: 40px;
    margin: 0 24px;
    color: #444;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.price{
    height: 48px;
    line-height: 48px;
    margin-bottom: 16px;
    text-align: center;
    font-size:0;
}
.type{
    font-size: 28px;
    color: #FF3232;
}
.count{
    font-weight: 700;
    font-size: 36px;
    color: #FF3232;
}
.desc{
    font-family: PingFangSC-Semibold;
    font-size: 20px;
    color: #999;
    margin-left: 4px;
    position: relative;
    top: -2px;
}
.progressWrapper{
    height: 30px;
    padding: 0 24px 18px;
}
.progressBar , .persent{
    display: inline-block;
}
.persent{
    font-weight: 700;
    font-size: 24px;
    color: #999;
    float: right;
    position: relative;
    top: -2px;
    line-height: 30px;
}
.progressBar{
    width: 60%;
    height: 10px;
    margin-top: 10px;
    background: #F6E6E6;
    border-radius: 22px;
    float: left;
}
.inner{
    font-weight: 700;
    width: 50%;
    height: 10px;
    background-image: linear-gradient(270deg,#F55 1%,#FF9C31 100%);
    border-radius: 22px;
    max-width: 100%;
}
.isChoose{
    font-family: PingFangSC-Medium;
    font-size: 20px;
    display: inline-block;
    height:36px;
    line-height: 36px;
    color: #ff0000;
    text-align: center;
    padding: 4px 8px;
    background-image: linear-gradient(-35deg,#C1C1C1 0,#ACACAC 100%);
    position: absolute;
    top: 0;
    left: 0;
}
.end{
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    color: #999;
    background: #EDEDED;
}
</style>
