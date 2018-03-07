<template>
  <div :class="$style.marginBottom">
    <slider :isFlag='true' :pics='sliderPic'></slider>
      <div :class="$style.menuWrapper">
          <ul>
              <li v-for="item in menu" :key="item.name">
                  <img :src="item.img">
                  <span>{{item.name}}</span>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import slider from '../base/slider'
export default {
    props:{
        sliderPic:{
            type:Array,
            default(){
                return []
            }
        },
        menu:{
            type:Array,
            default(){
                return []
            }
        }
    },
  components:{
    slider
  },
}
</script>

<style lang='scss' module>
@import '../../../css/element';
@import '../../../css/layout';
.menuWrapper{
        position: relative;
        padding-top:40px;
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
