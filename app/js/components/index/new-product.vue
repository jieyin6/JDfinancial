<template>
   <div class="new-product">
        <module :title="newProduct.newTitle" :more='newProduct.more'>
           <slider :pics='newProduct.newContent' :options='options'></slider>
        </module>
    </div>
</template>

<script>
import module from '../base/module'
import slider from '../base/slider'
export default {
    props:{
        newProduct:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    components:{
        module,
        slider
    },
    data(){
        return{
            options:{
               grabCursor : true,
               spaceBetween:30,
               slidesPerView:2.3,
               freeMode:true
             },
            
        }
    }
}
</script>

<style lang='scss' scoped>
 .new-product{
     margin-bottom: 20px;
        .swiper-container{
            box-sizing: border-box;
            padding:0 24px;
            .swiper-slide{
                display: inline-block;
                width: 100%;
                img{
                    width:100%;
                    display: block;
                    height:314px;
                    border:1px solid #fafafa;
                }
            }
        }
 }
</style>
