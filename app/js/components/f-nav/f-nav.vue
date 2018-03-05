<template>
    <div class="f-nav">
        <div class="a-wrapper">
        <router-link to='/index'>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3541/110/627394787/2190/5d02d39c/580f1dfdNcf72af31.png?width=66&height=66">
            <p>首页</p>
        </router-link>
        <router-link to='/manage'>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66">
            <p>理财</p>
        </router-link>
        <router-link to='/blank-note'>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66">
            <p>白条</p>
        </router-link>
        <router-link to='crowd-funding'>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3604/98/635506544/2317/443d3a51/580f240aNbee3dcc4.png?width=66&height=66">
            <p>众筹</p>    
        </router-link>
        <router-link to='mine'>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66">
            <p>我的</p>
        </router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
/*@import ""; */
.f-nav{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: #fff;
    z-index: 100;
    .a-wrapper{
    /*   @include flex();*/
       display: flex;
       justify-content: space-around;
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
