<template>
  <div :class="$style.marginBottom">
      <module :title="serviceTitle">
          <div :class="$style.serviceContent">
              <ul>
                  <li v-for="item in service" :key="item.name">
                      <img :src="item.icon">
                      <p>{{item.name}}</p>
                  </li>
              </ul>
          </div>
      </module>
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
            serviceTitle:'更多服务',
            service:[
                {
                    icon:'https://img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135',
                    name:'小白卡'
                },
                {
                    icon:'https://img12.360buyimg.com/jrpmobile/jfs/t5269/224/1031852465/12646/40e0f799/590aca55N22a6f274.png?width=135&height=135',
                    name:'白条商城'
                },
                {
                    icon:'https://img12.360buyimg.com/jrpmobile/jfs/t5095/216/1045040184/12370/564ae632/590ac7deN9a0eac2a.png?width=135&height=135',
                    name:'消费分期'
                },
                {
                    icon:'https://img12.360buyimg.com/jrpmobile/jfs/t8311/300/1385281399/9501/130a0046/59b8da06N14f62cf3.png?width=120&height=120',
                    name:'借钱'
                },
                {
                    icon:'https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
                    name:'白条提额'
                },
                {
                    icon:'https://img12.360buyimg.com/jrpmobile/jfs/t4417/98/4154366136/13785/5433ca92/590ac8afN5dd91d6e.png?width=135&height=135',
                    name:'白条闪付'
                },
                {
                    icon:'https://img12.360buyimg.com/jrpmobile/jfs/t4453/75/4132459214/14188/939b7f34/590ac860N752d5738.png?width=135&height=135',
                    name:'小白会玩'
                },
                {
                    icon:'https://img12.360buyimg.com/jrpmobile/jfs/t5371/323/1038197138/12031/3ec72f6c/590aca20N089fd34a.png?width=135&height=135',
                    name:'钢镚'
                }
            ]
        }
    }
}
</script>

<style lang='scss' module>
@import '../../../css/element';
    

</style>
