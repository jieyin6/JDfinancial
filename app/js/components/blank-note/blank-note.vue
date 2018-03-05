<template>
<div class="blank-note">
  <div class="banner-wrapper">
      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t16798/322/621991060/49914/ec0d539b/5a991ebcN932c6731.jpg?width=750&height=320">
  </div>
  <div class="blank-note-wrapper">
      <module :title="noteTitle">
          <ul>
              <li v-for="item in welfare" :key="item.name" class="note-item">
                  <img :src="item.icon">
                  <div class="note-content">
                      <h2>{{item.name}}</h2>
                      <p>{{item.desc}}</p>
                  </div>
                  <p class="note-right">{{item.right}}</p>
              </li>
          </ul>
      </module>
  </div>
</div>
</template>

<script>
import module from '../base/module'
export default {
    components:{
        module
    },
    data(){
        return{
            noteTitle:'白条福利',
            welfare:[
                {
                    icon:'https://img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120',
                    name:'开通白条',
                    desc:'送百元礼包',
                    right:'立即查看'
                },
                {
                    icon:'https://img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120',
                    name:'白条提额',
                    desc:'金融app专享提额礼包',
                    right:'去提额'
                }
            ]
        }
    }
}
</script>

<style lang='scss'>
.blank-note{
    margin: 100px 0;
    .banner-wrapper{
        margin-bottom: 20px;
    }
    .blank-note-wrapper{
        margin-bottom: 20px;
         .note-item{
            position: relative;
            height: 140px;
           img{
                display: block;
                float: left;
                width: 88px;
                height: 88px;
                margin: 24px 32px 0;
            }
            .note-content{
                float: left;
                margin-top: 26px;
                text-align: left;
               h2{
                    height: 56px;
                    line-height:56px; 
                    font-size: 32px;
                    color: #333;
                }
                p{
                    font-size: 24px;
                    color: #ff3232;
                }
                
            }
            .note-right{
                    position: absolute;
                    right: 32px;
                    line-height: 140px;
                    padding: 0 36px 0 20px;
                    background: url(//m.jr.jd.com/spe/qyy/main/images/icon_arrow1.png) center right no-repeat;
                    font-size: 28px;
                    color: #ff801a;
                }
            
        }
    }
}
</style>
