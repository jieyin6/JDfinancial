<template>
<div :class="$style.container">
  <div :class="$style.marginBottom">
      <img :class="$style.img" src="https://img12.360buyimg.com/jrpmobile/jfs/t16798/322/621991060/49914/ec0d539b/5a991ebcN932c6731.jpg?width=750&height=320">
  </div>
  <note-item :noteItem ='blankNote.noteContent'></note-item>
  <more-service :moreService='blankNote.moreService' ></more-service>
  <bottom :src='blankNote.bottomPic'></bottom>
</div>
</template>

<script>
import noteItem from './note-item'
import moreService from './more-service'
import bottom from '../base/bottom'
export default {
    components:{
        noteItem,
        moreService,
        bottom
    },
    data(){
        return{
            blankNote:{},
           }
    },
    created(){
        let _this= this
        this.$http.get('/msg').then((res)=>{
            _this.blankNote = res.data.blankNote
        })
    }
}
</script>

<style lang='scss' module>
@import '../../../css/element';
    
   

</style>
