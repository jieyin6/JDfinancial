<template>
  <div :class="$style.marginBottom">
      <module :title="moreService.serviceTitle">
          <div :class="$style.serviceContent">
              <ul>
                  <li v-for="item in moreService.service" :key="item.name">
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
    props:{
        moreService:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    components:{
        module
    },
    data(){
        return{
            
        }
    }
}
</script>

<style lang='scss' module>
@import '../../../css/element';
    

</style>
