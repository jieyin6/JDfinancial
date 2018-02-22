<template>
  <div :class="$style.hslider">
      <slider :items="items" :cname="$style.slider" :options="options"></slider>
      <div :class="$style.list">
          <div :class="$style.item" v-for="item in enters">
              <router-link :to="item.href">
                  <img :src="item.img" :alt="item.title">
                  <h4>{{item.title}}</h4>
              </router-link>
          </div>
      </div>
  </div>
</template>
<script>
import slider from '../core/slider';
export default {
  components: {
      slider
  },
  data(){
      return {
          items:[
              {
                  href:'/home',
                  src:'//img12.360buyimg.com/jrpmobile/jfs/t16588/225/2090263765/46163/d17f76d8/5a8acde6N2b357bb8.jpg?width=750&height=320'
              },
              {
                  href:'/home',
                  src:'//img12.360buyimg.com/jrpmobile/jfs/t18235/74/492908201/27698/ce4197e2/5a8acdb9Nb104dab9.jpg?width=750&height=320'
              },
              {
                  href:'/home',
                  src:'//img12.360buyimg.com/jrpmobile/jfs/t16672/61/485752320/46238/388f82ca/5a8acd83N73a6ea6b.jpg?width=750&height=320'
              }
          ],
          enters:[
              {
                  href:'/home',
                  img:'//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
                  title:'优惠券'
              },
              {
                  href:'/home',
                  img:'//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
                  title:'领红包'
              },
              {
                  href:'/home',
                  img:'//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
                  title:'抢钢镚'
              },
              {
                  href:'/home',
                  img:'//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
                  title:'白条提额'
              }
          ],
          options:{
                 autoplay:true,
                 loop:true,
                 pagination: {
                    el: '.swiper-pagination',
                    bulletClass: "yj",
                    bulletActiveClass:"yj-active"
                 },
                 noNextTick:false
          }
      }
  }
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.hslider{
    padding-top:100px;
}
.slider{
   margin-top:100px;
   img{
       vertical-align:middle;
       width:100%;
   }
}
.list{
    @include list(row);
    background-color: #fff;
    padding-top: 40px;
    padding-bottom: 20px;
    justify-content: space-around;
    a{
        text-decoration: none;
    }
    .item{
        text-align: center;
        img{
            display: inline-block;
            width:90px;
            height:90px;
        }
        h4{
            font-size: 26px;
            margin-top: 12px;
            color:#666;
        }
    }
}
</style>
