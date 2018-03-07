<template>
   <div class="insurance-wrapper">
        <module :title="insuranceContent.insuranceTitle">
            <slider :pics='insuranceContent.insurancePic' :options='options'></slider>
            <div class="insurance-banner">
                <img src="https://img12.360buyimg.com/jrpmobile/jfs/t15583/348/2209539372/42536/6bae28a8/5a953b19Nd7e46726.jpg?width=750&height=200">
            </div>
        </module>
    </div>
</template>

<script>
import module from '../base/module'
import slider from '../base/slider'
export default {
    props:{
        insuranceContent:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    components:{
        slider,
        module
    },
    data(){
        return{
            options:{
               grabCursor : true,
               spaceBetween:24,
               slidesPerView:2.7,
               freeMode:true
            }
        }
    }
}
</script>

<style lang='scss' scoped>
     .insurance-wrapper{
        margin-bottom: 20px;
        .content-wrapper{
         .swiper-container{
            box-sizing: border-box;
            padding: 0 24px 0 32px;
            .swiper-slide{
                display: inline-block;
                width: 100%;
                img{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
          }
        }
        .insurance-banner{
            margin-top: 40px;
            padding-bottom: 40px;
            img{
                width: 100%;
            }
        }
    }
</style>
