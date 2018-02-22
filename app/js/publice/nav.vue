<template>
    <div :class="$style.container">
        <ul :class="$style.list">
            <li v-for="item in items" :class="$style.item">
                <router-link v-bind:to="item.href">
                    <img :src="item.src" alt="">
                    <p>{{item.des}}</p>
                </router-link>
            </li>
        </ul>
   </div>
</template>
<script>
export default {
    data(){
        return{
            items:[
                {
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t3541/110/627394787/2190/5d02d39c/580f1dfdNcf72af31.png?width=66&height=66',
                    href:'/home',
                    des:'首页'
                },
                {
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66',
                    href:'/financial',
                    des:'理财'
                },
                {
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66',
                    href:'/home',
                    des:'白条'
                },
                {
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t3604/98/635506544/2317/443d3a51/580f240aNbee3dcc4.png?width=66&height=66',
                    href:'/home',
                    des:'众筹'
                },
                {
                    src:'//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66',
                    href:'/home',
                    des:'我的'
                }
            ]
        }
    }
};
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.list {
  @include list(row);
}
.list {
  background-color:#ffffff;
  width:100%;
  height:100px;
  box-shadow: 0 -6px  rgba(0,0,0,.03);
  .item{
      flex:1;
      text-align: center;
      a{
          text-decoration: none;
          display: inline-block;
           height: 100%;
           width: 100%;
      }
      img{
          display: inline-block;
          width: 44px;
          height:44px;
          margin:12px auto 6px;
      }
      p{
          color:#656565;
          font-size: 22px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
      }
  }
}
.container{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
}

</style>

