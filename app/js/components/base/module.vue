<template>
  <div class="module">
      <div class="title-wrapper" v-show="title || leftTitle">
          <span class="left-title" v-show="leftTitle">{{leftTitle}}</span>
          <span class="title" v-show="title">- {{title}} -</span>
          <span class="more" v-show="more">{{more}}</span>
      </div>
      <div class="content-wrapper">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:''
        },
        more:{
            type:String,
            default:''
        },
        leftTitle:{
            type:String,
            default:''
        }
    }

}
</script>

<style lang='scss'>
.module{
    height: 100%;
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    .title-wrapper{
        position: relative;
        height: 112px;
        line-height: 112px;
        .left-title{
            position: absolute;
            left: 32px;
            font-size: 32px;
            font-weight: 700;
        }
        .title{
            position: absolute;
            left: 50%;
            font-size: 32px;
            transform: translateX(-50%);
        }
        .more{
            position: absolute;
            right: 32px;
            font-size: 28px;
            color: #999;
        }
    }
}

</style>
