<template>
  <div :class="$style.container">
     <iheader></iheader>
     <manage-money></manage-money>
     <new-product></new-product>
     <insurance></insurance>
     <bottom :src='bottomPic'></bottom>
  </div>
</template>

<script>
import bottom from '../base/bottom'
import iheader from './iheader'
import manageMoney from './manageMoney'
import newProduct from './new-product'
import insurance from './insurance'
export default {
    components:{
        bottom,
        iheader,
        manageMoney,
        newProduct,
        insurance
    },
    data(){
        return{
           bottomPic:'https://img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252'
        }
    }

}
</script>

<style lang='scss' module>
@import '../../../css/element';

</style>
