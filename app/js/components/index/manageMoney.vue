<template>
   <div :class="$style.moneyWrapper">
          <module :title="manageContent.title">
              <ul>
                  <li v-for="money in manageContent.manageMoney" :key="money.mode" :class="$style.moneyContent">
                      <h2 :class="$style.mode">{{money.mode}}</h2>
                      <p :class="$style.num">{{money.num}}</p>
                      <p :class="$style.desc">{{money.desc}}</p>
                      <span :class="$style.more">{{money.more}}</span>
                  </li>
              </ul>
          </module>
    </div>
</template>

<script>
import module from '../base/module'
export default {
    props:{
        manageContent:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    components:{
        module
    },
   
}
</script>

<style lang='scss' module>
@import '../../../css/element';
</style>
