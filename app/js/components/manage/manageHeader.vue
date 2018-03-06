<template>
  <div class="mheader">
      <slider :pics='slider' :isFlag='true'></slider>
     <div class="banner-top-wrapper">
         <img src="https://img12.360buyimg.com/jrpmobile/jfs/t14707/121/2335216734/37656/5611f3d9/5a97704dNca58d124.png?width=750&height=270">
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
             slider:[
                'https://img12.360buyimg.com/jrpmobile/jfs/t18724/53/552742550/28349/141d0cb1/5a976ab5N1f131e9c.jpg?width=750&height=400',
                'https://img12.360buyimg.com/jrpmobile/jfs/t18787/96/583735472/19041/545127d6/5a976b05N1a6a412a.jpg?width=750&height=400',
                'https://img12.360buyimg.com/jrpmobile/jfs/t15097/249/2268830415/20640/397e0ddf/5a976c28Nc5f227d1.jpg?width=750&height=400'
            ],
        }
    }
}
</script>

<style lang='scss'>
     .banner-top-wrapper{
        margin: 20px 0;
        background: #fff;
    }
</style>
