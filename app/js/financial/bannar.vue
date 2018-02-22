<template>
  <panel>
      <div :class="$style.container">
          <img :src="src.src" alt="">
      </div>
  </panel>
</template>
<script>
import panel from "../core/panel"
export default {
    props:{
        src:{
            type:Object,
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
.panel{
    @include panel;
}
.container{
    img{
        width: 100%;
    }
}
</style>
