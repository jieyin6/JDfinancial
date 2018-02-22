<template>
  <panel :title="title">
      <ul :class="$style.container">
          <li v-for="item in items" :class="$style.item">
              <img :src="item.src" alt="">
                <h4>{{item.head}}</h4>
                <p>{{item.body}}</p>
              <router-link to='/home'>
              <span>{{item.href}}></span>
              </router-link>
          </li>
      </ul>
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
            default:[]
        }
    },
    components: {
      panel
    }
}
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
}
.container{
    @include flex;
    .item{
        width:100%;
        height:140px;
        position: relative;
        &:before{
            content: " ";
            display: block;
            height: 0;
            width: 100%;
            box-sizing: border-box;
            border: 1px solid #DDD;
        }
        img{
            display: block;
            float:left;
            width:88px;
            height:88px;
            margin:24px 32px 0 32px;
        }
        h4{
            font-size: 32px;
            line-height:1.8;
            color: #333;
            margin-top:26px;
            display: block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        p{
            font-size: 24px;
            color: #ff3232;
            display: block;
            line-height: 1.1;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        a{
            position: absolute;
            text-decoration: none;
            right:0;
            top:40px;
            span{
                font-size: 28px;
                color: #FF801A;
                padding: 0 36px 0 20px;
                margin-right: 32px;
                text-align: left;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
    }
}
</style>
