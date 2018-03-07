<template>
  <div :class="$style.container">
     <iheader :sliderPic='index.sliderPic' :menu='index.menu'></iheader>
     <manage-money :manageContent='index.manageContent'></manage-money>
     <new-product :newProduct='index.newProduct'></new-product>
     <insurance :insuranceContent='index.insuranceContent'></insurance>
     <bottom :src='index.bottomPic'></bottom>
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
            index:{},
           
        }
    },
    created(){
        let _this = this
        this.$http.get('/msg').then((res) => {
             _this.index = res.data.index
            console.log(_this.index)
        }).catch((err)=>{
            console.log(err)
        })
    }

}
</script>

<style lang='scss' module>
@import '../../../css/element';

</style>
