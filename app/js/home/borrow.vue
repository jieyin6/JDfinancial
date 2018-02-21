<template>
  <panel :title="title">
      <div :class="$style.container">
         <router-link to="/home">
             <img src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280" alt="">
         </router-link>
      </div>
  </panel>
</template>
<script>
import panel from '../core/panel'
export default {
    components: {
        panel
    },
    data(){
        return{
            title:"极速借贷"
        }
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
        vertical-align:middle;
        width:100%;
    }
}
</style>
