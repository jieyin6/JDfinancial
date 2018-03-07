<template>
   <div class="c-header">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t15760/134/2225069966/49339/a3f59b31/5a9919ceN910ed9c6.jpg?width=750&height=320">
     <module :title="headerTitle" :more='more'>
         <ul>
             <li v-for="pic in pics" :key="pic">
                 <img :src='pic'>
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
            headerTitle:'每日签到',
            more:'不抢白不抢',
            pics:[
                'https://img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160',
                'https://img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160'
            ]
        }
    }
}
</script>

<style lang='scss'>
.c-header{
    position: relative;
    width: 100%;
    margin-bottom: 20px;
    padding-bottom: 40px;
    background: #fff;
    img{
        width: 100%;
    }
    ul{
        display: flex;
        justify-content: space-around
    }
}
</style>
