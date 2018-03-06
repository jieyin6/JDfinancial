<template>
   <div class="new-wrapper">
        <module :title="newTitle" :more='more'>
           <slider :pics='newContent' :options='options'></slider>
        </module>
    </div>
</template>

<script>
import module from '../base/module'
import slider from '../base/slider'
export default {
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
            newTitle:'众筹新品',
            more:'更多尖货 >',
            newContent:[
                'https://img12.360buyimg.com/jrpmobile/jfs/t17500/129/612741991/43773/b9be060d/5a9d02d3N79dd6e76.jpg?width=335&height=421',
                'https://img12.360buyimg.com/jrpmobile/jfs/t19381/282/641433664/36503/a7084d81/5a9d031cN6daf7d1d.jpg?width=335&height=421',
                'https://img12.360buyimg.com/jrpmobile/jfs/t18736/21/452113740/50445/b97274fb/5a7d5bc4N592e324e.jpg?width=335&height=421',
                'https://img12.360buyimg.com/jrpmobile/jfs/t14935/5/2384445307/37843/697e3be2/5a9d0375N91173d42.jpg?width=335&height=421',
                
            ],
        }
    }
}
</script>

<style lang='scss'>
 .new-wrapper{
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
