<template>
  <div class="bottom">
      <div class="img-wrapper" v-show="src">
          <img :src="src">
      </div>
      <div class="bottom-content">
          <ul class="content-mode">
              <li v-for="item in mode" :key="item.name">
                  <img :src="item.pic">
                  <p>{{item.name}}</p>
              </li>
          </ul>
          <div class="content-p">
            <p v-for="(content,index) in contents" :key="index">{{content}}</p>
          </div>
     </div>
  </div>
</template>

<script>
export default {
    props:{
        src:{
            type:String,
            default:''
        }
    },
    data(){
        return{
            mode:[
                {
                    pic:'https://img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108',
                    name:'客户端'
                },
                {
                    pic:'https://img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108',
                    name:'触屏版'
                },
                {
                    pic:'https://img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108',
                    name:'电脑版'
                }
            ],
            contents:[
                'Copyright © 2004-2018 京东JD.com 版权所有',
                '投资有风险，购买需谨慎',
                '京东金融平台服务协议',
                '京东金融隐私政策'
            ]
        }
    }
}
</script>

<style lang='scss'>
.bottom{
    .img-wrapper{
        img{
            width: 100%;
        }
    }
    .bottom-content{
        .content-mode{
            display: flex;
            justify-content: space-around;
            padding: 40px 0 20px 0;
            border-bottom: 1px solid #ddd;
            img{
                width: 90px;
                height: 90px;
            }
            p{
                margin-top: 12px;
                font-size: 26px;
                color: #666;
                text-align: center;
            }
        }
        .content-p{
            margin-bottom: 20px;
            p{
                height: 72px;
                line-height: 72px;
                border-bottom: 1px solid #ddd;
                font-size: 24px;
                color: #999;
                text-align: center;
                &:last-of-type{
                    border-bottom: none;
                }
            }
        }
    }
}

</style>
