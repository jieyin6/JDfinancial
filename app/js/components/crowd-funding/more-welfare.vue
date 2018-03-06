<template>
  <div class="more-welfare">
      <module :title='moreTitle' :more='moreWelfare'>
          <ul>
              <li v-for="(pic,index) in welfarePics" :key="index">
                  <img :src="pic">
              </li>
          </ul>
      </module>
  </div>
</template>

<script>
import module from '../base/module'
export default {
    components:{
        module
    },
    data(){
        return{
            moreTitle:'更多福利',
            moreWelfare:'专享福利 >',
            welfarePics:[
                'https://img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330',
                'https://img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330',
                'https://img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330'
            ]
        }
    }
}
</script>

<style lang='scss'>
.more-welfare{
    ul{
        display: flex;
        justify-content: space-around;
        padding-bottom: 40px;
    }
}
</style>
