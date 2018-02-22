<template>
  <div :class="[panelClass,cname]">
      <h4 v-show="this.title">-{{title}}-</h4>
      <slot></slot>  
  </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            default:""
        },
        cname:{
            type:String,
            default:""
        }
    },
    data(){
        return{
            panelClass:"panel",
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "../../css/element.scss";
    .panel{
        @include panel;
    }
</style>
