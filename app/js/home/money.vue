<template>
    <panel :title="title" :class="$style.panel">
      <div :class="$style.container">
          <dl :class="$style.item" v-for="item in items">
              <router-link to="/home">
                <dt>{{item.title}}<span :class="$style.red">{{item.sub}}</span></dt>
                <dd>{{item.rate}}</dd>
                <dd>{{item.text}}</dd>
              </router-link>
          </dl>
      </div>
    </panel> 
</template>
<script>
import panel from '../core/panel'
export default {
    props:{
        title:{
            type:String,
            default:""
        },
        items:{
            type:Array,
            default:""
        }
    },
  components: {
      panel
  }
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.container{
    @include list(row);
    box-sizing: border-box;
    justify-content: space-around;
    &:after{
        content:" ";
        display: block;
        height: 0px;
        width:100%;
        box-sizing: border-box;
        border:1px solid #ddd;
        position: relative;
        top:-208px;
    }
    .item{
        width:50%;
        position: relative;
        padding:34px 16px;
        box-sizing: border-box;
        &:after{
            content:" ";
            position: absolute;
            display: block;
            height:136px;
            width:1px;
            top:50%;
            right:0;
            margin-top:-68px;
            border-right:1px solid #eee;
        };
        &:nth-child(2n){
            &:after{
                display: none;
            }
        }
        a{
            text-decoration: none;
        }
        dt{
            font-size:30px;
            line-height:42px;
            color:#333;
            margin-bottom: 16px;
            span{
                font-size:22px;
                color:#ff5155;
                border:1px solid #ff5155;
                padding:0 8px;
                vertical-align: 1px;
                margin-left:2px;
            }
        }
        dd{
            &:nth-child(2){
                font-weight: 700;
                font-size: 44px;
                height: 58px;
                line-height: 58px;
                color: #FF5155;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            &:nth-child(3){
                font-size: 24px;
                height: 34px;
                line-height: 34px;
                color: #999;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
    }
}
.panel{
    @include panel;
}
.red{
    color:red;
}
</style>
