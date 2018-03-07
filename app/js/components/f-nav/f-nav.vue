<template>
    <div class="f-nav">
    <div class="a-wrapper" >
        <div v-for="(link,index) in links" :key="index" >
         <router-link :to='link.path' >
            <img :src="link.icon" ref="img">
            <p>{{link.name}}</p>
         </router-link>
         </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            links:[
                {
                    icon:'https://img12.360buyimg.com/jrpmobile/jfs/t3451/188/644771475/2428/800d7cb7/580f2435Nbfaa8055.png?width=66&height=66',
                    activeIcon:'//img12.360buyimg.com/jrpmobile/jfs/t3541/110/627394787/2190/5d02d39c/580f1dfdNcf72af31.png?width=66&height=66',
                    name:'首页',
                    path:'/index'
                },
                {
                    icon:'//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66',
                    activeIcon:'https://img12.360buyimg.com/jrpmobile/jfs/t3559/44/615554467/2520/21aa9352/580f2400N4a7b5398.png?width=66&height=66',
                    name:'理财',
                    path:'/manage'
                },
                {
                    icon:'https://img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66',
                    activeIcon:'https://img12.360buyimg.com/jrpmobile/jfs/t3673/27/676974575/1305/3f51b3c1/580f4e6eN6efa3e03.png?width=66&height=66',
                    name:'白条',
                    path:'/blank-note'
                },
                {
                    icon:'https://img12.360buyimg.com/jrpmobile/jfs/t3604/98/635506544/2317/443d3a51/580f240aNbee3dcc4.png?width=66&height=66',
                    activeIcon:'https://img12.360buyimg.com/jrpmobile/jfs/t4114/213/1539606521/1876/9f736561/587d8deaNf7f37693.png?width=66&height=66',
                    name:'众筹',
                    path:'/crowd-funding',
                },
                {
                    icon:'//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66',
                    activeIcon:'https://img12.360buyimg.com/jrpmobile/jfs/t3442/196/638449103/2121/46fae777/580f244eN4d27d517.png?width=66&height=66',
                    name:'我的',
                    path:'/mine'
                }
            ]
        }
    },
   
}
</script>

<style lang='scss' scoped>
@import "../../../css/layout.scss"; 
.f-nav{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: #fff;
    z-index: 100;
    .a-wrapper{
       @include flex();
       a{
            img{
                width: 44px;
                height: 44px;
                margin: 12px auto 6px;
            }
            p{
                font-size: 22px;
                color: #656565;
            }
      }
    }
   
}
</style>
