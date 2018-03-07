<template>
   <div :class="$style.marginBottom">
         <module :title="manageItem.manageTitle">
             <ul>
                 <li v-for="item in manageItem.pick" :key="item.name" :class="$style.manageItem">
                     <img :src="item.icon">
                     <div :class="$style.manageContent">
                         <h2>{{item.name}}</h2>
                         <p>{{item.desc}}</p>
                    </div>
                     <p :class="$style.right">去赚钱</p>
                 </li>
             </ul>
         </module>
     </div>
</template>

<script>
import module from '../base/module'
export default {
    props:{
        manageItem:{
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
