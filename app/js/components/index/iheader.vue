<template>
  <div class="iheader">
    <slider :isFlag='true' :pics='sliderPic'></slider>
      <div class="menu-wrapper">
          <ul>
              <li v-for="item in menu" :key="item.name">
                  <img :src="item.img">
                  <span class="menu-name">{{item.name}}</span>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import slider from '../base/slider'
export default {
  components:{
    slider
  },
  data(){
    return{
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
    }
  }

}
</script>

<style lang='scss'>
@import '../../../css/layout';
.menu-wrapper{
        position: relative;
        padding-top:40px;
        margin-bottom: 20px; 
        background: #fff;
        ul{
           @include flex();
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
</style>
