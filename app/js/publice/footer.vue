<template>
  <panel :class="[$style.panel,cname]">
      <ul :class="$style.container">
          <li :class="$style.item" v-show="des.bannar">
              <img :src="des.bannar" alt="">
          </li>
          <li :class="$style.des_border">
              <ul :class="$style.des_content">
                  <li v-for="item in des.content">
                      <img :src="item.src" alt="">
                      <p>{{item.title}}</p>
                  </li>
              </ul>
          </li>
          <li>
              <ul :class="$style.desc">
                  <li v-for="item in des.desc">
                      <p>{{item}}</p>
                  </li>
              </ul>
          </li>
      </ul>
  </panel>
</template>
<script>
import panel from "../core/panel";
export default {
  components: {
    panel
  },
  props: {
    des: {
      type: Object,
      default() {
        return {
          bannar:
            "//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252",
          content: [
              {
                src:
                  "//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108",
                title: "客户端"
              },
              {
                src:
                  "//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108",
                title: "触屏版"
              },
              {
                src:
                  "//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108",
                title: "电脑版"
              }
            ],
          desc: [
            "Copyright © 2004-2018 京东JD.com 版权所有",
            "投资有风险，购买需谨慎",
            "京东金融平台服务协议",
            "京东金融隐私政策"
          ]
        };
      }
    },
    cname:{
        type:String,
        default:""
    }
  }
};
</script>
<style lang="scss" module>
@import "../../css/element.scss";
.panel{
    @include panel;
}
.panel{
    margin-bottom: 0!important;
}
.container{
    @include flex;
    .item{
        img{
            width:100%;
            display: block;
        }
        }
    }

.des_content{
    @include flex(row);
    padding-top:40px;
    background-color: rgb(245,245,245);
    li{
        width:33.3333%;
        text-align: center;
        margin-bottom: 20px;
        img{
            width:90px;
            height:90px;
            display: inline-block;
        }
        p{
            font-size: 26px;
            text-align: center;
            color: #999999;
            margin-top: 12px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
}
.des_border{
    &:after{
        content: " ";
        display: block;
        height: 0;
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #eee;
    }
}
.desc{
    @include flex;
    li{
        text-align: center;
        background-color: rgb(245,245,245);
        &:after{
            content: " ";
            display: block;
            height: 0;
            width: 100%;
            box-sizing: border-box;
            border: 1px solid #DDD;
        }
        &:last-child{
            &:after{
                display: none;
            }
        }
        p{
            font-size: 24px;
            line-height: 1.6;
            padding: 24px 32px;
            text-align: center;
            color: #999;
            position: relative;
            box-sizing: border-box;
        }
    }
}
</style>
