<template>
    <div class="f-nav">
        <div class="a-wrapper">
        <router-link to='/index'>首页</router-link>
        <router-link to='/manage'>理财</router-link>
        <router-link to='/blank-note'>白条</router-link>
        <router-link to='crowd-funding'>众筹</router-link>
        <router-link to='mine'>我的</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
/*@import '~css/layout.scss'; */
.f-nav{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: #fff;
    z-index: 100;
    .a-wrapper{
       /* @include flex();*/
       display: flex;
       justify-content: space-around;
         a{
        font-size: 22px;
        line-height: 50px;
        vertical-align: bottom;
      }
    }
   
}
</style>
