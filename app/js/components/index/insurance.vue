<template>
   <div class="insurance-wrapper">
        <module :title="insuranceTitle">
            <slider :pics='insurancePic' :options='options'></slider>
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
    components:{
        slider,
        module
    },
    data(){
        return{
             insuranceTitle:'保险保障',
            insurancePic:[
                'https://img12.360buyimg.com/jrpmobile/jfs/t12355/171/849656870/29064/92c9bc12/5a153643N04efba6e.jpg?width=210&height=260',
                'https://img12.360buyimg.com/jrpmobile/jfs/t9697/338/291348712/12737/27e1204/59cb6304Naef85042.jpg?width=210&height=260',
                'https://img12.360buyimg.com/jrpmobile/jfs/t10360/347/311063647/10881/14a5cd40/59cb632fNcac82571.jpg?width=210&height=260',
                'https://img12.360buyimg.com/jrpmobile/jfs/t13927/226/2090083878/14208/2746192a/5a31dde6Nbba7f26c.png?width=210&height=260',
                'https://img12.360buyimg.com/jrpmobile/jfs/t9703/119/296348375/11253/b9bc3ce7/59cb637dNf25b0dff.jpg?width=210&height=260'
            ],
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

<style lang='scss'>
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
